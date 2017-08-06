
// see egg_50_util_server for a simple Express server
// see egg_50_util_server/data/profiles.json for the data

const ENDPOINT = 'http://localhost:3000/profiles'

export function getProfiles() {

    return fetch(ENDPOINT)
        .then(res => res.json())
        .catch(err => {
            console.log("TRACER error: " + err)
        })
}
