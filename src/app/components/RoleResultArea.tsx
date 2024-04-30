import { useContext } from 'react';
import ReactDOM from 'react-dom';
import { CharacteristicTableContext } from '../providers/CharacteristicTableProvider';

export default function RoleResultArea({
    roleResultVisible,
    setRoleResultVisible
}: {
    roleResultVisible: boolean;
    setRoleResultVisible: React.Dispatch<React.SetStateAction<boolean>>;
}){
    const { characteristicTableData } = useContext(CharacteristicTableContext);

    const portal: HTMLElement = document.getElementById("portal-root-characteristicTable") || document.createElement("div")

    return (
        ReactDOM.createPortal(
            roleResultVisible && (
                <div
                    style={{
                        backgroundColor: "red"
                    }}
                >
                    <button onClick={() => setRoleResultVisible(false)}>x</button>
                    {characteristicTableData[0].tableData[0][0]}
                </div>
            ),
            portal
        )
    );
}
