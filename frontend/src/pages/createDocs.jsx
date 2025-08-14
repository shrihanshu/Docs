import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import React, { useState, useRef, useEffect } from 'react';
import JoditEditor from "jodit-pro-react";
import { api_base_url } from '../Helper';

const createDocs = () => {
  let { docsId } = useParams();
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [error, setError] = useState("")
  const [data, setData] = useState("");
  const updateTimeoutRef = useRef(null);

  const updateDoc = () => {
    // Clear any existing timeout
    if (updateTimeoutRef.current) {
      clearTimeout(updateTimeoutRef.current);
    }
    
    fetch(api_base_url + "/uploadDoc", {
      mode: "cors",
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        userId: localStorage.getItem("userId"),
        docId: docsId,
        content: content
      })
    }).then(res => res.json()).then(data => {
      if (data.success === false) {
        setError(data.message)
      }
      else {
        setError("");
      }
    }).catch(err => {
      console.error("Error updating document:", err);
      // Don't set error for network issues to avoid user confusion
    })
  }

  const debouncedUpdate = () => {
    // Clear any existing timeout
    if (updateTimeoutRef.current) {
      clearTimeout(updateTimeoutRef.current);
    }
    
    // Set a new timeout for 1 second
    updateTimeoutRef.current = setTimeout(() => {
      updateDoc();
    }, 1000);
  };

  const handleContentChange = (newContent) => {
    setContent(newContent);
    debouncedUpdate();
  };

  const getContent = () => {
    fetch(api_base_url + "/getDoc", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: localStorage.getItem("userId"),
        docId: docsId,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.success === false) {
          setError(data.message);
        } else {
          setContent(data.doc.content);
        }
      })
      .catch((error) => {
        // Check if it's an abort error
        if (error.name === 'AbortError') {
          console.log('Fetch request was aborted');
          return;
        }
        console.error("Error fetching document:", error);
        setError("An error occurred while fetching the document.");
      });
  };

  useEffect(() => {
    let isMounted = true;
    
    const fetchContent = async () => {
      try {
        if (isMounted) {
          getContent();
        }
      } catch (error) {
        if (isMounted) {
          console.error("Error in useEffect:", error);
        }
      }
    };
    
    fetchContent();
    
    // Cleanup function
    return () => {
      isMounted = false;
      // Clear any pending timeout
      if (updateTimeoutRef.current) {
        clearTimeout(updateTimeoutRef.current);
      }
    };
  }, [])
  

  return (
    <>
      <Navbar />
      <div className='px-[100px] mt-3'>
        <JoditEditor
          ref={editor}
          value={content}
          tabIndex={1} // tabIndex of textarea
          // onChange={(e)=>{
          //   console.log("called")
          //   setContent(e.target.value)
          //   updateDoc();
          // }}
          onChange={handleContentChange}
        />
      </div>
    </>
  )
}

export default createDocs