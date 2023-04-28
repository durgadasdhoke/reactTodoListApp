import './App.css';
import { useState, useEffect } from 'react';
import {Routes,Route} from 'react-router-dom';
import Sticky from './Components/Sticky';
import Nav from './Components/Nav';
import Contact from './Components/Contact';
import About from './Components/About'


function App() {
  const initialArray  = localStorage.getItem("array")?JSON.parse(localStorage.getItem("array")):[];

  const [title, setTitle]  = useState('');
  const [description,setDescription] = useState('');

  // array to store the notes
  const [array, setArray] = useState(initialArray);

  // deleting a sticky
  const deletesticky = (index)=>{
    // e.preventDefault();
    console.log(index);
    const filteredArray = array.filter((val, i)=>{
      return i!==index;
    });
    setArray(filteredArray);
  };
  // form Submit Funcion starts here
  const formSubmit = (e)=>{
    e.preventDefault();
    if(title === '')
    {
      alert('Please Insert title');
      return;
    }
    
    setArray([...array,{title, description}]);
    setDescription('');
    setTitle('');
  };
  
  useEffect(()=>{
    localStorage.setItem("array",JSON.stringify(array));
  },[array]);


  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/home' element={
          <main >
          <form action="submit" onSubmit={formSubmit}>
              <input type="text" placeholder='Tittle' value={title}  onChange={(e)=>setTitle(e.target.value)}/>
              <textarea type="text" placeholder='Description' value={description}  onChange={(e)=>setDescription(e.target.value)} />
              <button className='add' type='submit'>Add Note</button>
          </form>
              {array.map((item, index)=><Sticky key={index} index={index} title={item.title} description={item.description} deletesticky={deletesticky}/>)}      
        </main>
        }/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
    </>
  );
}

export default App;
