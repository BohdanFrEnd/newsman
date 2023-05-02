import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import routeMain from "./routes";
import uFetch from "services/uFetch";
import prepearLink from "components/NewsList/components/utils/prepearLink"; //подготовка ссылки
import PostDate from "components/NewsList/components/PostDate";
import Loader from "components/Loader";

import './styles.scss'

const NewsDetail = () => {
    const {id} = useParams();
    //console.log(id)

    const [news, setNews] = useState(null);
      
        useEffect(() => {
          const fetchData = async () => {
            const data = await uFetch();
            setNews(data.find(item => prepearLink(item.articlesName) === id));
          };
          
          fetchData();
        }, [id]);

        console.log(news)

        const lines = news != null ? news.articlesDescription.split('"},') : ''; // разбиваем абзац на строки
        
    return (
        <section className="news-detail">
            {news ? (
                <div className="news-detail__wrapper">
                    <div className="news-detail__left">
                        <h2 className="news-detail__title">
                            {news.articlesName}
                        </h2>
                        <p className="news-detail__author">
                            {news.authors[0].authorName}
                        </p>
                        <div>
                            <PostDate date={news.dateModified.date}/>
                        </div> 
                    </div>
                    <div className="news-detail__right">
                        <img src={news.files.length === 0 ? "https://создание-сайта.net/images/newsnew/newsnew/js-replace.jpg" : news.files[0].urlCdn} alt={"blog-prewiev"}/>
                        <div className="news-detail__txt">
                            {/*вывел текст разбив на абзацы*/}
                            {lines.map((line, index) => (
                                <p key={index}>{line.replace(/{"type":"paragraph","content":"/g, "").replace(/\[/g, "").replace(/"}]/, '').replace(/{"type":"heading","content":"/g, '')}</p>
                            ))}
                            {/* {news.articlesDescription} */}
                        </div>
                    </div>
                </div>
            ) : <Loader /> }
        </section>
    )
}

export {routeMain};

export default NewsDetail;