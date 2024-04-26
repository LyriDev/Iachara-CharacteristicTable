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
        characteristicTableData,
        changeTableData
    } = useContext(CharacteristicTableContext);

    return (
        <TextField
            fullWidth
            multiline
            style={{
                margin: 0
            }}
            value={characteristicTableData[focusIndex].tableData[parentIndex][childIndex]}
            onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                const newValue: string = event.target.value;
                changeTableData(focusIndex, parentIndex, childIndex, newValue);
            }}
        />
    )
};
