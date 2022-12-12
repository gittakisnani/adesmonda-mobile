import Footer from '../components/Footer'
import Header from '../components/Header'
import Newsletter from '../components/NewsLetter'
import '../styles/globals.css'
import BottomNavbar from '../components/BottomNavBar'

function MyApp({ Component, pageProps }) {
  return (
    <main>
    <Header />
    <Component {...pageProps} />
    {/* <Newsletter /> */}
    <Footer />
    <BottomNavbar />
    </main>
  )
}

export default MyApp
