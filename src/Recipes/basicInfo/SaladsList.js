import React, { Component } from "react";
import PropTypes from "prop-types";
import Recipe from "../Recipe.js";
import saladsImg from '../../pictures/saladsbackground.jpg';

import '../../component/pictures.css'


class SaladsList extends Component {
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
        <img className="saladsImg" src={saladsImg} alt="saladsImg"/>
        <div className="headTitle">סלטים</div>
        <div className="recipe-list">{recipes}</div>
      </div>
    );
  }
}

export default SaladsList;
