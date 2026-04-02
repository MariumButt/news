 import Header from "./assets/components/header/Header";
 import "./assets/Style.css";
 import Nav from "./assets/components/header/Nav";
 import NewsList from "./assets/components/NewsList";
 import {newsData} from "./utils/data"
import { useState } from "react";


 export default function App() {
  const  [news, setNews]= useState(newsData)
//   const getKeywords = (event)=>{
//     let keywords = (event.target.value);
//      let filtered = newsData.filter(item => {
//       // return item.title.indexOf(keywords)>-1;
//       item.title.toLowerCase().includes(keywords.toLowerCase())
//      })
//      setNews(filtered)
// }
const getKeywords = (event) => {
    let keywords = event.target.value.toLowerCase();

    let filtered = newsData.filter(item => {
        return (
            item.title.toLowerCase().includes(keywords) ||
            item.feed.toLowerCase().includes(keywords)
        );
    });

    setNews(filtered);
};


  return(
     <>
    <Header getKeywords={getKeywords}/>
    <NewsList news={news} />
    </>
  );
}