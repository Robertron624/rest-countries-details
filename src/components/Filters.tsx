import { Filter } from '../types'

import './Filters.scss'

interface Props {
    filters: Filter[],
    currentFilter: Filter | null,
    setCurrentFilter: (filter: Filter | null) => void
}

const Filters = ({filters, currentFilter, setCurrentFilter}: Props) => {
  return (
    <div className='filters flex'>
        <select value={currentFilter?.value} onChange={(e) => {
            const selectedFilter = filters.find(filter => filter.value === e.target.value)
            setCurrentFilter(selectedFilter || null)
        }
        }>
            <option value="">Filter by Region</option>
            {filters.map(filter => (
                <option key={filter.value} value={filter.value}>{filter.name}</option>
            ))}
        </select>
    </div>
  )
}

export default Filters