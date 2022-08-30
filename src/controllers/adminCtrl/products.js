const responses = require("../../responses/response"); // importing the responses
const productModel = require("../../../models/index").products; // importing the product model
const categoryModel = require("../../../models/index").categories; // importing the category model

// creating the insert function for inserting the product details
exports.insert = async (req, res) => {
	try {
		// requesting and initializing the values of the fields in product table
		const productDetails = {
			catID: req.body.catID,
			name: req.body.name,
			product_info: req.body.product_info,
			actual_price: req.body.actual_price,
			selling_price: req.body.selling_price,
			// images:req.,
			description: req.body.description,
		};

		// check if category exists
		const categoryExists = await categoryModel.findOne({
			where: {
				id: productDetails.catID,
			},
		});
		if (!categoryExists) {
			return responses.notFound("No such category found!!");
		}

		// adding the model
		const addProduct = await productModel.create(productDetails);

		// returning the successs response
		return responses.successResponse(
			"Product inserted successfully",
			addProduct
		);
	} catch (error) {
		// if any error then it will be caught in this block
		return responses.errorResponse(
			"Error occurred while inserting the product",
			error
		);
	}
};
