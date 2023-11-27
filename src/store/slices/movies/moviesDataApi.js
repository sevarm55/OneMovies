import { MOVIES_URL } from "../../../api/URL";
import sendRequest from "../../../api/sendRequest";

const { getRequest } = sendRequest();

export const fetchMovies = async () => {
    const result = await getRequest(MOVIES_URL);
    return result;
};
