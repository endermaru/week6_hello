import React from "react";
import World from "./world";

export default function Hello(){
    return (
        <>
            <h1>
                Hello,
                <World name="World"/>!
                <World name="CATTtttt"/>
            </h1>

            <img src="cat.jpg" alt="cat"/> 
        </>
    );
}

/*World는 page의 world.js에서 가져옴
cat.jpg는 public 폴더 안에서 가져옴.*/