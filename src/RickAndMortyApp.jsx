
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
import Pagination from './components/Pagination'



const RickAndMortyApp = () => {

  const [getLocation, setGetLocation] = useState()


  const { location, isLoading } = useRick(getLocation)


  const [currentPage, setCurrentPage] = useState(1)


  //pagination
  let arrayResidents = []
  const residentsPerPage = 6

  if (location?.residents.length < residentsPerPage) {
    arrayResidents = [...location?.residents]
  } else {
    const lastResident = currentPage * residentsPerPage
    arrayResidents = location?.residents.slice(lastResident - residentsPerPage, lastResident)
  }

  let arrayPages = []
  let quantityPages = Math.ceil(location?.residents.length / residentsPerPage)
  const pagesPerBlock = 5
  let currentBlock = Math.ceil(currentPage / pagesPerBlock)
  //analiza si estamos en el ultimo true
  if (currentBlock * pagesPerBlock >= quantityPages) {
    //Cuando es el ultimo bloque
    for (let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= quantityPages; i++) {
      arrayPages.push(i)
    }
  } else {
    // cuando no es el ultimo bloque
    for (let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= currentBlock * pagesPerBlock; i++) {
      arrayPages.push(i)
    }
  }

console.log(arrayPages)


  return (
    <>

      <div className='pic-container' >

        <img className='backpic' src={rickMortyImage} alt="loading..." />
        <img className='logo' src={rickMortyLogo} alt="" />


      </div>
      <div>

        <Searchbar setGetLocation={setGetLocation} />
        <LocationInfo location={location} />

        <Pagination 
          arrayPages={arrayPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          quantityPages={quantityPages}
        />

        <div className='card-box'>
          {
            arrayResidents?.map(resident => (
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
