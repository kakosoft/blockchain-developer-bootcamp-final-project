// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract Carboni is ERC20, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    uint public constant MAX_CAP = 36000000000;

    
    constructor() ERC20("Carboni", "CO2") {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(MINTER_ROLE, msg.sender);
    }

    function mint(address to, uint256 amount) public onlyRole(MINTER_ROLE) {
        // check that MAX_CAP is not exceeded before minting!

        if (amount + totalSupply()) <= MAX_CAP {
                    _mint(to, amount);
        }       
    }

}


contract Carbon {

    function setOwner() {
        // define Owner
    }

    modifier onlyOwner() {

    }

    function addAuditor() onlyOwner {
        // includes an auditor in the whitelist
    }

    function removeAuditor() onlyOwner {
        // removes the auditor from the whitelist
    }

    modifier onlyAuditor() {

    }

    function mint() onlyAuditor {

    }


}
