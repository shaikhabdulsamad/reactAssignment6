import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { auth, signOut, onAuthStateChanged, ref, set, db, collection, addDoc, firestore, doc, setDoc, onSnapshot, getDocs } from '../config/Firebase';

function Request() {
  

const [info , setInfo] = useState([]);
  
// Start the fetch operation as soon as
// the page loads

useEffect(() => {

  window.addEventListener('load', () => {
      Fetchdata();
    });
}, [])

// Fetch the required data using the get() method
const Fetchdata = ()=>{
    firestore.collection("users").get().then((querySnapshot) => {
         
        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach(element => {
            let data = element.data();
            setInfo(arr => [...arr , data]);
              console.log(data)
        });
    })
}
  

return (
  <div>
                <Header />

                
                 <table className="table table-hover container mt-5">
           <thead>
             <tr>
               <th scope="col">#</th>
               <th scope="col">Name</th>
               <th scope="col">Father Name</th>
               <th scope="col">CNIC#</th>
               <th scope="col">Request for</th>
             </tr>
           </thead>
           <tbody>

             <tr>
               <th scope="row">1</th>
               <td>Mark</td>
               <td>Otto</td>
               <td>@mdo</td>
             </tr>
             <tr>
               <th scope="row">2</th>
               <td>Jacob</td>
               <td>Thornton</td>
               <td>@fat</td>
             </tr>
             <tr>
               <th scope="row">3</th>
               <td colSpan={2}>Larry the Bird</td>
               <td>@twitter</td>
             </tr>
           </tbody>
        </table>
  
         </div>
);
}



export default Request
