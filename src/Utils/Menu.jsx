import React from 'react'
import MenuData from "../Data/MenuData";
import { useState } from "react";
import ChefMenuData from '../Data/ChefMenuData';
import ChefMenu from "../Components/Component/ChefMenu";

const Menu = () => {
    const [foodMenu, setFoodMenu] = useState(MenuData[0]);
    const [chefMenu, setChefMenu] = useState(ChefMenuData[0]);

    console.log(chefMenu);

    // console.log(foodMenu);




    return (
        <div className="container text-center">
            <div className="row m-2 flex-nowrap justify-content-between overflow-auto">
                {MenuData.map((menu) => {
                    return (
                        <div key={menu.id} className="col-1 my-2" style={{ width: "8rem" }}>
                            <div className="card card-block"
                                onClick={() => { setFoodMenu(MenuData[menu.id - 1]); setChefMenu(ChefMenuData[menu.id - 1]) }}>
                                <img src={menu.src} className="card-img mx-auto mt-1 align-items-center" alt=":(" style={{ height: "64px", width: "64px" }} />
                                <div className="card-body p-0">
                                    <p className="card-text"><strong>{menu.title}</strong></p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Display text container */}
            <div className="container mt-5">
                <h1 className="text-center text-warning text-uppercase mt-4">
                    trending chef
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, cupiditate id sint voluptates consequatur velit!</p>
            </div>

            {/* ChefMenu based on  */}
            <ChefMenu chef={chefMenu} />
        </div >
    )
}

export default Menu;