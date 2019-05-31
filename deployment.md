Compiling your contracts...
===========================
> Compiling ./eth-contracts/contracts/ERC721Mintable.sol
> Compiling ./eth-contracts/contracts/Migrations.sol
> Compiling ./eth-contracts/contracts/Oraclize.sol
> Compiling ./eth-contracts/contracts/SolnSquareVerifier.sol
> Compiling ./eth-contracts/contracts/Verifier.sol
> Compiling openzeppelin-solidity/contracts/drafts/Counters.sol
> Compiling openzeppelin-solidity/contracts/math/SafeMath.sol
> Compiling openzeppelin-solidity/contracts/token/ERC721/IERC721Receiver.sol
> Compiling openzeppelin-solidity/contracts/utils/Address.sol
> Compiled successfully using:
   - solc: 0.5.2+commit.1df8f40c.Linux.g++


Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 0x6acfc0


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x0e535042ab43d5dbf5f12a125e46a6f7c38c22898ff768a5b59422b5553e5642
   > Blocks: 0            Seconds: 5
   > contract address:    0x3037cCC73326164cD1723898cCE3707430fAf570
   > block number:        4473976
   > block timestamp:     1559239292
   > account:             0xca62a2C21AAa5BD64ccd984584C8e5E2e3636fC1
   > balance:             36.186978508
   > gas used:            273226
   > gas price:           100 gwei
   > value sent:          0 ETH
   > total cost:          0.0273226 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:           0.0273226 ETH


2_deploy_contracts.js
=====================

   Deploying 'Verifier'
   --------------------
   > transaction hash:    0x587a6e0bdbc0f68df7827921b1a6dfabac21621b1fedde99c07bb442a7abea14
   > Blocks: 1            Seconds: 9
   > contract address:    0x0d408d4490F895580c12b7bEc63C5D544B81713B
   > block number:        4473978
   > block timestamp:     1559239322
   > account:             0xca62a2C21AAa5BD64ccd984584C8e5E2e3636fC1
   > balance:             36.005275908
   > gas used:            1774998
   > gas price:           100 gwei
   > value sent:          0 ETH
   > total cost:          0.1774998 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x79e764f889e2bf72581c679569e76df1eccded489037dc02bd7d7b89f4b7fed7
   > Blocks: 1            Seconds: 9
   > contract address:    0xd0f5BD2Ff7e747999D672C618a39cb68a4693D92
   > block number:        4473979
   > block timestamp:     1559239337
   > account:             0xca62a2C21AAa5BD64ccd984584C8e5E2e3636fC1
   > balance:             35.512336108
   > gas used:            4929398
   > gas price:           100 gwei
   > value sent:          0 ETH
   > total cost:          0.4929398 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:           0.6704396 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.6977622 ETH