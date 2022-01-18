import React from 'react'
import NavBar from './componants/NavBar/NavBar.js'
import './App.css'
import Banner from './componants/Banner/Banner.js'
import RowPost from './componants/RowPost/RowPost.js'
import {actions,comedy,horror,netflix_originals, romance} from './urls'
function App () {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <RowPost url={netflix_originals}  title='Netflix Originals' />
      <RowPost url={actions} title='Actions' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={romance} title='Romance' isSmall />
    </div>
  )
}

export default App
