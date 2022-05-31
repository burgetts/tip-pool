describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1); // Ensures there is a server in object allServers
    expect(allServers['server' + serverId].serverName).toEqual('Alice'); // Makes sure it is called Alice
  });

  it('should not submit with empty input', function() {
    serverNameInput.value = ''
    submitServerInfo()
    expect(Object.keys(allServers).length).toEqual(0);
  })

  // Create table row element and pass to appendTd function with input value
  it('should add server name to table on submit', function () {
    submitServerInfo();
    updateServerTable();

    let tdList = document.querySelectorAll('#serverTable tbody tr td')
   
    expect(tdList.length).toEqual(3)
    expect(tdList[0].innerText).toEqual('Alice')
    expect(tdList[1].innerText).toEqual('$0.00')
    expect(tdList[2].innerText).toEqual('X')

  })

  afterEach(function() {
    // teardown logic
    serverTbody.innerHTML = '';
    allServers = {};
    serverId = 0;
  });
});

// Test submitServerInfo() and updateServerTable()  