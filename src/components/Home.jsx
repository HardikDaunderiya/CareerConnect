import CategoryCarousel from "./CategoryCarousel"
import Footer from "./shared/Footer"
import HeroSection from "./HeroSection"
import LatestJobs from "./LatestJobs"
import Navbar from "./shared/Navbar"
import useGetAllJobs from "./hooks/useGetAllJobs"

const Home = () => {
  useGetAllJobs();
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CategoryCarousel/>
      <LatestJobs />
      <Footer/>
    </div>
  )
}

export default Home
