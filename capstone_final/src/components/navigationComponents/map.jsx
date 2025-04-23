import room1 from "../../assets/rooms/room1.png"
import room2 from "../../assets/rooms/room2.png"
import room3 from "../../assets/rooms/room3.png"
import room4 from "../../assets/rooms/room4.png"

export default function Map(){
    return(
        <>

            <div className={"contentholder"}>
                <p>this is room 1 where you start</p>
                <img src={room1}/>

                <p>this is the 2nd room you enter from the right of the first room</p>
                <img src={room2}/>

                <p>this is the 3rd room you enter</p>
                <img src={room3}/>

                <p>this is the 4th room, it has a boss arena and the largest area in the game, the sinkhole</p>
                <img src={room4}/>


            </div>
        </>
    )
}