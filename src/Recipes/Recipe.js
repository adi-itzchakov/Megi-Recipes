import React, { Component } from 'react';
import './Recipe.css';

class Recipe extends Component {
    render (){
        const {title,img}= this.props;
        const ingredients= this.props.ingredients.map((ing,index) => (
            <li key={index}>{ing}</li>
        ));
        return(
            <div className="recipe-card">
                <div className="recipe-card-img">
                    <img src={img} alt={title} />
                </div>
                <div className="recipe-card-content">
                    <h3 className="recipe-title">{title}</h3>
                    <h4>מצרכים:</h4>
                    <ul>
                        {ingredients}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Recipe;