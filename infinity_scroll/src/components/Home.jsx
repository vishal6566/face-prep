import React, { useEffect, useState } from 'react'
import { Button } from '@chakra-ui/react'
import "../styles/home.css"
import { useNavigate } from "react-router-dom";
import Loading from './Loading';
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
const Home = () => {
const [user,setUser]=useState([])
const [page,setPage]=useState(1)
const [loading, setLoading] = useState(true);

const { logout, isAuth } = useContext(AuthContext);
const getUser=async()=>{
let res=await fetch(`https://randomuser.me/api/?page=${page}&results=10`)
let data=await res.json()
setUser((prev)=>[...prev,...data.results])
setLoading(false)
}
useEffect(()=>{
    getUser()
},[page])
const handelInfiniteScroll = async () => {
   
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setTimeout(()=>{
          setPage((prev) => prev + 1);
        },1000)
       
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);
  console.log(isAuth)
  return (
    <div>
        <div>
   <Button onClick={logout}>logout</Button>
        </div>
        <div className='container' >
            {user && user.map((el)=>(
               <div className='boxx' >
                <p>{el.name.title} <span>{el.name.first}</span> <span>{el.name.last}</span></p>
                <img src={el.picture.medium} alt="" />
               </div>
            ))}
        </div>
        {loading && <Loading />}
    </div>
  )
}

export default Home