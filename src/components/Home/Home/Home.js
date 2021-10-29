import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Quote from '../Quote/Quote';
import Reward from '../Reward/Reward';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Quote></Quote>
            <Reward></Reward>
        </div>
    );
};

export default Home;