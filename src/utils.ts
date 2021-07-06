import merge from "lodash.merge";
const tailWindConfig = require("../tailwind.config");

export const createConfig = (config = {}) => {
  return merge(config, tailWindConfig);
};
