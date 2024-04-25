import { useContext } from 'react'
import Tabs from '@mui/material/Tabs';
import { CharacteristicTableContext } from '../providers/CharacteristicTableProvider';
import TabHeader from './TabHeader';
import AddTabButton from './AddTabButton';

export default function TabBar({
    focusIndex,
    setFocusIndex
}: {
    focusIndex: number;
    setFocusIndex: React.Dispatch<React.SetStateAction<number>>;
}){
    const {
        characteristicTableData
    } = useContext(CharacteristicTableContext);

    return (
        <Tabs
            value={focusIndex}
            onChange={(_event: React.SyntheticEvent, newValue: number) => setFocusIndex(newValue)}
        >
            {characteristicTableData.map((tableData, index) => (
                <TabHeader
                    key={tableData.id}
                    tableName={tableData.tableName}
                    index={index}
                    focusIndex={focusIndex}
                    setFocusIndex={setFocusIndex}
                />
            ))}
            <AddTabButton
                setFocusIndex={setFocusIndex}
            />
        </Tabs>
    )
};
