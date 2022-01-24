

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
        return {messageStatus: 'error'}
    }
}
