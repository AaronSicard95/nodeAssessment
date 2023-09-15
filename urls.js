const fs = require('fs');
const axios = require('axios');

let urls = [];
fs.readFile(process.argv[2], 'utf8', function(err, data) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  urls = data.toString().split("\n");
  //console.log(`here is ${data}`);
  for (let url of urls){
  }
  runCode();
});

runCode = async function(){
    console.log("did it");
    for(let url of urls){
        let filename = url.split("/");
        console.log(filename);
        let getreq = axios.get(url);
        getreq.then(data => {
            fs.writeFile(filename[2], data.data, "utf8", function(err){
                if(err){
                    console.log(`unable to write ${filename[2]}`);
                }else{
                    console.log(`successfully wrote ${filename[2]}`);
                }
            })
        })
        .catch(err => {
            console.log(`unable to load ${url} because of ${err}`);
        })
    }
}
