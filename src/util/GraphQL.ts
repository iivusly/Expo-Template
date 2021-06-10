import axios from 'axios'

class GraphQL {
    URL: string

    constructor(URI: string) {
        this.URL = URI
    }

    fetch(query: string) {
        return new Promise<any>((resolve, reject) => {
            axios.post(this.URL, JSON.stringify({
                query: query
            }), {
                headers: {
                    'content-type': 'application/json'
                }
            }).then(async (data) => {
                resolve(data.data.data)
            }).catch(err => {
                reject(err)
            })
        })

    }
}

export default GraphQL