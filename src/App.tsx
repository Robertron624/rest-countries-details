import './App.scss'
import Layout from './Layout/Layout'
import SearchCountry from './components/SearchCountry'
import { useState } from 'react'

function App() {

  const [search, setSearch] = useState<string>("")

  return (
    <>
      <Layout >
        <SearchCountry searchTerm={search} setSearchTerm={setSearch} />
      </Layout>
    </>
  )
}

export default App
