import { useState } from 'react'
import Tab from '@mui/material/Tab';
import DropDownMenu from "./DropDownMenu"
import TabTitle from './TabTitle';

export default function TabHeader({
    index,
    focusIndex,
    setFocusIndex
}: {
    index: number;
    focusIndex: number;
    setFocusIndex: React.Dispatch<React.SetStateAction<number>>;
}){
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [isEditing, setIsEditing] = useState<boolean>(false);

    return (
        <>
            <Tab
                disableRipple={isEditing}
                label={
                    <TabTitle
                        index={index}
                        focusIndex={focusIndex}
                        isEditing={isEditing}
                        setIsEditing={setIsEditing}
                    />
                }
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                    if(!isEditing && index === focusIndex){
                        // タブ名編集中でないかつフォーカス中のタブをクリックした場合、ドロップダウンメニューを表示する
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
                setIsEditing={setIsEditing}
            />
        </>
    )
};
