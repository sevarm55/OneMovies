import { POPULAR_MOVIES_URL } from "../../../api/URL";
import sendRequest from "../../../api/sendRequest";

const { getRequest } = sendRequest();

export const fetchPopularMoves = async () => {
    const result = await getRequest(POPULAR_MOVIES_URL);
    return result;
};
