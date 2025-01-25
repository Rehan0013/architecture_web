import React from 'react'
import PageTitle from '../components/PageTitle'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PreLoader from '../components/PreLoader'
import { useState } from 'react'
import ContactForm from '../components/Form'

const Contact = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
        {loading ? (
          <PreLoader setLoading={setLoading} />
        ) : (
          <>
            <PageTitle title="Contact"/>
            <Header/>
            <ContactForm/>
            <Footer/>
          </>
        )}
    </>
  )
};

export default Contact;