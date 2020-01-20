var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    //var queryData = url.parse(_url, true).query;
    console.log("url :: "+url);
    console.log("_url :: "+_url);
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;
    if(_url == '/'){
      title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);

    fs.readFile(`data/${queryData.id}`,'utf8', function(err, description){
      //title과 h2 텍스트 동적으로 변경.
      var template = `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ol>
          <li><a href="/?id=HTML">HTML</a></li>
          <li><a href="/?id=CSS">CSS</a></li>
          <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ol>
        <h2>${title}</h2>
        <p>
           ${description} 
        </p>
      </body>
      </html>
      `;

      response.end(template);
    });
    
    

    
    
});
//3000번 포트 사용.
app.listen(3000);