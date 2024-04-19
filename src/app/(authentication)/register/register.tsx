'use client'

import {
  Alert, Button, Form, FormControl, InputGroup,
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { faLock, faPhone } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'
import { SyntheticEvent, useState } from 'react'
import { deleteCookie, getCookie } from 'cookies-next'
import axios from 'axios'
import InputGroupText from 'react-bootstrap/InputGroupText'


export default function Register() {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const getRedirect = () => {
    const redirect = getCookie('redirect')
    if (redirect) {
      deleteCookie('redirect')
      return redirect.toString()
    }

    return '/'
  }

  const register = async (e: SyntheticEvent) => {
    e.stopPropagation()
    e.preventDefault()
    setSubmitting(true)

    const formData = new FormData(e.target as HTMLFormElement);
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const phoneNumber = formData.get('phoneNumber') as string;
    const passwordRepeat = formData.get('password_repeat') as string;
    if(fullName !='' && email != '' 
      && password !='' && phoneNumber != ''
      && passwordRepeat !='')
      {
        if(password != passwordRepeat){
          alert("Password doesn't match")
          setSubmitting(false)
          return false;
        }
        try {
          let obj = {
            fullName: fullName,
            email: email,
            password: password,
            phoneNumber: phoneNumber,
            isActive: true
          }
          const res = await axios.post('api/register', JSON.stringify(obj))
          if (res.status === 200) {
            router.push(getRedirect())
          }
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message)
          }
        } finally {
          setSubmitting(false)
        }
      }
      else{
        alert("All fields are required")
        setSubmitting(false)
      }

    
  }

  return (
    <>
      <Alert variant="danger" show={error !== ''} onClose={() => setError('')} dismissible>{error}</Alert>
      <Form onSubmit={register}>
        <InputGroup className="mb-3">
          <InputGroupText><FontAwesomeIcon icon={faUser} fixedWidth /></InputGroupText>
          <FormControl
            name="fullName"
            required
            disabled={submitting}
            placeholder="Full Name"
            aria-label="Full Name"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroupText>
            <FontAwesomeIcon icon={faEnvelope} fixedWidth />
          </InputGroupText>
          <FormControl
            type="email"
            name="email"
            required
            disabled={submitting}
            placeholder="Email"
            aria-label="Email"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroupText>
            <FontAwesomeIcon icon={faPhone} fixedWidth />
          </InputGroupText>
          <FormControl
            type="number"
            name="phoneNumber"
            required
            disabled={submitting}
            placeholder="Phone Number"
            maxLength={10}
            aria-label="Phone Number"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroupText><FontAwesomeIcon icon={faLock} fixedWidth /></InputGroupText>
          <FormControl
            type="password"
            name="password"
            required
            disabled={submitting}
            placeholder="Password"
            aria-label="Password"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroupText><FontAwesomeIcon icon={faLock} fixedWidth /></InputGroupText>
          <FormControl
            type="password"
            name="password_repeat"
            required
            disabled={submitting}
            placeholder="Repeat password"
            aria-label="Repeat password"
          />
        </InputGroup>

        <Button type="submit" className="d-block w-100" disabled={submitting} variant="success">
          Create Account
        </Button>
      </Form>
    </>
  )
}


