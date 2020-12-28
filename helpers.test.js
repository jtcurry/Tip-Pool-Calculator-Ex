describe("Helper function tests", function () {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 15;
    submitPaymentInfo();
  });

  it("should return total tip percent amount", function () {
    expect(sumPaymentTotal("tipPercent")).toEqual(15);
    billAmtInput.value = 100;
    tipAmtInput.value = 15;
    submitPaymentInfo();
    expect(sumPaymentTotal("tipPercent")).toEqual(30);
  });

  it("should return total tip amount", function () {
    expect(sumPaymentTotal("tipAmt")).toEqual(15);
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();
    expect(sumPaymentTotal("tipAmt")).toEqual(35);
  });

  it("should return total bill amount", function () {
    expect(sumPaymentTotal("billAmt")).toEqual(100);
    billAmtInput.value = 100;
    tipAmtInput.value = 15;
    submitPaymentInfo();
    expect(sumPaymentTotal("billAmt")).toEqual(200);
  });

  it("should convert bill and tip amount into a tip percent", function () {
    expect(calculateTipPercent(100, 15)).toEqual(15);
    expect(calculateTipPercent(80, 16)).toEqual(20);
  });

  it("should create new row and append with td", function () {
    let newRow = document.createElement("tr");
    appendTd(newRow, "hello");
    expect(newRow.children.length).toEqual(1);
    expect(newRow.firstChild.innerHTML).toEqual("hello");
  });

  it("should add a delete button when a new row is created", function () {
    let newRow = document.createElement("tr");
    appendDeleteButton(newRow);
    expect(newRow.children.length).toEqual(1);
    expect(newRow.firstChild.innerHTML).toEqual("X");
  });

  afterEach(function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentTbody.innerHTML = "";
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
    serverTbody.innerHTML = "";
    allPayments = {};
    paymentId = 0;
  });
});
