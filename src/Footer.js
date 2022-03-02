import React from 'react';
import facebook from './fb.png';
import instgram from './instgrm.png';
import twitter from './twitter.png';
import './index.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className="m-top_xx-large">
                <div className='End'>
                    <div className='Row'>
                        <div className='Col-6'>
                            <ul>
                                <li className='Foot'>
                                    <a href='www.facebook.com'><img src={facebook} alt="Facebook" /></a>
                                </li>
                                <li className='Foot'>
                                    <a href='www.twitter.com'><img src={twitter} alt="Twitter" /></a>
                                </li>
                                <li className='Foot'>
                                    <a href='www.instagram.com'><img src={instgram} alt='Instagram' /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer