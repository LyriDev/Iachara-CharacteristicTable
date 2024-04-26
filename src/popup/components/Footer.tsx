import { useContext } from 'react'
import { CharacteristicTableContext } from '../providers/CharacteristicTableProvider';

export default function Footer(){
    const {
        characteristicTableData
    } = useContext(CharacteristicTableContext);

    return (
        <div
            style={{
                position: "absolute",
                bottom: "1rem",
                right: "1rem"
            }}
        >
            hoge
        </div>
    )
};
