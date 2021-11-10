import React from 'react'
import { TiSocialFacebook,TiSocialInstagram,TiSocialTwitter,TiSocialPinterest } from 'react-icons/ti';
import './foter.css';

const Foter = () => {
    return (
        <footer>
          <section className='contact'>
              <ul>
                  <li>
                      CONTACT US
                  </li>
              </ul>
          </section>
          <section className='social'>
              <ul>
                  <li><TiSocialFacebook/></li>
                  <li><TiSocialInstagram/></li>
                  <li><TiSocialTwitter/></li>
                  <li><TiSocialPinterest/></li>
              </ul>
          </section>
        </footer>
    )
}

export default Foter
