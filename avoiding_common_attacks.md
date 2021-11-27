## Security measures

### SWC-103 (Floating Pragma)
Specific compiler pragma 0.8.2 used in contracts to avoid accidental bug inclusion through outdated compiler versions.

### SWC-105 (Unprotected Ether Withdrawal)
withdraw is protected with OpenZeppelin onlyRole() modifier.

### SWC-118 (Incorrect Constructor Name)
Used the <i>constructor</i> keyword that make a constructor definitions clearer. 

