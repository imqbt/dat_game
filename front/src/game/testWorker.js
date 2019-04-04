export default () => {
  self.addEventListener('message', event => { // eslint-disable-line no-restricted-globals
    try {
      // eslint-disable-next-line
      const result = eval(event.data);
      postMessage({ type: 'result', content : result });
    } catch(error) {
      if(error.lineNumber) {
        postMessage({ type: 'error', content: error.message + " on line " + (error.lineNumber-2) });
      } else {
        postMessage({ type: 'error', content: error.message });
      }
    }
  })
}
