import React from "react";
import { useState,useEffect } from "react";
import { NativeSelect } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import styles from './CountryPicker.module.css';
import { fetchCountries } from "../../Api";

const CountryPicker = ({handleCountryChange})=>{
    const [fetchedCountries,setfetchedCountries]= useState([]);
    useEffect(()=>{
  
        const fetchAPI = async ()=>{
            setfetchedCountries(await fetchCountries());
    
    }
    fetchAPI();
    },[setfetchedCountries]);
console.log(fetchedCountries);
    return (
   
    <FormControl className={styles.FormControl}>   
     <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)}>
            <option value=""> global</option>
            {fetchedCountries.map((country,i) =><option key={i} value={country}> {country} </option>)}
        </NativeSelect>
        </FormControl>
    )
    }

    export default CountryPicker;