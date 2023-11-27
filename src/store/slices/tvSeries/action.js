import { fetchTvSeries } from "./tvSeriesDataApi";

export const actionTvSeries = () => {
    return async (dispatch) => {
        const result = await fetchTvSeries();
        dispatch({ type: "fetchTvSeries", payload: result.results });
    };
};
