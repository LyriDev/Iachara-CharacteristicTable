import { useState, useContext } from 'react'
import Tab from '@mui/material/Tab';
import DropDownMenu from "./DropDownMenu"
import { CharacteristicTableContext } from '../providers/CharacteristicTableProvider';

export default function TabHeader({
    tableName,
    focusIndex,
    setFocusIndex
}: {
    tableName: string;
    focusIndex: number;
    setFocusIndex: React.Dispatch<React.SetStateAction<number>>;
}){
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    // const {
    //     characteristicTableData
    // } = useContext(CharacteristicTableContext);

    return (
        <>
            <Tab
                label={tableName}
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                    setAnchorEl(event.currentTarget);
                }}
            />
            <DropDownMenu
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
            />
        </>
    )
};
