import ReactDOM from 'react-dom';

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
                        backgroundColor: "red"
                    }}
                >
                    <button onClick={() => setRoleResultVisible(false)}>x</button>
                    hoge
                </div>
            ),
            portal
        )
    );
}
