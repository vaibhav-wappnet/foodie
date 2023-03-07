import React from 'react'
import PageNotFound from "../Assets/Page_not_Found.png";

const NotFound = () => {
    return (
        <div>
            <img src={PageNotFound} className="img-fluid" style={{maxHeight:"90vh"}} alt="" />
        </div>
    )
}

export default NotFound;