const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("../errors/custom-error");

const employeeList = [
  {
    name: "Sarah",
    id: "1583",
  },
  {
    name: "Billy",
    id: "3022",
  },
  {
    name: "Tim",
    id: "3325",
  },
  {
    name: "Katie",
    id: "9843",
  },
  {
    name: "Blade",
    id: "1234",
  },
];

const getAllEmployees = async (req, res) => {
  const data = await employeeList;

  if (!data.length) {
    throw new CustomAPIError("No employee list found", StatusCodes.NOT_FOUND);
  }

  res.status(StatusCodes.OK).json({ data, nbHits: data.length });
};

module.exports = { getAllEmployees };
