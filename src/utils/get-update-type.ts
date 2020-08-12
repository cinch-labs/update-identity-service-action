type UpdateType = (input: string) => 'add' | 'delete' | Error

const getUpdateType: UpdateType = (input) => {
  if (input !== 'add' && input !== 'delete') {
    return new Error('Input update-type must be either "add" or "delete"')
  }

  return input
}

export { getUpdateType }
