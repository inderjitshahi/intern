import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
function Header(props) {
    return (
        <div className='flex justify-between h-[10vh] px-10 bg-purple-700 items-center text-lg text-white border-b-gray-400 border-b-2'>
            <Link href={'/'}>
                <span className='text-4xl text-white'>~IS~</span>
            </Link>
            <span>
                <Link href='https://port-folio-vxwv.vercel.app/'>
                    Contact
                </Link>
            </span>
        </div>
    );
}

export default Header;