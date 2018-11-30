// const userauth = require("./userauth");

// var res = userauth.handler({ emailid: "samar1066@gmail.com", pwd: "abcd" });
// console.log(res);

var AWS = require("aws-sdk");
AWS.config.region = "ap-south-1";
var lambda = new AWS.Lambda();

// exports.handler = function(event, context) {
var params = {
  FunctionName: "authenticator", // the lambda function we are going to invoke
  Payload: '{ "emailid": "' + "samar1066@gmail.com" + '"}'
};

lambda.invoke(params, function(err, data) {
  if (err) {
    context.fail(err);
  } else {
    context.succeed("Lambda_B said " + data.Payload);
  }
});
// };
