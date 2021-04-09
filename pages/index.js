import Head from 'next/head'
import {MicrophoneIcon} from '@heroicons/react/solid';
import {SearchIcon} from '@heroicons/react/outline';
import Link from 'next/link';

export default function Home() {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <Head>
                <title>
                    Google Nick
                </title>

                <link rel='icon' href='/favicon.ico'/>
            </Head>

            {/*HEADER*/}
            <div className='flex w-full p-5 justify-between text-sm'>
                <div className='flex gap-x-4 items-center'>
                    <a href='/about' className='hover:underline'>
                        About
                    </a>

                    <a href='/store' className='hover:underline'>
                        Store
                    </a>
                </div>

                <div className='flex gap-x-4 items-center'>
                    <a href='/gmail' className='hover:underline'>
                        Gmail 3
                    </a>

                    <a href='/images' className='hover:underline'>
                        Images
                    </a>

                    <img className='h-8'
                        src='https://lh3.googleusercontent.com/proxy/tYj3PAybaHfPcpEX3A51Z5tyhRmFHi2ov1YcAn3bOnrqQi8Xtdtl4Tbeyd6XQIK_KxBBQNQZjRRv0d-HtgdEouFH'
                        alt='Me'
                    />
                </div>
            </div>

            {/*BODY*/}
            {/*<div>*/}
            {/*    <img*/}
            {/*        className='object-contain h-20'*/}
            {/*        src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'*/}
            {/*     alt='Google'*/}
            {/*    />*/}
            {/*</div>*/}

            <div className='flex flex-1 items-center justify-center flex-col w-full'>
                <img
                    className='object-contain h-20'
                    src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
                    alt='Google'
                />

                <div className='flex w-full hover:shadow-lg focus-within:shadow-lg max-w-xl rounded-full border border-gray-200 px-5 py-3 items-center'>
                    <SearchIcon className='h-5 mr-3 text-gray-500' />

                    <input className='flex-grow focus:outline-none' type='text'/>

                    <MicrophoneIcon className='h-5' />
                </div>

                <div className='flex flex-col w-1/2 gap-y-2 justify-center mt-8 sm:gap-y-0 sm:flex-row sm:gap-x-4'>
                    <button className='btn'>
                        Google Search
                    </button>

                    <button className='btn'>
                        I'm Feeling Lucky
                    </button>
                </div>
            </div>

            {/*FOOTER*/}
        </div>
    )
}
