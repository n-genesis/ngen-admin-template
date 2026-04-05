## Using Simple Server  
**Note:** You need Node.js and npm to be installed on your system. You can download Node.js and follow the instructions on how to do that on [nodejs.org](http://nodejs.org/).

Open your terminal under the project root run the following commands:  

#### Install dependencies
```
npm install
```
#### Start server
```
npm run start-server
```

Your browser should open automatically but if not, you can visit http://localhost:3000/ and you should see the index.html page.

### Changing address and port
You can change the hostname and port in package.json:
```
"serverjs": {
    "url": "http://localhost",
    "port": 3000
}
```