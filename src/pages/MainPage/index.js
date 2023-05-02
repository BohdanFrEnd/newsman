import React, { useEffect, useState } from "react";
import routeMain from "./routes"; //Rout
import NewsList from "components/NewsList"; // підключеня вивода списка нижче я його обрізав за допомогою slice()
import PageTitle from 'components/PageTitle' //підключення спільного заголовока
import uFetch from 'services/uFetch' //підключення до API
import Loader from "components/Loader";

import './styles.scss';

const MainPage = () => {

    

     //const result = useFetch('https://newsapi.org/v2/everything?q=tesla&from=2023-03-28&sortBy=publishedAt&apiKey=0bbc42e384174727b819728ea99e9860');
    //const result = useFetch('https://newsapi.org/v2/everything?q=tesla&from=2023-03-30&sortBy=publishedAt&apiKey=01c5aa447786436a9374d820043d9759');
    //console.log(result)

   
        const [news, setNews] = useState([]);
      
        useEffect(() => {
          const fetchData = async () => {
            const data = await uFetch();
            setNews(data);
          };
          
          fetchData();
        }, []);

        //console.log(news)
        

    return (
        
        <section className="main-page-section">
            <PageTitle 
                pageTitle = {
                    <h2 className="main-title">Always Fresh <span>News</span></h2>
                }
            />
            {news === undefined ?  <div>Change a key...</div> : ( news.length > 0 ? <NewsList list={news.slice(0,6)} /> : <Loader /> )}
        </section>
    )
}

export {routeMain};

export default MainPage;