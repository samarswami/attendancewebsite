exports.handler = async event => {
  // TODO implement
  var AWS = require("aws-sdk");
  AWS.config.update({ region: "ap-south-1" });
  var dynamodb = new AWS.DynamoDB();
  var params = {
    Key: {
      emailid: {
        S: event.emailid
      }
    },
    TableName: "users"
  };
  let res = await dynamodb
    .getItem(params, function(err, data) {
      if (err) console.log(err, err.stack);
      else {
      }
    })
    .promise();
  const response = {
    statusCode: 200,
    body: JSON.stringify(res)
  };
  return response;
};
