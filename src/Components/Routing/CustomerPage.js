import React from 'react'
import { useHistory } from "react-router-dom";



function CustomerPage() {
    const history = useHistory();
    const CuustomerPage = () => {
      history.push("/customerpage");
    };
    return (
        <div>
           <button onClick ={CuustomerPage}> SaiRam Mekala</button>
        </div>
    )
}

export default CustomerPage
