
const Searchbar = ({setGetLocation}) => {

  const searchLocation = e => {
    e.preventDefault()
    setGetLocation(e.target.firstChild.value)
    console.log(e.target.firstChild.value)
  }



  return (
    <form onSubmit={searchLocation} className="searchbar" >
        <input placeholder="type a number between 1 and 126" className="input" type="number" />
        <button className="search-button">Search character</button>
    </form>
  )
}

export default Searchbar