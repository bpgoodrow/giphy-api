import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';

$(document).ready(function () {
  $('#searchGif').click(function () {
    const userSearch = $('#gifSearch').val();
    $('#gifSearch').val("");

    let request = new XMLHttpRequest();
    const url = `http://api.giphy.com/v1/gifs/search?api_key=45V33K4IKnEJwzuwTIgY3hKVOHq1sdr3&q=${userSearch}&limit=25&offset=0&rating=pg-13&lang=en`;

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        /* eslint-disable */
        getElements(response);
        /* eslint-enable*/
      }
    };

    request.open("GET", url, true);
    request.send();
    /*eslint-disable*/
    function getElements(response) {
      for (let i = 0; i < `${response.data.length}`; i++) {
        $('.showData').append(`<img src="${response.data[i].images.original.url}">`);
      };
    }
    /*eslint-enable*/
  });
});
