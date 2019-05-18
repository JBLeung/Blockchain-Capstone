const ERC721MintableComplete = artifacts.require('CustomERC721Token')

contract('TestERC721Mintable', (accounts) => {
  const tokenName = 'Custom'
  const tokenSymbol = 'CUS'
  const accountOne = accounts[0]
  const accountTwo = accounts[1]
  const accountThree = accounts[3]
  let testingContract = false

  describe('match erc721 spec', () => {
    beforeEach(async () => {
      testingContract = await ERC721MintableComplete.new({from: accountOne})

      const minitPromise = []
      minitPromise.push(testingContract.mint(accountOne, 1, {from: accountOne}))
      minitPromise.push(testingContract.mint(accountTwo, 2, {from: accountOne}))
      minitPromise.push(testingContract.mint(accountThree, 3, {from: accountOne}))
      Promise.all(minitPromise)
    })

    it('should return total supply', async () => {
      const totalSupply = await testingContract.totalSupply()
      assert.equal(totalSupply, 3, 'total supply should return 3')
    })

    it('should get token balance', async () => {
      const balance = await testingContract.balanceOf(accountOne)
      assert.equal(balance, 1, 'balance should return 1')
    })

    // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
    it('should return token uri', async () => {
      const tokenId = 2
      const tokenURI = await testingContract.tokenURI(tokenId, {from: accountTwo})
      assert.equal(tokenURI, `https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/${tokenId}`, 'Token URI is incorrect')
    })

    it('should transfer token from one owner to another', async () => {
      const tokenId = 2
      const ownerAddressBeforeTransfer = await testingContract.ownerOf(tokenId)
      await testingContract.transferFrom(accountTwo, accountThree, tokenId, {from: accountTwo})
      const ownerAddressAfterTransfer = await testingContract.ownerOf(tokenId)
      assert.equal(ownerAddressBeforeTransfer, accountTwo, 'Before transfer, owner should be accountTwo')
      assert.equal(ownerAddressAfterTransfer, accountThree, 'Before transfer, owner should be accountThree')
    })
  })

  describe('have ownership properties', () => {
    beforeEach(async () => {
      testingContract = await ERC721MintableComplete.new({from: accountOne})
    })

    it('should fail when minting when address is not contract owner', async () => {
      let result = false
      try {
        await testingContract.mint(accountOne, 1, {from: accountTwo})
        result = true
      } catch (err) {
        //  DO NTH
      }
      assert.equal(result, false, 'Should fail to mint by accountTwo')
    })

    it('should return contract owner', async () => {
      const contractOwner = await testingContract.owner()
      assert.equal(contractOwner, accountOne, 'Contract owner should be accountOne')
    })
  })
})
