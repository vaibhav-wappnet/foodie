import React from 'react'
import Carousel from '../Utils/Carousel';
import Menu from "../Utils/Menu";
import Layout from '../Components/Layout/Layout';

const Home = () => {
  return (
    <Layout>
      <div className=''>
        {/* carousel Image */}
        <Carousel />

        {/* menu items */}
        <Menu />

      </div>
    </Layout>
  )
}

export default Home;