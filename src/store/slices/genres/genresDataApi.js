import { GENRES_URL } from "../../../api/URL";
import sendRequest from "../../../api/sendRequest";

const {getRequest} = sendRequest()

export const fetchGenres = async () =>{
    const result = await getRequest(GENRES_URL)
    return result
}