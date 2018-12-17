const matchParams = (pathname) => {
  
  const params = pathname.match(/\/([a-z]+)?\/?([0-9]+)?/i)
  
  const sections = [
    'section',
    'subsection',
  ]

  return params.reduce((acc, val, key) => {
    if(key > 0 && val) acc[sections[key -1]] = val
    return acc
  }, {})
}

export default matchParams
