// * Request log method URL* //
const requestLogger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
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

const timeRequestLog = (req, res, next) => {
  const requestDate = new Date();
  console.log(`Request Date: ${requestDate}`);
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
  timeRequestLog,
};
