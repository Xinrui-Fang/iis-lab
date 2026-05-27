import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ContactPage } from './pages/ContactPage'
import { DLSPage } from './pages/DLSPage'
import { HomePage } from './pages/HomePage'
import { JoinPage } from './pages/JoinPage'
import { MembersPage } from './pages/MembersPage'
import { PublicationsPage } from './pages/PublicationsPage'
import { ResearchPage } from './pages/ResearchPage'
import { WhatsUpPage } from './pages/WhatsUpPage'

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '')

export default function App() {
  return (
    <BrowserRouter basename={routerBasename || undefined}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="research" element={<ResearchPage />} />
          <Route path="publications" element={<PublicationsPage />} />
          <Route path="members" element={<MembersPage />} />
          <Route path="dls" element={<DLSPage />} />
          <Route path="whats-up" element={<WhatsUpPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="join" element={<JoinPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
