import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { updateCityData } from './storeFiles/searchInterfaceSlice'
import styles from './SearchInteface.module.css';
import classNames from 'classnames';

function SearchInteface(): JSX.Element {
  const [inputValue, setInputValue] = useState(''),
    [measureUnit, setMeasureUnit] = useState('metric'),
    dispatch = useAppDispatch(),
    status = useAppSelector((state) => state.searchInterface.status),
    buttons = ["metric", "imperial", "kelvin"]

  function updateDisplay(city: String, units: String): void {
    dispatch(updateCityData({ name: city, units: units }))
  }

  function setNewMeasureUnit(unit: string): void {
    setMeasureUnit(unit)
    updateDisplay(inputValue, unit)
  }

  return (
    <div className="SearchInteface">
      <input className={classNames(styles.searchInput, { [styles.wrongData]: status === "failed" })}
        value={inputValue}
        placeholder="Insert a city"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            updateDisplay(inputValue, measureUnit)
          }
        }} />
      <br />
      <button className={styles.button} onClick={() => updateDisplay(inputValue, measureUnit)}>Search</button>
      <div className={styles.label}>Change the measure unit:</div>
      <div>
        {buttons.map((btnName: string) => <button className={classNames(styles.button, { [styles.activeButton]: measureUnit === btnName })} onClick={() => setNewMeasureUnit(btnName)}>{btnName}</button>)}
      </div>
    </div>
  );
}

export default SearchInteface;
