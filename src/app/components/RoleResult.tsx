import { useContext } from 'react';
import { CharacteristicTableContext } from '../providers/CharacteristicTableProvider';
import TextField from '@mui/material/TextField';

export default function RoleResult(){
    const {
        characteristicTableData,
        tableIndex,
        parentIndex,
        childIndex
    } = useContext(CharacteristicTableContext);

    return (
        <TextField
            className="white-color"
            fullWidth
            multiline
            style={{
                // color: "white",
                width: "75%"
            }}
            inputProps={{
                readOnly: true
            }}
            value={characteristicTableData[tableIndex].tableData[parentIndex][childIndex]}
        />
    );
}
