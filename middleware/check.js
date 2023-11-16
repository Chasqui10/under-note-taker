//Middleware is used to log request methods while the server is running.
const check = (req, res, next) => {
    const fgCyan = '\x1b[36m';
    switch (req.method) {
      case 'GET': {
        console.info(`📗 ${fgCyan}${req.method} request to ${req.path}`);
        break;
      }
      case 'POST': {
        console.info(`📘 ${fgCyan}${req.method} request to ${req.path}`);
        break;
      }
      default:
        console.log(`📙${fgCyan}${req.method} request to ${req.path}`);
    }
  
    next();
  };
  
  exports.check = check;