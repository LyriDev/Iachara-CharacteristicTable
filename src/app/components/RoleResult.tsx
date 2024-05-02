import { useContext } from 'react';
import { CharacteristicTableContext } from '../providers/CharacteristicTableProvider';
import TextField from '@mui/material/TextField';

export default function RoleResult(){
    const {
        getTableData
    } = useContext(CharacteristicTableContext);

    return (
        <TextField
            className="white-color"
            fullWidth
            multiline
            rows={3}
            style={{
                // color: "white",
                width: "75%"
            }}
            inputProps={{
                readOnly: true,
                style: { padding: 0 }
            }}
            value={getTableData()}
        />
    );
}
