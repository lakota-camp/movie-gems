const requestLogger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  // console.log('Time: ', Date.now());
  next();
};

// * Request counter * //
const ipLogger = (req, res, next) => {
  let ipAddress =
    req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  if (ipAddress.includes('::ffff:')) {
    ipAddress = ipAddress.split(':').pop();
  }

  console.log(`Request IP Address: ${ipAddress}`);
  next();
};

// * Request counter * //
let requestCount = 0;
const requestCounter = (req, res, next) => {
  requestCount++;
  console.log(`Request count: ${requestCount}`);
  next();
};
module.exports = {
  requestLogger,
  requestCounter,
  ipLogger,
};
