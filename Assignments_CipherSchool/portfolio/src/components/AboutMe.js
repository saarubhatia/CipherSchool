import React from 'react';
import './End';
import { ProgressBar } from 'react-bootstrap';
import 'animate.css';
import End from './End';

//~~ ABOUT ME : describes my RESUME ~~ 

const aboutMe = () => {
    return (
        <div className="container center ">
            <div className="card mt-5 mb-5" style={{ 'height': '100%' }}>
                <div className="row">
                    <div className="col-md-6">

                        <img src="https://images.unsplash.com/photo-1546975490-e8b92a360b24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" className="card-img-top mt-5" alt="..." style={{ height: 250, width: 200 }} />
                        <div className="card-body" style={{ 'height': '100%' }}>
                            <div className="skill lead ml-4">
                                <span className="float-left" >HTML5</span>
                                <span className='float-right'>85%</span>
                                <ProgressBar now={85} />
                                <span className="float-left" >CSS3</span>
                                <span className='float-right'>70%</span>
                                <ProgressBar now={70} />
                                <span className="float-left" >JavaScript</span>
                                <span className='float-right'>75%</span>
                                <ProgressBar now={80} />
                                <span className="float-left" >ReactJs</span>
                                <span className='float-right'>65%</span>
                                <ProgressBar now={65} />
                                <span className="float-left" >NodeJs</span>
                                <span className='float-right'>85%</span>
                                <ProgressBar now={80} />
                                <span className="float-left" >ExpressJs</span>
                                <span className='float-right'>70%</span>
                                <ProgressBar now={70} />
                                <span className="float-left" >C++</span>
                                <span className='float-right'>60%</span>
                                <ProgressBar now={60} />
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="title-box-2 pt-4 pt-md-0 mt-4">
                            <h2 class="title-left animate__animated animate__bounce mt-5" style={{ fontWeight: '200%' }}>About Me</h2>
                            <hr className="mb-5" style={{ width: 170, background: 'blue', height: 5 }} />
                        </div>
                        <div className="card-body lead">
                            <p>A Hardworking Software Engineer who loves to transform ideas into reality using code. I am passionate about using Javascript and Animation Libraries to create awesome user experiences.</p>    <br />
                            <p>Hands on experinece in developing web applications using the latest front-end and back-end technologies. I am fond of learning new skills and I don't give up easily on things.</p> <br />
                            <p>Full Stack developer with experience creating custom websites with ReactJs, JavaScript, HTML5, and CSS3. Strong collaboration skills and proven history of application development.</p>
                        </div>
                    </div>
                </div>
            </div>
            <End />
        </div>
    )
}

export default aboutMe;