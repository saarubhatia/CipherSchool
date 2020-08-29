import React from 'react';
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const End = (props) => {

    return (
        <div className='container center'>
            <h2>Contact</h2>
            <p>Get in touch with us</p>
            <Link to="/contact"> <Button variant="outline-info btn-lg" size="lg" style={{'width': '20%' , 'height': '55%' , 'marginBottom':'5%' }}>
            <FontAwesomeIcon icon={faPhone} style={{'marginRight':'10%' }} />
                Contact Me </Button>{' '}
            </Link>
            
        </div>
    )

}

export default End;