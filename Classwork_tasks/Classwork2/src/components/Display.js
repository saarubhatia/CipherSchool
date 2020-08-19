import React  from 'react';
import './display.css';
import Loading from './Loading';
import { Component } from 'react';
class Display extends React.Component{


    handledelete(item){
        const data = this.props.data.filter(i => i.id !== item.id)
        this.setState({data})
      }
    // const courseDetails = props.courseDetails;

    // Conditional Rendering    {condition ? () : ()}

     courseList = courseDetails.length ? courseDetails.map( (element) => {
        // Object Destructuring
        // const title = element.title;
        // const id = element.id;

        const { title, details, instructor, id } = element;
        return (
            <div className='course-card' key={id}> 
                <h3>Course Name: {title} </h3>
                <p>Details: {details}</p>
                <p>Instructor:<i>{instructor}</i></p>
                <span>{element.name}</span> <button onClick={this.delete.bind(this, element)}>Delete</button>
           </div>        
        )
    }) : ( <Loading />)
 render(){
    return(
         <div className='course-display'>
            {courseList} 
        </div>     
    );
    }
}

export default Display;