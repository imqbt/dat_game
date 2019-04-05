const pad = num => {
  return ('0' + num).slice(-2)
}

const Clok = ({ time }) => {
  const minutes = Math.floor(time / 60)
  const seconds = time - minutes * 60

  return `${pad(minutes)}:${pad(seconds)}`
}

export default Clok
