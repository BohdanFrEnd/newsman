import React from "react";
import NewsItem from "./components/NewsItem";


import './styles.scss';

const NewsList = props => {
    return (
        <div className="news-list">
            {
            props.list.map((news, index) => {
                return <NewsItem key={index} item={news} ind={index} numb={index < 10 ? '0' + (index + 1) : index  } />
            })
            }
            
        </div>
    )
}

export default NewsList;