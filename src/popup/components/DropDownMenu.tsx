import { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { CharacteristicTableContext } from '../providers/CharacteristicTableProvider';

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {

    }
}));

export default function CustomizedMenus({
    focusIndex,
    setFocusIndex,
    anchorEl,
    setAnchorEl,
    setIsEditing
}: {
    focusIndex: number;
    setFocusIndex: React.Dispatch<React.SetStateAction<number>>;
    anchorEl: HTMLElement | null;
    setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const {
        removeTable,
        swapTable
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
            <MenuItem
                onClick={() => {
                    handleClose().then(() => {
                        // 現在タブをタブ名編集中にする
                        setIsEditing(true);
                    });
                }}
            >
                名前を変更
            </MenuItem>
            <MenuItem
                onClick={() => {
                    removeTable(focusIndex);
                    handleClose();
                }}
            >
                削除
            </MenuItem>
            <Divider sx={{ my: 0.5, backgroundColor: "rgba(255, 255, 255, 0.12)" }} />
            <MenuItem
                onClick={() => {
                    swapTable(focusIndex, -1);
                    setFocusIndex((prev) => prev - 1);
                    handleClose();
                }}
            >
                左に移動
            </MenuItem>
            <MenuItem
                onClick={() => {
                    swapTable(focusIndex, 1);
                    setFocusIndex((prev) => prev + 1);
                    handleClose();
                }}
            >
                右に移動
            </MenuItem>
        </StyledMenu>
    );
}
