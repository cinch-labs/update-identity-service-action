type UpdateType = (input: string) => 'add' | 'remove' | Error

const getUpdateType: UpdateType = (input) => {
  if (input !== 'add' && input !== 'remove') {
    return new Error('Input update-type must be either "add" or "remove"')
  }

  return input
}

export { getUpdateType }
