describe("Payments functions tests", function () {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 15;
  });

  it("should add current payment object to allPayments", function () {
    submitPaymentInfo();
    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments["payment1"].billAmt).toEqual("100");
    expect(allPayments["payment1"].tipAmt).toEqual("15");
    expect(allPayments["payment1"].tipPercent).toEqual(15);
  });

  it("should not allow negative or empty inputs", function () {
    billAmtInput.value = "";
    submitPaymentInfo();
    expect(Object.keys(allPayments).length).toEqual(0);
    let currentPayment = createCurPayment();
    expect(currentPayment).toEqual(undefined);
  });

  it("should create a new table row and add input value", function () {
    let curPayment = createCurPayment();
    allPayments["payment1"] = curPayment;
    appendPaymentTable(curPayment);
    let curRow = document.querySelectorAll("#paymentTable tbody tr td");
    expect(curRow.length).toEqual(4);
    expect(curRow[0].innerText).toEqual("$100");
    expect(curRow[1].innerText).toEqual("$15");
    expect(curRow[2].innerText).toEqual("15%");
  });

  afterEach(function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentTbody.innerHTML = "";
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
    serverTbody.innerHTML = "";
    paymentId = 0;
    allPayments = {};
  });
});
