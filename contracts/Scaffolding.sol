// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

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
