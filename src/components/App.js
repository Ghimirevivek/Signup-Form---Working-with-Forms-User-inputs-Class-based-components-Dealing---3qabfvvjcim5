import React, { Component, useState } from 'react'
import '../styles/App.css'

const App = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('male')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setSuccess('')
    setError('')
    if (!name || !email || !gender || !phoneNumber || !password) {
      setError('All fields are mandatory')
      return
    }
    if (!/^[a-zA-Z0-9 ]+$/.test(name)) {
      setError('Name is not alphanumeric')
      return
    }
    if (!email.includes('@')) {
      setError('Email must contain @')
      return
    }
    if (!['male', 'female', 'other'].includes(gender)) {
      setError('Please identify as male, female or other')
      return
    }
    if (!/^[0-9]+$/.test(phoneNumber)) {
      setError('Phone Number must contain only numbers')
      return
    }
    if (password.length < 6) {
      setError('Password must contain at least 6 letters')
      return
    }
    const username = email.split('@')[0]
    setSuccess(`Hello ${username}`)
  }
  return (
    <div id="main">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Name"
          data-testid="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          data-testid="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <select
          data-testid="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>
        <input
          type="text"
          placeholder="Phone Number"
          data-testid="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          data-testid="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" data-testid="submit">
          Submit
        </button>
      </form>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
    </div>
  )
}

export default App
