import { useEffect, useState } from 'react'
import axios from 'axios'

function NewsFeed() {
    const [articles, setArticles] = useState(null)

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://crypto-news-feed1.p.rapidapi.com/feed',
            params: {
              sources: 'nytimes,newsbtc,economictimes,businessinsider,cointelegraph,coinrivet,coindesk',
              exclude: '',
              query: 'bitcoin,ethereum,nft,mana,decentraland,dogecoin,binance,splinterlands,vitalik,Qtum',
              limit: '100'
            },
            headers: {
              'x-rapidapi-host': 'crypto-news-feed1.p.rapidapi.com',
              'x-rapidapi-key': 'bbab116637mshb2799da24b9e104p1f2654jsn9d28311c4661'
            }
          };
        axios.request(options).then(function (response) {
            console.log(response.data)
            setArticles(response.data)

        }).catch(function (error) {
            console.error(error)
        })
    }, [])

    console.log(articles)
    const first7Articles = articles?.slice(0, 100)

    return (
        <div className="news-feed" >
            <h2>🕖📈<u>Trending News</u>🗣📢</h2>
            {first7Articles?.map((article, _index) => (
                <div key={_index}>

                    <p>
                        <a href={article.url}><b>{article.title}</b></a><br />
                        <i>{article.source}</i>
                    </p>

                </div>))}
        </div>
    )
}

export default NewsFeed
