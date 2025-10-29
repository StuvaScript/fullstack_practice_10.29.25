const express = require("express");
const app = express();
const logger = require("morgan");
const errorHandlerMiddleware = require("./middleware/error-handler");
const routeNotFound = require("./middleware/route-not-found");
const employeesRouter = require("./routes/employees-router");

// **`` Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));

// **`` Routes
app.use("/api/v1/employees", employeesRouter);

// **`` Error Handlers
app.use(routeNotFound);
app.use(errorHandlerMiddleware);

module.exports = app;
