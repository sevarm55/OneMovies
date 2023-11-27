export const initialTvSeries = []

export const tvSeriesReducer = (state = initialTvSeries,action) => {
    switch (action.type) {
        case "fetchTvSeries" :
            return action.payload
        default :
            return state
    }
}


export const selectTvSeries = (state) => state.tvSeries