import React from 'react'
import './View.css'
import thumbnail1 from '../Assets/thumbnail1.png'
import thumbnail2 from '../Assets/thumbnail2.png'
import thumbnail3 from '../Assets/thumbnail3.png'
import thumbnail4 from '../Assets/thumbnail4.png'
import thumbnail5 from '../Assets/thumbnail5.png'
import thumbnail6 from '../Assets/thumbnail6.png'
import thumbnail7 from '../Assets/thumbnail7.png'
import thumbnail8 from '../Assets/thumbnail8.png'


const View = () => {
  console.log("12")

  const thumbnail = [
    {image: thumbnail1 , title:"Best channel to learn coding that helps u to be a web dev" , channel: "Greatstack" , bio : "15k viewa $bull; 2 days ago" ,},
    {image: thumbnail2 , title:"Best channel to learn coding that helps u to be a web dev" , channel: "Greatstack" , bio : "15k viewa $bull; 2 days ago" ,},
    {image: thumbnail3 , title:"Best channel to learn coding that helps u to be a web dev" , channel: "Greatstack" , bio : "15k viewa $bull; 2 days ago" ,},
    {image: thumbnail4 , title:"Best channel to learn coding that helps u to be a web dev" , channel: "Greatstack" , bio : "15k viewa $bull; 2 days ago" ,},
    {image: thumbnail5 , title:"Best channel to learn coding that helps u to be a web dev" , channel: "Greatstack" , bio : "15k viewa $bull; 2 days ago" ,},
    {image: thumbnail6 , title:"Best channel to learn coding that helps u to be a web dev" , channel: "Greatstack" , bio : "15k viewa $bull; 2 days ago" ,},
    {image: thumbnail7 , title:"Best channel to learn coding that helps u to be a web dev" , channel: "Greatstack" , bio : "15k viewa $bull; 2 days ago" ,},
    {image: thumbnail8 , title:"Best channel to learn coding that helps u to be a web dev" , channel: "Greatstack" , bio : "15k viewa $bull; 2 days ago" ,},
  ]

  return (
    <div className='feed'>
       {thumbnail.map((item,index)=>
         <div key={index} className='card'>
         <img src={item.image} alt=''/>
         <h2>{item.title}</h2>
         <h3>{item.channel} </h3>
         <p>{item.bio}</p>
       </div>
      )}
    </div>
  )
}

export default View