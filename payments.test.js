describe('Payments test with set up and tear down', function () {
    beforeEach(function() {
        billAmtInput.value = 10;
        tipAmtInput.value = 1;
    })

    it('should add to table on submitPaymentInfo()', function () {
        submitPaymentInfo()
        let paymentTds = document.querySelectorAll('#paymentTable tr td')
        expect(paymentTds[0].innerText).toEqual('$10')
        expect(paymentTds[1].innerText).toEqual('$1')
        expect(paymentTds[2].innerText).toEqual('10%')
    })

    it('should add payment info to allPayments object on submitPaymentInfo()', function () {
        submitPaymentInfo()
        expect(Object.keys(allPayments).length).toEqual(1)
        expect(Object.keys(allPayments)[0]).toEqual('payment1')
    })

    it('should not submit with empty input on submitPaymentInfo()', function() {
        billAmtInput.value = ''
        tipAmtInput.value = ''

        submitPaymentInfo()
        expect(Object.keys(allPayments).length).toEqual(0)
    })

    it('should not submit with negative bill amount on submitPaymentInfo()', function () {
        billAmtInput.value = '-10'

        submitPaymentInfo()
        expect(Object.keys(allPayments).length).toEqual(0)
    })

    it('should create object with payment info on createCurPayment()', function () {
        let expectedPayment = {billAmt: '10', tipAmt: '1', tipPercent: 10}

        expect(createCurPayment()).toEqual(expectedPayment)
    })

    it('should append new tr with payment info on appendPaymentTable()', function () {
        let payment = createCurPayment()
        allPayments['payment1'] = payment
        appendPaymentTable(payment)

        let paymentTds = document.querySelectorAll('#paymentTable tr td')
        expect(paymentTds[0].innerText).toEqual('$10')
        expect(paymentTds[1].innerText).toEqual('$1')
        expect(paymentTds[2].innerText).toEqual('10%')
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