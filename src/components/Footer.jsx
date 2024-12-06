import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
Link
import React from 'react'
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <div className='p-5 md:px-20 px:10 bg-violet-500 md:grid grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)] text-white'> 
      <div>
        <h2 className='text-4xl' ><FontAwesomeIcon icon={faCartShopping} className='me-3' />E-Cart</h2>
        <p className='mt-5 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At nobis laudantium blanditiis quam odio optio placeat ducimus quo similique et.</p>
      </div>
      <div className='md :flex justify-center mt-10 md:mt-0'>
        <div className='md:ms-9'>
          <h3 className='text-4xl '>Links</h3>
          <p className='mt-4'><Link to={'/'}>Home</Link></p>
          <p className='mt-3'><Link to={'/wishlist'} >Wishlist</Link></p>
          <p className='mt-3'> <Link to={'/cart'} > Cart</Link></p>
        </div>
      </div>
      <div className='md:flex justify-center mt-10 md:mt-0'>
         <div className=''>
          <h3 className='text-4xl'>Guids</h3>
          <p className='mt-4'>React</p>
          <p className='mt-3'>TailWind</p>
          <p className='mt-3'>Bootswatch</p>
        </div>
        </div>
      <div className='md:px-10 mt-10 md:mt-0'>
        <h3 className='text-3xl'>Contact Us</h3>
        <div className='flex mt-4'>
          <input type="text" placeholder='Email Id' className='p-3 rounded w-full' />
          <button className='p-3 bg-orange-600 rounded ms-3'>Subscribe</button>
        </div>
        <div className="flex justify-between mt-4">
        <FontAwesomeIcon icon={faTwitter} className='text-3xl' />
        <FontAwesomeIcon icon={faLinkedinIn} className='text-3xl' />
        <FontAwesomeIcon icon={faInstagram} className='text-3xl' />
        <FontAwesomeIcon icon={faFacebook} className='text-3xl' />

        </div>

      </div>
    </div>
  )
}

export default Footer