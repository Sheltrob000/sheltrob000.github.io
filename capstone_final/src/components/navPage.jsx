import {useState} from "react";
import Real_Page from "./Real_Page.jsx";

export default function NavPage() {
    const [page, setPage] = useState("home")


    return(
        <>
            <div className={"hello"}>
                <button className={"navpage"} onClick={() => setPage("home")}>home</button>
                <button className={"navpage"} onClick={() => setPage("wiki")}>wiki</button>
                <button className={"navpage"} onClick={() => setPage("map")}>map</button>
                <button className={"navpage"} onClick={() => setPage("join")}>join</button>
            </div>

            <h1>{page}</h1>

            <Real_Page string={page}/>


        </>

    )
}