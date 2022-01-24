const env = process.env.REACT_APP_ENV;

let config = {
  baseURL: "http:/localhost/",
};

switch (env.toUpperCase()) {
  case "STAGE":
    config.baseURL = "https://stage.skillsunion.com";
    break;
  case "PRODUCTION":
    config.baseURL = "https://LeslieChiang.github.io/assign2.13-deployment";
    break;
  default:
    break;
}

export default config;