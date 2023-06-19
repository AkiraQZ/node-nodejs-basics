import * as fs from 'node:fs/promises';

const name = 'fileToRemove.txt'
const path = 'files/'

const err = new Error('FS opperation failed')

async function remove() {
  try {
    await fs.access(path+name, fs.constants.R_OK | fs.constants.W_OK);
    fs.unlink(path+name)
    console.log('Succesfuly deleted');
  } catch(e) {
    throw err
  } 
}

await remove();