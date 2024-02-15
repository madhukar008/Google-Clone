import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><Link to={'/home'}>Home</Link></li>
                <li className="nav-item mb-2"><Link to={'/about'}>About</Link></li>
                <li className="nav-item mb-2"><Link to={'/features'}>Features</Link></li>
                <li className="nav-item mb-2"><Link to={'/shopping'}>Shopping</Link></li>
                <li className="nav-item mb-2"><Link to={'/contact'}>Contact</Link></li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
              <li className="nav-item mb-2"><Link to={'/home'}>Home</Link></li>
                <li className="nav-item mb-2"><Link to={'/about'}>About</Link></li>
                <li className="nav-item mb-2"><Link to={'/features'}>Features</Link></li>
                <li className="nav-item mb-2"><Link to={'/shopping'}>Shopping</Link></li>
                <li className="nav-item mb-2"><Link to={'/contact'}>Contact</Link></li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
              <li className="nav-item mb-2"><Link to={'/home'}>Home</Link></li>
                <li className="nav-item mb-2"><Link to={'/about'}>About</Link></li>
                <li className="nav-item mb-2"><Link to={'/features'}>Features</Link></li>
                <li className="nav-item mb-2"><Link to={'/shopping'}>Shopping</Link></li>
                <li className="nav-item mb-2"><Link to={'/contact'}>Contact</Link></li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                  <button className="btn btn-primary" type="button">Subscribe</button>
                </div>
              </form>
            </div>
           </div> 

      <div className="d-flex flex-column flex-sm-row justify-content-between py-0 my-0 border-top">
        <p className='p-1'>© 2023 Company, Inc. All rights reserved.</p>
      </div>
    </footer >
      </div >
    </>
  );
};

export default Footer;
