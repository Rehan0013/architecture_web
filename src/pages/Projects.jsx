import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PreLoader from '../components/PreLoader'

const Projects = () => {

  const [loading, setLoading] = useState(true);

  return (
    <>
        {loading ? (
          <PreLoader setLoading={setLoading} />
        ) : (
          <>
            <PageTitle title="Projects"/>
            <Header/>
            Projects
            <Footer/>
          </>
        )}
    </>
  )
}

export default Projects;