import * as core from '@actions/core'

import { getUpdateType, checkInputContent } from './utils'
import { addSubdomainToIdentityService, removeSubdomainFromIdentityService } from './updater'

import { UpdateType, Input } from './types'

async function run(): Promise<void> {
  try {
    const updateType = getUpdateType(core.getInput('update-type') as UpdateType)

    const authAuthority = checkInputContent(core.getInput('auth-authority'), Input.AUTH_AUTHORITY)
    const accessKey = checkInputContent(core.getInput('access-key'), Input.ACCESS_KEY)
    const subdomainInfix = checkInputContent(core.getInput('subdomain-infix'), Input.SUBDOMAIN_INFIX)

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
