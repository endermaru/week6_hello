import React from "react";

export default function World(props){
    return <span style={{fontweight: "bold",color:"green"}}>
        {props.name}!</span>;
}
//props의 name속성을 <span>형식으로 출력