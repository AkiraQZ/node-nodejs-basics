import * as fs from 'node:fs/promises';


const file = 'files/fileToRead.txt'
const err = 'FS operation failed'


async function read(){
    try {
        await fs.access(file, fs.constants.R_OK | fs.constants.W_OK)
        const content = await fs.readFile(file ,{ encoding: 'utf8' })
        console.log(content);
      } catch(e) {
        throw err
      } 
};

await read();