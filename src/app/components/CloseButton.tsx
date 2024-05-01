import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function RoleButton({
    setRoleResultVisible
}: {
    setRoleResultVisible: React.Dispatch<React.SetStateAction<boolean>>;
}){

    return (
        <IconButton
            disableRipple
            color="warning"
            onClick={(_event: React.MouseEvent<HTMLElement>) => {
                // 特徴表結果を非表示にする
                setRoleResultVisible(false);
            }}
        >
            <CloseIcon/>
        </IconButton>
    )
}
