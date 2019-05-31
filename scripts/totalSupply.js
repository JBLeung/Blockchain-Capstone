const {init} = require('./main')

async function totalSupply(web3, contract) {
  try {
    const totalSupplyResult = web3.utils.hexToNumber(await contract.methods.totalSupply().call())
    console.log('totalSupply: ', totalSupplyResult)
    process.exit()
  } catch (err) {
    console.error(err)
    process.exit()
  }
}
init().then(async ({web3, contract}) => {
  try {
    await totalSupply(web3, contract)
  } catch (err) {
    console.error(err)
    process.exit()
  }
}).catch((err) => {
  console.error(err)
})
