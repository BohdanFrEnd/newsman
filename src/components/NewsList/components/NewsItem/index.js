import React from "react";
import { NavLink } from "react-router-dom";
import {routeMain as routeNewsDetail} from "pages/NewsDetail";
import prepearLink from "../utils/prepearLink"; //подготовка ссылки
import PostDate from "../PostDate";

import './styles.scss';

const NewsItem = props => {

    const deleteText = (title) => {
        return title.substr(0, 110) + '...'
    }

    // const searchSym = (str) => {
    //     let ex = str
    //     const result = ex.replace(/'/g, "").replace(/ /g, "-").replace(/%/g, "-percent");
    //     return result;
    // }

    // const strResult = searchSym();
    // console.log(strResult)

    // const currDate = (value) => {
    //     const dateCheck = (item) => item<10 ? '0' + item : item;
    //     const newDate = new Date(value);
    //     const curruntDate = {
    //         day : dateCheck(newDate.getDay()),
    //         month : dateCheck(newDate.getMonth()),
    //     }

    //     return curruntDate;
        
    // }

    // const dateResult = currDate(props.item.dateModified.date);

    //console.log(dateResult.day)
    
    return (
        <NavLink className="news-item" to={routeNewsDetail(prepearLink(props.item.articlesName)) }>
            <h4 className="news-item__title">
                {props.item.articlesName > 100 ? deleteText(props.item.articlesName) : props.item.articlesName} 
            </h4>
            {/* {props.numb}  */}
            <div className="news-item__bot-wrapper">
                <p className="news-item__sourse">
                    {props.item.authors[0].authorName}
                </p>
                <PostDate date={props.item.dateModified.date}/>
            </div>
        </NavLink>
    )
}


export default NewsItem;