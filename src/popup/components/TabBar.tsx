import { useContext } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { CharacteristicTableContext } from '../providers/CharacteristicTableProvider';
import TabHeader from './TabHeader';

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
            {characteristicTableData.map((tableData) => (
                <TabHeader
                    key={tableData.id}
                    tableName={tableData.tableName}
                    focusIndex={focusIndex}
                    setFocusIndex={setFocusIndex}
                />
            ))}
        </Tabs>
    )
};
