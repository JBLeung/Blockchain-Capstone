const {init} = require('./main')

async function mint(web3, contract, tokenId = false, senderAddress) {
  if (tokenId && web3.utils.isAddress(senderAddress)) {
    try {
      // Creatures issued directly to the owner.
      const totalSupplyBefore = web3.utils.hexToNumber(await contract.methods.totalSupply().call())
      console.log('totalSupplyBefore: ', totalSupplyBefore)

      console.log(`Start Mint tokenId: ${tokenId}`)

      contract.methods.mint(senderAddress, web3.eth.abi.encodeParameter('uint256', tokenId)).send({ from: senderAddress})
        .on('error', async (error) => {
          const tokenIdOwnerAdress = await contract.methods.ownerOf(web3.eth.abi.encodeParameter('uint256', tokenId)).call()
          if (web3.utils.isAddress((tokenIdOwnerAdress))) {
            console.log(`TokenID:${tokenId} is already mint, owner:${tokenIdOwnerAdress}`)
          } else {
            console.log('ERROR: ', error.message)
          }
          process.exit()
        })
        .on('transactionHash', async (transactionHash) => {
          console.log(`TransactionHash: ${transactionHash}`)
          console.log('please wait')
        })
        .on('receipt', (receipt) => {
          console.log(`Receipt: ${receipt.contractAddress}`) // contains the new contract address
          process.exit()
        })
        .on('confirmation', (confirmationNumber, receipt) => {
          console.log(`confirmationNumber: ${confirmationNumber}`) // contains the new contract address
          console.log('confirmation receipt:', receipt) // contains the new contract address
          process.exit()
        })
    } catch (err) {
      console.error(err)
      process.exit()
    }
  } else {
    console.error('missing tokenId or senderAddress')
    process.exit()
  }
}
init().then(async ({web3, contract}) => {
  try {
    const {
      OWNER_ADDRESS,
    } = process.env
    const TOKEN_ID = process.argv[2]
    await mint(web3, contract, TOKEN_ID, OWNER_ADDRESS)
  } catch (err) {
    console.error(err)
    process.exit()
  }
}).catch((err) => {
  console.error(err)
})
