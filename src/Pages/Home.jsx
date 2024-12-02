import React from 'react'
import './Home.css'
import Sidebar from '../Components/Sidebar.jsx'

const Home = ({isSideBarOpen}) => {
  return (
    <>
    <Sidebar isSideBarOpen={isSideBarOpen}></Sidebar>
    </>
  )
}

export default Home
