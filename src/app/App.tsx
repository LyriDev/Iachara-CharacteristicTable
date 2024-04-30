// import { useState } from 'react'
import Button from '@mui/material/Button';

export default function App() {
    // const [focusIndex, setFocusIndex] = useState(0);

    return (
        <Button
            variant="contained"
            disableRipple
            style={{
                textWrap: "nowrap",
                border: "1px solid rgb(112, 112, 112)"
            }}
        >
            特徴表
        </Button>
    )
}
