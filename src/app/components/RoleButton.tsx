import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import DropDownMenu from './DropDownMenu';

export default function RoleButton({
    roleCharacteristicTable
}: {
    roleCharacteristicTable(): void;
}){
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    return (
        <>
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
                    onClick={(event: React.MouseEvent<HTMLElement>) => {
                        // ドロップダウンメニューを表示する
                        setAnchorEl(event.currentTarget);
                    }}
                >
                    <KeyboardArrowDownIcon/>
                </Button>
            </ButtonGroup>
            <DropDownMenu
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
            />
        </>
    )
}
