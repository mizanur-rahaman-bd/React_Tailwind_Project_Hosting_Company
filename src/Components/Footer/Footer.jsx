import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer className='footer'>
      <div className="container">
        <div className="footer_row">
          <div className="footer_logo_col">
            <div>
              <img src="Images/footer_logo.png" alt="footer" />
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
            </div>

          </div>
          <div className="footer_service_col">
            <h4>Service</h4>
            <ul>
              <li><Link to={''}>Domain</Link></li>
              <li><Link to={''}>Shared Hosting</Link></li>
              <li><Link to={''}>Cloud Hosting</Link></li>
              <li><Link to={''}>Private Hosting</Link></li>

            </ul>

          </div>
          <div className='footer_host_col'>
            <h4>Hosting</h4>
            <ul>
              <li><Link to={''}>Cheap Hosting</Link></li>
              <li><Link to={''}>Hosting Wordpress</Link></li>
              <li><Link to={''}>Email Hosting</Link></li>
              <li><Link to={''}>Hosting Unlimited</Link></li>
            </ul>

          </div>
          <div className="footer_company_col">
            <h4>Company</h4>
            <ul>
              <li><Link to={''}>About</Link></li>
              <li><Link to={''}>Career</Link></li>
              <li><Link to={''}>Contact Us</Link></li>
            </ul>

          </div>
          <div className="footer_help_col">
            <h4>Help</h4>
            <ul>
              <li><Link to={''}>FAQ</Link></li>
              <li><Link to={''}>Help support</Link></li>
            </ul>

          </div>
        </div>
      </div>

    </footer>
    
    </>
  )
}

export default Footer