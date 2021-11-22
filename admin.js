console.log("hello!!!!");

// const carboniAddress = '';
// const carboniABI = '';

window.addEventListener('load', function () {
    if (typeof window.ethereum !== 'undefined') {
        console.log('Metamask detected!!!')
    }
    else {
        alert("You need to install Metamask to continue")
    }
});

const mmEnable = document.getElementById('mm-connect');

mmEnable.onclick = async () => {
    await ethereum.request({ method: 'eth_requestAccounts'})
    const mmCurrentAccount = document.getElementById('mm-current-account');

    mmCurrentAccount.innerHTML = ethereum.selectedAddress;
}

// var web3 = new Web3(window.ethereum);

const addAuditor = document.getElementById('new-auditor-button');

addAuditor.onclick = async () => {
    const auditorAddress = document.getElementById('new-auditor-address').value;

    // connecting web3 to a contract
    var web3 = new Web3(window.ethereum);

    // const carboni = new web3.eth.Contract (carboniABI, carboniAddress);

    //is it the following line necessary?:
    // carboni.setProvider(window.ethereum);

    // ethereum tx:
    // await carboni.methods.newAuditor(auditorAddress).send({from: ethereum.selectedAddress})
}

