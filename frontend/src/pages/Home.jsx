import React, { useEffect, useState, useRef } from 'react'
import Navbar from '../components/Navbar'
import { BsPlusLg } from "react-icons/bs";
import Docs from '../components/Docs';
import { MdOutlineTitle } from "react-icons/md";
import { api_base_url } from '../Helper';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [isCreateModelShow, setIsCreateModelShow] = useState(false);

  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const titleInputRef = useRef(null);

  const navigate = useNavigate();

  const createDoc = () => {
    if(title === "") {
      setError("Please enter title");
    }
    else{
      fetch(api_base_url + "/createDoc",{
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          docName: title,
          userId: localStorage.getItem("userId")
        })
      }).then(res=>res.json()).then(data => {
        if(data.success) {
          handleCloseModal();
          navigate(`/createDocs/${data.docId}`)
        }
        else{
          setError(data.message);
        }
      }).catch(err => {
        console.error("Error creating document:", err);
        setError("An error occurred while creating the document");
      })
    }
  }

  const getData = () => {
    setLoading(true);
    fetch(api_base_url + "/getAllDocs",{
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: localStorage.getItem("userId")
      })
    }).then(res=>res.json()).then(data => {
      if (data.success) {
        setData(data.docs);
      } else {
        console.error("Error fetching documents:", data.message);
        setData([]);
      }
    }).catch(err => {
      console.error("Error fetching documents:", err);
      setData([]);
    }).finally(() => {
      setLoading(false);
    })
  };

  useEffect(() => {
    getData();
  }, [])

  // Focus the input when modal opens
  useEffect(() => {
    if (isCreateModelShow && titleInputRef.current) {
      // Use setTimeout to ensure the DOM is fully rendered
      setTimeout(() => {
        titleInputRef.current?.focus();
      }, 100);
    }
  }, [isCreateModelShow]);

  const handleCreateButtonClick = () => {
    setIsCreateModelShow(true);
    setTitle(""); // Clear title when opening modal
    setError(""); // Clear any previous errors
  };

  const handleCloseModal = () => {
    setIsCreateModelShow(false);
    setTitle("");
    setError("");
  };


  return (
    <>
      <Navbar />
      <div className="flex items-center justify-between px-[100px]">
        <h3 className='mt-7 mb-3 text-3xl'>All Documents</h3>
        <button className="btnBlue" onClick={handleCreateButtonClick}><i><BsPlusLg /></i> Create New Document</button>
      </div>

      <div className='allDocs px-[100px] mt-4'>
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <p className="text-gray-500">Loading documents...</p>
          </div>
        ) : data && data.length > 0 ? (
          data.map((el, index) => (
            <Docs key={el._id || index} docs={el} docID={`doc-${index + 1}`} />
          ))
        ) : (
          <div className="flex items-center justify-center py-8">
            <p className="text-gray-500">No documents found. Create your first document!</p>
          </div>
        )}
      </div>


      {
        isCreateModelShow ?
          <>
            <div className="createDocsModelCon fixed top-0 left-0 right-0 bottom-0 bg-[rgb(0,0,0,.3)] w-screen h-screen flex flex-col items-center justify-center">
              <div className="createDocsModel p-[15px] bg-[#fff] rounded-lg w-[30vw] h-[26.5vh]">
                <h3 className='text-[20px]'>Create New Document</h3>

                <div className='inputCon mt-3'>
                  <p className=' text-[14px] text-[#808080]'>Title</p>
                  <div className="inputBox w-[100%]">
                    <i><MdOutlineTitle /></i>
                    <input onChange={(e)=>{setTitle(e.target.value)}} value={title} type="text" placeholder='Title' id='title' name='title' required ref={titleInputRef} />
                  </div>
                  {error && <p className='text-red-500 text-[14px] mt-2'>{error}</p>}
                </div>

                <div className="flex -mt-2 items-center gap-2 justify-between w-full">
                  <button onClick={createDoc} className='btnBlue !min-w-[49%]'>Create New Document</button>
                  <button onClick={handleCloseModal} className='p-[10px] bg-[#D1D5DB] text-black rounded-lg border-0 cursor-pointer min-w-[49%]'>Cancel</button>
                </div>
              </div>
            </div>
          </> : ""
      }

      
    </>
  )
}

export default Home