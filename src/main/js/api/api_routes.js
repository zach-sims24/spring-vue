/* eslint-disable */
const apiUrlBase = 'http://localhost:8080'
export default {
  ADDRESS: {
    SHOW: `${apiUrlBase}/addresses`,
    CREATE: `${apiUrlBase}/addresses`,
    READ: (addressUuid) => `${apiUrlBase}/addresses/${addressUuid}`,
    UPDATE: (addressUuid) => `${apiUrlBase}/addresses/${addressUuid}`,
    DELETE: (addressUuid) => `${apiUrlBase}/addresses/${addressUuid}`
  },
  USER: {
    SHOW: `${apiUrlBase}/users`,
    CREATE: `${apiUrlBase}/users`,
    READ: (userUuid) => `${apiUrlBase}/users/${userUuid}`,
    UPDATE: (userUuid) => `${apiUrlBase}/users/${userUuid}`,
    DELETE: (userUuid) => `${apiUrlBase}/users/${userUuid}`,
  },
};
