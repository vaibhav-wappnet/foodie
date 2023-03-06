import React from 'react'
import Carousel from '../Utils/Carousel';
import Menu from "../Utils/Menu";
import ChefMenu from "../Components/ChefMenu";

const Home = () => {
  return (
    <div className=''>

      {/* carousel Image */}
      <Carousel />

      {/* menu items */}
      <Menu />

      {/* DIsplay text container */}
      <div className="container mt-5">
        <h1 className="text-center text-warning text-uppercase mt-4">
          trending chef
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, cupiditate id sint voluptates consequatur velit!</p>
      </div>

    <ChefMenu />
    </div>
  )
}

export default Home;