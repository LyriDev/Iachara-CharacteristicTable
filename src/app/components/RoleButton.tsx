import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useContext, useState } from 'react';
import DropDownMenu from './DropDownMenu';
import { CharacteristicTableContext } from '../providers/CharacteristicTableProvider';

export default function RoleButton({
    roleResultVisible,
    setRoleResultVisible
}: {
    roleResultVisible: boolean;
    setRoleResultVisible: React.Dispatch<React.SetStateAction<boolean>>;
}){
    const {
        characteristicTableData,
        roleCharacteristicTable,
        tableIndex
    } = useContext(CharacteristicTableContext);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    return (
        <>
            <ButtonGroup
                disableRipple
                disableElevation
                variant="contained"
            >
                <Button
                    style={{
                        textWrap: "nowrap",
                        border: "1px solid rgb(112, 112, 112)"
                    }}
                    onClick={() => {
                        if(roleResultVisible){
                            // 特徴表欄表示済みの場合、特徴表をロールする
                            roleCharacteristicTable();
                        }else{
                            // 特徴表欄が非表示の場合、特徴表欄を表示する
                            setRoleResultVisible(true);
                        }
                    }}
                >
                    {characteristicTableData[tableIndex].tableName}
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
