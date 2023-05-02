
//import React, {useEffect, useState} from "react";
import axios from "axios";

// const useFetch = () => {
//     const [dataList, setDataList]=useState([]);
//     const reqUrl = 'https://newsapi.org/v2/everything?q=tesla&from=2023-03-28&sortBy=publishedAt&apiKey=0bbc42e384174727b819728ea99e9860';

//     useEffect(() =>{
//         const fetchData = async () => {
//             const responce = await axios.get(reqUrl);
//             setDataList(responce.data.articles)  
//         }
//         fetchData();
        
        
//     }, [])
//     return dataList;
// }

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


const uFetch = async () => {
  const options = {
    method: 'GET',
    url: 'https://reuters-business-and-financial-news.p.rapidapi.com/article-date/01-04-2021',
    headers: {
      // 'X-RapidAPI-Key': '912ba0e007mshea2fde5d5af55dap151059jsnf9aeace0eeaf',
      'X-RapidAPI-Key': 'b2851f6f6fmsh997821c2024f8d9p1fc74ejsn8fa86c2d06b2',
      'X-RapidAPI-Host': 'reuters-business-and-financial-news.p.rapidapi.com'
    }
  };

  const response = await axios.request(options);
  //console.log(response.data);
  return response.data;

}


export default uFetch;