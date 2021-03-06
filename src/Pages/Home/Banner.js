import React from 'react';
import chair from '../../assets/images/chair.png'
import background from '../../assets/images/bg.png'

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-center bg-cover" style={{backgroundImage: `url("${background}")`}}>
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='chair' class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl text-accent font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button class="btn btn-primary text-white font-bold uppercase bg-gradient-to-r from-primary to-secondary ">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;