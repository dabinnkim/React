import React from 'react'
import { Outlet,useNavigate } from 'react-router-dom'

const Event = () => {

  let navigate = useNavigate();

  return (
    <>
        <h4>오늘의 이벤트</h4>
        <button onClick={()=>{navigate('one')}}>one 라우터 연결</button>
        <button onClick={()=>{navigate('two')}}>two 라우터 연결</button>
        <Outlet/>

      
        
    </>
  )
}

export default Event