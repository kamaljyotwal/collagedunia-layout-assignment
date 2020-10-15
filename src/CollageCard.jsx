// The main dumb component handling all the display logic of the cards.

import React from "react";
import "./collageCard.css";

export default function CollageCard({ data }) {
  // rating star coloring logic according to rating given in data
  function starFunction(value) {
    return <div className="starsInner" style={{ width: value * 2 + "0" + "%" }}></div>;
  }

  return (
    <div className="cardContainer">
      {/* content coming over the image */}
      <div className="imgdiv">
        <img src={require("./Resources/college_02.jpg")} alt=''/>
        <div className="colorOverlay"></div>
        {data.promoted && <span className="promoted">Promoted</span>}
        <div className="ratingDiv">
          <span>{data.rating}/5</span>
          <br />
          <span>{data.rating_remarks}</span>
        </div>
        <span className="onImageTag bestCollageTag">{data.tags[0]}</span>
        <span className="onImageTag distanceTag">{data.tags[1]}</span>
        <p className="rankingP">#{data.ranking}</p>
      </div>

      {/* below image  */}
      <div className="textcontainer">
        {/* left side content */}
        <div className="leftpanel">
          <span className="collagename">{data.college_name}</span>
          {/* showing the ratings in form of stars */}
          <div className="starDiv">
            <div className="starsOuter">{starFunction(data.rating)}</div>
          </div>
          <p className="nearestplaceline">
            <span>{data.nearest_place[0]}</span> | <span>{data.nearest_place[1]}</span>
          </p>
          <p className="distanceline">
            <span>
              <b>94% Match : </b>
            </span>
            {data.famous_nearest_places}
          </p>
        </div>
        {/* rightside content*/}
        <div className="rightpanel">
          <div>
            <p className="delprice">
              <i class="fa fa-rupee-sign rupee1"></i>
              <del>{data.original_fees}</del>
              <span>
                <i class="fa fa-circle pricetagicon" aria-hidden="true"></i>
                {data.discount}
              </span>
            </p>
            <span className="price">
              <i class="fa fa-rupee-sign rupee2"></i>
              {data.discounted_fees}
            </span>
            <p className="feeCycleInfo">{data.fees_cycle}</p>
          </div>
        </div>
      </div>
      <div className="lastline">
        <p className="offertext">{data.offertext}</p>
        <div className="aminimitiesDiv">
          <span>{data.amenties[0]} </span>
          <i class="fa fa-circle faAminities" aria-hidden="true"></i>
          <span> {data.amenties[1]}</span>
        </div>
      </div>
    </div>
  );
}
