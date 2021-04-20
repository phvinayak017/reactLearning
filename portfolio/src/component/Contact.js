import React, { Component } from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import Image from '../assets/Images/contact4.svg'
import Form from './Form'
import { useState } from 'react'
import emailJS from 'emailjs-com'

const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: '40vw',
    height: 'auto',
    marginTop: '15vh',
  },
  formStyle: {
    color: '#fc37aa',
    fontWeight: 900,
    marginLeft: '10vw',
    marginTop: '10vh',
  },
}))

function Contact() {
  const classes = useStyles()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [emailId, setEmailId] = useState('')
  const [note, setNote] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = (e) => {
    console.log('handle Input')
    const templateParam = {
      firstName,
      lastName,
      emailId,
      note,
    }
    const serviceID = 'service_sfg21il'
    const templateId = 'template_8jwsltr'
    const userId = 'user_SY49WhOrX8nBLuVDFlZmY'
    emailJS.init(userId)

    emailJS.send(serviceID, templateId, templateParam).then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text)
        setIsSent(true)
        setSuccessMessage('Message Sent Successfully !!')
        resetState()
      },
      function (error) {
        console.log('FAILED...', error)
      }
    )
  }

  const resetState = () => {
    setFirstName('')
    setLastName('')
    setEmailId('')
    setNote('')
    setTimeout(() => {
      setIsSent(false)
    }, 5000)
  }

  return (
    <div>
      <div class="px-12 lg:px-36">
        {isSent && (
          <div item md={12}>
            <Typography align="center" variant="h5" color="primary">
              {successMessage}
            </Typography>
          </div>
        )}
        <div class="lg:flex lg:justify-between lg:items-center lg:space-x-10">
          <div class="space-y-6 py-6">
            <div class="text-3xl text-pink-500">Drop me a Line</div>
            <Form
              firstName={firstName}
              lastName={lastName}
              emailId={emailId}
              note={note}
              handleSubmit={handleSubmit}
              setEmailId={setEmailId}
              setFirstName={setFirstName}
              setLastName={setLastName}
              setNote={setNote}
            />
          </div>
          <img
            src={Image}
            alt="contact"
            class=" hidden lg:inline-block w-6/12"
          />
        </div>
      </div>
    </div>
  )
}

export default Contact
