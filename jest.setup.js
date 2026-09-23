const { TextEncoder, TextDecoder } = require("node:util");

if (global.TextEncoder === undefined) {
  global.TextEncoder = TextEncoder;
}

if (typeof global.TextDecoder === "undefined") {
  global.TextDecoder = TextDecoder;
}
