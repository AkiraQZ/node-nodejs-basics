// import { access, constants, rename } from 'node:fs/promises';
import * as fs from 'node:fs/promises';

const oldName = 'files/wrongFilename.txt'
const newName = 'files/properFilename.md'

async function rename() {
  const err = new Error('FS opperation failed')
  try {
    await fs.access(oldName, fs.constants.R_OK | fs.constants.W_OK);
    fs.rename(oldName, newName)
    console.log('Success!');
  } catch(e) {
    throw err
  } 
}

await rename();