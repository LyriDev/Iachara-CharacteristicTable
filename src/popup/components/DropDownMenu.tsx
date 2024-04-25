import { useContext } from 'react';
import { styled, alpha } from '@mui/material/styles';
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
            borderRadius: 6,
            marginTop: theme.spacing(1),
            minWidth: 180,
            color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
            boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                theme.palette.primary.main,
                theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

export default function CustomizedMenus({
    focusIndex,
    setFocusIndex,
    anchorEl,
    setAnchorEl
}: {
    focusIndex: number;
    setFocusIndex: React.Dispatch<React.SetStateAction<number>>;
    anchorEl: HTMLElement | null;
    setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>
}) {
    const {
        addTable,
        removeTable,
        swapTable
    } = useContext(CharacteristicTableContext);

    function handleClose(){
        setAnchorEl(null);
    };

    return (
        <StyledMenu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>名前を変更</MenuItem>
            <MenuItem
                onClick={() => {
                    removeTable(focusIndex);
                    handleClose();
                }}
            >
                削除
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
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
