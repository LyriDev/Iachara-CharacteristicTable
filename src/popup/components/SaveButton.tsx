import { useContext } from 'react'
import { CharacteristicTableContext } from '../providers/CharacteristicTableProvider';
import { Button } from '@mui/material';

export default function Footer(){
    const {
        characteristicTableData
    } = useContext(CharacteristicTableContext);

    return (
        <Button
            style={{
                position: "fixed",
                bottom: "1rem",
                right: "1rem"
            }}
        >
            保存
        </Button>
    )
};
