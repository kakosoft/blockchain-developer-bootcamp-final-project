// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

/// @title Carbon Coin: An incentivation system for deep decarbonization
/// @author kakosoft
/// @notice ERC20 Coin with access control capabilities
/// @dev Basic functionality implemented, requires further implementation

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControlEnumerable.sol"; 

contract Carboni is ERC20, AccessControlEnumerable {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    uint public constant MAX_CAP = 36000000000;

    constructor() ERC20("Carboni", "CO2") {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(MINTER_ROLE, msg.sender);
    }

    function mint(address to, uint256 amount) public onlyRole(MINTER_ROLE) {
        /// @notice only approved minters can mint coins
        /// @dev checks that MAX_CAP is not exceeded before minting

        if (amount + totalSupply() <= MAX_CAP) {
                    _mint(to, amount);
        }       
    }

}
