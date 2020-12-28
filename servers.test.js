describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });

  it("should add a new row on updateServerTable()", function () {
    submitServerInfo();
    let currentRow = document.querySelectorAll("#serverTable tbody tr td");
    expect(currentRow.length).toEqual(3);
    expect(currentRow[0].innerText).toEqual("Alice");
    expect(currentRow[1].innerText).toEqual("$0.00");
  });

  it("should not add a new row to table if server input is empty", function () {
    serverNameInput.value = "";
    submitServerInfo();
    let currentRow = document.querySelectorAll("#serverTable tbody tr td");
    expect(currentRow.length).toEqual(0);
  });

  it("should add a delete button when a new row is created", function () {
    let newRow = document.createElement("tr");
    appendDeleteButton(newRow);
    expect(newRow.children.length).toEqual(1);
    expect(newRow.firstChild.innerHTML).toEqual("X");
  });

  afterEach(function () {
    // teardown logic
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = "";
  });
});
