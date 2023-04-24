function makeRequest(location) {
  const promise = new Promise((resolve, reject) => {
    if (location === "Google") {
      resolve("The promise has been resolved");
    } else {
      reject("The promise has been rejected");
    }
  });
  return promise;
}

function processRequest(response) {
  const promise = new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve("Extra information: " + response);
  });
  return promise;
}

makeRequest("Facebook").then((response) => {
  console.log("Response received");
  return processRequest(response);
});
