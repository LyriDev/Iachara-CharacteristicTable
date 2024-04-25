import { useState, useContext } from 'react'
import Tab from '@mui/material/Tab';
import DropDownMenu from "./DropDownMenu"

export default function TabHeader({
    tableName,
    index,
    focusIndex,
    setFocusIndex
}: {
    tableName: string;
    index: number;
    focusIndex: number;
    setFocusIndex: React.Dispatch<React.SetStateAction<number>>;
}){
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    return (
        <>
            <Tab
                label={tableName}
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                    if(index === focusIndex){
                        // フォーカス中のタブをクリックした場合、ドロップダウンメニューを表示する
                        setAnchorEl(event.currentTarget);
                    }else{
                        // フォーカス中のタブ以外をクリックした場合、そのタブに遷移する
                        setFocusIndex(index);
                    };
                }}
            />
            <DropDownMenu
                focusIndex={focusIndex}
                setFocusIndex={setFocusIndex}
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
            />
        </>
    )
};
