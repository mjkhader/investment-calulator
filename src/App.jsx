import Header from "./components/Header";
import UserInput from "./components/UserInput.jsx";
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  return (
    <div>
      <Header />
      <UserInput />
    </div>
  );
}

export default App;
