import { useState } from 'react'
import RoleResultArea from './components/RoleResultArea';
import RoleButton from './components/RoleButton';
import { ToastContainer } from 'react-toastify';

export default function App(){
    const [roleResultVisible, setRoleResultVisible] = useState<boolean>(false);

    return (
        <>
            <RoleButton
                roleResultVisible={roleResultVisible}
                setRoleResultVisible={setRoleResultVisible}
            />
            <RoleResultArea
                roleResultVisible={roleResultVisible}
                setRoleResultVisible={setRoleResultVisible}
            />
            <ToastContainer 
                theme="light"
                closeOnClick
                draggable
                pauseOnHover={false}
                style={{
                    top: "4rem"
                }}
            />
        </>
    )
}
