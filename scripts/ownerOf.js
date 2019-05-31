const {init} = require('./main')

async function ownerOf(web3, contract, tokenId = false) {
  if (tokenId) {
    try {
      const tokenIdOwnerAdress = await contract.methods.ownerOf(web3.eth.abi.encodeParameter('uint256', tokenId)).call()
      if (web3.utils.isAddress((tokenIdOwnerAdress))) {
        console.log(`TokenID:${tokenId} owner:${tokenIdOwnerAdress}`)
      } else {
        console.log(`TokenID:${tokenId} don't have owner`)
      }
      process.exit()
    } catch (err) {
      console.error(err)
      process.exit()
    }
  } else {
    console.error('missing tokenId')
    process.exit()
  }
}
init().then(async ({web3, contract}) => {
  try {
    const TOKEN_ID = process.argv[2]
    await ownerOf(web3, contract, TOKEN_ID)
  } catch (err) {
    console.error(err)
    process.exit()
  }
}).catch((err) => {
  console.error(err)
})
