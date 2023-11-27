import { Route, Routes } from "react-router"
import Layout from "../pages/Layout/Layout"
import HomePage from "../pages/HomePage/HomePage"
import MoviesPage from "../pages/MoviesPage/MoviesPage"
import TvSeriesPage from "../pages/TvSeriesPage/TvSeriesPage"
import SearchPage from "../pages/SearchPage/SearchPage"
import MoviesDetailPage from "../pages/MoviesDetailPage/MoviesDetailPage"
import TvSerIesDetailPages from "../pages/TvSerIesDetailPages/TvSerIesDetailPages"

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/moviesPage" element={<MoviesPage />} />
                    <Route path="/moviesPage/:id" element={<MoviesDetailPage />} />
                    <Route path="tvSeriesPage" element={<TvSeriesPage />} />
                    <Route path="tvSeriesPage/:id" element={<TvSerIesDetailPages />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="*" element={<h1>Page NotFound 404</h1>} />
                </Route>
            </Routes>
        </div>
    )
}

export default AppRouter