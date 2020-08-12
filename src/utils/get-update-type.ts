import * as core from '@actions/core'

import { UpdateType } from '../types'

type GetUpdateType = (input: UpdateType) => UpdateType | void

const getUpdateType: GetUpdateType = (input) => {
  if (input === UpdateType.ADD || input === UpdateType.REMOVE) {
    return input
  }

  core.setFailed('Input update-type must be either "add" or "remove"')
}

export { getUpdateType }
