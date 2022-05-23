import React from 'react';
import { useNavigate } from 'react-router-dom';
import useParts from '../../Hooks/useParts';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import CustomerReview from './CustomerReview';
import ToolsCart from './ToolsCart';

const Home = () => {
    const [parts] = useParts();
    const sortData = parts.slice(0, 3);
    const navigate = useNavigate();
    const show_more = () => {
        navigate('/all_products')
    }

    return (
        <div>

            <Banner></Banner>
            <div>
                <h1 className='text-4xl font-bold text-yellow-400 text-center'>Collection</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:ml-10 '>
                    {

                        sortData.map(data => <ToolsCart
                            key={data._id}
                            parts={data}

                        ></ToolsCart>)
                    }

                </div>
                <div className='flex justify-center m-4'>
                    <button class="btn btn-warning" onClick={show_more}>Show More</button>
                </div>
            </div>
            <BusinessSummary></BusinessSummary>
            <CustomerReview></CustomerReview>
            <Footer></Footer>

        </div>
    );
};

export default Home;