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
            variant="scrollable"
            scrollButtons="auto"
            onChange={(_event: React.SyntheticEvent, newValue: number) => setFocusIndex(newValue)}
            sx={{ boxShadow: 3 }}
        >
            {characteristicTableData.map((tableData, index) => (
                <TabHeader
                    key={tableData.id}
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
