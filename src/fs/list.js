import * as fs from 'node:fs/promises';


const path = 'files/'
const err = 'FS operation failed'
const files = await fs.readdir(path);


async function list(){
    try {
        await fs.access(path, fs.constants.R_OK | fs.constants.W_OK)
        for (const file of files)
        console.log(file);
      } catch(e) {

        throw err
      } 
};

await list();