import React from 'react'
import MenuData from "../Data/MenuData";

const Menu = () => {
    return (
        <div className="container text-center">
            <div className="row m-2 flex-nowrap justify-content-between overflow-auto">
                {MenuData.map((menu) => {
                    return (
                        <div key={menu.id} className="col-1 my-2" style={{ width: "8rem" }}>
                            <div className="card card-block">
                                <img src={menu.src} className="card-img mx-auto mt-1 align-items-center" alt=":(" style={{ height: "64px", width: "64px" }} />
                                <div className="card-body p-0">
                                    <p className="card-text"><strong>{menu.title}</strong></p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Menu;