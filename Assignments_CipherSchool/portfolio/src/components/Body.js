import React from 'react';
import './Body.css';
const Body = (props) => {
    const portfolioList = props.portfolioDetails.length ? (
        props.portfolioDetails.map(portfolio => {
            return (
                <div className="col-md-4"  key={ portfolio.id}>
                    <div className="card each-portfolio">
                        <div className="card-image">
                            <img src={portfolio.image} alt="new" style={{height:280}} />
                            <span className="card-title">Cute Dogs</span>
                        </div>
                        <div className="card-content">
                            <p>{portfolio.description}</p>
                        </div>
                        <div className="card-action">
                            {/* <a href="#">This is a link</a> */}
                        </div>
                    </div>
                </div>
            )
        })
    ) : (<p className='center'> No Portfolios yet....</p>)
    return (
        <div className='container center portfolios'>
            <h3>Portfolios</h3>
            <div className="row">
                {portfolioList}
            </div>
        </div>
    )
}

export default Body;