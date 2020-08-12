import * as core from '@actions/core'
import axios from 'axios'

import { getUpdateType } from './utils'

type UpdateIdentityService = (authAuthority: string, accessKey: string, subdomainInfix: string) => void

const addSubdomainToIdentityService: UpdateIdentityService = async (authAuthority, accessKey, subdomainInfix) => {
  const url = `${authAuthority}/api/configuration/environments`
  const data = { infix: subdomainInfix, key: accessKey }
  const config = {
    headers: { accept: ' application/json', 'Content-Type': 'application/json-patch+json' },
  }

  const response = await axios.post(url, data, config)

  console.log(response)
}

async function run(): Promise<void> {
  try {
    const updateType = getUpdateType(core.getInput('update-type'))

    const authAuthority = core.getInput('auth-authority')
    const accessKey = core.getInput('access-key')
    const subdomainInfix = core.getInput('subdomain-infix')

    if (updateType === 'add') {
      addSubdomainToIdentityService(authAuthority, accessKey, subdomainInfix)
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
