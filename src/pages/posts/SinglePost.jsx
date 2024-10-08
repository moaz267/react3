import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function SinglePost() {
    const { id, title, category } = useParams()
    const [singlePost,setSinglePost] =useState({})
    const fetchSinglePostAPI =async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const finalRes = await res.json()
        setSinglePost(finalRes)        
    }
    useEffect(() => {
            fetchSinglePostAPI()
    },[])
  return (
      <div className="singlePost">
          <h2>{singlePost.title}</h2>
          <p>{singlePost.body}</p>
      </div>
  );
}
