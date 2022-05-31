describe("helpers test with set up and tear down", function () {
    beforeEach(function() {
        billAmtInput.value = 10;
        tipAmtInput.value = 1;
        submitPaymentInfo();
    })

    it('should sum total tip amount of all payments on sumPaymentTotal()', function() {
        expect(sumPaymentTotal('tipAmt')).toEqual(1)

        billAmtInput.value = 10
        tipAmtInput.value = 3
        submitPaymentInfo()

        expect(sumPaymentTotal('tipAmt')).toEqual(4)
    })

    it('should caluclate tip percent correctly', function() {
        expect(calculateTipPercent(10,1)).toEqual(10)
        expect(calculateTipPercent(100,0)).toEqual(0)
    })

   it('should create X button and append to document on appendDeleteBtn(tr)', function () {
    let newTr = document.createElement('tr')

    appendDeleteBtn(newTr)
    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('X')
   })

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {};
        paymentId = 0;
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
    })
})