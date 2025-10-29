const app = require("./app");

const { PORT = 8000 } = process.env;

const listener = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}...`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

listener();
