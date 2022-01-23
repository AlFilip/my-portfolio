import axios from 'axios';

export async function postData(url = 'http://localhost:3010/send', payload = {}) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        })
        return await response.json()
    } catch (e) {
        console.log(e)
    }
}

export const api = {
    sendMessage: async function (payload) {
        // return fetch('http://localhost:3010/send', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(payload)
        // })

        return await axios.post('http://localhost:3010/send', payload)
        // return postData('http://localhost:3010/send', payload)
    }
}