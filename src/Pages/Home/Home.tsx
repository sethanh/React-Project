import React,{useEffect} from 'react';
import { useLoaderData } from "react-router-dom";

function Home() {
    const inititalData = useLoaderData();
    console.log(inititalData);
    return (
        <div>
            Home
        </div>
    );
}

export default Home;
