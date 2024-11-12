import './Banner.css'
function Banner(){
    return(
        <>
            <div className="banner-container">
                <div className="contents">
                    <h1>Unlimited movies, <br/> TV shows and more</h1>
                    <h3>Starts at ₹149. Cancel at any time.</h3>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                </div>
                <div className="get-started">
                    <input type="text" placeholder='Email Address' />
                    <button>Get Started</button>
                    <i class="fa-solid fa-angle-right"></i>
                </div>
            </div>
            
        </>
    )
}

export default Banner;