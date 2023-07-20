import './CountryDetail.scss'
import {useParams} from 'react-router-dom'

const CountryDetail = () => {

    const {country} = useParams()

  return (
    <div className='country-details'>
        <h1>
            This is the country detail page for {country}
        </h1>
    </div>
  )
}

export default CountryDetail