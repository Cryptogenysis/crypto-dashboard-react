import ExchangeRate from './ExchangeRate'
import { useState } from 'react'
import axios from 'axios'
function CurrencyConverter() {

    const currencies = ['USD', 'BTC', 'LTC', 'ETH', 'ADA', 'BNB', 'BAT', 'DOGE', 'DOT', 'ENJ', 'HBAR', 'HIVE', 'MANA', 'MATIC', 'SHIB', 'SOL', 'TRX', 'XLM', 'XRP', 'VET', 'ZIL', 'THETA',]
    const [chosenPrimaryCurrency, SetChosenPrimaryCurrency] = useState('BTC')
    const [chosenSecondaryCurrency, SetChosenSecondaryCurrency] = useState('USD')
    const [amount, setAmount] = useState(1)
    const [exchangeRate, setExchangeRate] = useState(0)
    const [result,setResult] = useState(0)
    console.log(amount)

    function convert() {


        const options = {
            method: 'GET',
            url: 'https://alpha-vantage.p.rapidapi.com/query',
            params: { from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency },
            headers: {
                'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
                'x-rapidapi-key': 'b303be1ab3msh3866fa5749bb4dap18f264jsnb4ca3d637234'
            }
        };

        axios.request(options).then((response) => {
            console.log(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
            setExchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
            setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'] * amount)
        }).catch((error) => {
            console.error(error)
        });

    }

    return (
        <div className="currency-converter" >
            <h2>Crypto Converter</h2>

            <div className="input-box">

                <table>
                    <tbody>
                        <tr>
                            <td>Primary Currency</td>
                            <td>
                                <input
                                    type="number"
                                    name="currency-amount-1"
                                    value={amount}
                                    onChange={(event) => setAmount(event.target.value)}
                                />
                            </td>
                            <td>
                                <select
                                    value={chosenPrimaryCurrency}
                                    name="currency-option-1"
                                    className="currency-options"
                                    onChange={(event) => SetChosenPrimaryCurrency(event.target.value)}
                                >

                                    {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}

                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td>Secondary Currency</td>
                            <td>
                                <input
                                    type="number"
                                    name="currency-amount-2"
                                    value={result}
                                    disabled={true}
                                />
                            </td>
                            <td>
                                <select
                                    value={chosenSecondaryCurrency}
                                    name="currency-option-2"
                                    className="currency-options"
                                    onChange={(event) => SetChosenSecondaryCurrency(event.target.value)}
                                >

                                    {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}

                                </select>
                            </td>
                        </tr>
                    </tbody>

                </table>
                <button id="convert-button" onClick={convert}>Convert</button>
            </div>

            <ExchangeRate 
            exchangeRate={exchangeRate} 
            chosenPrimaryCurrency={chosenPrimaryCurrency}
            chosenSecondaryCurrency={chosenSecondaryCurrency}
            />
        </div>
    );
}

export default CurrencyConverter;
