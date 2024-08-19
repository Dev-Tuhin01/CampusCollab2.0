import { Route, Routes } from 'react-router'
import './App.css'
import AdminPanel from './pages/admin/admin'
import Landing from './pages/admin/main/landing'
import StudentEnroll from './pages/admin/userSignin/studentEnroll'
import TeacherEnroll from './pages/admin/userSignin//teacherEnrollment'
import PublishNotice from './pages/admin/notice/publishNotice'
import AddPaper from './pages/admin/papers/addPaper'
import { Toaster } from 'react-hot-toast'
import Hero from './pages/hero'

function App() {

  return (
    <>
      <Toaster position='top-right' reverseOrder={false} />
      <Routes>
        <Route index element={<Hero />} />
        <Route path='admin' element={<AdminPanel />} >
          <Route index element={<Landing />} />
          <Route path='studentEnrollment' element={<StudentEnroll />}/>
          <Route path='teacherEnrollment' element={<TeacherEnroll />}/>
          <Route path='publishNotice' element={<PublishNotice />}/>
          <Route path='addPaper' element={<AddPaper />}/>
        </Route>
        <Route path='app'>
          <Route index />
          <Route path='Notice' />
          <Route path='About' />
        </Route>
      </Routes>
    </>
  )
}

export default App
