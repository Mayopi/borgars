import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Article from './components/Article'
import Product from './components/Product'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Global Animated Backgrounds */}
      <AnimatedBackground />
      <ParticleBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Article />
        <Product />
        <Footer />
      </div>
    </div>
  )
}

export default App
