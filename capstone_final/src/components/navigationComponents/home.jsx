import insanityMC from "../../assets/incsanityMC.png"


export default function Home(){
    return(
        <>
            <div className={"contentholder"}>
                <p>hello this is the home page</p>
                <p>this is where you can look at my super cool video game</p>
                <p>check out some of my cool other tabs</p>
                <img src={insanityMC}className={"player"}/>
            </div>


        </>
    )
}