import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
function NewsItem({ title, img, body,id }) {
    // console.log(body,img,title);
    return (
        <Link href={`/news/${id}`}>
            <div className='flex border-2  justify-between items-center p-5 md:p-5 bg-white rounded-xl hover:bg-purple-200 active:scale-95 transition duration-100 ease-out overflow-hidden'>
                <div>
                    <span className='font-semibold text-md md:text-2xl'>{title}</span>
                </div>
                <div>
                    <div className='relative h-16 w-16 rounded-lg overflow-hidden'>
                        <Image
                            src={img}
                            fill
                            alt='news image'
                        />
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default NewsItem;