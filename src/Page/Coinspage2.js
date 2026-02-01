import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Cryptostate } from './ContextApi';
import { SingleCoin } from './Api';
import axios from 'axios';
import Info from './Info';
import  HtmlParser, { } from "react-html-parser"
import DOMPurify from 'dompurify';
import './Coinspage2.css';
import uparrow from './Arrow 1.svg';
import downarrow from './downarrow1.svg';
import marketcap from './capital_3733769.png'
import pricechange from './trading_3790916.png'
import lowprice from './lowest-price_17269058.png'
import highprice from './inflation_13459629.png'
import Navbar from './Navbar';
import coin2 from './Currency';
import coinimage from './coinimg-photoaidcom-cropped.jpg'
import { Link, useNavigate } from 'react-router-dom';
const Coinspage2 = () => {
    
    const {id}=useParams();
    const [coin,setcoin]=useState({});
     const [curvalue,setcurvalue]=useState('usd');
    const {stat,setstat,currency,setcurrency,symbol}=Cryptostate();
    const url=`https://api.coingecko.com/api/v3/coins/${id}`
    useEffect(()=>{
      axios.get(url).then((res)=>{
        setcoin(res.data)
      }).catch((error)=>{
        console.log(error);
      })
    },[curvalue])
    console.log("coin",coin);
    console.log(curvalue);

// Format as USD (United States Dollars)
const findvalue=(currency)=>
{
const formattedUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: curvalue,
}).format(currency);
return formattedUSD;
}
const findvalue1=(currency1)=>{
  const formatterInternational = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  maximumFractionDigits: 2
}).format(currency1);
return formatterInternational;
} 
return (
    <div>
      <nav>
      <div className='titlename'> <div><img src={coinimage} alt=''/> </div> <Link to="/"> < h1> CryptoMania </h1></Link> </div>
        
            <div className='selectvalue'> 
            <select value={curvalue}   onChange={(e)=>{setcurvalue(e.target.value); }} className="selectvalue1" >
    {currency.map((data)=>( 
    <option className='btn12' value={data}>{data}</option>
    ))}
  </select>
  </div> 
              </nav>
    <div className='mainpage'>
        {!coin? <div></div>:
        <div className='page'>
          <div className='note11 note1'>
            <div className='div1'>
               <div>{coin.image? <img src={coin.image.large} alt=''/>: <div></div> }</div>  
               
            </div>
            
             <div className='div3'>
            <div className='div2'>
             
             <div className='name2'> <h1> {coin.name}</h1> </div> 
            {coin.market_data?.current_price?.[curvalue]?
            <div className='price' > Rank: # {coin.market_cap_rank} </div>:""}
            
            </div>
            
            <div className='div2'>
             
            {coin.market_data?.current_price?.[curvalue]?
            <div className='price2' > Price: {findvalue(coin.market_data.current_price[curvalue])} </div>:""}
            
            </div>
            
            <div className='div2'>
             
            {coin.market_data?
            <div className='price3' > Total Supply: {String(coin.market_data.total_supply/1000000).slice(0,4)} M </div>:""}
            
            </div>
            </div>
            <div className='symb'>{coin.symbol} </div>
            </div>     
          
          <div className='note11 note2'>
            <div className='b11'> <div> <div> Today </div> {coin.market_data?.price_change_percentage_24h?<div> {String(coin.market_data.price_change_percentage_24h).slice(0,5)} % </div> :<div></div>}  
            </div>   
          {coin.market_data?.price_change_percentage_24h?<div> {coin.market_data?.price_change_percentage_24h<0? <div> <img src={downarrow} alt=''/> </div>: 
            <div> <img src={uparrow} alt=''/> </div>  } </div>: <div></div>}    </div>
            
            <div className='b11'> {coin.market_data?.price_change_percentage_7d? <div> <div> 7 days </div> <div> {String(coin.market_data.price_change_percentage_7d).slice(0,5)} % </div> 
            </div>: <div></div> } 
             {coin.market_data?.price_change_percentage_7d? <div> {coin.market_data.price_change_percentage_7d<0? <div> <img src={downarrow} alt=''/> </div>: 
            <div> <img src={uparrow} alt=''/> </div>  } </div>: <div></div>}   </div>
            
            <div className='b11'> <div> <div> 30 days </div> {coin.market_data?.price_change_percentage_30d?<div> {String(coin.market_data.price_change_percentage_30d).slice(0,5)} % </div>: <div></div>}  
            </div>  
            {coin.market_data?.price_change_percentage_30d?<div> {coin.market_data?.price_change_percentage_30d<0? <div> <img src={downarrow} alt=''/> </div>: 
            <div> <img src={uparrow} alt=''/> </div>  } </div> : <div></div>}
              </div>
            
            <div className='b11'> <div> <div> 1 Year </div> {coin.market_data?.price_change_percentage_1y? <div> {String(coin.market_data.price_change_percentage_1y).slice(0,5)} % </div>:<div></div>} 
            </div>  {coin.market_data?.price_change_percentage_1y?<div> {coin.market_data?.price_change_percentage_1y<0? <div> <img src={downarrow} alt=''/> </div>: 
            <div> <img src={uparrow} alt=''/> </div>  } </div>: <div></div>}   </div>
            </div>
          
          <div className='note11 note3'>
           <div className='b22'>
              <div>
                  <img src={marketcap} alt=''/>
                </div>
                <div className='b2data'>
                    <div> Market Cap </div>
                     {coin.market_data?.market_cap[curvalue]? <div>{findvalue1(coin.market_data.market_cap[curvalue])}  </div>: <div></div>}
                   
                    </div> 
           </div>
           <div className='b22'>
              <div>
                  <img src={pricechange} alt=''/>
                </div>
                <div className='b2data'>
                    <div> Price Change </div>
                    {coin.market_data?.price_change_24h_in_currency[curvalue]? <div> {findvalue(coin.market_data.price_change_24h_in_currency[curvalue])} </div>: <div></div>}
                   
                    </div> 
           </div>
           <div className='b22'>
              <div>
                  <img src={lowprice} alt=''/>
                </div>
                <div className='b2data'>
                    <div> Lowest Price  </div>
                    {coin.market_data?.low_24h[curvalue]? <div> {findvalue(coin.market_data.low_24h[curvalue])}  </div>: <div></div>}
                   
                    </div> 
           </div>
          <div className='b22'>
              <div>
                  <img src={highprice} alt=''/>
                </div>
                <div className='b2data'>
                    <div> Highest Price </div>
                    {coin.market_data?.high_24h[curvalue]? <div>  {findvalue(coin.market_data.high_24h[curvalue])}  </div>: <div></div>}
                   
                    </div> 
           </div>
          
          </div>
          
          <div className='note11 note4'>
              <h1> About </h1>

              <div className='para1'>

                  <p dangerouslySetInnerHTML={{
          __html:DOMPurify.sanitize(coin.description?coin.description.en :null)
         }}></p>
        
              </div>

          </div>
          <div className='note11 note5'>
            <div>  
                <select value={stat} onChange={(e)=>{setstat(e.target.value)}} className="select1"  >
  
    <option className='select2' value={1}>24hr</option>
    <option className='select2' value={7}>1 week </option>
    <option className='select2' value={30}>1 month</option>
    <option  className='select2' value={365}>1 year</option>
  
  </select>
  
                 </div>
            <div className='graph1'>
            <Info coin={coin} id={id} currency={curvalue}></Info>
          </div>
          </div>
          
            </div>

        }
            </div> 
            </div>

  )
}

export default Coinspage2