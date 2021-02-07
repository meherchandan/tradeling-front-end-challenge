import { API_URL } from '../config'
export type param = {
    [key: string]: string | number | undefined,
}


export const getApi = async (endpoint: string, params?: param) => {
    try {
        let url = new URL(`${API_URL}${endpoint}`);
        for (let key in params) {
            url.searchParams.set(key, String(params[key]));
        }
        const res = await fetch(url.toString(), {
            headers: {
                'Content-Type': 'application/vnd.github.v3+json',
            }
        });
        if (res.status === 404) {
            throw new Error("Service failed");
        }
        let payload = await res.json();
        return payload;
    }
    catch (err) {
        console.error(err);
        return new Error("Some Error occured");
    }

}