const categoryModel = require("../../../models/index").categories; // importing the category model
const responses = require("../../responses/response"); // importing responses to return

// creating insert function to insert into category table
exports.insert = async (req, res) => {
	try {
		const name = req.body.name; // initializing the name with the the req received

		// checking if the req is empty
		if (!name) {
			return responses.notFound("Please enter the name!!");
		}

		// checking if the given name is already present in the db
		const namePresent = await categoryModel.findOne({
			where: {
				name: name,
			},
		});
		if (namePresent) {
			return responses.alreadyExists(
				"Name is already present!! Please enter another name...."
			);
		}

		// if category not present then insert the category
		const newCategory = await categoryModel.create({
			name: name,
		});

		// returning the success response
		return responses.successResponse(
			"Category added successfully",
			newCategory
		);
	} catch (error) {
		// if any error then it will be caught in this block
		return responses.errorResponse(
			"Error occurred while inserting in categories",
			error
		);
	}
};

// creating edit category function
exports.edit = async (req, res) => {
	try {
		id = req.params.id;
		// checking if the id is present
		const idPresent = await categoryModel.findOne({
			where: {
				id: id,
			},
		});
		if (!idPresent) {
			return responses.notFound("Category not present!!");
		}

		// returning the success response
		return responses.successResponse("Category found successfuly!!", idPresent);
	} catch (error) {
		// if any error then it will be caught in this block
		return responses.errorResponse(
			"Error occurred while editing category",
			error
		);
	}
};

// updating the category
exports.update = async (req, res) => {
	try {
		const id = req.params.id;
		const name = req.body.name;

		// checking if id is passed in params
		if (!id) {
			return responses.notFound("Id not found!!");
		}

		// checking if the name exist
		if (!name) {
			return responses.notFound("Name not found!! Please enter name...");
		}

		// checking if the id is present
		const idPresent = await categoryModel.findOne({
			where: {
				id: id,
			},
		});
		if (!idPresent) {
			return responses.notFound("Category not present!!");
		}

		// if idPresent then updating the name
		await idPresent.update({
			name: name,
		});

		// returning the success response
		return responses.successResponse(
			"Category updated successfully!!",
			idPresent
		);
	} catch (error) {
		// if any error then it will be caught in this block
		return responses.errorResponse(
			"Error occurred while updating category",
			error
		);
	}
};

// deleting the category
exports.delete = async (req, res) => {
	try {
		const id = req.params.id; // initializing the requested id for deletion

		// checking if id is passed in params
		if (!id) {
			return responses.notFound("Id not found!!");
		}

		// checking if the id is present
		const idPresent = await categoryModel.findOne({
			where: {
				id: id,
			},
		});
		if (!idPresent) {
			return responses.notFound("Category not present!!");
		}

		// deleting the category
		const categoryDeleted = await categoryModel.destroy({
			where: {
				id: id,
			},
		});

		// returning the success response
		return responses.successResponse(
			"Category deleted successfully",
			categoryDeleted
		);
	} catch (error) {
		// if any error then it will be caught in this block
		return responses.errorResponse(
			"Error occcurred while deleting the category"
		);
	}
};

// listing all the categories

exports.listing = async (req, res) => {
	try {
		const categoryListing = await categoryModel.findAll();
		if (categoryListing == "") {
			return responses.notFound("Categories not found");
		}
		return responses.successResponse(
			"Categories found successfully",
			categoryListing
		);
	} catch (error) {
		// if any error then it will be caught in this block
		return responses.errorResponse(
			"Error occured while listing category",
			error
		);
	}
};
