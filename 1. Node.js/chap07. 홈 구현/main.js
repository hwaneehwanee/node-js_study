var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    
    if(pathname === '/'){

      if(queryData.id === undefined){
        var title = "Welcome";
        var description = "Hello, Node.js";
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
  
        response.writeHead(200);
        response.end(template);

      }else{

        fs.readFile(`data/${queryData.id}`,'utf8', function(err, description){
          //title과 h2 텍스트 동적으로 변경.
          var title = queryData.id;
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
    
          response.writeHead(200);
          response.end(template);
        });


      }

    } else {
      //에러 상태코드 404
      response.writeHead(404);
      response.end("Not Found");
    }
    
    
    
});
//3000번 포트 사용.
app.listen(3000);