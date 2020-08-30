import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

//~~ Get in touch with me ~~

const Contact = () => {
    return (
        <div className="container center">
            <div id="contact" class="box-shadow-full">
                <div class="row">
                    <div class="col-md-6 mt-4">
                        <div class="title-box-2">
                            <h2 class="title-left">Send a Message</h2>
                        </div>
                        <div>
                            <form method="POST" class="contactForm">
                                <div class="row">
                                    <div class="col-md-12 mb-3">
                                        <div class="form-group">
                                            <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required="" />
                                            <div class="validation">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <div class="form-group">
                                            <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required="" />
                                            <div class="validation">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-3"><div class="form-group">
                                        <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required="" /><div class="validation">
                                        </div>
                                    </div>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <div class="form-group">
                                            <textarea class="form-control" name="message" rows="5" placeholder="Write something here..." required=""></textarea>
                                            <div class="validation">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div className="mb-2">
                                            <Button variant="primary" size="lg" style={{'paddingBottom': '7%'}}>
                                                Send Message
                                            </Button>{' '}
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="title-box-2 pt-4 pt-md-0 mt-4">
                            <h2 class="title-left">Get in Touch</h2>
                        </div>
                        <div class="more-info mt-3">
                            <p class="lead">Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
                            Simply fill the from and send me an email.</p>
                        </div>
                        <div class="socials">
                            <ul style={{'whiteSpace':'nowrap'}}>
                                <li style={{ 'display': 'inline' }}>
                                    <a href="https://www.linkedin.com/in/saarubhatia/" target="_blank" rel="noopener noreferrer">
                                        <span className="mr-3"> <FontAwesomeIcon icon={faLinkedin} size="lg" className="fa-3x" /></span>
                                    </a>
                                </li>
                                <li style={{ 'display': 'inline' }}><a href="https://github.com/saarubhatia" target="_blank" rel="noopener noreferrer">
                                <span > <FontAwesomeIcon icon={faGithub} size="lg" className="fa-3x" /></span>
                                    
                                </a>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
