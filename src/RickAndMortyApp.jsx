
import axios from 'axios'
import { useEffect, useState } from 'react'
import CardCharacter from './components/CardCharacter'
import LocationInfo from './components/LocationInfo'
import useRick from './hooks/useRick'
import './App.css'
import Loader from './components/Loader'
import rickMortyImage from './resources/rickmorty.gif'
import rickMortyLogo from './resources/image2.png'
import Footer from './components/Footer'
import Searchbar from './components/Searchbar'



const RickAndMortyApp = () => {

  const [getLocation, setGetLocation] = useState()

  const {location, isLoading} = useRick(getLocation)
  

  
console.log(rickMortyImage)
  
    
  
  return (
  <>
    
    <div className='pic-container' >

      <img className='backpic' src={rickMortyImage} alt="loading..." />
      <img className='logo' src={rickMortyLogo} alt="" />
      
      
    </div>
    <div>
      
     <Searchbar setGetLocation={setGetLocation}/>
     <LocationInfo location={location}/>

     <div className='card-box'>
        {
          location?.residents.map(resident => (
           <CardCharacter resident={resident}
           
           key={resident}
           />
           ))
         /* :
           <Loader />*/
        }

        
     </div>

     <Footer />

     
    </div>
    
  </>
  )
}

export default RickAndMortyApp
