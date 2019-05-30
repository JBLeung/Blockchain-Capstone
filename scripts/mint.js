
const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const {init, NFT_ABI} = require('./main')

init()

const {
  MNEMONIC, INFURA_KEY, NFT_CONTRACT_ADDRESS, OWNER_ADDRESS, NETWORK,
} = process.env
const NUM_CREATURES = 1


async function mint() {
  try {
    const provider = new HDWalletProvider(MNEMONIC, `https://${NETWORK}.infura.io/v3/${INFURA_KEY}`)
    const web3 = new Web3(
      provider,
    )

    if (NFT_CONTRACT_ADDRESS) {
      const nftContract = new web3.eth.Contract(NFT_ABI, NFT_CONTRACT_ADDRESS, { gasLimit: '1000000' })

      // Creatures issued directly to the owner.
      const totalSupplyBefore = await nftContract.methods.totalSupply().call()
      console.log('totalSupplyBefore: ', web3.utils.hexToNumber(totalSupplyBefore))

      const mintPromises = []

      const {gasLimit} = await web3.eth.getBlock('latest', false)
      console.log('gasLimit', gasLimit, gasLimit - 1)
      for (let i = 0; i < NUM_CREATURES; i += 1) {
        console.log(`loop ${i} start`)
        mintPromises.push(nftContract.methods.mint(OWNER_ADDRESS, i).send({ from: OWNER_ADDRESS, gas: gasLimit - 1 }))
        console.log(`loop ${i} end`)
      }

      console.log(`mintPromises ${mintPromises.length}`)
      const mintResults = await Promise.all(mintPromises)
      for (let i = 0; i < mintResults.length; i += 1) {
        console.log(`mintResults:${i}:`, mintResults[i])
      }
      const totalSupplyAfter = await nftContract.methods.totalSupply().call()
      console.log('totalSupplyAfter: ', web3.utils.hexToNumber(totalSupplyAfter))

      const balanceOf = await nftContract.methods.balanceOf(OWNER_ADDRESS).call()
      console.log('balanceOf: ', web3.utils.hexToNumber(balanceOf))

      process.exit()
    }
  } catch (err) {
    console.error(err)
    process.exit()
  }
}

mint()
