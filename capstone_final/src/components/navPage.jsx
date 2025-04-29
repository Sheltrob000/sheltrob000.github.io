import {useState} from "react";
import Real_Page from "./Real_Page.jsx";

export default function NavPage() {
    const [page, setPage] = useState("Home")


    return(
        <>
            <div className={"hello"}>
                <button className={"navpage"} onClick={() => setPage("Home")}>Home</button>
                <button className={"navpage"} onClick={() => setPage("Wiki")}>Wiki</button>
                <button className={"navpage"} onClick={() => setPage("Map")}>Map</button>
                <button className={"navpage"} onClick={() => setPage("Join")}>Join</button>
            </div>

            <h1>{page}</h1>

            <Real_Page string={page}/>


        </>

    )
}