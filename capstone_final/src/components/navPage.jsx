import {useState} from "react";

export default function NavPage() {
    const [page, setPage] = useState("home")
    const handleSetPage = (pagechange) =>setPage(pagechange)


    return(
        <div className={"hello"}>
            <button className={"navpage"} onClick={setPage("home")}>home</button>
            {/*<button className={"navpage"} onClick={handleSetPage("wiki")}>wiki</button>*/}
            {/*<button className={"navpage"} onClick={handleSetPage("map")}>map</button>*/}
            <button className={"navpage"} onClick={() => console.log("hello")}>hello</button>

            <p>{page}</p>

        </div>
    )
}