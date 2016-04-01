'use strict';

// [START message]
module.exports = {
  search: function (context, data) {
    if (data.message !== undefined) {
      // Everything is ok
      console.log(data.message);
      context.success('Returning items for ' + data.message);
    } else {
      // This is an error case
      context.failure('No message defined!');
    }
  }
};
// [END message]