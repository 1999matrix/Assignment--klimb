import { useEffect, useState } from 'react'
import "./App.css"
import axios from 'axios';

function App() {
  const [file, setFile] = useState()
  const upload = ()=>{
    const formData = new FormData()
    formData.append('file' , file)
    axios.post('http://localhost:3001/importUser' , formData)
    .then(
       res => {
        console.log("Success")
        let q = document.getElementById('inp');
        q.innerHTML= '<h3>Thank You!</h3> <h3>File Uploaded Successfully</h3>'
        q.style.color = "green"
        let p = document.getElementById('sub');
        p.remove();
      
       }
    )
    .catch(er => console.log(er))
  }
  

  return (
    <>
    <div className='nav'>
      Add from Excel
    </div>
     <div className='cnt'>
     <div>
     Add to Database
     </div>
     <div className='upld'>
     <div id='inp'>
      <input type='file' name='file' onChange={(e) => setFile(e.target.files[0])}/>
      </div>
      <button type='button' onClick={upload} id='sub'>Submit</button>
     </div>
    </div>
    
    </>
  )
}

export default App
