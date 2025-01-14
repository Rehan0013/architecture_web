import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'
import Header from '../components/Header' 
import Footer from '../components/Footer'
import PreLoader from '../components/PreLoader'
import Image from '../components/Image'

const Gallery = () => {

  const [loading, setLoading] = useState(true);

  return (
    <>
        {loading ? (
          <PreLoader setLoading={setLoading} />
        ) : (
          <>
            <PageTitle title="Gallery"/>
            <Header/>
            <Image/>
            <Footer/>
          </>
        )}
    </>
  )
}

export default Gallery;