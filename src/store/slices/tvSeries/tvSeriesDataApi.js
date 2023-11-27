import { TVSERIES_URL } from "../../../api/URL";
import sendRequest from "../../../api/sendRequest";

const {getRequest} = sendRequest()

export const fetchTvSeries = async () => {
    const result = await getRequest(TVSERIES_URL)
    return result
}