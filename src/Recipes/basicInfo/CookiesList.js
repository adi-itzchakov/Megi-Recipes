import React, { Component } from "react";
import PropTypes from "prop-types";
import Recipe from "../Recipe.js";
import Shosanim from '../../pictures/shosanim.jpeg';

import '../../component/pictures.css'


class CookiesList extends Component {
  static defaultProps = {
    recipes: [
      {
        title: "שושנים",
        img: Shosanim,
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
        <div className="headTitle">עוגיות</div>
        <div className="recipe-list">{recipes}</div>
      </div>
    );
  }
}

export default CookiesList;
