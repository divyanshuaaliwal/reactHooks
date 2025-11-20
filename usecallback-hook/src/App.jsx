import { useState, useCallback } from 'react'
import Navbar from './components/Navbar'

function App() {

    const [count, setCount] = useState(0)

    const getAdjective = () => {
      return "another" + count
    }

    // const getAdjective = useCallback(() => {
    //     return "another " + count
    // }, [])



    return (
        <>
            <Navbar adjective={"good"} getAdjective={getAdjective} />
           
            <div>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>

        </>
    )
}

export default App