import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'
import BottomNavbar from '../components/BottomNavBar'

function MyApp({ Component, pageProps }) {
  return (
    <main className='min-h-screen relative flex flex-col'>
    <Header />
    <Component {...pageProps} />
    <BottomNavbar />
    </main>
  )
}

export default MyApp
