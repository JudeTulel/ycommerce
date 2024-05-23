import React from 'react'
import Banner from '../components/Banner/Banner'
import HorizontalList from '../components/Horizontal/HorizontalList'
import bannerData from '../components/Banner/data'
const images = bannerData.popularProducts.map((image) => {
  return {
    src: image.src,
    title: image.title,

  }
})
const Home = () => {
  return (
    <div style={{ backgroundColor: '#ecddd5' }}>
      <div><Banner /></div>
      <div style={{
        display: 'flex',
        justifyContent: 'center'
        , alignItems: 'center',
        fontFamily: 'cursive'

      }}>
        <h1 style={{
          color: 'black',
          textDecoration: 'underline'

        }}>Popular Items</h1>

      </div>
      <HorizontalList items={images} />
      {/*new Arivals*/}
      {/*Discounted Sales on old stock */}
      {/*curtains */}
    </div>
  )
}

export default Home