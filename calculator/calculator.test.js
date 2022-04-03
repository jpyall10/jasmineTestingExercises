//TEST calculateMonthlyPayment()
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    "amount" : 400000,
    "years" : 30,
    "rate" : 2.75
  };
  expect(calculateMonthlyPayment(values)).toEqual('1632.96')
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    "amount" : 1000,
    "years" : 15,
    "rate" : 1.05
  }
  expect(calculateMonthlyPayment(values)).toEqual('6.01')

});

it("should handle very low interest rates", function() {
  // ..
  const values = {
    "amount" : 1000,
    "years" : 30,
    "rate" : 0.05
  }
  expect(calculateMonthlyPayment(values)).toEqual('2.80');

});



