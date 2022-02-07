const log = type => (target, name, descriptor) => {
  const oldValue = descriptor.value
  descriptor.value = function() {
    console.log(`日志上报 ${type}`)
    return oldValue.apply(this, arguments)
  }
  return descriptor
}

export { log }