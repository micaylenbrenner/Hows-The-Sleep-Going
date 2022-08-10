const path = require('path');
const express = require('express');

// Variable Declarations
const app = express();
const port = 3000;













// ERROR Handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    message: { err: 'an error has occured'}
  };
  return 
});






// export server
module.exports = app.listen(port, () => console.log(`Listening on port ${port}`));