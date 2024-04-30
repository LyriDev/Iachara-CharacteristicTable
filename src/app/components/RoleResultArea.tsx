import ReactDOM from 'react-dom';
import RoleResult from './RoleResult';
import NumberView from './NumberView';
import CloseButton from './CloseButton';
import CopyButton from './CopyButton';

export default function RoleResultArea({
    roleResultVisible,
    setRoleResultVisible
}: {
    roleResultVisible: boolean;
    setRoleResultVisible: React.Dispatch<React.SetStateAction<boolean>>;
}){
    const portal: HTMLElement = document.getElementById("portal-root-characteristicTable") || document.createElement("div")

    return (
        ReactDOM.createPortal(
            roleResultVisible && (
                <div
                    style={{
                        padding: "8px",
                        backgroundColor: "white"
                    }}
                >
                    <RoleResult/>
                    <NumberView/>
                    <CopyButton/>
                    <CloseButton
                        setRoleResultVisible={setRoleResultVisible}
                    />
                </div>
            ),
            portal
        )
    );
}
