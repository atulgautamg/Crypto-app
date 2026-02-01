import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import axios from 'axios';
import commoncurrency from './Common-Currency.json'; 
const Crypto=createContext();

const ContextApi = ({children}) => {
    const [currency,setcurrency]=useState([]);
    const [symbol,setsymbol]=useState("Rs.");
    const [coin2,setcoin2]=useState([]);
    const [stat,setstat]=useState(1);
    
       const url=`https://api.coingecko.com/api/v3/coins/bitcoin`
    useEffect(()=>{
      axios.get(url).then((res)=>{
       setcoin2( res.data.market_data.total_volume)
      }).catch((error)=>{
        console.log(error);
      })
    },[])
   
    console.log(coin2);
    let res=Object.entries(coin2);
    console.log(res);
    for(let key of res)
    {
        let key1=key[0];
        currency.push(key1);   
    }
    console.log(currency);
    let res1=[];
    let res2=[];
    for(var i in commoncurrency)
    {
         res1.push(commoncurrency[i])
    }
    for(let key1 of res1)
    {
      let res3={symbol:key1.symbol, code:key1.code};
      
       res2.push(res3);
    }
  return (
      <Crypto.Provider value={{currency,symbol,commoncurrency,res2,setcurrency,stat,setstat}} >
        {children}
      </Crypto.Provider>
    
  )
}

export default ContextApi;
export const Cryptostate=()=>{
   return  useContext(Crypto);
}
