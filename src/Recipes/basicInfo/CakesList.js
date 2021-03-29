import React, { Component } from "react";
import PropTypes from "prop-types";
import Recipe from "../Recipe.js";
import background1 from '../../pictures/background1.jpg';

import '../../component/pictures.css'


class CakesList extends Component {
  static defaultProps = {
    recipes: [
      {
        title: "",
        ingredients: [],
        img: "",
      },
    ],
  };

  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object),
  };

  render() {
    const recipes = this.props.recipes.map((r, index) => (
      <Recipe key={index} {...r} />
    ));

    return (
      <div>
        <img className="background1" src={background1} alt="background1"/>
        <div className="headTitle">עוגות</div>
        <div className="recipe-list">{recipes}</div>
      </div>
    );
  }
}

export default CakesList;
