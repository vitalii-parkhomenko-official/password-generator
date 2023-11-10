import { useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import InputCopy from "./components/InputCopy";
import InputCheckbox from "./components/InputCheckbox";
import InputRange from "./components/InputRange";
import ButtonsBar from "./components/ButtonsBar";
import Button from "./components/Button";
import ErrorMessage from "./components/ErrorMessage";
import generatePassword from "./utils/generate";

const getInitialValues = () => ({
  lowercase: true,
  uppercase: false,
  numbers: false,
  symbols: false,
  length: "8"
});

function App() {
  const [password, setPassword] = useState("");
  const [values, setValues] = useState(getInitialValues);
  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    const { length, ...rest } = values;

    if (Object.keys(rest).every(key => !rest[key])) {
      setError("At least on checkbox must be selected");
    } else {
      setPassword(generatePassword(Number(length), rest));
    }
  };
  const handleReset = () => {
    setPassword("");
    setValues(getInitialValues());
    setError("");
  };
  const handleChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.type === "range" ? target.value : target.checked
    });
  };

  return (
    <Card>
      <h1>
        Password generator
      </h1>
      <InputCopy value={password} />
      <Form onSubmit={handleSubmit}>
        <InputRange
          id="length"
          name="length"
          label="Character length"
          value={values.length}
          min={8}
          max={24}
          onChange={handleChange}
        />
        <br />
        <InputCheckbox
          id="lowercase"
          name="lowercase"
          label="Include Lowercase"
          checked={values.lowercase}
          onChange={handleChange}
        />
        <InputCheckbox
          id="uppercase"
          name="uppercase"
          label="Include Uppercase"
          checked={values.uppercase}
          onChange={handleChange}
        />
        <InputCheckbox
          id="numbers"
          name="numbers"
          label="Include Numbers"
          checked={values.numbers}
          onChange={handleChange}
        />
        <InputCheckbox
          id="symbols"
          name="symbols"
          label="Include Symbols"
          checked={values.symbols}
          onChange={handleChange}
        />
        <br />
        {Boolean(error) && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonsBar>
          <Button type="submit">
            Generate
          </Button>
          <Button onClick={handleReset}>
            Reset
          </Button>
        </ButtonsBar>
      </Form>
    </Card>
  );
}

export default App;
