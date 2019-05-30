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
mint:
	node scripts/mint.js