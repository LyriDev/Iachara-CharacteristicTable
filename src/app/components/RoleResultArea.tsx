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
                        paddingTop: "0px",
                        backgroundColor: "white"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: "0.5rem"
                        }}
                    >
                        <RoleResult/>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.5rem"
                            }}
                        >
                            <NumberView/>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: "0.5rem"
                                }}
                            >
                                <CopyButton/>
                                <CloseButton
                                    setRoleResultVisible={setRoleResultVisible}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ),
            portal
        )
    );
}
