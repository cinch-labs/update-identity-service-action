import core from '@actions/core'

import { getUpdateType } from './utils'
import { addSubdomainToIdentityService } from './updater'

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
