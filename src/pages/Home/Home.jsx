import React from 'react'
import './Home.css'
import Stories from '../../Components/Stories/Stories'
import Posts from '../../Components/Posts/Posts'

function Home() {
  return (
    <div className='home'>
      <Stories />
      <Posts />
    </div>
  )
}

export default Home
