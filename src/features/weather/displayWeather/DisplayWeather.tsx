import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import Spinner from '../../Spinner/Spinner'
import styles from './DisplayWeather.module.css';
import Line from './line/Line'
import { CityDataInterface } from "../searchInterface/storeFiles/searchInterfaceSlice"

function DisplayWeather(): JSX.Element {
  const cityObject: CityDataInterface = useAppSelector((state) => state.searchInterface.cityData),
    status = useAppSelector((state) => state.searchInterface.status)

  if (status === "loading") {
    return <div className={styles.displayWeatherWrapper}><Spinner /></div>
  }

  return (
    <div className={styles.displayWeatherWrapper}>
      Results for searched city:
      <div className={styles.displayWeather}>
        {Object.keys(cityObject).map((key) => {
          const keyValue = cityObject[key as keyof CityDataInterface]
          return <Line key={key} keyString={key} keyValue={keyValue} />
        })}
      </div>
    </div>
  );
}

export default DisplayWeather;
