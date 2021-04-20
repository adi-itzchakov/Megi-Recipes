import React, { Component } from "react";
import PropTypes from "prop-types";
import Recipe from "../Recipe.js";
import './BucharimList.css';
import '../../component/pictures.css';
import Dushpere from '../../pictures/dushpere.jpeg';
import GrapeLeaves from '../../pictures/GrapeLeaves.jpg';
import SoupUro from '../../pictures/soupuro.jpg';
import Bahsh from '../../pictures/bahsh.jpeg';
import Mantu from '../../pictures/mantu.jpeg';
import Osvo from '../../pictures/osvo.jpeg';
import Burecas from '../../pictures/burecas.jpeg';
import Kovroran from '../../pictures/kovroran.jpeg';

// import Makaron_Kovroran from '../pictures/makaron-kovroran.jpeg';
// import Haltisvo from '../pictures/haltisvo.jpeg';

class BucharimList extends Component {
  static defaultProps = {
    recipes: [
      {
        title: "דושפרה",
        img: Dushpere,
      },
      {
        title: "עלי גפן",
        img: GrapeLeaves,
      },
      {
        title: "מרק אורו",
        img: SoupUro,
      },
      {
        title: "באחש",
        img: Bahsh,
      },{
        title: "מנטו",
        img: Mantu,
      },
      {
        title: "אוסבו",
        img: Osvo,
      },
      {
        title: "בורקסים",
        img: Burecas,
      },
      {
        title: "קוורורן",
        img: Kovroran,
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
        <div className="color-container">
          <div className="headTitle">מאכלים בוכריים</div>
          <div className="recipe-list">{recipes}</div>
        </div>
      </div>
    );
  }
}

export default BucharimList;
