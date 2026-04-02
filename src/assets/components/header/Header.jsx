import { useState } from "react";
import Nav from "./Nav";
 

export default function Header({getKeywords}){
    

// const onChangeHandler = (event) => {
//     const value = event.target.value === '' ? false:true;
// setKeywords(event.target.value);
// setActive(value)


// }
const [active, setActive ] = useState(false);
  const [keywords, setKeywords]= useState(''); 
    return(
        <>
            <header style={{background: `${active ? "brown":"darkgreen"}`}}>
            <div className="logo">Awesome News</div>
      <input 
    onChange={(e) => {
        getKeywords(e); 
        setActive(e.target.value !== '');
    }}
/>
             <Nav />
        </header>
        </>
    );
}