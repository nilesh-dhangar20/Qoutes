import React,{useEffect,useState} from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Img from "./twitterlogo.png";

const Quotes = () => {
  let random=0;
    const [quote, setquote] = useState("");
    const [auther, setauther] = useState("");
    // const [input, setinput] = useState("");
    // const [array, setarray] = useState([]);
    const callApi=async()=>{
        try{
            const res=await fetch(`https://type.fit/api/quotes`);
            const data=await res.json();
             setquote(data[random].text);
            setauther(data[random].author);
        
            console.log(data);      
          }
        catch(err)
        {
            console.log(err);      
          }

    }
  
    
    useEffect(() => {
        callApi();
    }, [])


    const setNumber=()=>{
        callApi();
        random=Math.floor(Math.random()*1600);
        console.log(random);
    }


    const tweetNow=()=>{
        let tweet=`https://twitter.com/intent/tweet?text=${quote + "   by  "+auther}`;
        window.open(tweet);
    }

    
//    const inputEvent=(event)=>{
//         setinput(event.target.value);
//    }
//    const setSearch=()=>{
//  const resut=array.find((val)=>{
//       if(val.auther===input)
//       {
//           return val.text;
//       }
//       else{
//           return `not found`;
//       }
//  });
//  setquote(resut);
//  setauther(input);
   
    return (
        <>
            <div className="container quotes_div mt-5">
        <div className="content_div pt-5 pb-3 ps-3 pe-3">
             <div className="heading text-center mb-3 mt-2 heading_div">
                 <h1>New Thought</h1>
               {/* <div className="search_div row">
                    <div className="col col-sm-12 offset-md-4">
                   <input type="search" placeholder="enter author name" className="ps-4" onChange={inputEvent} />
                   <button className="btn search_btn" onClick={setSearch}>search</button>
                   </div>
               </div> */}
             </div>
        
        <sup><i className="fas fa-quote-left pe-2 ps-3"></i></sup><p>{quote}</p><sub><i className="fas fa-quote-right ps-2 pe-3"></i></sub>
        <div className="auther me-5">
          <h3> <span> by {auther} </span> </h3>

        </div>
        </div>
           <div className="button_div pb-4 pt-3">
               <button className="btn me-4" onClick={setNumber}>new quote</button>
            <img src={Img} alt="twitter"  className="ms-3" onClick={tweetNow}/>
           </div>
        
          
        </div>
   
        </>
    )
}

export default Quotes;
