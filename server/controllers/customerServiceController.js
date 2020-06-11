const CustomerService = require('../models/CustomerService');
const Technical = require('../models/Technical');
const Customer = require('../models/Customer');


/**
 * Get All services
 * @param req
 * @param res
 * @return response | json
 */

exports.list = async (req, res) => {
    try {

        let services = await CustomerService.find().populate(["customer", "technical"]);

        return res.json({ services });

    } catch (error) {
        console.log(error);
        return res.status(500).json('An error has ocurred');
    }
}

/**
 * Save CustomerService
 * @param req
 * @param res
 * @return response | json
 */
exports.create = async (req, res) => {

    try {

        const { email } = req.body;

        //find customer by email
        const customer = await Customer.findOne({ email });
        if (!customer) return res.status(400).json('This email does not exist');

        //get technicals
        const technicals = await Technical.find({});

        //get random technical
        const random = Math.floor((Math.random() * technicals.length));
        const technical_id = technicals[random]._id;

        if (!technical_id) return res.status(400).json('This technical does not exist');

        //save service
        const customerService = new CustomerService(req.body);
        customerService.status = "pending";
        customerService.technical = technical_id;
        customerService.customer = customer._id;

        await customerService.save();

        res.json({
            msg: "Service Created successfully",
            token: customerService._id
        });


    } catch (error) {
        console.log(error);
        return res.status(500).json('An error has ocurred');
    }

}


/**
 * Get status service
 */

exports.findById = async (req, res) => {
    try {

        const { service_id } = req.params;

        let customerService = await CustomerService.findById({ _id: service_id });
        return res.json({ customerService });

    } catch (error) {
        console.log(error);
        return res.status(500).json('An error has ocurred');
    }
}