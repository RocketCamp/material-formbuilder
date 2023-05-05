# material-formbuilder

A form builder component library for Material UI

## Install

```bash
npm install --save @rocketcamp/material-formbuilder
```

## Usage

![alt text](https://brief.kz/usage.jpg)

```jsx
import React from "react";
import { FormBuilder } from "@rocketcamp/material-formbuilder";

function RegistrationPage() {
  const handleSubmit = (data) => {
    // data in FormData format
  };
  return (
    <FormBuilder
      disabled={isLoading}
      fields={[
        {
          name: "firstname",
          label: "First name",
          width: 1 / 2,
          required: true,
        },
        {
          name: "lastname",
          label: "Last name",
          width: 1 / 2,
          required: true,
        },
        {
          name: "email",
          label: "Email",
          type: "email",
          required: true,
          helper:
            "Ensure the registered email address matches that used to shop online",
          error: "Email is not valid",
        },
        {
          name: "password",
          label: "Password",
          type: "password",
          required: true,
          helper:
            "One alpabetic, one special character or number, length between 8-20 characters",
        },
        {
          name: "agree",
          type: "checkbox",
          required: true,
          label: "Checkbox label",
        },
      ]}
      handleSubmit={handleSubmit}
    />
  );
}
export default RegisterPage;
```
