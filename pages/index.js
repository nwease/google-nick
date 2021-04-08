import Head from 'next/head'
import {MicrophoneIcon} from '@heroicons/react/solid';
import {SearchIcon} from '@heroicons/react/outline';

export default function Home() {
    return (
        <div className=''>
            <Head>
                <title>
                    Google Nick
                </title>

                <link rel='icon' href='/favicon.ico'/>
            </Head>

            {/*HEADER*/}

            {/*BODY*/}
            <div className='w-full flex flex-col justify-center'>
                <img
                    className='object-contain h-20' src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
                     alt='Google'
                />

                <div className='flex rounded-full border border-gray-200 px-5 py-3 items-center hover:shadow-lg'>
                    <SearchIcon className='h-5 mr-3 text-gray-500' />

                    <input className='flex-grow focus:outline-none' type='text'/>

                    <MicrophoneIcon className='h-5' />
                </div>

                <div className='flex justify-center mt-8 space-x-4'>
                    <button className='bg-[#f8f9fa] p-3 rounded-md'>
                        Google Search
                    </button>

                    <button className='bg-[#f8f9fa] p-3 rounded-md'>
                        I'm Feeling Lucky
                    </button>
                </div>
            </div>

            {/*FOOTER*/}
        </div>
    )
}
