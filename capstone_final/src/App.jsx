import {useState} from 'react'
import './App.css'
import NavPage from "./components/navPage.jsx";
import Counter from "./components/Counter.jsx";


function App() {
    const [page, setpage] = useState("home")
    return (
        <>
            {/*<NavPage page={page} setpage={setpage}/>*/}
            <NavPage/>
            <Counter/>
        </>
    )
}

export default App
