import * as core from '@actions/core'
import axios from 'axios'

type UpdateIdentityService = (authAuthority: string, accessKey: string, subdomainInfix: string) => void

const addSubdomainToIdentityService: UpdateIdentityService = async (authAuthority, accessKey, subdomainInfix) => {
  const url = `${authAuthority}/api/configuration/environments`
  const data = { infix: subdomainInfix, key: accessKey }
  const config = {
    headers: { accept: ' application/json', 'Content-Type': 'application/json-patch+json' },
  }

  try {
    await axios.post(url, data, config)
  } catch (error) {
    if (error.response.status === 403) {
      core.setFailed('Incorrect access key provided for identity service request')
    } else {
      core.setFailed(error.message)
    }
  }
}

export { addSubdomainToIdentityService }
