import React, { useState, useEffect } from "react";
import "./Feed.css";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import InputOption from "./InputOption";
import Post from "./Post";
import { Avatar } from "@mui/material";
import {
  collection,
  query,
  orderBy,
  getDocs,
  serverTimestamp,
  addDoc,
  onSnapshot,
} from "firebase/firestore";

import { db } from "./firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";
import FlipMove from "react-flip-move";

const defaultPosts = [
  {
    id: "1",
    name: "John",
    message: "For God so loved the world",
    description: "New user",
  },
];

function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch initial posts using getDocs (will be replaced by onSnapshot)
    const fetchPosts = async () => {
      const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);
      const postsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postsData);
    };

    // Call fetchPosts once to fetch initial data
    fetchPosts();

    // Set up real-time listener using onSnapshot
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const getPosts = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postsData);
    });

    // Clean up the listener when the component unmounts
    return () => {
      getPosts();
    };
  }, []);

  // [NOTE: for extra revision(master)] The useEffect code fetches the initial data from the Firestore database using getDocs, sets up a real-time listener using onSnapshot to receive updates to the 'posts' collection, and keeps the posts state up-to-date with the latest data in real-time. The fetchPosts function is used to handle both the initial data fetching and updating the state, while the onSnapshot callback is responsible for handling real-time updates.

  const sendPost = async (e) => {
    e.preventDefault();

    if (!input.trim()) {
      return; // Avoid adding empty posts
    }

    await addDoc(collection(db, "posts"), {
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Avatar src={user.photoUrl}>{user.email[0]}</Avatar>
          <form onSubmit={sendPost}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Start a post"
            />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#7085f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#7FC15E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#E7A33E"
          />
        </div>
      </div>

      {/* Posts */}
      <FlipMove>
        {posts.map(({ id, name, description, message, photoUrl }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>

      {defaultPosts.map(({ id, name, message, description, photoUrl }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
