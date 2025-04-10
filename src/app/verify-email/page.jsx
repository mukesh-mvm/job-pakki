import Link from 'next/link'
import Navbar from '../../components/header/Navbar'
import Header from '@/components/header/Header'

const page = () => {
  return (
    <div>
     <Header/>
     <Navbar/>
    

    <div className=' container bg-amber-300 flex items-center justify-center flex-col h-[30vh]'>
    <h1 className=' text-black text-5xl font-bold'> Your Email is verifies please go to the login page</h1>
    <Link href="/login" className=' text-blue-600 font-3xl'>Please go to login page</Link>
    </div>
      
    </div>
  )
}

export default page
