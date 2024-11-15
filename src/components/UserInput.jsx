import { useState } from "react";
export default function UserInput() {
 

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>
            Initial Investment
            <input
              value={userInput.initialInvestment}
              type="number"
              required
              onChange={(event) =>
                handleChange("initialInvestment", event.target.value)
              }
            />
          </label>
        </p>
        <p>
          <label>
            Annual Investment
            <input
              type="number"
              required
              value={userInput.annualInvestment}
              onChange={(event) =>
                handleChange("annualInvestment", event.target.value)
              }
            />
          </label>
        </p>
      </div>
      <div className="input-group" onChange={handleChange}>
        <p>
          <label>
            Expected return
            <input
              type="number"
              required
              value={userInput.expectedReturn}
              onChange={(event) =>
                handleChange("expectedReturn", event.target.value)
              }
            />
          </label>
        </p>
        <p>
          <label>
            Duration
            <input
              type="number"
              required
              value={userInput.duration}
              onChange={(event) =>
                handleChange("duration", event.target.value)
              }
            />
          </label>
        </p>
      </div>
    </section>
  );
}
