import {useState} from 'react'
import './App.css'
import NavPage from "./components/navPage.jsx";
import Counter from "./components/Counter.jsx";


function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <NavPage/>
            <Counter/>
        </>
    )
}

export default App
