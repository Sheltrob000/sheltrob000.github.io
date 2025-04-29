import {useState} from "react";

export default function Wiki() {
    const [loader, setloader] = useState("none")

    function handleSetLoader(value){
        if (value === loader){
            setloader("none");
        }else{
            setloader(value)
        }
    }


    return (
        <>
        <div className={"contentholder"}>
            <p>hello this is the wiki</p>

            <button className={"bluebutton"} onClick={() => handleSetLoader("player")}>Player</button>
            {
                loader === "player" ?
                    <div className={"hello"}>
                        <p>hello</p>
                        <p>hello</p>
                        <p>hello</p>
                        <p>hello</p>
                    </div>
                    :
                    null
            }

            <button className={"bluebutton"} onClick={() => handleSetLoader("lore")}>Lore</button>
            {
                loader === "lore" ?
                    <div className={"hello"}>
                        <p>hello</p>
                        <p>hello</p>
                    </div>
                    :
                    null
            }

            <button className={"bluebutton"} onClick={() => handleSetLoader("enemies")}>Enemies</button>
            {
                loader === "enemies" ?
                    <div className={"hello"}>
                        <p>There is currently one implemented enemy in the game. the humble python</p>
                        <p>The future of the game will see many new enemies such as</p>
                        <ul>
                            <li>BlightBeetle</li>
                            <li>Nectarpox</li>
                            <li>Hollow Shambler</li>
                            <li>Shambler</li>
                            <li>Wilson</li>
                            <li>Sorrowshade</li>
                            <li>Ghast Husk</li>
                            <li>Gravegnat</li>
                            <li>john</li>
                            <li>Wailshade</li>
                            <li>Dustcrawler</li>
                            <li>WaterWisp</li>

                        </ul>

                        <p>with some bosses like</p>
                        <ul>
                            <li>The Hollow Maw</li>
                            <li>Crypt Monarch</li>
                            <li>Johnny the mushroom picker</li>
                            <li>Scourge of river Dim</li>
                            <li> The Eminence</li>

                        </ul>
                    </div>
                    :
                    null
            }

            <button className={"bluebutton"} onClick={() => handleSetLoader("areas")}>Areas</button>
            {
                loader === "areas" ?
                    <div className={"hello"}>
                        <p>There is currently one area in the game as it is in early development, the Grassy Cave.</p>
                        <p>In the future there will be many areas in the game such as</p>
                        <ul>
                            <li>Whispering Bastion</li>
                            <li>Duskwither Grove</li>
                            <li>The Withering Weald</li>
                            <li>Warped Thicket</li>
                            <li>Ebonreach Chasm</li>
                            <li>Bleakroot Hollow</li>
                            <li>Gloomspire Depths</li>


                        </ul>
                    </div>
                    :
                    null
            }

            <button className={"bluebutton"} onClick={() => handleSetLoader("3")}>the underlining design process of trees to the theme of the game</button>
            {
                loader === "3" ?
                    <div className={"hello"}>
                        <p>Tree design in video games—such as skill trees, dialogue trees, or environmental trees—often reflects and reinforces the game’s central theme by shaping how players interact with the world and progress through it. In role-playing games, for example, skill trees embody themes of growth, choice, and identity, allowing players to personalize their characters and make meaningful decisions that affect gameplay and narrative. Similarly, dialogue trees in narrative-driven games emphasize themes of consequence and moral ambiguity, letting players explore complex relationships and branching storylines. Even the literal design of trees in game environments can contribute to mood and tone—twisted, leafless trees in horror games may evoke decay and dread, while lush forests in adventure games symbolize exploration and vitality. In this way, tree design acts as both a functional mechanic and a thematic tool, grounding the player’s experience in the core ideas of the game.</p>
                        <p>The design of real trees in video games often plays a key role in reinforcing the game’s overall theme, atmosphere, and emotional tone. In fantasy or adventure games, towering, ancient trees can symbolize mystery, history, or the sacredness of nature, aligning with themes of exploration or the battle between civilization and wilderness. In contrast, sparse or dead trees in post-apocalyptic games visually support themes of decay, desolation, and environmental collapse. The way trees are placed, shaped, and animated also affects how alive a game world feels—lush, swaying forests can evoke peace and vitality, while jagged, still trees can create tension or unease. By thoughtfully designing trees to reflect the narrative or emotional setting, developers use natural elements not just as background details, but as active participants in storytelling.</p>
                    </div>
                    :
                    null
            }




        </div>

        </>
    )
}