import * as fs from 'node:fs';
import * as process from 'node:process';


const file = 'files/fileToWrite.txt';


async function write(){
    const wrStream = fs.createWriteStream(file)
    process.stdin.on('data', function(data) {
        wrStream.write(data)
    })
}; 


await write();