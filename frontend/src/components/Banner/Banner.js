import React,{useEffect,useState} from 'react'
import Carousel from './Carousel'
import bannerData from './data'
import { BsStarFill } from 'react-icons/bs'
import './Banner.css'
const images = bannerData.images.map((image) => {
    return {
        src: image.src,
        alt: image.title,
        desc: image.description,
        ratings: image.ratings
    }
})
const Banner = () => {
    const [currentDescription, setCurrentDescription] = useState('')
    const [currentTitle, setCurrentTitle] = useState('')
    const [currentRating, setCurrentRating] = useState(0)
    const handleSlideChange = (slideIndex) => {
        setCurrentDescription(images[slideIndex].desc);
        setCurrentTitle(images[slideIndex].alt);
        setCurrentRating(images[slideIndex].ratings);
    }
    useEffect(() => {
        const handleSlideChangeEvent = (event) => {
            handleSlideChange(event.detail);
            }
      
        window.addEventListener('slideChange', handleSlideChangeEvent);
        
        return () => window.removeEventListener('slideChange', handleSlideChangeEvent); // Cleanup
      }, []); 
  return (
    <div  className='banner' >
    <div  className='desc'>
    <h1> {currentTitle} </h1>
    <p>{currentDescription}</p>
    { Array(currentRating).fill().map((_,i) => {
        return <BsStarFill key={i} style={{color: 'gold'}}/>
    })}
    </div>
    <Carousel data={images}/>
    </div>

  )
}

export default Banner

const styles = {
    banner: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '2px solid #ccc',
        backgroundColor: '#ced5d5',
        padding: 0,
    },
    desc: {
        marginLeft: 20,
    }
    
}