import * as core from '@actions/core'

import { getUpdateType } from './utils'
import { addSubdomainToIdentityService, removeSubdomainFromIdentityService } from './updater'

import { UpdateType } from './types'

async function run(): Promise<void> {
  try {
    const updateType = getUpdateType(core.getInput('update-type') as UpdateType)

    const authAuthority = core.getInput('auth-authority')
    const accessKey = core.getInput('access-key')
    const subdomainInfix = core.getInput('subdomain-infix')

    if (updateType === UpdateType.ADD) {
      addSubdomainToIdentityService(authAuthority, accessKey, subdomainInfix)
    }

    if (updateType === UpdateType.REMOVE) {
      removeSubdomainFromIdentityService(authAuthority, accessKey, subdomainInfix)
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
