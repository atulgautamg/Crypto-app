import React from 'react'
import  { useEffect, useState } from 'react'
import './Coins4.css';
import c1 from './c1.svg'
import c2 from './c2.svg';
import c3 from './c3.svg';
import c4 from './c4.svg';
import img1 from './dashboardimages/img1.svg';
import img2 from './dashboardimages/img2.svg';
import img3 from './dashboardimages/img3.svg';
import img4 from './dashboardimages/img4.svg';
import img5 from './dashboardimages/img5.svg';
import img6 from './dashboardimages/img6.svg';
import search from './dashboardimages/search1.svg'
import coins2 from './Currency';

import coinimage from './coinimg-photoaidcom-cropped.jpg'
import arrow1 from './arrow2.svg';
import arrow2 from './downarrow1.svg';
import axios from 'axios';
import ContextApi, { Cryptostate } from './ContextApi';

import {Link} from 'react-router-dom';
const Coins4 = () => {
      const [coins,setcoins]=useState([]);
      const [curvalue,setcurvalue]=useState('usd');
    
      const [loading,setloading]=useState(false);
      const [symbol1,setsymbol1]=useState("$");
      const [page, setpage] = useState(1);
      const [search,setsearch]=useState();
      const {currency,symbol,commoncurrency,res2}=Cryptostate();
      const [query,setquery]=useState("");
    const fetchcoins=async()=>{
    const {data}=await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${curvalue}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`);
    setcoins(data);
    setloading(false);
    
  }
  const fetchquery=(e)=>{
    setquery(e.target.value);
  }
   const currencyvalue=async({data})=>{
    let c1;
       await  res2.map((data1)=>{
             if(String(data1.code).toLowerCase()==String(data))
             {
                 c1=data1.symbol;
                 
       console.log("symbol chosen",symbol1);
             }
             else {
              c1="$";
             }
       })
       setsymbol1(c1);
          
   }
  
    useEffect(()=>{
  fetchcoins();
  currencyvalue(curvalue);
    },[currency,query,curvalue,symbol1])
    const findvalue=(currency)=>
{
const formattedUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: curvalue,
}).format(currency);
  return formattedUSD;
}
      
  return (
    <div className='box'>
      <div className='box11 box1'> 
         <div> <img src={img1} alt=''/> </div>
         <div> <img src={img2} alt=''/> </div>
         <div> <img src={img3} alt=''/> </div>
         <div> <img src={img4} alt=''/> </div>
         <div> <img src={img5} alt=''/> </div>
         <div> <img src={img6} alt=''/> </div>
      </div>
      <div className='box11 box2'>  
        <div className='box2img'> <img src={coinimage} alt=''/> </div>
        <div> <h1> CryptoMania</h1> </div>
          <div> <form className="s1" role="search">
            
        <input value={query} onChange={(e)=>fetchquery(e)} className="s11 form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className='s11btn'  type="submit"> Search  </button>
      </form>  </div>
      <div>
        <div className="s4 "  >
  <select value={curvalue}   onChange={(e)=>{setcurvalue(e.target.value); }} className="s4s" >
    {currency.map((data)=>( 
    <option className='btn12' value={data}>{data}</option>
    ))}
  </select>
  </div>
      </div>
         </div>
      <div className='box11 box3'> 
        <h3>Make Your Crypto Search Easier</h3>
        <h6>Check your daily transaction report</h6>
          </div>           
   
      <div className='box11 box5'>
         {coins.filter((row)=>{return query.toLowerCase()===""? row: row.id.toLowerCase().includes(query) ||  row.symbol.toLowerCase().includes(query) }).slice((page-1)*10,(page-1)*10+10).map((row)=>(
                        
                        <Link to={`/coins2/${row.id}`} div className='cardcrypto'>
                            <div className='d1class'>
                       <div className='b1'>   <img className='' src={row.image}  />  </div>
                       <div className='b2'> {row.name? <div className='rowname' >{String(row.name).slice(0,15)}</div> :null} </div>
                       </div>
                       <div className='d2class'>
                       <div className='b5'> {row.symbol? <div className='rowname'> {String(row.symbol).slice(0,5)}</div>:null}</div> 
                       
                       <div className='b3'> {row.current_price? <div className='rowname'> 
                        
                         {findvalue(row.current_price)}</div>:null}</div> 
                       {row?.market_cap_change_percentage_24h?
                       <div className='b4'> {row.market_cap_change_percentage_24h>0?<div style={{color:"green"}} className='rowname r1'>{row.market_cap_change_percentage_24h.toFixed(2)}% 
                        <img src={arrow1} alt=''/>
                         </div>:<div style={{color:"red"}} className='rowname r2'>{row.market_cap_change_percentage_24h.toFixed(2)}% 
                        <img src={arrow2} alt=''/>
                         </div> }</div>: <div></div>}
                        </div>
                    </Link>
                  ))}
        
         </div>
      
    
   </div>
  )
}

export default Coins4