import React from 'react';
import Friend from '../FRIENDS/Friend';
import { useEffect, useState } from 'react';

const Home = () => {

    const [friends, setFriends] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=> setFriends(data))
  },[])

    return (
        <div >
      {
        friends.map( friend =>  <Friend friend={friend}></Friend>)
      }
      
      
    </div>
    );
};

export default Home;