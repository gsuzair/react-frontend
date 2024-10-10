import React from "react";
import './UserList.css'
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

const UserList = props => {
    if(props.items.length === 0){
        return (
            <Card>
                <h1>No users found</h1>
            </Card>
        )
    }

    return (
        <ul className="user-list">
            {props.items.map(user => (
                <UserItem 
                    key={user.id}  
                    id={user.id} 
                    image ={user.image} 
                    name={user.name}
                    placeCount={user.places}
                />
            ))}
        </ul>
    )
}

export default UserList;