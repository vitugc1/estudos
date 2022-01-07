import React, { useCallback, useEffect, useState } from 'react';
import { useMemo } from 'react';

type User = {
    name: string;
    login: string;
    avatar_url: string;
}

export const HooksList: React.FC = () => {
    const [ users, setUsers ] = useState<[User]>();

    const names = useMemo(() => users?.map(user => user.name).join(", ") || "", [users]);

    const greeting = useCallback(() => {
        alert(`Hello ${names}`);
    }, [names])
    
    return (
        <div>
            {users?.map(user => user.name)}
        </div>
    )
}


