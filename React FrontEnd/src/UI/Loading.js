import React from "react";
import Spinner from "react-spinner-material";

// Component to Display Spinner
const Loading =()=>{
    return(
        <div className="spinner-overlay spinner">
          <Spinner radius={60} color={"#333"} stroke={8} visible={true} />
        </div>
    );
};

export default Loading;