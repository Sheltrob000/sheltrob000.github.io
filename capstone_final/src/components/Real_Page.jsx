import Home from "./navigationComponents/home.jsx";
import Wiki from "./navigationComponents/wiki.jsx";
import Map from "./navigationComponents/map.jsx";
import Join from "./navigationComponents/join.jsx";

export default function Real_Page({string}){
    console.log(string)
    if (string === "home"){
        return(<Home/>)
    }
    else if(string === "wiki"){
        return (<Wiki/>)
    }
    else if(string === "map"){
        return (<Map/>)
    }
    else if(string === "join"){
        return (<Join/>)
    }


    else{
        return(
            <p>not working</p>
        )
    }

}