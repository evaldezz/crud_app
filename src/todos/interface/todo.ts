/*
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
*/
export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export interface TodoCreateDto {
  title: string;
  completed: boolean;
}

export interface TodoUpdateDto extends Partial<TodoCreateDto> {}
