import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PageNotFound from "./components/PageNotFound";
import CountryDetail from "./pages/CountryDetail";
import Layout from "./Layout/Layout";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<PageNotFound />} />
                {/* dynamic route for each country details page */}
                /* <Route path="/country/:country" element={<CountryDetail />} /> */
            </Routes>
        </Layout>
    );
}

export default App;
