# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)

# Getting start
## run test
1. `npm install`
2. `make server`
3. `make testAll`

# opensea marketplase
1. https://rinkeby.opensea.io/assets/0xd0f5bd2ff7e747999d672c618a39cb68a4693d92/1

# Development
To decrypt encrypted files
`git-crypt unlock`

## rinkeby.etherscan.io
1. To verify rinkeby contract in rinkeby.etherscan.io
please run `make flattener` and copy the code of `./eth-contracts/flattener/flattener.sol` to rinkeby.etherscan.io
2. get ABI-encoded contract code in https://abi.hashex.org/#

## contract methods
### to mint new token
`make contract-mint TOKEN_ID=<token_id>`

### get totalSupply
`make contract-totalSupply`
### get token owner
`make contract-ownerOf`