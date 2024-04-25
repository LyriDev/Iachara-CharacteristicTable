import { useState } from 'react'
import TabBar from './components/TabBar';

function App() {
    const [focusIndex, setFocusIndex] = useState(0);

    return (
        <>
            <TabBar
                focusIndex={focusIndex}
                setFocusIndex={setFocusIndex}
            />
            <div hidden={focusIndex !== 0}>
                Item One
            </div>
            <div hidden={focusIndex !== 1}>
                Item Two
            </div>
            <div hidden={focusIndex !== 2}>
                Item Tree
            </div>
        </>
    )
}

export default App
