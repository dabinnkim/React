import React from 'react'
import { Outlet } from 'react-router-dom'

const About = () => {
  return (
    <>
        <div>회사정보</div>
        <Outlet></Outlet> {/* nested route를 보여줄 자리, 구멍 */}
    </>
  )
}

export default About