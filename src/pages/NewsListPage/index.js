import React, {useState, useEffect} from "react";
import routeMain from "./routes";
import PageTitle from "components/PageTitle";
import NewsList from "components/NewsList";
import uFetch from "services/uFetch";
import Loader from "components/Loader";

import './styles.scss'

const NewsLispPage = () => {

    // const useFetch = (url) => {
    //     const [data, setData] = useState([]);
      
    //     useEffect(() => {
    //       const fetchData = async () => {
    //         const response = await fetch(url);
    //         const result = await response.json();
    //         setData(result.articles);
    //       }
    //       fetchData();
    //     }, [url])
      
    //     return data;
    //   }

      //const resultFull = useFetch('https://newsapi.org/v2/everything?q=tesla&from=2023-03-28&sortBy=publishedAt&apiKey=0bbc42e384174727b819728ea99e9860');
      //const resultFull = useFetch('https://newsapi.org/v2/everything?q=tesla&from=2023-03-30&sortBy=publishedAt&apiKey=01c5aa447786436a9374d820043d9759');

    //console.log(resultFull)

    const [resultFull, setResultFull] = useState([]);
      
    useEffect(() => {
      const fetchData = async () => {
        const data = await uFetch();
        setResultFull(data);
      };
      
      fetchData();
    }, []);

    //console.log(resultFull)


    // для кнопки
    const [more, setMore] = useState(15);


    return (
        <section className="all-news">
            <PageTitle 
                pageTitle = {
                    <h2 className="main-title">Keep the track Of <span>News</span></h2>
                }
            />
            {resultFull === undefined ? <p>Change key</p> : (resultFull.length > 0 ? <NewsList list={resultFull.slice(0, more)}/> : <Loader /> )}
            <div>
                {/* {
                    more < resultFull.length ? 
                    <button onClick={() => setMore(more + 120)}>
                        Show more
                    </button> 
                    : 
                    <button onClick={() => setMore((more - more) + 15)}>
                        Show less
                    </button>
                } */}
            </div>
            

            {   
                resultFull && more < resultFull.length ? 
                <button className="all-news__btn" onClick={() => setMore(more + 50)}>Show more</button> 
                :
                resultFull.length > 0 && 
                <button className="all-news__btn" onClick={() => setMore((more - more) + 15)}>Show less</button>
            }

            
        </section>
    )
}

export {routeMain};

export default NewsLispPage;