import axios from "axios";

const getClient = (baseUrl = null, session = false) => {
  let config = {
    baseURL: baseUrl,
  };

  const client = axios.create(config);
  return client;
};

export class APIClient {
  client;

  constructor(baseUrl = null) {
    this.client = getClient(baseUrl);
    // if (!session) { this.updateAuthToken('APICLIENT constructor') }
    // this.client.updateAuthToken = this.updateAuthToken
  }
}

export default APIClient;
