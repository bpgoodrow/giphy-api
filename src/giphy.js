export class Giphy {
  static getGif(userSearch) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://api.giphy.com/v1/gifs/search?api_key=45V33K4IKnEJwzuwTIgY3hKVOHq1sdr3&q=${userSearch}&limit=25&offset=0&rating=pg-13&lang=en`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}