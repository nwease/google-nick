import Head from 'next/head';
import { useRouter } from 'next/router'
import Image from 'next/image';
import {SearchIcon} from '@heroicons/react/outline';
import {MicrophoneIcon} from '@heroicons/react/solid';

function Search() {

    const router = useRouter();

    return (
        <div>
            <Head>
                <title>
                    {
                        router.query.term
                    }

                    Search Term - Google Search
                </title>

                <link rel='icon' href='/favicon.ico'/>
            </Head>

            {/*HEADER*/}
            <div className='flex items-center px-2 py-1'>
                <Image
                    src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
                    alt='Google'
                    height={30}
                    width={100}
                />

                <form className='flex w-full mt-7 hover:shadow-lg focus-within:shadow-lg max-w-xl rounded-full border border-gray-200 px-5 py-3 items-center'>
                    <input
                        className='flex-grow focus:outline-none'
                        type='search'
                        defaultValue={router.query.term}
                    />

                    <SearchIcon className='h-5 mr-3 text-gray-500' />

                    <MicrophoneIcon className='h-5' />

                    <button hidden>
                        Search
                    </button>
                </form>
            </div>

            {/*SEARCH RESULTS*/}
        </div>
    );
}

export default Search;
