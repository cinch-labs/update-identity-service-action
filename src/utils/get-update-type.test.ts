import { getUpdateType } from './get-update-type'

describe('getUpdateType', () => {
  it('returns the input if it is "add" or "remove"', () => {
    expect(getUpdateType('add')).toEqual('add')
    expect(getUpdateType('remove')).toEqual('remove')
  })

  it('returns an error if it is neither "add" nor "remove"', () => {
    expect(getUpdateType('sheepdog')).toEqual(new Error('Input update-type must be either "add" or "remove"'))
  })
})
