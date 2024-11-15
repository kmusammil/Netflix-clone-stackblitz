import { useState, useRef } from 'react';
import TrendingNowDropdowns from './TrendingNowDropdowns/TrendingNowDropdowns';

function TrendingNow() {
    



    return (
        <div className="bg-black text-white h-64">
            <div className="relative inline-block text-left mt-10 ml-20">
                {/* Button to toggle dropdown */}
                <p className="font-bold text-2xl mb-5">Trending Now</p>
                <TrendingNowDropdowns/>
            </div>
        </div>
    );
}

export default TrendingNow;
