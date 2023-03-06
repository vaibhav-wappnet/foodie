import React from 'react';
import ChefMenuData from "../Data/ChefMenuData";

const ChefMenu = () => {
    return (
        <div className="container mt-5 mb-3 text-center">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 justify-content-center">
                {ChefMenuData.map((menu) => {
                    return (
                        <div className="card col m-3 p-0 text-bg-dark" style={{ width: "15rem" }}>
                            <img src={menu.src} className="card-img opacity-50 rounded-0 px-0" alt=":(" />
                            <div className="card-img-overlay">
                                <div className="card-title d-flex align-items-center">
                                    <img src={menu.chefImg} className="" style={{ width: "40px", height: "40px" }} alt="" />
                                    <h4>{menu.chefName}</h4>
                                </div>
                                <div className="card-footer d-flex px-0 justify-content-between align-items-center" style={{ marginTop: "7rem" }}>
                                    <div className="card-text text-start">
                                        <p className='m-0'>
                                            {menu.foodTitle}
                                        </p>
                                        <p className='m-0'>
                                            {menu.foodType}
                                        </p>
                                    </div>
                                    <button className="btn btn-danger rounded-5">$ 40.00</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ChefMenu;