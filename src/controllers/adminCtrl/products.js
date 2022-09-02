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

// creating the edit function for editing the product details
exports.edit = async (req, res) => {
	try {
		// requesting and initializing the product id to be edited
		const id = req.params.id;

		// requesting the product details from the model
		// check if product exists
		const productExists = await productModel.findOne({
			where: {
				id: id,
			},
		});
		if (!productExists) {
			return responses.notFound("No such product found!!");
		}

		// returning the successs response
		return responses.successResponse(
			"Product found successfully",
			productExists
		);
	} catch (error) {
		// if any error then it will be caught in this block
		return responses.errorResponse(
			"Error occurred while editing the product",
			error
		);
	}
};

// creating the update function for updating the product details
exports.update = async (req, res) => {
	try {
		// requesting and initializing the product id to be updated
		const id = req.params.id;

		// requesting the product details to be updated

		const productDetails = {
			catID: req.body.catID,
			name: req.body.name,
			product_info: req.body.product_info,
			actual_price: req.body.actual_price,
			selling_price: req.body.selling_price,
			description: req.body.description,
		};

		// check if category exists
		// check if product exists
		const productExists = await productModel.findOne({
			where: {
				id: id,
				catID: productDetails.catID,
			},
		});
		if (!productExists) {
			return responses.notFound("No such product or category found!!");
		}

		//updating the product with the given productDetails
		await productExists.update(productDetails);

		// returning the successs response
		return responses.successResponse(
			"Product found successfully",
			productExists
		);
	} catch (error) {
		// if any error then it will be caught in this block
		return responses.errorResponse(
			"Error occurred while editing the product",
			error
		);
	}
};

// creating the delete function for deleting the product details
exports.delete = async (req, res) => {
	try {
		// requesting and initializing the product id to be deleted
		const id = req.params.id;

		// requesting the product details from the model
		// check if product exists
		const productExists = await productModel.findOne({
			where: {
				id: id,
			},
		});
		if (!productExists) {
			return responses.notFound("No such product found!!");
		}

		await productExists.destroy();

		// returning the successs response
		return responses.successResponse(
			"Product deleted successfully",
			productExists
		);
	} catch (error) {
		// if any error then it will be caught in this block
		return responses.errorResponse(
			"Error occurred while deleting the product",
			error
		);
	}
};

// creating a functio to update product status
exports.status = async (req, res) => {
	try {
		const id = req.params.id; // initializing the requested id for updating status
		var toUpdateStatus;
		// checking if the id is present
		const idPresent = await productModel.findOne({
			where: {
				id: id,
			},
		});

		//returning the resposne when not found
		if (!idPresent) {
			return responses.notFound("No such Product found !!");
		}

		//checking the current status and updating it
		if (idPresent.dataValues.status == "Active") toUpdateStatus = "Inactive";
		else if (idPresent.dataValues.status == "Inactive")
			toUpdateStatus = "Active";

		//updating the status if id is present
		await idPresent.update({
			status: toUpdateStatus,
		});
		return responses.successResponse("Found", idPresent);
	} catch (error) {
		return responses.errorResponse("Error occurred while updating status");
	}
};
