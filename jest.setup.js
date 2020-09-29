jest.setTimeout(1000 * 60);
const crypto = require("crypto");

Object.defineProperty(document, "queryCommandSupported", {
  value: () => true,
});

window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {},
    };
  };

Object.defineProperty(global.self, "crypto", {
  value: {
    getRandomValues: (arr) => crypto.randomBytes(arr.length),
  },
});
