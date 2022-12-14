import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCircleUser,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = ({ products }) => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <ul className='flex justify-between items-center px-5 py-5 shadow-[0_1px_2px_rgba(0,0,0,0.2)] text-black h-20 font-medium text-lg lg:justify-around'>
        <div className='absolute flex lg:!hidden'>
          <button
            className='focus:outline-none z-20'
            onClick={() => setOpen(!open)}
          >
            <FontAwesomeIcon icon={faBars} className='text-2xl lg:!hidden' />
          </button>
          <div
            className={`z-10 fixed top-0 left-0 h-screen w-screen bg-white transform ${
              open ? '-translate-y-0' : '-translate-y-full'
            } transition-transform duration-300 ease-in-out filter  `}
          >
            <div className='flex flex-col justify-center items-center mt-28'>
              <div
                className='text-2xl font-bold hover:text-cyan-400 my-4'
                href='#'
              >
                Mobiles
              </div>
              <div
                className='text-2xl font-bold my-4 hover:text-cyan-400'
                href='#'
              >
                Laptops
              </div>
              <div
                className='text-2xl font-bold my-4 hover:text-cyan-400'
                href='#'
              >
                Rewards
              </div>
              <div
                className='text-2xl font-bold my-4 hover:text-cyan-400'
                href='#'
              >
                Sale
              </div>
              <Link href={'/api/auth/signin'}>
                <div
                  className='text-2xl font-bold my-4 hover:text-cyan-400'
                  href='#'
                >
                  Sign In
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className='hidden lg:flex justify-center items-center gap-10'>
          <li>Mobiles</li>
          <li>Laptops</li>
          <li>Rewards</li>
          <li>Sale</li>
        </div>
        <div className='w-2/5'>
          <img
            className='block absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'
            width='200px'
            src='data:image/png;base64,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'
            alt='logo'
          />
        </div>
        <div className='flex justify-center items-center gap-2'>
          <SearchBar products={products} />
          <Link href={'/api/auth/signin'}>
            <FontAwesomeIcon icon={faCircleUser} className='text-2xl z-10' />
          </Link>
          <Link href={'/cart'}>
            <FontAwesomeIcon icon={faCartShopping} className='text-2xl z-10' />
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
