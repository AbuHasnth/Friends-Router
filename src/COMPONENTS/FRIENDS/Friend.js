import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../FRIENDS/Friend.css'

const Friend = (props) => {
    
    const {name, email, id}= props.friend;

    const history= useHistory()

      const handleClick = (friendId) => {
          const url = `/friend/${friendId}`;
          history.push(url);
      }
      
 
    return (
        <div className='friends-Zone'>
            <h1> {name}</h1>
            <h2>{email}</h2>
            <h3>id<Link to={`/friend/${id}`}>Show details of {id}</Link></h3>
            <button onClick={()=>handleClick(id)}>Click Me</button>
            
        </div>
    );
};


export default Friend;