import { Route, Routes } from 'react-router'
import './App.css'
import AdminPanel from './pages/admin/admin'
import Landing from './pages/admin/main/landing'
import StudentEnroll from './pages/admin/userSignin/studentEnroll'

function App() {

  return (
    <Routes>
      <Route path='admin' element={<AdminPanel />} >
        <Route index element={<Landing />} />
        <Route path='studentEnrollment' element={<StudentEnroll />}/>
      </Route>
    </Routes>
  )
}

export default App
