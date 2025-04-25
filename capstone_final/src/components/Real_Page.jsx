import Home from "./navigationComponents/home.jsx";
import Wiki from "./navigationComponents/wiki.jsx";
import Map from "./navigationComponents/map.jsx";
import Join from "./navigationComponents/join.jsx";

export default function Real_Page({string}){
    console.log(string)
    if (string === "Home"){
        return(<Home/>)
    }
    else if(string === "Wiki"){
        return (<Wiki/>)
    }
    else if(string === "Map"){
        return (<Map/>)
    }
    else if(string === "Join"){
        return (<Join/>)
    }


    else{
        return(
            <p>not working</p>
        )
    }

}