import AboutUs from "@/components/aboutUs/AboutUs"
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/header/Footer";
import Header from "@/components/header/Header";


export const metadata = {
  title: 'About Us | Job Ki Tyaari - Your Career Guide',
  description: 'Job Ki Tyaari’s mission to help job seekers with career tips, exam updates, and study materials. Learn more about us',
  metadataBase: new URL('https://jobkityaari.com'),
  alternates: {
    canonical: './',
  },

}

export const page = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        
        <AboutUs/>
    </div>
  )
}

export default page
