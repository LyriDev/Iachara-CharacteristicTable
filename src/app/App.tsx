import { useState } from 'react'
import RoleResultArea from './components/RoleResultArea';
import RoleButton from './components/RoleButton';

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
        </>
    )
}
