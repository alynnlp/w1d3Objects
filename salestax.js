//calculates the total sales and total tax, grouped by company.

var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};
var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData,taxRates) {
  //I want an objects

  let output = {};
  //console.log(output)

  for (var i = 0; i < salesData.length; i++) {
    var comName = salesData[i].name;
     var salesTotal = 0
    // we are doing all the calculation first because we first consider the Bombardier which has only appear once
    //1. calculating the sales total by looping the first i then loop, the sales j and add them up
      for (var j = 0; j < salesData[i].sales.length; j++){
              salesTotal += salesData[i].sales[j];
            }
    //2. simply caculate the tax using the salesTotal with add and multiplication
    // taxRates[salesData[i].province] >> this will give us the value in the format of object[key]
    // if you know the value you just have to put taxRates.AB (the province)
    //in this case because the value is a variable so you have to do [variable]
      var taxTotal = salesTotal * taxRates[salesData[i].province]


      //if the value is true means the company name is true, it has occured in the output which is th eobject
      // then we will add the old total tax to the new one and old sales to new sales
       if (output[salesData[i].name] in output) {

      // the oldtotalsales is already calculated in the above when the output occured the first time
      // first time when it loop, is the first telus, so it goes to else,
      //because the else goes, the totalSales is already there in the outcome []
      // so
      var oldTotalSales = output[salesData[i].name].totalSales
      var oldTotalTaxes = output[salesData[i].name].totalTaxes

      output[salesData[i].name] = {
        totalSales: oldTotalSales + salesTotal,
        totalTaxes: oldTotalTaxes + taxTotal
        }

       } else {

      output[salesData[i].name] = {
        totalSales: salesTotal,
        totalTaxes: taxTotal
      }
    }
  }
return output;
}

console.log(calculateSalesTax(companySalesData, salesTaxRates))




