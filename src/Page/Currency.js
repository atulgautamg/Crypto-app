import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
const Currency = () => {
     const [coin2,setcoin2]=useState([]);
      const [currency,setcurrency]=useState([]);
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
  return currency
}

export default Currency