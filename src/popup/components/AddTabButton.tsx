import { useContext } from 'react'
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { CharacteristicTableContext } from '../providers/CharacteristicTableProvider';

export default function AddTabButton({
    setFocusIndex
}: {
    setFocusIndex: React.Dispatch<React.SetStateAction<number>>;
}){
    const {
        addTable
    } = useContext(CharacteristicTableContext);

    return (
        <IconButton
            edge="end"
            color="primary"
            onClick={() => {
                const newIndex: number = addTable();
                setFocusIndex(newIndex);
            }}
            style={{
                margin: "0",
                padding: "12px",
                borderRadius: "50%",
                display: "inline-flex",
                alignItems: "center",
            }}>
                <AddIcon/>
        </IconButton>
    )
};
