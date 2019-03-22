import React from 'react';
import { Link } from 'react-router-dom';

const Book = (props) => {
    return (
      
            <div className="main-content">
                <div><Link className="back" to="/books">Back</Link></div>
                <h2>{props.title}</h2>
                <div className="container">
                    <div className="image-profile" style={{ backgroundImage: "url(" + props.image + ")" }}></div>
                    <h2>{props.id}</h2>
                    <p>{props.title}</p>
                    <p>{props.publisher}</p>
                    <p>{props.author}</p>
                    <p>{props.summary}</p>
                </div> 
            </div>
        
    );
}

export default Book;