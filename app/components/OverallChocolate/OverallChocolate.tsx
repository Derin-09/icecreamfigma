import React from 'react'
import Image from 'next/image'
import SideImage from '@/public/image/bgChocolate.png'
import Choose from '@/public/image/Choose your taste.png'
import NavbarGelato from '../NavbarGelato/NavbarGelato'
import PictureChocolate from '../PictureChocolate/PictureChocolate'
import DetailsChocolate from '../DetailsChocolate/DetailsChocolate'


const OverallChocolate = () => {
  return (
    <main className='flex  w-full h-screen justify-center bg-white bg-no-repeat bg-top-right ' >
        <section className='absolute w-full xl:px-25 '>
            <div className='fixed  xl:top-0 right-0 h-screen w-full md:w-[50%] z-0'>
                <Image src={SideImage} width={300} height={500} alt='' className='h-full w-full '/>
            </div>
            <div className='z-10'>
                <Image src={Choose} width={500} height={200} alt='Choose your taste' className='fixed top-30 right-0 float-right xl:w-[500px] md:w-[400px]'/>
            </div>
        <div className=' absolute z-10 w-full pr-2 md:pr-15 xl:pr-25 md:pl-15 pl-5'>
            <NavbarGelato/>
        </div>
        <section className='absolute md:flex xl:flex w-full h-full md:mt-5 xl:mt-10 md:z-10 md:pl-15 pl-5 '>
        <div className=' md:flex-1 h-full z-20'>
            <DetailsChocolate/>
        </div>
        <div className='md:flex-1 h-full md:z-10'>
            <PictureChocolate/>
        </div>
        </section>
        </section>
    </main>
  )
}

export default OverallChocolate