class CustomError extends Error {
    constructor(message) {
      this.message = message;
      this.name = "CustomError";
    }
  }
  
  function throwGenericError() {
    throw new Error("Generic error");
  }
  
  function throwCustomError() {
    throw new CustomError("Custom error");
  }
  
  try {
    console.log("Try block for generic error");
    throwGenericError();
  } catch (error) {
    console.error("Caught an error:", error);
  } finally {
    console.log("Finally block for generic error");
  }
  
  try {
    console.log("Try block for custom error");
    throwCustomError();
  } catch (error) {
    console.error("Caught an error:", error);
  } finally {
    console.log("Finally block for custom error");
  }
  
  module.exports = {
    CustomError,
    throwGenericError,
    throwCustomError
  };
  