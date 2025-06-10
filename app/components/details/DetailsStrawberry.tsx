import React from 'react'
import Image from 'next/image'
import Strawberry from '@/public/image/ice 1.png'
import Gelato from '@/public/image/ice 2.png'
import Chocolate from '@/public/image/ice 3.png'
import Link from 'next/link'

const DetailsStrawberry = () => {
  return (
    <main className='select-none '>
      <p className='text-[#EE3B42] text-3xl md:text-4xl xl:text-6xl font-[700] mb-10 xl:mb-7 md:mb-4 mt-25 md:mt-15 xl:mt-20'>Strawberry Vanilla <br />Ice Cream</p>
      <p className='md:text-sm xl:text-md w-[70%] mb-5 md:mb-5 xl:mb-8 z-20'>
        I'm doing this as a way to practice my design skills, explore different styles and have fun. I'm fully aware this challenge doesn't pose any real problem to solve.</p>
        <div className='flex gap-3 mb-10 md:mb-5 xl:mb-10'>
          <button className='bg-[#EE3B42] rounded-full p-2 px-3 md:text-sm text-white'>Order Now</button>
          <button className='border-2 border-[#EE3B42] rounded-full p-2 px-3 md:text-sm  text-[#EE3B42]'>See Menu</button>
        </div>
        <div className='flex md:gap-4 md:p-0 md:w-full md:justify-start justify-between '>
          <Link href={'/components/OverallStrawberry'}>
          <Image src={Strawberry} width={120} height={170} alt='Order Strawberry' className='hover:mb-10'/>
          </Link>
          <Link href='/components/OverallGelato'>
          <Image src={Gelato} width={120} height={170} alt='Order Gelato' className='hover:mb-10'/>
          </Link>
          <Link href='/components/OverallChocolate'>
          <Image src={Chocolate} width={120} height={170} alt='Order Chocolate' className='hover:mb-10'/>
          </Link>
        </div>
    </main>
  )
}

export default DetailsStrawberry