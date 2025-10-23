import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer grid grid-cols-2   p-10 bg-neutral text-neutral-content lg:flex justify-between">
            <div>
                <span className="footer-title">ToyTopia</span>
                <p>A vibrant and playful online marketplace for kids' toys.<br/>Encouraging families to discover local sellers.</p>
                <p>&copy; {new Date().getFullYear()} ToyTopia. All rights reserved.</p>
            </div>
            <div>
                <span className="footer-title">Quick Links</span>
                <Link to="/" className="link link-hover">Home</Link>
                <Link to="/all-toys" className="link link-hover">All Toys</Link>
                <Link to="/my-profile" className="link link-hover">My Profile</Link>
                <Link to="/add-toy" className="link link-hover">Add a Toy</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms and conditions</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
            <div>
                <span className="footer-title">Follow Us</span>
                <div className="grid grid-flow-col gap-4">
                    <a></a>
                    <a></a>
                    <a></a>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;