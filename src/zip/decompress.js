import fs from 'fs';
import zlib from 'node:zlib';
import { pipeline } from 'node:stream/promises';


const fileCompress ='files/fileToCompress.txt';
const fileArchive = 'files/Archive.gz';
const unzip = zlib.createUnzip();

const decompress = async () => {
  await pipeline(
    fs.createReadStream(fileArchive),
    unzip,
    fs.createWriteStream(fileCompress),
  )

};

await decompress()