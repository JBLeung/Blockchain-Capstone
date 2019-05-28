const Verifier = artifacts.require('Verifier')

contract('Verifier', (accounts) => {
  describe('Test Verifier generated by Zokrates', () => {
    beforeEach(async function () {
      this.contract = await Verifier.new({
        from: accounts[0],
      })
    })

    it('Check proof is working', async function () {
      const {proof, input} = {
        proof:
        {
          A: ['0x10b169d2d1d6e49b78830110a6eb4bc30e46be68159bc63c796bb6c59e54b4ce', '0x03346042d838cc4d7a9a891cecdbb92c2e8fc09f44fbaf509b54eec7cbc8de55'],
          A_p: ['0x02f1012071b000236b56863ff042026f60992153258d535572e91fe5e269acd9', '0x13fe3dd8d1094eb03637beaf87dd592751c8b2437f5ecad45acaa0ffa4bd7760'],
          B:
                [['0x2afddcd79364ef6223d680b249defc8a03748558c31b67620169d3a141cda148', '0x1f53caf84c265ec5ae9e06a5fe9e343e55b71cf8fc1ef09c797244233358c9c9'], ['0x1e1db03823d7a133c7e0bc5545f8eb89cb15f5f8cc42c92602a2a45909910dc1', '0x1bf4f2476f7a4288455629cb9465c867de5a2513d7db3ca66c96dea37af74a39']],

          B_p: ['0x284588fc780e39faeee6122ebccf2e734c27d5f4dfb86c86c92067121b9c32a7', '0x01f2066dcf75a905ee46bfb141a9cccf5f0c4d034bd5c495b52a84c0797f5420'],
          C: ['0x2cafcada03670590cf1d6e951e43a2610ce2348ca5356d9b796ec0b8af27b2d4', '0x0a5a80e71cd1a932b3335262b806ec9c2dc03e6903e0606092645b456ff94140'],
          C_p: ['0x04ab2a1f4cd6780efca77b7833b44b66d2c1393aff3d6196cd311be6898595db', '0x01ce77f9c485af307119f419a47160dbce6c5526b04f003cb80843d2a75ff87f'],
          H: ['0x125fc1a384715292ba89ddc3b621423e1fedee997339ea0ca38a4ff0eda36329', '0x0ede3203bdb0021e4ce7f23e772f1f3483d52f2fdf2284a8834756bdaffea88d'],
          K: ['0x181a4d3540b2a7f3d00fe32fa08508af9a17b15d34ed6fc775d86ffc325cee5d', '0x2cb46503319ef1d94df84bf970e38487aedc3f793f813bacc4c801212c616476'],
        },
        input: [9, 1],
      }

      const resultWithCorrectProof = await this.contract.verifyTx.call(proof.A, proof.A_p, proof.B, proof.B_p, proof.C,
        proof.C_p, proof.H, proof.K, input)

      const resultWithIncorrectProof = await this.contract.verifyTx.call(proof.A, proof.A_p, proof.B, proof.B_p, proof.C,
        proof.C_p, proof.H, proof.K, [3, 3])
      assert.equal(resultWithCorrectProof, true, 'proof work as normal')
      assert.equal(resultWithIncorrectProof, false, 'Should be fail')
    })
  })
})
