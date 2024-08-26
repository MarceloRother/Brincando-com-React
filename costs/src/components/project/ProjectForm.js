import { useEffect, useState } from "react";

import Input from "../form/Input.js";
import Select from "../form/Select.js";
import SubmitButton from "../form/SubmitButton.js";

import styles from "./ProjectForm.module.css";

function ProjectForm({ btnText }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "aplication/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, [])

  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        text="Orcamento do projeto"
        name="budjet"
        placeholder="Insira o orcamento total"
      />
      <Select
        name="category_id"
        text="Selecionar a categoria"
        options={categories}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
