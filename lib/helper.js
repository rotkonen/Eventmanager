const BASE_URL = "localhost:3000"

export const getEvent = async () => {
    const response = await fetch(`${BASE_URL}/api/users`)
    const json = await response.json()

    return json;
}