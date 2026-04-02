import NewsListItems from "./NewsListItems";

export default function NewsList({news}){
    const newsHandler = news.map(item =>(
   <NewsListItems key={item.id} item={item}/>
   ))
    return(<>
   {newsHandler}
    
    </>);
}