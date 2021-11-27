## Design pattern decisions


##### Inheritances and Interfaces

Carboni contract inherits from OpenZeppelin ERC20 and Access Control Enumerable

    import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
    import "@openzeppelin/contracts/access/AccessControlEnumerable.sol";



##### Access Control Design Patterns 

In the constructor of the contract two different roles are defined

    DEFAULT_ADMIN_ROLE
    MINTER_ROLE

The modifier onlyRole is used to ensure that only admin can grant access to roles and that only minters can mint coins.

