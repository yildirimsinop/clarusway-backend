http
  .createServer((req, res) => {
    if (req.url == "/") {
      res.statusCode = 404; // Default: 200
      res.statusMessage = "Not Found"; // Default: OK

      res.setHeader("Content-Type", "text/html");
      res.setHeader("another-header", "another-value");

      res.write("* Satır1");
      res.write("* Satır2");
      res.write("* Satır3");
      res.end();
    } else if (req.url == "/api") {
      if (req.method == "GET") {
        // res.writeHead(200, {
        //     'Content-Type': 'application/json',
        //     'another-header': 'another-value',
        // })

        // OVERLOAD GOOD EXAMPLE:
        res.writeHead(200, "Status Message", {
          "Content-Type": "application/json",
          "another-header": "another-value",
        });

        res.end("OK");
      } else {
        res.end("Not supporting different method.");
      }
    } else {
      res.end("Server is running");
    }
  })
  .listen(8000, () => console.log("http://127.0.0.1:8000"));
