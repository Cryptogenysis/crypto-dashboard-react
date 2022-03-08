function ExchangeRate({exchangeRate, chosenPrimaryCurrency, chosenSecondaryCurrency}) {
    return ( 
        <div className = "exchange-rate" >
        <h4>Exchange Rate <br/> <br/> {exchangeRate}</h4> 
        <p>{chosenPrimaryCurrency} to {chosenSecondaryCurrency}</p>
        </div>
    );
}

export default ExchangeRate;
