import { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { CharacteristicTableContext } from '../providers/CharacteristicTableProvider';

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        color="primary"
        elevation={0}
        anchorOrigin={{
            vertical: "top",
            horizontal: "right"
        }}
        transformOrigin={{
            vertical: "bottom",
            horizontal: "right"
        }}
        {...props}
    />
))(({ /* theme */ }) => ({
    '& .MuiPaper-root': {

    }
}));

export default function DropDownMenu({
    anchorEl,
    setAnchorEl
}: {
    anchorEl: HTMLElement | null;
    setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}) {
    const {
        characteristicTableData,
        setTableIndex
    } = useContext(CharacteristicTableContext);

    async function handleClose(){
        setAnchorEl(null);
    };

    return (
        <StyledMenu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            {characteristicTableData.map((tableData, index) => (
                <MenuItem
                    disableRipple
                    onClick={() => {
                        handleClose().then(() => {
                            // 指定した特徴表を選択状態にする
                            setTableIndex(index);
                        });
                    }}
                >
                    {tableData.tableName}
                </MenuItem>
            ))}
        </StyledMenu>
    );
}
