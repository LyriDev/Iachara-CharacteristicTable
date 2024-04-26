import { useState } from 'react'
import TabBar from './components/TabBar';
import TabContent from './components/TabContent';

function App() {
    const [focusIndex, setFocusIndex] = useState(0);

    return (
        <div
            style={{
                color: "white",
                backgroundColor: "#3a3f44",
            }}
        >
            <TabBar
                focusIndex={focusIndex}
                setFocusIndex={setFocusIndex}
            />
            <TabContent
                focusIndex={focusIndex}
            />
        </div>
    )
}

export default App
