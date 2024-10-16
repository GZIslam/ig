import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { Header } from './components/Header'
import { Router as Content } from './router'
import { Footer } from './components/Footer'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Header />
            <Content />
            <Footer />
        </BrowserRouter>
    </StrictMode>
);
