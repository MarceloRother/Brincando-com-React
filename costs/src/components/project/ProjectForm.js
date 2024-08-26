function ProjectForm() {
  return (
    <form action="">
      <div>
        <input type="text" placeholder="Insira o nome do projeto" />
      </div>
      <div>
        <input type="number" placeholder="Insira o orcamento toal" />
      </div>
      <div>
        <select name="category_id">
          <option disabled>Selecione a categoria</option>
        </select>
      </div>
      <div>
        <input type="submit" value="Criar Projeto"/>
      </div>
    </form>
  );
}

export default ProjectForm;
