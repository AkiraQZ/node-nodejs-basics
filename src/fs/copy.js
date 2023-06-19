import * as fs from 'node:fs/promises';
import ncp from "ncp";

const newDir = 'files_copy/'
const oldDir = 'files/'
const err = new Error('FS opperation failed')

async function copy() {
  try {
    await fs.access(newDir, fs.constants.R_OK | fs.constants.W_OK);
    console.log(err);
  } catch (e) {
  try {
    await fs.access(oldDir, fs.constants.R_OK | fs.constants.W_OK);
    ncp(oldDir, newDir);
    console.log('Success!');
  }
  catch (e){
      console.log(err);
    }
  } 
}

await copy();
