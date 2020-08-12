import { getUpdateType } from './get-update-type'

describe('getUpdateType', () => {
  it('returns the input if it is "add" or "delete"', () => {
    expect(getUpdateType('add')).toEqual('add')
    expect(getUpdateType('delete')).toEqual('delete')
  })

  it('returns an error if it is neither "add" nor "delete"', () => {
    expect(getUpdateType('sheepdog')).toEqual(new Error('Input update-type must be either "add" or "delete"'))
  })
})
