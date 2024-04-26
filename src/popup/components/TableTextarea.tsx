import { useContext } from 'react'
import { CharacteristicTableContext } from '../providers/CharacteristicTableProvider';
import TextField from '@mui/material/TextField';

export default function TableTextarea({
    focusIndex,
    parentIndex,
    childIndex
}: {
    focusIndex: number;
    parentIndex: number;
    childIndex: number;
}){
    const {
        characteristicTableData
    } = useContext(CharacteristicTableContext);

    return (
        <TextField
            fullWidth
            multiline
            rows={5}
            style={{
                margin: 0
            }}
            value={characteristicTableData[focusIndex].tableData[parentIndex][childIndex]}
        />
    )
};
