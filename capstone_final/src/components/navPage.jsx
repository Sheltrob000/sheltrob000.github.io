import {useState} from "react";

export default function NavPage() {
    const [page, setPage] = useState("home")
    const handleSetPage = (pagechange) =>setPage(pagechange)


    return(
        <>
            <div className={"hello"}>
                <button className={"navpage"} onClick={() => setPage("home")}>home</button>
                <button className={"navpage"} onClick={() => setPage("wiki")}>wiki</button>
                <button className={"navpage"} onClick={() => setPage("map")}>map</button>
                <button className={"navpage"} onClick={() => console.log("hello")}>hello</button>
            </div>

            <p>{page}</p>

        </>

    )
}