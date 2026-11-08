import React from "react";

function Side(props){
    return(
        <>
        <div style={{backgroundColor:"red", color:"white", width: "200px",height: "calc(100vh - 70px)",padding: "20px",boxSizing: "border-box",display: "flex",flexDirection: "column",gap: "15px",textAlign:"left"}}>
            <p>username, {props.username}</p>
            <p>age,{props.age}</p>
            <p>phone, {props.phone}</p>
            <p>address, {props.address}</p>
        </div>
        </>
    );
}

export default Side;