import axios from 'axios'

import { removeSubdomainFromIdentityService } from './remove-subdomain'

jest.mock('axios')

describe('removeSubdomainFromIdentityService', () => {
  it('calls axios with the correct parameters', () => {
    const authAuthority = 'example.com'
    const accessKey = '1234'
    const subdomainInfix = 'sheepdog'

    const expectedParameters = {
      url: `${authAuthority}/api/configuration/environments`,
      config: {
        headers: { accept: '*/*', 'Content-Type': 'application/json' },
        data: { infix: subdomainInfix, key: accessKey },
      },
    }

    removeSubdomainFromIdentityService(authAuthority, accessKey, subdomainInfix)

    expect(axios.delete).toBeCalledWith(expectedParameters.url, expectedParameters.config)
  })
})
