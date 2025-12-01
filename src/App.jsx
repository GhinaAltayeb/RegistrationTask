import './App.css'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router';

import Form from 'react-bootstrap/Form';
import { Alert } from 'react-bootstrap';
import { IoEyeOutline, IoArrowForwardOutline } from "react-icons/io5";

import './App.css'
function App() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    "userName": "",
    "email": "",
    "password": "",
    "confirmPassword": "",
  })

  const [passwordMatch, setPasswordMatch] = useState(false);
  const [loading, setLoading] = useState(false)

  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handlePass = (passRef) => {
    if (passRef.current.value) {
      if (passRef.current.type === "password") {
        passRef.current.type = "text"
      }
      else {
        passRef.current.type = "password"
      }
    }
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    setLoading(true)
    
    setTimeout(() => {
      setLoading(false)
      navigate("/home")
    }, 2000)
  }


  return (
    <div className="signup min-h-lvh flex flex-col md:flex-row">

      {/* photo */}
      <div className='left  max-md:h-[336px] md:w-1/2 bg-[url(/public/signup.jpg)] bg-contain bg-no-repeat bg-center'>
      </div>

      {/* form */}
      <div className='right md:w-1/2 flex justify-center items-center max-md:px-10  md:p-14 lg:pe-32'>
        <div className='w-full flex flex-col gap-5'>
          <div>
            {passwordMatch ? <Alert className=' text-center bg-red-100 p-3 rounded-sm text-small' key="danger" variant="danger">
              You have password mismatch problem.
            </Alert> : ''}
          </div>

          <h2 className='text-3xl text-[#2d235c] font-semibold'>
            Create your account
          </h2>

          <Form onSubmit={handleSignUp} className='d-flex flex-col'>
            <Form.Group className="mb-4 form-group" controlId="formUserName">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" value={formData.userName} placeholder='Username'
                onInput={(e) => {
                  setFormData({ ...formData, 'userName': e.target.value })
                }} required />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-4 form-group" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={formData.email} placeholder=' Email address'
                onInput={(e) => {
                  setFormData({ ...formData, 'email': e.target.value })
                }} required />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <div className='grid lg:grid-cols-2 lg:gap-3'>
              <Form.Group className="mb-5 form-group relative" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef} type="password" value={formData.password} placeholder="Create password"
                  onInput={(e) => {
                    setFormData({ ...formData, 'password': e.target.value })
                  }} required />
                <IoEyeOutline className='eye' onClick={() => handlePass(passwordRef)} />
              </Form.Group>

              <Form.Group className="mb-5 form-group relative" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control ref={confirmPasswordRef} type="password" value={formData.confirmPassword} placeholder="Confirm password"
                  onInput={(e) => {
                    setFormData({ ...formData, 'confirmPassword': e.target.value });
                    setPasswordMatch(e.target.value !== formData.password);
                  }} required />
                <IoEyeOutline className='eye' onClick={() => handlePass(confirmPasswordRef)} />
              </Form.Group>
            </div>

            <button
              disabled={passwordMatch}
              className='flex justify-center items-center cursor-pointer gap-3 bg-[#5647a8] text-white py-2 px-3 mt-2 disabled:opacity-50 disabled:cursor-default'
            >
              {loading ? 'Creating Account ...' : 'Create Account'}
              <IoArrowForwardOutline />
            </button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default App
