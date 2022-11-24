//  REQUESTER

const host = 'http://localhost:3030/'

async function request(url, options) {
    try {
        const response = await fetch(host + url, options);
        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.message)
        }
        try {
            debugger

            if (response.status === 204) {
                return response
            }

            const data = await response.json();
            return data
        } catch (err) {
            alert(err.message)
            return err
        }
    } catch (error) {
        alert(error.message)
        return error
    }

}

function getOption(method, body) {
    const options = {
        method,
        headers: {} 
    }

    const user = sessionStorage.getItem('userData')

    if (user) {
        const token = user.accessToken;
        options.headers["X-Authorization"] = token
        
    }

    if (body) {
        options.body = JSON.stringify(body);
        options.headers["content-type"] = "application/json"
    }
    return options
}

export async function get(url) {
    return await request(url, getOption("GET"))
}

export async function post(url, data) {
    return await request(url, getOption("POST", data ))
}

export async function put(url, data) {
    return await request(url, getOption("PUT", data))
}

export async function del(url) {
    return await request(url, getOption("DELETE"))
}