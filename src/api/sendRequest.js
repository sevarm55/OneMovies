const sendRequest = () => {
    const getRequest = async (url) => {
        const result = await fetch(url);
        const jsonRes = await result.json();
        return jsonRes;
    };
    return { getRequest };
};

export default sendRequest;