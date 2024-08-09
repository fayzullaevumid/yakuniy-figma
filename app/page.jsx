import React from 'react'
import Footer from './Footer/page'
import Section from './Section/page'
import Fetch from './Fetch/page'
import Header from './Header/page'


const page = () => {
  return (
    <div>
      <Header/>
      <Fetch/>
      <Section/>
      <Footer/>
    </div>
  )
}

export default page