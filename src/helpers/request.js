import data from "../data";

export const request = {
  get: (key) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data[key]);
      }, 300);
    });
  },
};
