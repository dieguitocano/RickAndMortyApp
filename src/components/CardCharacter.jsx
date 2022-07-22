import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import useRick from '../hooks/useRick'

const CardCharacter = ({ resident }) => {



  const [character, setCharacter] = useState()

  useEffect(() => {
    axios.get(resident)
      .then(res => setCharacter(res.data))
      .catch(err => console.log(err))
  }, [])

  


  return (

    <>

      <div className='card-character'>

        <div className='card-image'>

          <img src={character?.image} alt="" />

        </div>


        <div className='card-body'>

          <h3 className='card-title'>{character?.name}</h3>



          <div className="wrapper">

            <p className='card-text'><span className='card-bold'>Status:  </span>{character?.status}</p>

            <div className="card-species">
              <p><span className='card-bold'>Species:  </span>{character?.species} </p>

            </div>

            <div className="card-origin">
              <p><span className='card-bold'>Origin:  </span>{character?.origin.name}</p>

            </div>
          <p><span className='card-bold'>Gender:  </span>{character?.gender}</p>

          </div>

        </div>


    

      </div>





    </>
  )
}

export default CardCharacter