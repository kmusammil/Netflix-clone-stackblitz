import './Header.css'
import { useState } from 'react'

function Header() {
    const [dropdownVisible, setDopdrownVisible] = useState(false)
    const toggleDropdown=()=>{
        setDopdrownVisible(!dropdownVisible)
    }

    const [lang, setLang] = useState('English')
    const handleLang=(selectedLang)=>{
        setLang(selectedLang)
    }
    return (
        <div className="container">
            <div className="logo">
                <img src="/netflix-3.svg" alt="netflix-logo" />
            </div>
            <div className="nav">
                <div onClick={toggleDropdown} className="language-selector">
                    <i className="fas fa-globe"></i>
                    {lang}
                    <i className="fas fa-caret-down"></i>
                    <div className={`dropdown ${dropdownVisible ? 'show' : ''}`}>
                        <a href="#" key='English' onClick={()=>{handleLang('English')}}>English</a>
                        <a href="#" key='Spanish' onClick={()=>{handleLang('Spanish')}}>Spanish</a>
                        <a href="#" key='French' onClick={()=>{handleLang('French')}}>French</a>
                        <a href="#" key='German' onClick={()=>{handleLang('German')}}>German</a>
                    </div>
                </div>
                <div className="sign-in">
                    Sign In
                </div>
            </div>



        </div >
    )
}

export default Header