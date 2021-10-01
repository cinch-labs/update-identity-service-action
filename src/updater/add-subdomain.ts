import * as core from '@actions/core'
import axios from 'axios'

import { UpdateIdentityService } from './types'

const addSubdomainToIdentityService: UpdateIdentityService = async (authAuthority, accessKey, subdomainInfix) => {
  const url = `${authAuthority}/api/configuration/environments`
  const data = { infix: subdomainInfix, key: accessKey }
  const config = {
    headers: { accept: '*/*', 'Content-Type': 'application/json' },
  }

  try {
    await axios.post(url, data, config)

    core.info(`Successfully added the infix '${subdomainInfix}' to identity service`)
  } catch (error) {
    if (error.response?.status === 409) {
      core.info(`Identity service already contains infix '${subdomainInfix}', nothing to update`)
    } else if (error.response?.status === 403) {
      core.setFailed('Incorrect access key provided for identity service request')
    } else {
      core.setFailed(error.message)
    }
  }
}

export { addSubdomainToIdentityService }
