import React from 'react';
import Banner from '../Homepage/Banner';
import Category from '../Homepage/Category/Category';
import Bistrocard from '../Homepage/Bistrocard/Bistrocard';
import Popularmenu from '../Homepage/Popularmenu/Popularmenu';
import Callus from '../Homepage/Callus/Callus';
import Addcart from '../Homepage/Addcart/Addcart';
import Feautured from '../Homepage/Feautured/Feautured';
import Testimonial from '../Homepage/Testimonial/Testimonial';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
                   <Helmet>
                  <title>Bistro Boss |Home</title>
                </Helmet>
          <Banner></Banner>
          <Category></Category>
          <Bistrocard></Bistrocard>
          <Popularmenu></Popularmenu>
          <Callus></Callus>
          <Addcart></Addcart>
          <Feautured></Feautured>
          <Testimonial></Testimonial>
        </div>
    );
};

export default Home;