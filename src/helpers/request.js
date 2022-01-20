import { data } from "../data";

export const request = {
  get: (key) => {
    return new Promise((resolve, reject) => {
      resolve(data[key]);
    });
  },
};
