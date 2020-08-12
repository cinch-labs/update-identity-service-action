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
    core.info(`Successfully update identity service with infix '${subdomainInfix}'.`)
  } catch (error) {
    if (error.response.status === 409) {
      core.info(error.message)
      core.info(`Identity service already contains infix '${subdomainInfix}', nothing to update.`)
    }
    if (error.response.status === 403) {
      core.setFailed('Incorrect access key provided for identity service request.')
    }
    core.setFailed(error.message)
  }
}

export { addSubdomainToIdentityService }
