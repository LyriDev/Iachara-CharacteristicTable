import ReactDOM from 'react-dom';

export default function RoleResultArea() {
    const portal: HTMLElement = document.getElementById("portal-root-characteristicTable") || document.createElement("div")
    console.log({portal})

    return (
        ReactDOM.createPortal(
            true && (
                <div
                    style={{
                        backgroundColor: "red"
                }}
                >
                    hoge
                </div>
            ),
            portal
        )
    );
}
