import { useContext } from 'react';
import TextField from '@mui/material/TextField';
import { CharacteristicTableContext } from '../providers/CharacteristicTableProvider';
import { defaultTableName } from '../../utils/characteristicTable';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function TabTitle({
    index,
    focusIndex,
    isEditing,
    setIsEditing
}: {
    index: number;
    focusIndex: number;
    isEditing: boolean;
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}){
    const {
        characteristicTableData,
        changeTabName
    } = useContext(CharacteristicTableContext);

    return (
        isEditing ? (
            <TextField
                value={characteristicTableData[index].tableName}
                color="info"
                autoFocus
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    changeTabName(index, event.target.value);
                }}
                onBlur={() => {
                    // タブ名編集中のタブ以外がクリックされた場合、タブ名編集モードを終了する
                    setIsEditing(false);
                    console.log("hoge")

                    // 特長表名に不正な値が設定されようとしたとき、代わりに「特徴表」というタブ名を設定する
                    if(characteristicTableData[index].tableName.trim() === ""){
                        changeTabName(index, defaultTableName);
                    }
                }}
                onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
                    if (event.key === 'Enter') { // タブ名編集中にEnterキーが押されたら、
                        const inputElement:HTMLInputElement = event.target as HTMLInputElement;
                        inputElement.blur(); // input要素のフォーカスを解除する
                    }
                }}
            />
        ) : (
            <span
            style={{
                position: "relative",
                paddingRight: ((focusIndex === index) ? "24px" : ""),
            }}>
                <span>
                    {characteristicTableData[index].tableName}
                </span>
                {(focusIndex === index) && (
                    <span
                    style={{
                        position: "absolute",
                        marginTop: "-3px",
                        right: "-6px",
                    }}
                    >
                        <ArrowDropDownIcon/>
                    </span>
                )}
            </span>
        )
    )
};
