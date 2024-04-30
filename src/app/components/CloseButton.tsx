import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

export default function RoleButton({
    setRoleResultVisible
}: {
    setRoleResultVisible: React.Dispatch<React.SetStateAction<boolean>>;
}){

    return (
        <Button
            disableElevation
            disableRipple
            variant="contained"
            color="warning"
            style={{
                padding: 0,
                width: "fit-content",
                border: "1px #ed544f solid"
            }}
            onClick={(_event: React.MouseEvent<HTMLElement>) => {
                // 特徴表結果を非表示にする
                setRoleResultVisible(false);
            }}
        >
            <CloseIcon/>
        </Button>
    )
}
