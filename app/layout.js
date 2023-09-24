
import Carousel from './component/carousel/Carousel'
import Footer from './component/footer/Footer'
import Insta from './component/instagram/Insta'
import Navbar from './component/nav/navbar'

import './globals.css'
import { Inter,Josefin_Sans } from 'next/font/google'
import Loader from './loading'
import { Suspense } from 'react'
import Whatsapp from './component/utils/Whatsapp'

const inter = Inter({ subsets: ['latin'] })

const josefin = Josefin_Sans({
  weight: ['400', '700','600','200'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

 
  return (
    <html lang="en">
      
      <body className={josefin.className}>
        <Navbar />
        <Suspense fallback={<Loader />}>
        <Carousel />
        
        {children}
       
        
        <Insta />
        <Footer />
        </Suspense>
        <Whatsapp />
        </body>
    </html>
  )
}
