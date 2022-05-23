import React from 'react';
import { FlagIcon, OfficeBuildingIcon, ThumbUpIcon, UserGroupIcon } from '@heroicons/react/solid'

const BusinessSummary = () => {
    return (
        <div className='mt-20'>
            <h1 className='text-4xl font-bold text-center p-4 bg-yellow-300'>Honesty is the capital of business</h1>
            <div className='flex flex-col mx-auto lg:flex-row  lg:justify-evenly my-16 font-bold'>
                <div className='flex flex-col '>
                    <FlagIcon className="h-32 w-32 text-yellow-300" />
                    <h2 className='text-3xl  px-4'>155</h2>
                    <p className='px-4 text-2xl text-yellow-300'>country's</p>


                </div>
                <div className='flex flex-col'>
                    <OfficeBuildingIcon className="h-32 w-32 text-yellow-300" />
                    <h2 className='text-3xl px-4'>3205</h2>
                    <p className='px-4 text-2xl text-yellow-300'>company's</p>


                </div>
                <div className='flex flex-col'>
                    <ThumbUpIcon className="h-32 w-32 text-yellow-300" />
                    <h2 className='text-3xl px-4'>200K+</h2>
                    <p className='px-4 text-2xl text-yellow-300'> FeedBack's</p>


                </div>
                <div className='flex flex-col'>
                    <UserGroupIcon className="h-32 w-32 text-yellow-300" />
                    <h2 className='text-3xl px-4'>50386</h2>
                    <p className='px-4 text-2xl text-yellow-300'>happy Client's</p>


                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;