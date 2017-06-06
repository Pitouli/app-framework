const alert = (message) => {
  // Reset console window
  process.stdout.write('\x1bc')
  // Print message
  process.stdout.write('')
  // Print line breaks
  process.stdout.write('\n\n')
}

export default alert
