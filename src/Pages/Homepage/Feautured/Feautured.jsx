import React from 'react';
import Sectiontitle from '../../../Components/Sectiontitle/Sectiontitle';
import featuredimg from"../../../assets/home/featured.jpg"
import "./Featured.css"
const Feautured = () => {
    return (
        <div className='featured-item  bg-fixed pt-8 my-20'>
            <Sectiontitle    headingColor="text-white"subHeadingColor="text-yellow-400" heading={"FROM OUR MENU"} subHeading={"Check it Out"} />
            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-60 text-center px-8 py-16'>
                <div>
                    <img src={featuredimg} alt="" />
                </div>
             <div className='md:ml-10'>
                <p>Aug 20,2026</p>
                <p>WHERE I CAN GET SOME</p>
                <p>
                    Explore the chef's handpicked favorites from our diverse menu. Whether you're craving something sweet, fresh, 
                    or cheesy – we've got a taste for every mood.From our kitchen to your plate – enjoy our top selections crafted with passion.
                     Don’t miss out on our must-try desserts, crisp salads, and cheesy pizzas
                </p>
                <button className='btn btn-outline border-0 border-b-4 '>Read More</button>
             </div>
            </div>
        </div>
    );
};

export default Feautured;
