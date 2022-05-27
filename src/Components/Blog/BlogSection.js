import React from 'react';
import Footer from '../Shared/Footer';
import BlogFoure from './BlogFoure';
import BlogOne from './BlogOne';
import BlogThree from './BlogThree';
import BlogTow from './BlogTow';

const BlogSection = () => {
    return (
        <div className='p-4 m-2'>
            <h1 className='text-2xl font-semibold text-blue-400 text-center'> Blog section</h1>
            <BlogOne></BlogOne>
            <BlogTow></BlogTow>
            <BlogThree></BlogThree>
            <BlogFoure></BlogFoure>
            <Footer></Footer>

        </div>
    );
};

export default BlogSection;