import React from 'react'
import Counter from './Counter'
import Row from './Row'
import requests from './requests'

const App = () => {
  return (
    <div className='App'>
       <Row title= "NETFLIX ORIGINAL" fecthUrl isLargeRow = {requests.fetchNetflixOriginals}  />
       <Row title= "Trending" fecthUrl = {requests.fetchTrending}  />
       <Row title= "Top Rated" fecthUrl = {requests.fetchTopRated}  />
       <Row title= "Action Movies" fecthUrl = {requests.fetchActionMovies}  />
       <Row title= "Comedy Movies" fecthUrl = {requests.fetchComedyMovies}  />
       <Row title= "Horror Movies" fecthUrl = {requests.fetchHorrorMovies}  />
       <Row title= "RomanceMovies" fecthUrl = {requests.fetchRomanceMovies}  />
       <Row title= "Documentaries" fecthUrl = {requests.fetchDocumentaries}  />
      <h1>App</h1>
      </div>
  )
}

export default App