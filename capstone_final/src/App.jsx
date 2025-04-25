import {useState} from 'react'
import './App.css'
import NavPage from "./components/navPage.jsx";
import Counter from "./components/Counter.jsx";


function App() {
    return (
        <>
            {/*<NavPage page={page} setpage={setpage}/>*/}
            <NavPage/>

            <div className={"counterholder"}>
                <Counter/>
            </div>
        </>
    )
}

export default App
