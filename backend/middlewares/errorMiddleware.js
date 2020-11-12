const notFound = (req, res, next) => {
  //404 Routes thus when the route does not exist
  //Since this is not ann error handler it will run at every reques
  //If there is not rpute

  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  //You can't throw any message as an error unless that error is coming from our request and response
  next(error);
};

//NOTE: Since we are using express-asyn-handler if there is any error in the catch it will catch it here

const errorHandler = (err, req, res, next) => {
  //Error middleware
  //Always create it below all routes
  //If you want to overide the default middile this is how we do it
  //This middleware will always check if there is a value on the err object so we can create any middleware and pass the error as next(err) to this error middleware

  //This middleware will catch any error we throw

  //Check the status code becuase sometimes it's error but it gives 200
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export { notFound, errorHandler };
