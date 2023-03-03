import React from 'react'
import "./Footer.scss"
function Footer() {
    return (
        <footer>
            <div className='footer_width'>
                <div className='Footer_contact_box'>
                    <div className='footer_logo'>
                        <img src='https://mediacity.co.in/riorelax/assets/img/logo/logo.png' />
                    </div>
                    <div className='footer_context'>
                        <div className='context'>
                            <i class="fa-solid fa-phone"></i>
                            <span>+994 51 697 79 77</span>
                        </div>
                        <div className='context'>
                            <i class="fa-solid fa-envelope"></i>
                            <span>qurbanovqurban2003@gmail.com</span>
                        </div>
                        <div className='context'>
                            <i class="fa-solid fa-location-dot"></i>
                            <span>Suraxani Baku</span>
                        </div>
                    </div>
                </div>
                <div className='Footer_contact_box_one'>
                    <div className='footer_title'>
                        <h3>Our Links</h3>
                    </div>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Contact Us</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className='Footer_contact_box_one'>
                    <div className='footer_title'>
                        <h3>Our Links</h3>
                    </div>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Contact Us</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className='Footer_location_box'>
                    <h3>Location</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.428674496238!2d49.85175681525654!3d40.37719087936978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d079efb5163%3A0xc20aa51a5f0b5e01!2sCode%20Academy!5e0!3m2!1sen!2saz!4v1677328863482!5m2!1sen!2saz" 
                 allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            {/* <div className='Footer_author'>
                <h3>Qurban Dayi</h3>
            </div> */}
        </footer>
    )
}

export default Footer