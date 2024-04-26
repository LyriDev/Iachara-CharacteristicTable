import { useContext } from 'react'
import { CharacteristicTableContext } from '../providers/CharacteristicTableProvider';
import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

export default function SaveButton(){
    const {
        saveTableData
    } = useContext(CharacteristicTableContext);

    return (
        <Button
            variant="contained"
            startIcon={<SaveIcon />}
            color="success"
            onClick={saveTableData}
        >
            保存
        </Button>
    )
};
