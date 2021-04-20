import React, { Component } from 'react';
import './Recipe.css';
import {Button} from 'semantic-ui-react';

class Recipe extends Component {
    render (){
        const {title,img}= this.props;
        // const ingredients= this.props.ingredients.map((ing,index) => (
        //     <li key={index}>{ing}</li>
        // ));
        return(
            <div className="recipe-card">
                <div className="recipe-card-img">
                    <img src={img} alt={title} />
                </div>
                <div className="recipe-card-content">
                    <Button inverted color='violet' className="recipe-title">{title}</Button>
                </div>
            </div>
        );
    }
}

export default Recipe;