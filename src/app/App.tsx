import { useState } from 'react'
import RoleResultArea from './components/RoleResultArea';
import RoleButton from './components/RoleButton';

export default function App(){
    const [roleResultVisible, setRoleResultVisible] = useState<boolean>(false);

    // 特徴表欄を表示し、特徴表をロールする関数
    function roleCharacteristicTable(){
        setRoleResultVisible(true);
    }

    return (
        <>
            <RoleButton
                roleCharacteristicTable={roleCharacteristicTable}
            />
            <RoleResultArea
                roleResultVisible={roleResultVisible}
                setRoleResultVisible={setRoleResultVisible}
            />
        </>
    )
}
