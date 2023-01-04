import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
function News() {
    const router = useRouter();
    let [title, body, img] = router.query.id;
    console.log(title, body, img);
    if(title==='Microstrategy Buys More Bitcoin Company Crypto Holdings Grow to 132500 BTC')img='3.jpg'
    return (
        <div className='flex flex-col text-center min-h-screen'>
            <Header />
            <div>
                <div className='py-3 text-2xl bg-black text-white'>
                    <span className="font-bold">
                        {title}
                    </span>
                </div>
                <div>
                    <div className='relative h-64 w-full'>
                        <Image
                            src={`/${img}`}
                            objectFit='cover'
                            fill
                            alt='news image'
                        />
                    </div>
                </div>

            </div>
            <div className='py-10 text-gray-500 bg-white px-2 md:px-5'>
                <p>
                    {body}
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default News;