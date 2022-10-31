import endpoint from './api'

class DataSource {
    static searchAnime(keyword) {
        return fetch(`${endpoint.search}${keyword}&sfw`)
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson.data.length < 1) {
                    return `${keyword} is not found`
                }
                return responseJson.data
            })     
    }

    static getAnime(endpoint) {
        return fetch(endpoint)
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                if (responseJson) {
                    return Promise.resolve(responseJson.data);
                  }
            })
    }
}

export default DataSource;