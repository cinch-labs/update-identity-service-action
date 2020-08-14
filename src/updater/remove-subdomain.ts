import * as core from '@actions/core'
import axios from 'axios'

import { UpdateIdentityService } from './types'

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

export { removeSubdomainFromIdentityService }
