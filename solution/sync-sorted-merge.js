"use strict";

// Print all entries, across all of the sources, in chronological order.

module.exports = (logSources, printer) => {
  logSources.forEach(logEntry => {
    printer.print(logEntry.last)
  });
  printer.done();
  return console.log("Sync sort complete.");
};
