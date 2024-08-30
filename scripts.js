//const form = document.querySelector("[data-form]");
//const result = document.querySelector("[data-result]");

//form.addEventListener("submit", (event) => {
  //event.preventDefault();
  //const entries = new FormData(event.target);
  //const { dividend, divider } = Object.fromEntries(entries);
  //result.innerText = dividend / divider;
//});

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

// Initial state
result.innerText = "No calculation performed";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  try {
    const entries = new FormData(event.target);
    const { dividend, divider } = Object.fromEntries(entries);

    // Check if either input is empty
    if (!dividend || !divider) {
      result.innerText = "Division not performed. Both values are required in inputs. Try again";
      return;
    }

    // Check if inputs are numbers
    if (isNaN(dividend) || isNaN(divider)) {
      throw new Error("Non-numeric input provided");
    }

    // Convert inputs to numbers
    const dividendNum = Number(dividend);
    const dividerNum = Number(divider);

    // Handle division by zero
    if (dividerNum === 0) {
      console.error("Division by zero attempted", new Error().stack);
      result.innerText = "Division not performed. Invalid number provided. Try again";
      return;
    }

    // Perform division and display the whole number result
    const divisionResult = Math.floor(dividendNum / dividerNum);
    result.innerText = divisionResult;

  } catch (error) {
    console.error(error.stack);
    document.body.innerHTML = "<h1>Something critical went wrong. Please reload the page.</h1>";
  }
});
