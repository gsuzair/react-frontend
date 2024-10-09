import React from "react";
import UserList from "../components/UserList";

const Users = () => {
    const USERS = [
        {
            id: '1',
            name: 'Uzair',
            places: 3,
            image: 'https://fastly.picsum.photos/id/665/200/200.jpg?hmac=hWcfvzYgHAwJFOUaHZa2oZpOOL7yx_x8Bnhq0dFVQRw',
        }
    ]

    return (
        <UserList items={USERS}/>
    )
}

export default Users;