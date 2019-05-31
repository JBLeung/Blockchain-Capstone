server:
	ganache-cli -m "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat" -a 50
build:
	truffle compile;
reset:
	rm -Rf ./eth-contracts/build; truffle migrate --reset
clean:
	rm -Rf ./eth-contracts/build;rm -Rf ./eth-contracts/bin;
check:
	solium -d contracts/ --fix;
dapp:
	npm run dapp;
testERC721Mintable:
	truffle test ./eth-contracts/test/TestERC721Mintable.js
testSquareVerifier:
	truffle test ./eth-contracts/test/TestSquareVerifier.js
testSolnSquareVerifier:
	truffle test ./eth-contracts/test/TestSolnSquareVerifier.js
testAll:
	truffle test ./eth-contracts/test/*.js
docker_zokrates:
	docker-compose up zokrates
rinkeby:
	make clean; truffle migrate --reset --network rinkeby
contract-mint:
	node scripts/mint.js $(TOKEN_ID)
contract-totalSupply:
	node scripts/totalSupply.js
contract-ownerOf:
	node scripts/ownerOf.js $(TOKEN_ID)
flattener:
	truffle-flattener ./eth-contracts/contracts/*.sol > ./eth-contracts/flattener/flattener.sol