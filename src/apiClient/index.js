import APIClient from "./client";

var client;

if (!client) {
  client = new APIClient("localhost:3000").client;
}

export default {
  get_latest_data_world() {
    return client.get("/v2/latest");
  },

  get_latest_data_usa() {
    return client.get("/v2/locations?source=csbs");
  },

  get_latest_data_all_countries() {
    return client.get("/v2/locations");
  },

  get_latest_data_by_country_code(countryCode) {
    return client.get(`/v2/locations?country_code=${countryCode}`);
  },

  get_country_timeline(countryCode) {
    return client.get(`/v2/locations?country_code=${countryCode}&timelines=1`);
  },

  get_usa_timeline() {
    return client.get("/v2/locations?source=csbs&timelines=1");
  },
};
