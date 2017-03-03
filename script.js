var $ = {
  ajax: function(options) {
    var xhr = new XMLHttpRequest();
    var headers = options.headers;
    var data = options.data;

    // add lifecycle callbacks
    xhr.addEventListener('load', options.success);
    xhr.addEventListener('load', options.complete);
    xhr.addEventListener('error', options.error);

    // configure the core parameters
    xhr.open(options.method, options.url, options.async);

    // send the request
    xhr.send(data);
  }
};

var optionsObject = {
  method: 'get',
  url: "https://reqres.in/api/asdfasd",
  headers: {},
  data: null,
  async: true,
  complete: function() {console.log('CALLBACK')},
  success: function() {console.log('SUCCESS')},
  error: function() {console.log('ERROR')}
};

$.ajax(optionsObject);