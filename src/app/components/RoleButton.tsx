import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function RoleButton({
    roleCharacteristicTable
}: {
    roleCharacteristicTable(): void;
}){
    return (
        <ButtonGroup
            disableRipple
            variant="contained"
        >
            <Button
                style={{
                    textWrap: "nowrap",
                    border: "1px solid rgb(112, 112, 112)"
                }}
                onClick={roleCharacteristicTable}
            >
                特徴表
            </Button>
            <Button
                style={{
                    padding: 0,
                    border: "1px solid rgb(112, 112, 112)",
                    borderLeft: 0
                }}
            >
                <KeyboardArrowDownIcon/>
            </Button>
        </ButtonGroup>
    )
}
