import axios from 'axios'

type UpdateIdentityService = (authAuthority: string, accessKey: string, subdomainInfix: string) => void

const addSubdomainToIdentityService: UpdateIdentityService = async (authAuthority, accessKey, subdomainInfix) => {
  const url = `${authAuthority}/api/configuration/environments`
  const data = { infix: subdomainInfix, key: accessKey }
  const config = {
    headers: { accept: ' application/json', 'Content-Type': 'application/json-patch+json' },
  }

  try {
    const response = await axios.post(url, data, config)
    console.log(response)
  } catch (error) {
    if (error.response.status === 403) {
      throw new Error('Incorrect access key provided for identity service request')
    } else {
      throw new Error(error.response.statusText)
    }
  }
}

export { addSubdomainToIdentityService }
