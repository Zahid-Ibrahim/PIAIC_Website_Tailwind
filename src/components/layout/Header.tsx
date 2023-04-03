import React from 'react';
import Logo from "/public/logo1.png"
import Image from "next/image"
import Link from 'next/link';
import Wrapper from '../shared/Wrapper';
const Header = () => {
  return (
    <header className='sticky top-0 bg-blue-200'>
    <Wrapper>
    <div className='flex justify-between py-4 px-2  items-center'>
     { /* Logo */}
     <div>
      {/* <h2 className='text-x1 font-bold'>Panaverse DAO</h2>   */}
     <Image src={Logo} alt='Panaverse dao logo' />
     </div>
    {/*Navigation Bar */}
    <ul className='flex space-x-8 font-semibold'>
      <li>
        <Link href={"/"}>
        Home </Link>
        </li>
      <li>
      <Link href={"/"}>
        Courses </Link></li>
    </ul>
    
    </div>
    </Wrapper>
    </header>
    
  );
}

export default Header;
