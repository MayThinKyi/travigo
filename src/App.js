import Brands from './components/Brands';
import Explore from './components/Explore';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Memories from './components/Memories';
import Navbar from './components/Navbar';
import Outdoor from './components/Outdoor';
import Plan from './components/Plan';
import { bannerAPI, brands, footerAPI, hero, memory, navlinks, placesAPI, pricingapi } from './data/travigoData';
import './index.css';

function App() {
  return (
    <div className="App ">
     <Hero hero={hero} />
      <Memories memories={memory} />
      <Explore placesAPI={placesAPI} />
      <Brands brands={brands} />
      <Plan pricingapi={pricingapi} />
      <Outdoor bannerAPI={bannerAPI} />
      <Footer footerAPI={footerAPI} />
    </div>
  );
}

export default App;
