pragma solidity ^0.5.2;

import "./Verifier.sol";
import "./ERC721Mintable.sol";


contract SolnSquareVerifier is CustomERC721Token {
    using Address for address;
    using SafeMath for uint256;

    Verifier private verifierContract;
    Solutions[] private solutions;
    mapping (bytes32 => uint256) private unisolutions;

    event SolutionAdded(bytes32 solutionHash);

    constructor () public {
        verifierContract = Verifier(msg.sender);
    }

    struct Solutions {
        uint256 index;
        uint[2] a;
        uint[2] aP;
        uint[2][2] b;
        uint[2] bP;
        uint[2] c;
        uint[2] cP;
        uint[2] h;
        uint[2] k;
        uint[2] input;
        address owner;
        bool isUsed;
    }


    function addsolutions(
        uint[2] memory a,
        uint[2] memory aP,
        uint[2][2] memory b,
        uint[2] memory bP,
        uint[2] memory c,
        uint[2] memory cP,
        uint[2] memory h,
        uint[2] memory k,
        uint[2] memory input) public
        {
        bytes32 solutionHash = keccak256(
            abi.encodePacked(
                a, aP, b, bP, c, cP, h, k, input)
            );
        require(unisolutions[solutionHash] != 0, "Solution has been added");
        uint256 index = solutions.length.add(1);
        solutions.push(
            Solutions(
                index,a, aP, b, bP, c, cP, h, k, input, msg.sender, false
                )
            );
        unisolutions[solutionHash] = index;
        emit SolutionAdded(solutionHash);
    }

    function mintNewUniqueToken(
        uint[2] memory a,
        uint[2] memory aP,
        uint[2][2] memory b,
        uint[2] memory bP,
        uint[2] memory c,
        uint[2] memory cP,
        uint[2] memory h,
        uint[2] memory k,
        uint[2] memory input,
        address to,
        uint256 tokenId) public
        {
        bytes32 solutionHash = keccak256(
            abi.encodePacked(
                a, aP, b, bP, c, cP, h, k, input)
            );
        require(unisolutions[solutionHash] == 0, "The solution has not been added yet");
        require(!solutions[unisolutions[solutionHash]].isUsed, "The slolution is used");
        require(
            verifierContract.verifyTx(
            a, aP, b, bP, c, cP, h, k, input), "verifyTx failed");
        mint(to, tokenId);
        solutions[unisolutions[solutionHash]].isUsed = true;
    }

}
























