type UpdateType = (input: string) => 'add' | 'delete'

const getUpdateType: UpdateType = (input) => {
  if (input !== 'add' && input !== 'delete') {
    throw new Error('Input update-type must be either "add" or "delete"')
  }

  return input
}

export { getUpdateType }
