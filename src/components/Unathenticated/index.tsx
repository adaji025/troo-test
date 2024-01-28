import { Route, Routes } from 'react-router-dom'
import Login from '../../pages/Auth/Login'

const Unauthenticated = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
    </Routes>
  )
}

export default Unauthenticated
