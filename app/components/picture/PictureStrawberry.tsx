import React from 'react'
import Image from 'next/image'
import Pic from '@/public/image/1.png'

const PictureStrawberry = () => {
  return (
    <main className='relative'>
      <div className=''>
      </div>
      <div className='absolute top-15 left-20 md:z-20'>
        <Image src={Pic} width={300} height={300} alt='Strawberry Ice Cream' className='xl:h-[570px] md:h-[450px]  h-[200px] md:block hidden'/>
      </div>
    </main>
  )
}

export default PictureStrawberry