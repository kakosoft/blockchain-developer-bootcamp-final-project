# blockchain-developer-bootcamp-final-project

## Carbon Coin: An incentivation system for deep decarbonization

The goal of the project is to implement a basic PoC for the cryptocurrency proposed in <a href="https://en.wikipedia.org/wiki/The_Ministry_for_the_Future"> The Ministry of the Future</a> science-fiction book, also explained by the author in this <a href="https://www.ted.com/talks/kim_stanley_robinson_remembering_climate_change_a_message_from_the_year_2071">TED talk</a>.

The idea is that coins are issued for not burning carbon: 1 carbon coin = 1 ton of carbon not burned or sequestered. 

"Proof of carbon sequestration" is externally audited and confimed in the blockchain by an independent international organization. 

1. There will be a whitelist of auditors that can mint coins when they validate a new carbon sequestration project.
2. Carbon coins behaves as bonds, with guaranteed rates (i.e. 5%) of return for a fixed amount of time (i.e. 10 years).
3. Carbon coins are freely traded. At the end of the year it is the owner of each coin who receives the interest coupon (if not expired).

## Scope of the MVP

Implement a ERC20 token that can only be minted by a list of auditors contained in a whitelist.

1. There is a single administrator who is the only one capable of adding / removing auditors from the whitelist.
2. Auditors can mint as much coins as they want, but the total supply can't exceed a max cap of 36 billions.
3. Auditors can only transfer as much coins as they mint. The can't transfer coins minted by other auditors.

## Example workflow

##### Preconditions
Auditor is not yet in the whitelist

Max cap is not reached

##### Flow
Administrator validates auditor and incorporate it to the whitelist

Auditor mint an amount of coins

Auditor transfer the coins to different third parties

##### Postconditions
Auditor can't transfer more coins than he has minted. 

Total supply of coins can't exceed max cap.



