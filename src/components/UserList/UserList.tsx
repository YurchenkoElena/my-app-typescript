import React, {useEffect} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActionsDispatch} from "../../hooks/useActions";

import './UserList.css'

const UserList: React.FC = () => {
    const {users, isLoading, error} = useTypedSelector(state => state.user)
    const {fetchUsers} = useActionsDispatch()


    useEffect(() => {
        fetchUsers()
    }, [])

    if (isLoading) {
        return (
            <div>'Loading...'</div>
        )
    }
    if (error) {
        return (
            <div>{error}</div>
        )
    }

    return (<>
            {users.map(user =>
                <div key={user.id} className={'users-list'}>
                    <div className={'user-name'}>{user.name}</div>
                    <div>{user.email}</div>
                    <div>From: {user.address.city}</div>
                </div>
            )}
        </>
    )
}

export default UserList