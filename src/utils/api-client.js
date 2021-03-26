const baseUrl = `${process.env.REACT_APP_TRADE_TREND}`

async function client(endpoint, {apiURL = baseUrl, data, token, headers: customHeaders, ...customConfig} = {}) {
  const config = {
    method: data ? 'POST' : 'GET',
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'CmKL3OA2gk5MElae26B0q4zEP9NTGt572Qxy2c33',
      ...customHeaders,
    },
    ...customConfig,
  }

  return window.fetch(`${apiURL}/${endpoint}`, config).then(async response => {
    const responseData = await response.json()
    if (response.ok) {
      return responseData.payload
    }
    return Promise.reject(responseData)
  })
}

export {client}
