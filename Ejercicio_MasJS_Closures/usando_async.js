

//supongo que sera algo así

async function getProcessedData(url) {
    return await downloadData(url) // returns a promise
      .catch(e => {
        return downloadFallbackData(url)  // returns a promise
      })
      .then(v => {
        return processDataInWorker(v); // returns a promise
      });
  }