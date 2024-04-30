import { useContext } from 'react';
import { CharacteristicTableContext } from '../providers/CharacteristicTableProvider';
import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function CopyButton(){
    const {
        characteristicTableData,
        tableIndex,
        parentIndex,
        childIndex
    } = useContext(CharacteristicTableContext);

    return (
        <Button
            disableElevation
            disableRipple
            variant="contained"
            style={{
                padding: "6px",
                height: "26px",
                border: "1px #3a3f44 solid"
            }}
            onClick={(_event: React.MouseEvent<HTMLElement>) => {
                // クリップボードに文字列をコピーする
                const roleResult: string = characteristicTableData[tableIndex].tableData[parentIndex][childIndex];
                navigator.clipboard.writeText(roleResult);
            }}
            endIcon={<ContentCopyIcon style={{margin: 0}}/>}
        />
    )
}
