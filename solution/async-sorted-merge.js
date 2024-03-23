"use strict";

// Print all entries, across all of the *async* sources, in chronological order.

module.exports = (logSources, printer) => {
  return new Promise((resolve, reject) => {
    logSources.forEach(logEntry => {
      printer.print(logEntry)
    });
    printer.done();
    resolve(console.log("Async sort complete."));
  });
};
