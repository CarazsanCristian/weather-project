import { request, gql } from 'graphql-request'
export const getCityByNameAndUnits: Function = (name: String, units: String) => {
  const query = gql`
{
    getCityByName(name: "${name}", config: { units: ${units} }) {
      country
      name
      weather {
        temperature {
          actual
          feelsLike
          min
          max
        }
        summary {
          title
          description
        }
        wind {
          speed
          deg
        }
        clouds {
          all
          visibility
          humidity
        }
    }
  }
}
`
  console.log(name, units)
  return request('https://graphql-weather-api.herokuapp.com/', query)
    .then((res) => res.getCityByName ? { data: res.getCityByName } : { data: null })
    .catch((err) => { console.log(err) })
}