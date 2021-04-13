import Head from 'next/head'
import {MicrophoneIcon} from '@heroicons/react/solid';
import {SearchIcon} from '@heroicons/react/outline';
import { useRouter } from 'next/router'
import {useRef} from 'react';
import Image from 'next/image'

export default function Home() {

    const router = useRouter();
    const searchInput = useRef(null);

    const search = (e) => {
        e.preventDefault();
        const term = searchInput.current.value;

        if (!term) return;

        router.push(`/search?term=${term}`)
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <Head>
                <title>
                    Google Nick
                </title>

                <link rel='icon' href='/favicon.ico'/>
            </Head>

            {/*HEADER*/}
            <header className='flex w-full p-5 justify-between text-sm'>
                <div className='flex gap-x-4 items-center'>
                    <p className='link'>
                        About
                    </p>

                    <p className='link'>
                        Store
                    </p>
                </div>

                <div className='flex gap-x-4 items-center'>
                    <p className='link'>
                        Gmail
                    </p>

                    <p className='link'>
                        Images
                    </p>

                    <img
                        className='h-10 rounded-full'
                        src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/trump_president_avatar_male-512.png'
                        alt='Me'
                    />
                </div>
            </header>

            {/*BODY*/}
            <form className='flex flex-1 items-center mt-44 flex-col w-full'>
                <Image
                    className='mb-5'
                    src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
                    alt='Google'
                    height={100}
                    width={300}
                />

                <div className='flex w-full mt-7 hover:shadow-lg focus-within:shadow-lg max-w-md sm:max-w-xl lg:max-w-2xl rounded-full border border-gray-200 px-5 py-2 items-center'>
                    <SearchIcon className='h-5 mr-3 text-gray-500' />

                    <input ref={searchInput} className='flex-grow focus:outline-none' type='text'/>

                    <MicrophoneIcon className='h-5' />
                </div>

                <div className='flex flex-col w-1/2 gap-y-2 justify-center mt-8 sm:gap-y-0 sm:flex-row sm:gap-x-4'>
                    <button
                        disabled
                        className='btn'
                        type='Submit'
                        onClick={search}
                    >
                        Google Search
                    </button>

                    <button
                        className='btn'
                        onClick={search}
                    >
                        I'm Feeling Lucky
                    </button>
                </div>
            </form>

            {/*FOOTER*/}
        </div>
    )
}
