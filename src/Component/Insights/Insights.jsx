import React from 'react'
import "./Insights.scss"

function Insights() {
    return (
        <section id='insign'>
            <div className="insign">
                <div className="insign_left">
                  <div className='insign_left_content'>
                  <h2>Insights to help you do what you do better, faster and more profitably.
                    </h2>
                    <p>We understand the complexities of modern markets and translate them into real business solutions for automotive, financial, insuranc.
                    </p>
                    <button className='learn'>Learn More</button>
                  </div>
                </div>
                <div className="insign_right">
                    <img src="https://preview.colorlib.com/theme/itlock/assets/img/gallery/about1.jpg.webp" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Insights