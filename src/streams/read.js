import * as fs from 'node:fs';
import * as process from 'node:process';


const file = 'files/fileToRead.txt'

async function read(){
    const str = fs.createReadStream(file)
    
    str.on('data', (buffer) => process.stdout.write(buffer))
    str.on('end', () => console.log('\nSuccess!'))
};

await read();