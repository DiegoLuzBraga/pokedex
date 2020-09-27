jest.setTimeout(1000 * 60);
const crypto = require("crypto");

Object.defineProperty(global.self, "crypto", {
  value: {
    getRandomValues: (arr) => crypto.randomBytes(arr.length),
  },
});
