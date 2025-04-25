import {useState} from "react";

export default function Wiki(){
    const [loader, setloader] = useState("player")



    return(
        <>
            <div className={"contentholder"}>
                <p>hello this is the wiki</p>

                <button className={"bluebutton"} onClick={() => setloader("player")}>Player</button>



                <div className={"hello"}>
                    <p>hello</p>
                    <p>hello</p>
                    <p>hello</p>
                    <p>hello</p>

                </div>

            </div>

        </>
    )
}