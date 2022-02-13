import React from 'react';

interface PropsInterface {
  keyString: String,
  keyValue: String | Object
}

const Line: Function = ({ keyString, keyValue }: PropsInterface): JSX.Element | JSX.Element[] | null => {
  if (typeof keyValue !== 'object') {
    return (
      <>
        <div>{keyString}:</div>
        <div>{keyValue}</div>
      </>
    )
  } else if (typeof keyValue === 'object') {
    return Object.keys(keyValue).map(nextKey => {
      const nextValue = keyValue[nextKey as keyof Object]
      return (
        <React.Fragment key={nextKey}>
          <div style={{ color: "rgb(167, 28, 28)", border: "none" }}>{nextKey}:</div>
          <div style={{ border: "none" }}></div>
          {Object.keys(nextValue).map(afterNextKey => {
            const afterNextValue = nextValue[afterNextKey as keyof Object]
            return <Line key={afterNextKey} keyString={afterNextKey} keyValue={afterNextValue} />
          })}
        </React.Fragment>
      )
    })
  }
  return null
}

export default Line;
