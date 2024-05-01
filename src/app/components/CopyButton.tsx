import { useContext } from 'react';
import { CharacteristicTableContext } from '../providers/CharacteristicTableProvider';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { toast } from 'react-toastify';

export default function CopyButton(){
    const {
        getTableData
    } = useContext(CharacteristicTableContext);

    return (
        <IconButton
            disableRipple
            color="primary"
            onClick={(_event: React.MouseEvent<HTMLElement>) => {
                // クリップボードに文字列をコピーする
                navigator.clipboard.writeText(getTableData());
                toast.info("特徴表をクリップボードにコピーしました");
            }}
        >
            <ContentCopyIcon />
        </IconButton>
    )
}
