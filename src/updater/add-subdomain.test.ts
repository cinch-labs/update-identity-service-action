import axios from 'axios'

import { addSubdomainToIdentityService } from './add-subdomain'

jest.mock('axios')

describe('addSubdomainToIdentityService', () => {
  it('calls axios with the correct parameters', () => {
    const authAuthority = 'example.com'
    const accessKey = '1234'
    const subdomainInfix = 'sheepdog'

    const expectedParameters = {
      url: `${authAuthority}/api/configuration/environments`,
      config: {
        headers: { accept: ' application/json', 'Content-Type': 'application/json-patch+json' },
      },
      data: { infix: subdomainInfix, key: accessKey },
    }

    addSubdomainToIdentityService(authAuthority, accessKey, subdomainInfix)

    expect(axios.post).toBeCalledWith(expectedParameters.url, expectedParameters.data, expectedParameters.config)
  })
})
