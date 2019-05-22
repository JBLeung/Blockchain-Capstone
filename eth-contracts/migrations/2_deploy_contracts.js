// migrating the appropriate contracts
const CustomERC721Token = artifacts.require('CustomERC721Token')
const Verifier = artifacts.require('Verifier')
const SolnSquareVerifier = artifacts.require('SolnSquareVerifier')

module.exports = function(deployer) {
  deployer.deploy(CustomERC721Token)
  deployer.deploy(Verifier)
  deployer.deploy(SolnSquareVerifier)
}
