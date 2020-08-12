import * as core from '@actions/core'

import { getUpdateType } from './get-update-type'
import { UpdateType } from '../types'

jest.mock('@actions/core')

describe('getUpdateType', () => {
  it('returns the input if it is "add" or "remove"', () => {
    expect(getUpdateType(UpdateType.ADD)).toEqual('add')
    expect(getUpdateType(UpdateType.REMOVE)).toEqual('remove')
  })

  it('calls core.setFailed if it is neither "add" nor "remove"', () => {
    getUpdateType('sheepdog' as UpdateType)

    expect(core.setFailed).toBeCalledWith('Input update-type must be either "add" or "remove"')
  })
})
