exports.handler =async (event) => {
  // TODO implement
  var AWS = require("aws-sdk");
AWS.config.update({ region: "ap-south-1" });
var docClient = new AWS.DynamoDB.DocumentClient();
var params = {
  TableName:"InstituteDetails",
  Item:{
      'InstID':event.instName.replace(/\s/g,'').slice(0,4)+ Date.now(),
      'instName':event.instName,
    'instAddr':event.instAddr,
    'spocName':event.spocName,
    'spocContact':event.spocContact,
    'InstContact':event.InstContact
  }
};
return new Promise(function(resolve, reject) {
    docClient.put(params, function(err, data) {
  if (err) {
      reject(err);
      console.log("Unable to add item. Error JSON");
  } else {
          let alldata= new Promise(function(resolve1,reject1){
            var lambda = new AWS.Lambda();
          lambda.invoke({
          FunctionName: 'getInstDetails'
          }, function(error, data) {
          if (error) {
            reject1(error);
          }
          if(data.Payload){
          const response = 
                data.Items
            resolve(data);

            };
          })
          })
          

          }
        })
      })
    };
  