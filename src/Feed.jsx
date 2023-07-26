import React, { useState, useEffect } from 'react';
import './Feed.css';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from './InputOption';
import Post from './Post';
import { Avatar } from '@mui/material';
import { addDoc, collection, getDocs, serverTimestamp } from "firebase/firestore";
import { db } from './firebase';

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

 useEffect(()=> {

  getDocs(collection (db, 'posts')).then(snapShot => (
         setPosts(snapShot.docs.map(doc => (
           {
             id: doc.id,
             data: doc.data(),
           }
          )))
    ))

    
      
          
        
     
 }, []);  
  
 
    const sendPost = async (e) => {
      // disables the system from refreshing by default
        e.preventDefault();

        await addDoc(collection(db, "posts"), {
          name: 'Emmanuel Ogbuji', 
          description : 'This finally works',
          message: input, 
          photoUrl: '',
          timestamp: serverTimestamp(),
        });
        

          setInput("");
          
    };

  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <Avatar />
                <form>
                    <input type="text" value={input} onChange={e=> setInput(e.target.value) } placeholder='Start a post'/>
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
              <InputOption Icon={ ImageIcon } title='Photo' color='#7085f9'/>
              <InputOption Icon={ SubscriptionsIcon } title='Video' color='#E7A33E'/>
              <InputOption Icon={ EventNoteIcon } title='Event' color='#C0CBCD'/>
              <InputOption 
              Icon={ CalendarViewDayIcon } 
              title="Write article" 
              color='#7FC15E'/>
            </div>
        </div>

        {/* Posts */}

        {posts.map(({id, data: 
          {
            name, description, message
          }
      
        })=>(
          <Post 
          key={id}
          name={name}
          description={description}
          message={message}
          />

          ))}

         
          
          <Post name='John' message='For God so loved the world' description="New user"/>
    </div>
  )
}

export default Feed