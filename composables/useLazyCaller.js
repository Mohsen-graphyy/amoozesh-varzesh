export const useLazyCaller = () => {
  let timeout = null

  function lazyCaller(callback, time = 250) {
    if (!time) return callback()
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      callback()
    }, time);
  }

  function abortLazyCall() {
    clearTimeout(timeout)
  }

  return { lazyCaller, abortLazyCall }
}