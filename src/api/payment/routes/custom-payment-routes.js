module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/bulk-payments',
            handler: 'custom-payment-controller.createPayments',
            config: {
                policies: []
            }
        }
    ]
}