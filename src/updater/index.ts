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
    core.info(`Successfully added infix '${subdomainInfix}' to identity service`)
  } catch (error) {
    if (error.response.status === 409) {
      core.info(`Identity service already contains infix '${subdomainInfix}', nothing to update`)
    } else if (error.response.status === 403) {
      core.setFailed('Incorrect access key provided for identity service request')
    } else {
      core.setFailed(error.message)
    }
  }
}

const removeSubdomainFromIdentityService: UpdateIdentityService = async (authAuthority, accessKey, subdomainInfix) => {
  const url = `${authAuthority}/api/configuration/environments`
  const data = { infix: subdomainInfix, key: accessKey }
  const config = {
    headers: { accept: ' application/json', 'Content-Type': 'application/json-patch+json' },
    data,
  }

  try {
    await axios.delete(url, config)
    core.info(`Successfully removed infix '${subdomainInfix}' from identity service`)
  } catch (error) {
    core.setFailed(error.message)
  }
}

export { addSubdomainToIdentityService, removeSubdomainFromIdentityService }
