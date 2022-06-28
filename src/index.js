import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import { Giphy } from './Giphy.js'


function clearFields() {
  $('#gifSearch').val("");
}

$(document).ready(function () {
  $('#searchGif').click(function () {
    const userSearch = $('#gifSearch').val();
    clearFields();
    let promise = Giphy.getGif(userSearch);
    promise.then(function(response) {
      const body = JSON.parse(response);
      for (let i = 0; i < `${body.data.length}`; i++) {
      $('.showData').append(`<img src="${body.data[i].images.original.url}">`);
    }}, function (error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});

// $(document).ready(function () {
//   $('#searchGif').click(function () {
//     const userSearch = $('#gifSearch').val();
//     $('#gifSearch').val("");

//     let request = new XMLHttpRequest();
//     const url = `http://api.giphy.com/v1/gifs/search?api_key=45V33K4IKnEJwzuwTIgY3hKVOHq1sdr3&q=${userSearch}&limit=25&offset=0&rating=pg-13&lang=en`;

//     request.onreadystatechange = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         const response = JSON.parse(this.responseText);
//         /* eslint-disable */
//         getElements(response);
//         /* eslint-enable*/
//       }
//     };

//     request.open("GET", url, true);
//     request.send();
//     /*eslint-disable*/
//     function getElements(response) {
//       for (let i = 0; i < `${response.data.length}`; i++) {
//         $('.showData').append(`<img src="${response.data[i].images.original.url}">`);
//       };
//     }
//     /*eslint-enable*/
//   });
// });
