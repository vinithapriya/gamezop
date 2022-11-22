import { GetStaticProps } from "next";
import * as React from "react";
import { NewsType } from "../types/types";
import NewsList from "../components/NewsList";
const News:React.FC<{news:NewsType[]}>=({news})=>{
return(
   <NewsList newsList={news}/>
)
}
export default News
export const getStaticProps:GetStaticProps=async()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/posts')
  const response =await res.json()

  return{
    props:{
      news:response
    }
  }
}