import { useState } from 'react'
import TabBar from './components/TabBar';
import TabContent from './components/TabContent';
import { Paper } from '@mui/material';

function App() {
    const [focusIndex, setFocusIndex] = useState(0);

    return (
        <Paper
            style={{
                display: "flex",
                flexDirection: "column",
                color: "white",
                backgroundColor: "#3a3f44",
                width: "40rem",
                height: "35rem",
                overflowY: "hidden"
            }}
            sx={{ boxShadow: 3 }}
        >
            <TabBar
                focusIndex={focusIndex}
                setFocusIndex={setFocusIndex}
            />
            <TabContent
                focusIndex={focusIndex}
            />
        </Paper>
    )
}

export default App
