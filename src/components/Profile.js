import React from 'react'
import './profile.css' 
function Profile() {
    const arr=[
        {id:1,name:"Indhu Reddy",rating:5,photo:'./Asserts/indhu1.jpg',age:22,address:"gajwel",habits:"loving to travell around the world",number:"8096394352"},
        {id:2,name:"Ashok",rating:4,photo:'./Asserts/ashok.jpg',age:23,address:"gajwel",habits:"loving to travell around the world",number:"8096394352"},
        {id:3,name:"Ajay",rating:2,photo:'./Asserts/ajay.jpg',age:23,address:"gajwel",habits:"loving to travell around the world",number:"8096394352"},
        {id:4,name:"Hari",rating:5,photo:'./Asserts/hari.jpg',age:23,address:"gajwel",habits:"loving to travell around the world",number:"8096394352"},
        {id:5,name:"Vinay",rating:4,photo:'./Asserts/vinay.jpg',age:23,address:"gajwel",habits:"loving to travell around the world",number:"8096394352"},
        {id:6,name:"sai",rating:3,photo:'./Asserts/wedding.jpg',age:23,address:"gajwel",habits:"loving to travell around the world",number:"8096394352"}
    ]
  return (
    <div>
    {arr.map((item)=>{
      return (
        <div className='mainprofile'>
        <div className='leftprofile'>
            <div className='profilephoto'>
                <img src={item.photo}></img>
            </div>
            <div className='profilerating'>
               <span>
               {Array(item.rating).fill('⭐').map((star, index) => (
                                    <span key={index}>{star}</span>
                                ))}
               </span>
            </div>

        </div>
        <div className='rightprofile'>
           <div className='profilename'>
                <span>{item.name}</span>
           </div>
           <div className='profilenumber'>
                 <span>{item.number}</span>
           </div>
           <div className='profileage'>
                  <span>{item.age}</span>
           </div>
           <div className='profilehabits'>
                <span>{item.habits}</span>
           </div>
           <div className='profilebuttons'>
               <div className='subbutton'>
                 <button>Remove</button>
                 <button>Intersted</button>
               </div>
           </div>
        </div>
    </div>
      )
    })}
    </div>
  )
}

export default Profile