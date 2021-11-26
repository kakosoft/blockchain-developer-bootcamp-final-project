const Carboni = artifacts.require("Carboni");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */

contract("Carboni", function (accounts) {
  
  const [contractOwner, alice, bob] = accounts;
  const deposit = web3.utils.toBN(2);
  
  beforeEach(async () => {
    instance = await Carboni.new();
  });

  it("should assert true", async function () {
    await Carboni.deployed();
    return assert.isTrue(true);
  });

  it("should mint correct amount", async () => {
    await instance.grantRole(web3.utils.keccak256('MINTER_ROLE'), alice);
    await instance.mint(alice, 100);
    const balance = await instance.balanceOf(alice);

    assert.equal(
      100,
      balance,
      "deposit amount incorrect, check deposit method",
    );
  });

  it("should not allow mint if not in auditor list", async () => {
    await instance.revokeRole(web3.utils.keccak256('DEFAULT_ADMIN_ROLE'), contractOwner);
    await instance.revokeRole(web3.utils.keccak256('MINTER_ROLE'), contractOwner);    
    try {
      await instance.mint(contractOwner, 1000);
    } catch (e) {}
    const balance = await instance.balanceOf(contractOwner);

    assert.equal(
      0,
      balance,
      "control not in place, review role assignments",
    );
  });

  it("should allow owner to add new auditor", async () => {
 
    await instance.grantRole(web3.utils.keccak256('MINTER_ROLE'), alice);

    assert.ok(
      instance.hasRole(web3.utils.keccak256('MINTER_ROLE'), alice),
      "audit role has not been assigned ",
    );
  });

  it("should NOT allow an auditor to transfer more coins than minted", async () => {
    await instance.grantRole(web3.utils.keccak256('MINTER_ROLE'), alice);
    await instance.mint(alice, 100);
    try {
      await instance.transferFrom(alice, bob, 120);
    } catch(e){}

    const balance = await instance.balanceOf(alice);

    assert.equal(
      100,
      balance,
      "error, transferred more coins than allowed",
    );

    });

  it("total supply can't exceed 36B coins", async () => {
    await instance.grantRole(web3.utils.keccak256('MINTER_ROLE'), alice);
  
    try {
      await instance.mint(alice, 36e+25);
    } catch(e){}

    const balance = await instance.balanceOf(alice);

    assert.ok(
      instance.totalSupply() <= instance.MAX_CAP, 
      "error, MAX_CAP exceeded",
    );

  });
  
});
