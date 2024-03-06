import React, { useState } from 'react'
import LaptopsList from './LaptopsList'
import MainHeading from './MainHeading.js'
import Button from './Button.js';
function TopProducts() {
  const [counter,setCounter] = useState(3);
    function handleCounter(){
      if(counter <=30){
        setCounter((prev) => prev + 3)
      }
      console.log(counter)
    }
  return (
    <div className='topProducts container' style={{marginTop:"150px"}}>
    <MainHeading>Top Products</MainHeading>
    <LaptopsList counter={counter}/>
    <div className='text-center mt-4'>
    <Button onClick={()=>handleCounter()} type="primaryy">Load More</Button>
    </div>
    
    </div>
  )
}

export default TopProducts