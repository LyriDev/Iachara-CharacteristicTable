import { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function App() {
    const [value, setValue] = useState(0);

    return (
        <>
            <Tabs
                value={value}
                onChange={(_event: React.SyntheticEvent, newValue: number) => setValue(newValue)}
            >
                <Tab label="Item One"/>
                <Tab label="Item Two"/>
                <Tab label="Item Three"/>
            </Tabs>
            <div hidden={value !== 0}>
                Item One
            </div>
            <div hidden={value !== 1}>
                Item Two
            </div>
            <div hidden={value !== 2}>
                Item Tree
            </div>
        </>
    )
}

export default App
