import './Header.css'

function Header() {


    return (
        <div className="container">
            <div className="logo">
                <img src="/netflix-3.svg" alt="netflix-logo" />
            </div>
            <div className="nav">
                <div className="lang">
                    <select className='lang-selector' name="lang-selector" id="lang-selector">
                        <option value="English">English</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className="sign-in">
                    <button>sign in</button>
                </div>
            </div>
        </div>
    )
}

export default Header