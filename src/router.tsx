import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Other from './pages/Other'

export const basePath = "/ig"

export const Router = () => (
    <Routes>
        <Route path={basePath + "/"} element={<Home />} />
        <Route path={basePath + "/profile"} element={<Profile />} />
        <Route path={basePath + "/other"} element={<Other />} />
    </Routes>
)