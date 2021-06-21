import React from 'react';

import Cards from './components/Cards/Cards';
import Charts from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import { fetchData } from './Api';
import share from './components/images/share.png';

class App extends React.Component {
  state = {
    data:{},
    country :'',

  }

 async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});

    //console.log(data)
  }
  handleCountryChange = async (country)=>{
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    this.setState({data: fetchedData,country: country}); 
  }
  render (){
    const {data,country} =this.state;
    return(
     
      <div className={styles.container}>
      <img className={styles.image} src={share} alt='COVID-19'/>
      <Cards  data={data} />
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Charts data={data} country={country}/>
    

        </div>
    
    )
  }
}

export default App;
