import * as core from '@actions/core'

import { getUpdateType } from './utils'

// const addSubdomainToIdentityService = () => {}

async function run(): Promise<void> {
  try {
    const authAuthority = core.getInput('auth-authority')
    const accessKey = core.getInput('access-key')
    const subdomainInfix = core.getInput('subdomain-infix')

    const updateType = getUpdateType(core.getInput('update-type'))

    console.log(authAuthority)
    console.log(accessKey)
    console.log(subdomainInfix)
    console.log('updateType', updateType)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
