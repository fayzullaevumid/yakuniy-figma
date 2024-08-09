'use client'
import { useState } from 'react';
import './header.css'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }
 

    return (
        <nav className="navbar">
            <div className="navContainer">
            <span className='icon'><img className='img' src="https://www.svgrepo.com/show/460814/coffee-beans-left-1.svg" alt="" /></span>
                <a href="#" className="navLogo">𝒄𝒐𝒇𝒇𝒆𝒆𝒓𝒐𝒂𝒔𝒕𝒆𝒓𝒔</a>
                <div className='a'>
                <ul className={`${"navMenu"} ${isOpen ? "active" : ''}`}>
                    <li className="navItem">
                        <a href="/" className="navLinks">𝗛𝗢𝗠𝗘</a>
                    </li>
                    <li className="navItem">
                        <a href="/About" className="navLinks">𝗔𝗕𝗢𝗨𝗧</a>
                    </li>
                    <li className="navItem">
                        <a href="/Plan" className="navLinks">𝗖𝗥𝗘𝗔𝗧𝗘 𝗬𝗢𝗨𝗥 𝗣𝗟𝗔𝗡</a>
                    </li>
                    <a onClick={openModal}>
                        <span className='icon'>
                            <img className='iconss' src="basket.svg" alt="" />
                    </span>
                    </a>
                </ul>
                <div className="navIcon" onClick={toggleMenu}>
                    <i className={isOpen ? 'fa fa-times' : 'fa fa-bars'}>≡</i>
                </div>
                </div>
            </div>
            {
    showModal && (
        <div className='modal'>
            <div className='modal-content'>
                <h1 className='kk'>𝗢𝗿𝗱𝗲𝗿 𝗦𝘂𝗺𝗺𝗮𝗿𝘆</h1>
                <h4 className='k1'>“𝓘 𝓭𝓻𝓲𝓷𝓴 𝓶𝔂 𝓬𝓸𝓯𝓯𝓮𝓮 𝓪𝓼 𝓕𝓲𝓵𝓽𝓮𝓻, 𝔀𝓲𝓽𝓱 𝓪 <br />
                 𝓓𝓮𝓬𝓪𝓯 𝓽𝔂𝓹𝓮 𝓸𝓯 𝓫𝓮𝓪𝓷. 250𝓰 𝓰𝓻𝓸𝓾𝓷𝓭 <br />
                  𝓪𝓵𝓪 𝓒𝓪𝓯𝓮𝓽𝓲é𝓻𝓮, 𝓼𝓮𝓷𝓽 𝓽𝓸 𝓶𝓮 𝓔𝓿𝓮𝓻𝔂 <br />
                   𝓦𝓮𝓮𝓴.”</h4>
                   <p className='k2'>Is this correct? You can proceed to checkout or go back to <br />
                    plan selection if something is off. Subscription discount <br />
                     codes can also be redeemed at the checkout. </p>
       <div className='content-2'>
        <h2>$14.00/ 𝓶𝓸</h2>
            <button onClick={closeModal} id='button'>Close modal</button>
            </div>
            </div>
        </div>
    )
   }
        </nav>
    );
};

export default Header;