import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Navbar/>
      {/* <Outlet /> */}
        <Main/>
        <Row rowId = '1' title='Upcoming' fetchURL = {requests.requestUpcoming} />
        <Row rowId = '2' title='Popular' fetchURL = {requests.requestPopular} />
        <Row rowId = '3' title='Trending' fetchURL = {requests.requestTrending} />
        <Row rowId = '4' title='TopRated' fetchURL = {requests.requestTopRated} />
        <Row rowId = '5' title='Horror' fetchURL = {requests.requestHorror} />
    </div>
  )
}

export default Home