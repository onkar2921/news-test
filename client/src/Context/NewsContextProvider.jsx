import { createContext, useReducer } from "react";
import { NewsReducer } from "../Reducers/NewsReducer";
import axios from "axios"



export const NewsContext=createContext(null)



export default function NewsContextProvider({children}) {

    const IntialNewsState={
        news:[],
        postDetail:{},
        randompost:[],
        loading:false,
        Error:false,
        search:false

    }

const [state,newsDispatch]=useReducer(NewsReducer,IntialNewsState)


const searchNews=async(text)=>{
    try {
        newsDispatch({type:"SETESEARCH"})
        newsDispatch({type:"SETLOADING"})

        const result=await axios.get(`http://hn.algolia.com/api/v1/search?query=${text}`)

        if(result){
            console.log(result?.data?.hits)
            newsDispatch({type:"SETNEWS",payload:result?.data?.hits})
            newsDispatch({type:"REMOVELOADING"})
        }


        
    } catch (error) {
        
        newsDispatch({type:"SETERROR"})
        console.log(error)
    }
}


const searchSpecificNews=async(objectId)=>{
    try {
        
        newsDispatch({type:"SETLOADING"})
        const result=await axios.get(`http://hn.algolia.com/api/v1/items/${objectId}`)

        if(result){
            console.log('post result---',result?.data)
            newsDispatch({type:"SETPOST",payload:result?.data})
            newsDispatch({type:"REMOVELOADING"})
        }
        
    } catch (error) {
        
        newsDispatch({type:"SETERROR"})
        console.log(error)
    }
}

const fetchRandom=async()=>{
    try {
        newsDispatch({type:"SETLOADING"})
        const result=await axios.get(`http://hn.algolia.com/api/v1/search?tags=story`)
        if(result){
            console.log("random --",result?.data?.hits)
            newsDispatch({type:"SETRANDOM",payload:result?.data?.hits})
            newsDispatch({type:"REMOVELOADING"})
        }
        
    } catch (error) {
        
        newsDispatch({type:"SETERROR"})
        console.log(error)
    }
}

  return (
    <>
    <NewsContext.Provider value={{state,newsDispatch,searchNews,searchSpecificNews,fetchRandom}}>
        {children}
    </NewsContext.Provider>
    
    </>
  )
}

