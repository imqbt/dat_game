export default () => {
  // eslint-disable-next-line
  self.addEventListener('message', event => {
    try {
      // eslint-disable-next-line
      const result = eval(event.data)
      postMessage({ type: 'result', content: result })
    } catch (error) {
      if (error.lineNumber) {
        postMessage({
          type: 'error',
          content: error.message + ' on line ' + (error.lineNumber - 2),
        })
      } else {
        postMessage({ type: 'error', content: error.message })
      }
    }
  })
}
