import React, { useEffect, useRef } from "react";

import { Form } from "@unform/web";
import { FormHandles, Scope, SubmitHandler } from "@unform/core";

import { Input } from "../form/input";

interface FormData {
  name: string;
  email: string;
}

export const FormList: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = (data, {reset}) => {
    if(!data.name) {
      alert("Please enter a name")
    }

    console.log(data)
    reset();
  }

  useEffect(() => {
    setTimeout(() => {
      formRef.current?.setData({
        name: "Victor",
        email: "victorgc@gmail.com",
        password: "123",
        address: {
          street: "Rua do teste",
          number: "123",
        }
      })
    }, 2000);
  })

  return (
    <div className="container">
      <Form 
        onSubmit={handleSubmit}
        ref={formRef}
        className="container"
      >

        <Input
          name="name"
        />
        <Input
          name="email"
        />
        <Input
          name="password"
        />

        <Scope path="address">
          <Input
            name="street"
          />
          <Input
            name="number"
          />
        </Scope>

        <button type="submit">Enviar</button>
      </Form>
    </div>
  )
}