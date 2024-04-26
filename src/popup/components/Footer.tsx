import SaveButton from './SaveButton';

export default function Footer(){
    return (
        <div
            style={{
                position: "fixed",
                marginRight: "2rem",
                padding: "0.5rem",
                bottom: "0rem",
                right: "0rem"
            }}
        >
            <SaveButton/>
        </div>
    )
};
