import React from 'react'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import {Dishes} from '../../shared/dishes'
import Footer from '../../components/Footer/Footer'
function Home() {
  return (
    <div>
      <Header />
      <Menu dishes={Dishes}/>
      <Footer />
    </div>
  )
}

export default Home
