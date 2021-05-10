<div align="center">
    <p align="center">
        <a href="https://codesandbox.io/s/react-awesome-form-controlled-ne0qc?file=/src/App.js" title="React Awesome Form">
            <img src="https://github.com/SlDo/react-awesome-form/blob/main/image.png" alt="React Awesome Form" />
        </a>
    </p>
</div>

## Install

    npm install react-awesome-form

## Links

- [Demo](https://codesandbox.io/s/react-awesome-form-controlled-ne0qc?file=/src/App.js)

## Quickstart

```jsx
import "./styles.css";
import { useInput } from "react-awesome-form";

export default function App() {
  const firstName = useInput(true, "", {
    regExp: /^[a-zA-Zа-яА-Я ,.'-]+$/i,
    required: true
  });

  const lastName = useInput(true, "", {
    regExp: /^[a-zA-Zа-яА-Я ,.'-]+$/i,
    required: true
  });

  return (
    <div className="App">
      <h1 class="title">React Awesome Form</h1>
      <form className="form">
        <label className="label">
          <input
            placeholder="Last Name"
            className="input"
            type="text"
            {...lastName.handlers}
            autoComplete={false}
          />
          {lastName.error && <span className="error">Incorrect last name</span>}
        </label>
        <button type="submit" className="button">
          Send
        </button>
      </form>
    </div>
  );
}
```

## API

```typescript
type InputValue = string | number | null | undefined;

interface InputProps {
  regExp?: RegExp,
  required?: boolean
}

interface IuseInputReturn {
  resetInput: () => void, 
  handlers: {
    onBlur: (e: any) => void, 
    onInput: (e: any) => void
  }, 
  setValue: (value: T) => void, 
  error: boolean | undefined, 
  value: () => InputValue
};
```

#### `function useInput<T>(controlled: boolean, initial: T, options?: InputProps): IuseInputReturn`

Main function **useInput.** The first argument is a **boolean** type (required argument), which declare **controlled or uncontrolled input.** The second one is a **initial state** of the input (required argument). The third one is an **additional option** for form (optional argument).


