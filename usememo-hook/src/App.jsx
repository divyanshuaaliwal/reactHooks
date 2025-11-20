import { useState, useMemo } from 'react'

const nums = new Array(30_000_000).fill(0).map((_, i) => {
    return {
        index: i,
        isMagical: i === 29_000_000
    };
});

function App() {

    const [numbers, setNumbers] = useState(nums);
    const [count, setCount] = useState(0);

    // Expensive computation: scanning 30M items
    const magical = useMemo(() => {
        console.log("Running expensive find...");
        return numbers.find(item => item.isMagical === true);
    }, [numbers]); // Only re-run when numbers changes

    return (
        <>
            <div>
                <span>
                    Magical number is: {magical.index}
                </span>
            </div>

            <h1>useMemo Demo</h1>

            <button
                onClick={() => {
                    setCount(c => c + 1);

                    // Update array only when count hits 10
                    if (count === 10) {
                        setNumbers(
                            new Array(10_000_000).fill(0).map((_, i) => {
                                return {
                                    index: i,
                                    isMagical: i === 9_000_000
                                };
                            })
                        );
                    }
                }}
            >
                Click {count}
            </button>
        </>
    );
}

export default App;