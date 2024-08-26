import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import AdminPanel from './pages/admin/admin'
import Landing from './pages/admin/main/landing'
import StudentEnroll from './pages/admin/userSignin/studentEnroll'
import TeacherEnroll from './pages/admin/userSignin//teacherEnrollment'
import PublishNotice from './pages/admin/notice/publishNotice'
import AddPaper from './pages/admin/papers/addPaper'
import { Toaster } from 'react-hot-toast'
import Hero from './pages/hero'
import Application from './pages/ user/App'
import TeachLogin from './pages/ user/login/teachLogin'
import StudLogin from './pages/ user/login/studLogin'
import Login from './pages/ user/login/login'
import {  useAuthContext } from './context/authContext'
import About from './pages/ user/about/About'

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {authUser} = useAuthContext();
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
        <Route path='app' element={<Application />}>
          <Route path='login'>
            <Route index element={authUser?<Navigate to={"/app/chat"} />:<Login />} />
            <Route path='teacher' element={authUser?<Navigate to={"/app/chat"} />:<TeachLogin />} />
            <Route path='student' element={authUser?<Navigate to={"/app/chat"} />:<StudLogin />} />
          </Route>
          <Route path='chat' element={authUser?<h1>Chat</h1>:<Navigate to={"/app/login"} />}/>
          <Route path='notice' element={authUser?<h1>notice</h1>:<Navigate to={"/app/login"} />} />
          <Route path='about' element={authUser?<About />:<Navigate to={"/app/login"} />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
