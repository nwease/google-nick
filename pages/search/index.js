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
            <header className='flex items-center p-6'>
                <Image
                    src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
                    alt='Google'
                    height={30}
                    width={100}
                />

                <form className='flex px-5 py-3 ml-10 mr-5 border border-gray-200 rounded-full flex-grow shadow-lg max-w-2xl'>
                    <input
                        className='flex-grow w-full focus:outline-none'
                        type='search'
                        defaultValue={router.query.term}
                    />

                    <MicrophoneIcon className='mr-3 h-5 text-blue-500' />

                    <SearchIcon className='h-5 text-blue-500' />

                    <button hidden>
                        Search
                    </button>
                </form>

                <img
                    className='ml-auto h-10 rounded-full cursor-pointer transition duration-150 ease-out transform hover:scale-110'
                    src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/trump_president_avatar_male-512.png'
                    alt='Me'
                />
            </header>

            {/*SEARCH RESULTS*/}
        </div>
    );
}

export default Search;

export async function getServerSideProps(context) {
    console.log(context.query.term);

    return {
        props: {
            test: '12314654'
        }
    }
}
