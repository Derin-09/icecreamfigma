import React from 'react'
import Image from 'next/image'
import Logo from '@/public/image/Navigation Links Container.png'
import Login from '@/public/image/Account Icon Container.png'

const NavbarChocolate = () => {
  return (
    <main>
      <section className='flex justify-between w-full py-4'>
        <div className='md:flex-2'>
          <Image src={Logo} width={50} height={20} alt='Logo'/>
        </div>
        <div className='flex md:flex-2 justify-evenly gap-10 text-xs z-20'>
          <p className='font-bold'>Home</p>
          <p className=''>Menu</p>
          <p className=''>About</p>
          <p className=''>Contact</p>
        </div>
        <div className='z-20 md:flex-4 '>
          <Image src={Login} width={20} height={15} alt='Login' className='float-right'/>
        </div>
      </section>
    </main>
  )
}

export default NavbarChocolate