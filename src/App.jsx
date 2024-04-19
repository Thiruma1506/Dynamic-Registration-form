import { useState } from 'react'
import './App.css'

function App() {

const[user,setUser]=useState({
  name:"Thirumavalavan",
  age:22,
  gender:"Male",
  isMarried:false,
  nationality:"India",
});

function changeHandler(e){
const name= e.target.name;
const value=e.target.type==="checkbox"?e.target.checked:e.target.value;
setUser({...user,[name]:value})
};


  return (
    <>
     <table>
      <tr>
        <th>Name</th>
        <td>{user.name}</td>
      </tr>

      <tr>
        <th>Age</th>
        <td>{user.age}</td>
      </tr>

      <tr>
        <th>Gender</th>
        <td>{user.gender}</td>
      </tr>

      <tr>
        <th>Marital status</th>
        <td>{user.isMarried ?"Married":"Not Married"}</td>
      </tr>

      <tr>
        <th>Nationality</th>
        <td>{user.nationality}</td>
      </tr>
     </table>

<div className='inputform'>
     <form >
      <input type="text" placeholder='Full Name' value={user.name} onChange={changeHandler} name='name'/>
      
      <input type="number" placeholder='Age' value={user.age} onChange={changeHandler} name='age'/>
      
      <div className='gender'>
        <label htmlFor="male">
          <input type="radio" name="gender" id='male' checked={user.gender=='Male'} value="Male" onChange={changeHandler}/>
          Male
        </label>

        <label htmlFor="female">
          <input type="radio" name="gender" id='female' checked={user.gender=='Female'} value="Female" onChange={changeHandler}/>
          Female
        </label>
      </div>
     
     <label htmlFor="isMarried"> 
       <input type="checkbox" id='isMarried' checked={user.isMarried} onChange={changeHandler} name='isMarried'/>
       Is Married
     </label>

      <label htmlFor="Nationality">
      <select name="nationality" onChange={changeHandler} value={user.nationality}>
        <option value="USA">USA</option>
        <option value="India">India</option>
        <option value="Germany">Germany</option>
        <option value="UK">UK</option>
        <option value="Russia">Russia</option>
        <option value="Argentina">Argentina</option>
        <option value="Portugal">Portugal</option>
      </select>
      </label>  

     </form>
</div>
    </>
  )
}

export default App
