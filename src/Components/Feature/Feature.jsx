import React from 'react'
import './Feature.css'

const Feature = () => {
  return (
    <>
    <section className='feature'>
        <div className="container">
            <div className="feature_row">
                <div className="feature_single_col">
                    <img src="Images/feature_1.png" alt="feature" />
                    <h3>99.9% Uptime</h3>
                    <p>We Keep Your Web build Online 24x7x365.
                    Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>

                </div>
                <div className="feature_single_col">
                    <img src="Images/feature_2.png" alt="feature" />
                    <h3>Blazing Fast Web Hosting</h3>
                    <p>We Keep Your Web build Online 24x7x365.
                    Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>

                </div>
                <div className="feature_single_col">
                    <img src="Images/feature_3.png" alt="feature" />
                    <h3>Free SSL Certificates</h3>
                    <p>We Keep Your Web build Online 24x7x365.
                    Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>

                </div>
                <div className="feature_single_col">
                    <img src="Images/feature_4.png" alt="feature" />
                    <h3>24x7 Friendly Support</h3>
                    <p>We Keep Your Web build Online 24x7x365.
                    Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>

                </div>
            </div>
        </div>

    </section>
    
    
    
    </>
  )
}

export default Feature