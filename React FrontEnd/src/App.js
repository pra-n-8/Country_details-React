import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import SearchPanel from './UI/SelectCountryPanel';
import DisplayData from './UI/Displaydetails';
import Loading from './UI/Loading';

function App() {

  // initializing 
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState("http://localhost:3600/all");
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countryDetails, setcountryDetails] = useState();
  
  // Get request to get all the countries for select
  const getCountries = useCallback(async () => {
    setLoading(true);
    fetch(link)
      .then(result => result.json())
      .then(data => (setCountries(data), setLoading(false)))
      .catch(error => console.log(error));

  }, []);

  // To run at the start of the page load
  useEffect(() => {
    if (countryDetails == undefined) {
      getCountries();
    }
  }, [getCountries, countryDetails])

  // Get data of the selected country
  function getCountryData(country) {
    setLoading(true);
    fetch(`http://localhost:3600/country/${country}`)
      .then(result => result.json())
      .then(data => (setcountryDetails(data), setLoading(false)))
      .catch(error => console.log(error))
  }

  // Get the selected option of the user
  function getSelectedCountry(selectedCountry) {
    setcountryDetails(undefined)
    setSelectedCountry(selectedCountry);
    getCountryData(selectedCountry);
  }

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col'></div>
          <div className='col'>
            <div className={countryDetails==undefined?'search-panel panel-select':'search-panel panel-result'}>
              {
                // check if request has a response, if not show loading spinner
                loading ? <Loading /> :
                  <SearchPanel countries={countries} getSelectedCountry={getSelectedCountry} />
              }
              {
                //Diaplay Conutry details if present
                countryDetails==undefined?'':
                <DisplayData countryDetails={countryDetails} />
              }
            </div>
          </div>
          <div className='col'></div>
        </div>
      </div>
    </div>
  );
}
export default App;
