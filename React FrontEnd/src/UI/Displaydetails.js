import React from "react";

// Component to Display data of th country
const DisplayData = (props) => {
  // console.log(props)
  return (
    <div>
      <hr />
      {props.countryDetails == undefined ? ""
        :
        <div>
          <b className="country-header">{props.countryDetails.map((x, i) => (<p key={i}>{x.name.common}</p>))}</b>
          <div className="country-info">
            <div className="country-details-caption">
              <p>Capital</p>
            </div>
            <div>{props.countryDetails.map((x, i) => (<p key={i} className="country-detail">{x.capital}</p>))}</div>
          </div>

          <div className="country-info">
            <div className="country-details-caption">
              <p>Population</p>
            </div>
            <div>{props.countryDetails.map((x, i) => (<p key={i} className="country-detail">{x.population}</p>))}</div>
          </div>

          <div className="country-info">
            <div className="country-details-caption">
              <p>Region</p>
            </div>
            <div>{props.countryDetails.map((x, i) => (<p key={i} className="country-detail">{x.region}</p>))}</div>
          </div>

          <div className="country-info">
            <div className="country-details-caption">
              <p>Flag</p>
            </div>
            <div>
              {props.countryDetails.map((x, i) => <img className="country-flag" src={x.flags.png}></img>)}
            </div>
          </div>


        </div>

      }
    </div>
  );
}

export default DisplayData;