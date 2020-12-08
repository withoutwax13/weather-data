import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.stormglass.io/v2',
    headers: {
        'Authorization': '72491c7a-3239-11eb-8db0-0242ac130002-72491d24-3239-11eb-8db0-0242ac130002',
        'Content-Type': 'application/json'
    }
})