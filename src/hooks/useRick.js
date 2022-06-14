import axios from "axios"
import { useEffect, useState } from "react"



const useRick = getLocation => {

    const [location, setLocation] = useState()
    const [isLoading, setIsLoading] = useState(true)
   


    useEffect(() => {
      let numberLocation 
      if(getLocation !== undefined){
        numberLocation = getLocation
      } else{
        numberLocation = Math.ceil(Math.random() * 126)
      }
     
      
      //Agrega la random location de manera dinámica
      const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`
      //Hace petición a la API
      axios.get(URL)
       .then(res => {
        setLocation(res.data)
        setIsLoading(false)
       })
       .catch(err => 
        console.log(err) )
    
      
    }, [getLocation])

      
   

    return {location, isLoading}
       
        

    
    
   
  
}


export default useRick