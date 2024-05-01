import { useContext } from 'react';
import { CharacteristicTableContext } from '../providers/CharacteristicTableProvider';

export default function NumberView(){
    const {
        parentIndex,
        childIndex
    } = useContext(CharacteristicTableContext);

    return (
        <div
            style={{
                textAlign: "center",
                width: "100%",
                padding: "calc(-1px + 0.5rem) 1em",
                borderRadius: "4px",
                color: "white",
                backgroundColor: "#202328"
            }}
        >
            {`${parentIndex} ― ${childIndex}`}
        </div>
    )
}
