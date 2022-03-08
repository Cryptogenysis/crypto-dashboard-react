import { useEffect, useState } from 'react'
import axios from 'axios'

function FearGreed() {
    const [fudfomo, setFudfomo] = useState()

    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://crypto-ranking-data.p.rapidapi.com/fng/7',
            headers: {
                'x-rapidapi-host': 'crypto-ranking-data.p.rapidapi.com',
                'x-rapidapi-key': 'b303be1ab3msh3866fa5749bb4dap18f264jsnb4ca3d637234'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data)
            setFudfomo(response.data)

        }).catch(function (error) {
            console.error(error)
        })

    }, [])

    console.log(fudfomo)
    
    const today = fudfomo?.slice(0,1)
    const yesterday = fudfomo?.slice(1,2)
    const dayB4 = fudfomo?.slice(2,3)
    const dayB4That = fudfomo?.slice(3,4)

    return (
        <div className="fomo-meter" >
            <h2>😨<a href="https://money.cnn.com/data/fear-and-greed/" target="_blank" rel="noreferrer"><u>Fear or Greed</u></a>🤑</h2>
            {today?.map(today => (<h3>Today: {today.value_classification}</h3>))}
            {yesterday?.map(yesterday => (<p><b>Yesterday:</b> <i><u>{yesterday.value_classification}</u></i></p>))}
            {dayB4?.map(dayB4 => (<p><b>Day Before Yesterday:</b> <i><u>{dayB4.value_classification}</u></i></p>))}
            {dayB4That?.map(dayB4That => (<p><b>The Day Before That:</b> <i><u>{dayB4That.value_classification}</u></i></p>))}
            
        </div>
    )
}

export default FearGreed
