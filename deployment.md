Compiling your contracts...
===========================
> Compiling ./eth-contracts/contracts/ERC721Mintable.sol
> Compiling ./eth-contracts/contracts/Migrations.sol
> Compiling ./eth-contracts/contracts/Oraclize.sol
> Compiling ./eth-contracts/contracts/SolnSquareVerifier.sol
> Compiling ./eth-contracts/contracts/Verifier.sol
> Compiling ./eth-contracts/node_modules/openzeppelin-solidity/contracts/drafts/Counters.sol
> Compiling ./eth-contracts/node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol
> Compiling ./eth-contracts/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721Receiver.sol
> Compiling ./eth-contracts/node_modules/openzeppelin-solidity/contracts/utils/Address.sol

> Compiled successfully using:
   - solc: 0.5.2+commit.1df8f40c.Linux.g++


Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 0x6adda5


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x40c3cf81cd2f0c2868dbddfae3fd3bdc72b8dcd3870daef26e5a1955379f2310
   > Blocks: 1            Seconds: 9
   > contract address:    0x74C72caf904c306A4023dD9F14Ac34B651a0D533
   > block number:        4471568
   > block timestamp:     1559203170
   > account:             0xca62a2C21AAa5BD64ccd984584C8e5E2e3636fC1
   > balance:             17.74720474
   > gas used:            273226
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00273226 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00273226 ETH


2_deploy_contracts.js
=====================

   Deploying 'Verifier'
   --------------------
   > transaction hash:    0x904f2581db2ce084ae48594a06e64371b003af38cfe00ff1e91ffbd74882d79e
   > Blocks: 1            Seconds: 9
   > contract address:    0x0Bc9B62A499F1AcbbfD94F861A43a96b280F4AAE
   > block number:        4471570
   > block timestamp:     1559203200
   > account:             0xca62a2C21AAa5BD64ccd984584C8e5E2e3636fC1
   > balance:             17.72903448
   > gas used:            1774998
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.01774998 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0xe6611daba8670e712435ab52547ec5541b4a96ff965af53b81038f82af90d2e9
   > Blocks: 2            Seconds: 21
   > contract address:    0x19e975DF115f86c45Dd46A86b147F94b978D3c5B
   > block number:        4471572
   > block timestamp:     1559203230
   > account:             0xca62a2C21AAa5BD64ccd984584C8e5E2e3636fC1
   > balance:             17.67974114
   > gas used:            4929334
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.04929334 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.06704332 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.06977558 ETH