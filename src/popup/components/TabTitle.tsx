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
        changeTableName
    } = useContext(CharacteristicTableContext);

    return (
        isEditing ? (
            <TextField
                value={characteristicTableData[index].tableName}
                color="info"
                autoFocus
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    changeTableName(index, event.target.value);
                }}
                onBlur={() => {
                    // タブ名編集中のタブ以外がクリックされた場合、タブ名編集モードを終了する
                    setIsEditing(false);

                    // 特長表名に不正な値が設定されようとしたとき、代わりに「特徴表」というタブ名を設定する
                    if(characteristicTableData[index].tableName.trim() === ""){
                        changeTableName(index, defaultTableName);
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
                    paddingRight: ((focusIndex === index) ? "20px" : ""),
                }}
            >
                <span
                    style={{
                        color: (focusIndex === index) ? "#fff" : "#a7a7a7"
                    }}
                >
                    {characteristicTableData[index].tableName}
                </span>
                {(focusIndex === index) && (
                    <span
                        style={{
                            position: "absolute",
                            marginTop: "-3px",
                            right: "",
                        }}
                    >
                        <ArrowDropDownIcon/>
                    </span>
                )}
            </span>
        )
    )
};
