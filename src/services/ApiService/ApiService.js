export default class ApiService {
  static getData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(result => resolve(result))
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  }
  /*static setData(url, obj) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      })
        .then(result => resolve(result))
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  }*/
}
