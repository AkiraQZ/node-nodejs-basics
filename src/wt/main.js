import { Worker } from 'node:worker_threads';
import os from 'node:os';

const { log } = console;

function WorkRes(status, value) {
    this.status = status;
    this.data = value;
}

function createWorker(counter) {
    return new Promise((resolve) => {
        const worker = new Worker('./src/wt/worker.js', { workerData: counter });

        worker.on('message', (value) => resolve(new WorkRes('resolved', value)));

        worker.on('error', () => resolve(new WorkRes('error', null)));
    });
}

function* workerGenerator(cpuCount) {
    let startCPUCounter = 10 + i;
    for (let index = 0; index < cpuCount; index++) {
        yield createWorker(startCPUCounter);
        startCPUCounter += 1;
    }
}

const performCalculations = async () => {
    const cpusCount = os.cpus().length;
    const promiseArr = [];
    for (let i = 0; i < cpusCount; i++) {
        promiseArr.push(createWorker(9 + i));
    }
    const result = await Promise.allSettled(promiseAr);
    const resultArr = result.map((answer) => answer.value);
    log(resultArr);
};

await performCalculations();