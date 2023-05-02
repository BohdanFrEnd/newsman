import React from "react";
import './styles.scss'

//функция обработки даты
const currDate = (value) => {
    const dateCheck = (item) => item < 10 ? '0' + item : item; //добавление 0 перед числом
    const newDate = new Date(value);
    const curruntDate = {
        day : dateCheck(newDate.getDay()),
        month : dateCheck(newDate.getMonth()),
    }

    return curruntDate;
    
}

const PostDate = (props) =>{
    //вызов функции с пропсами 
    const dateResult = currDate(props.date);
    return (
        <p className="news-item__date">
            <span>
                {dateResult.day}
            </span>
            /
            <span>
                {dateResult.month}
            </span>
              
            {/* {props.item.dateModified.date} */}
        </p>
    )
}

export default PostDate;