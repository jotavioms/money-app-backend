const BillingCycle = require('./billingCycle');

BillingCycle.methods(['get', 'post', 'put', 'delete']);
BillingCycle.updateOptins({ new: true, runValidators: true });

module.exports = BillingCycle;