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

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" }
}