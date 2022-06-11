console.log('Hello TypeScript!')

interface Todo {
  title: string;
  description: string;
}

const updateTodo = (todo: Todo, fieldsToUpdate: Partial<Todo>) => {
  return { ...todo, ...fieldsToUpdate }
}

const todo = {
  title: "organize desk",
  description: "clear cluster",
}

const updatedTodo = updateTodo(todo, { description: "throw out trash" })

const readOnlyTodo: Readonly<Todo> = {
  title: "Delete inactive users",
  description: ""
}