import { Helmet } from 'react-helmet'
import Navbar from '../components/Header/Navbar'
import Sidebar from '../components/Header/Sidebar'

const Layout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <header>
        <Navbar />
      </header>

      <main className='main_content'>
        {children}
      </main>

      <section>
        <Sidebar />
      </section>
    </>
  )
}

export default Layout