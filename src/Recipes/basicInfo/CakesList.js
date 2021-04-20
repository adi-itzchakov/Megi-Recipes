import React, { Component } from "react";
import PropTypes from "prop-types";
import Recipe from "../Recipe.js";

import '../../component/pictures.css'


class CakesList extends Component {
  static defaultProps = {
    recipes: [
      {
        title: "",
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
      <div className="color-container">
        <div className="headTitle">עוגות</div>
        <div className="recipe-list">{recipes}</div>
      </div>
    );
  }
}

export default CakesList;
