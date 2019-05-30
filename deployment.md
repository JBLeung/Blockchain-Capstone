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
   > transaction hash:    0xabd2ab064099596208dbc5b774af61cc398f6422379e263342e9da9538f69c60
   > Blocks: 1            Seconds: 13
   > contract address:    0x83347faB1a801414406351f4c4634381c0192F12
   > block number:        4473802
   > block timestamp:     1559236682
   > account:             0xca62a2C21AAa5BD64ccd984584C8e5E2e3636fC1
   > balance:             36.351331239
   > gas used:            273226
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00546452 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00546452 ETH


2_deploy_contracts.js
=====================

   Deploying 'Verifier'
   --------------------
   > transaction hash:    0xcd995e04ef8c0cc9fa55b364a5a9ca7945620e8ee3781d9687dbc6b3b82ae38d
   > Blocks: 1            Seconds: 9
   > contract address:    0x7772f66DdE049529A45c99A563e93a2C6C272380
   > block number:        4473806
   > block timestamp:     1559236742
   > account:             0xca62a2C21AAa5BD64ccd984584C8e5E2e3636fC1
   > balance:             36.314990719
   > gas used:            1774998
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.03549996 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0xd89de65888546c0649ecaeebab296b01700994dc87fb9f306cf4a519dd64f160
   > Blocks: 0            Seconds: 5
   > contract address:    0x6b0d6A3d12C06bc02f1a5F571d4289Ca03D442d4
   > block number:        4473807
   > block timestamp:     1559236757
   > account:             0xca62a2C21AAa5BD64ccd984584C8e5E2e3636fC1
   > balance:             36.216402759
   > gas used:            4929398
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.09858796 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.13408792 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.13955244 ETH

 jeff_leung@JLeung-MBP-MAB4862  ~/workspace/Udacity/BlockchainDeveloper/Git/Blockchain-Capstone                                                                             ✔  01:19:30