import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';

const FriendDetail = () => {
    const [friends, setFriends] = useState({});
    const {friendId}= useParams();

    useEffect(()=>{
        const url= `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data=> setFriends(data))
      },[])

      
    
    return (
        <div>
            <h1>This is friend detail{friendId}</h1>
            <h1>This is {friends.name}</h1>
            <h3>Email : {friends.email}</h3>
            <h4>Email : {friends.email}</h4>

            
        </div>
    );
};

export default FriendDetail;