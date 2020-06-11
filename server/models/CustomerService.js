const mongoose = require('mongoose');

const CustomerServiceSchema = mongoose.Schema({
    content: {
        type: String,
        required: true,
        trim: true
    },
    type_service: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    technical: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Technical'
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("CustomerService", CustomerServiceSchema);