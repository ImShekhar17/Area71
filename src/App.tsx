import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Overview from './components/Overview';
import FloorPlans from './components/FloorPlans';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Location from './components/Location';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';
import MouseFollower from './components/MouseFollower';

function App() {
  return (
    <div className="relative bg-white">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#1f2937',
            color: '#fff',
            borderRadius: '12px',
          },
          success: {
            iconTheme: {
              primary: '#f59e0b',
              secondary: '#fff',
            },
          },
        }}
      />
      <ScrollProgress />
      <MouseFollower />
      <Header />
      <Hero />
      <Highlights />
      <Overview />
      <FloorPlans />
      <Amenities />
      <Gallery />
      <Location />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
