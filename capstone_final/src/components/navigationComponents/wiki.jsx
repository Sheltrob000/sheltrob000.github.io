import {useState} from "react";

import insanitymc from "../../assets/incsanityMC.png"

export default function Wiki() {
    const [loader, setloader] = useState("none")

    function handleSetLoader(value) {
        if (value === loader) {
            setloader("none");
        } else {
            setloader(value)
        }
    }


    const enemies = ["BlightBeetle", "Nectarpox", "Hollow Shambler", "Shambler", "Wilson", "Sorrowshade", "Ghast Husk", "Gravegnat", "john", "Wailshade", "Dustcrawler", "WaterWisp"];
    const renderEnemies = enemies.map(enemy => <li>{enemy}</li>)


    return (
        <>
            <div className={"contentholder"}>
                <p>hello this is the wiki</p>

                <button className={"bluebutton"} onClick={() => handleSetLoader("player")}>Player</button>
                {
                    loader === "player" ?
                        <div className={"hello"}>
                            <p>The player is a guardian, a Protector of the settlement from the insanity creeping in
                                from the edges.</p>
                            <p>The insanity has infected him, sealing his fate. However he gains abilities from the
                                insanity and vows to protect his village before the insanity takes him.</p>
                            <p>He attempts to solve the insanity by adventuring out into the infected wilderness to
                                attempt to find and kill its source</p>
                            <p>weather he succeeds or not is up to you</p>
                            <img src={insanitymc} className={"player"}/>
                        </div>
                        :
                        null
                }

                <button className={"bluebutton"} onClick={() => handleSetLoader("lore")}>Lore</button>
                {
                    loader === "lore" ?
                        <div className={"hello"}>
                            <p>Here are some lore snipits that chat GPT - I mean I created</p>
                            <p>"Tiny and fast, these corrupted larvae erupt from fungus-covered pods. They're not born
                                from eggs, but grown from decay. It is said that each Blightling holds a flicker of a
                                forgotten voice."</p>
                            <p>"Once foragers of the Rotfen, the Skittermires now march in erratic patterns, their limbs
                                clicking in feverish rhythm. The spores in their skulls seem to drive them forward—not
                                with hunger, but with memory."</p>
                            <p>"He wandered into the Whispering Thicket long before it was named. Back then, he brought
                                joy—gathering mushrooms and leaving them on villagers’ doorsteps. Now, twisted by the
                                Sporewake, his body is more mushroom than man. His laughter echoes through the
                                forest—warm, childlike, and very wrong."</p>
                            <p>"Drawn to the scent of undisturbed death, the Gravegnat flutters in slow, looping spirals
                                above old tombs. Not hostile by instinct, it becomes violent when startled—releasing
                                clouds of dust said to contain the voices of the forgotten."</p>
                            <p>"Blind, legless things that burrow through the ashen grounds of long-dead forests. The
                                Dustcrawler feeds not on flesh, but on memory—sapping the will of travelers until they
                                forget why they came."</p>
                            <p>"Towering and unmoving until disturbed, this armored sentinel guards the Brood Nest—a
                                cradle of young Blightlings. Few survive its awakening; fewer still forget the sound it
                                makes when it breathes."</p>
                            <p>"Buried deep beneath the fungal caverns, this ancient thing was once a shrine guardian.
                                The Sporewake did not corrupt it—only awakened its endless hunger. Its jaw unhinges
                                across its chest, and it speaks in sighs."</p>
                            <p>"Once guardians of sacred fungus groves, the Spinecreeps were noble. Now, warped and
                                shell-shattered, they wander in silence, impaling all who stray too close with their
                                exposed marrow-blades."</p>
                            <p>"Not a being, but a knowing. It spreads without will, infecting not only bodies, but
                                choices. Entire hives once loyal to their queens now kneel to nothing but the roots in
                                their skulls."</p>
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
                                {renderEnemies}
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
                            <p>There is currently one area in the game as it is in early development, the Grassy
                                Cave.</p>
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

                <button className={"bluebutton"} onClick={() => handleSetLoader("3")}>the underlining design process of
                    trees to the theme of the game
                </button>
                {
                    loader === "3" ?
                        <div className={"hello"}>
                            <p>Tree design in video games—such as skill trees, dialogue trees, or environmental
                                trees—often reflects and reinforces the game’s central theme by shaping how players
                                interact with the world and progress through it. In role-playing games, for example,
                                skill trees embody themes of growth, choice, and identity, allowing players to
                                personalize their characters and make meaningful decisions that affect gameplay and
                                narrative. Similarly, dialogue trees in narrative-driven games emphasize themes of
                                consequence and moral ambiguity, letting players explore complex relationships and
                                branching storylines. Even the literal design of trees in game environments can
                                contribute to mood and tone—twisted, leafless trees in horror games may evoke decay and
                                dread, while lush forests in adventure games symbolize exploration and vitality. In this
                                way, tree design acts as both a functional mechanic and a thematic tool, grounding the
                                player’s experience in the core ideas of the game.</p>
                            <p>The design of real trees in video games often plays a key role in reinforcing the game’s
                                overall theme, atmosphere, and emotional tone. In fantasy or adventure games, towering,
                                ancient trees can symbolize mystery, history, or the sacredness of nature, aligning with
                                themes of exploration or the battle between civilization and wilderness. In contrast,
                                sparse or dead trees in post-apocalyptic games visually support themes of decay,
                                desolation, and environmental collapse. The way trees are placed, shaped, and animated
                                also affects how alive a game world feels—lush, swaying forests can evoke peace and
                                vitality, while jagged, still trees can create tension or unease. By thoughtfully
                                designing trees to reflect the narrative or emotional setting, developers use natural
                                elements not just as background details, but as active participants in storytelling.</p>
                        </div>
                        :
                        null
                }


            </div>

        </>
    )
}