import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { TodoResponse } from "./todo.dto";
import { todos } from "./todo.mock";

@Controller('todos')
@ApiTags('todos')
export class TodoController {
    @Get()
    @ApiOperation({summary: 'Get all todos'})
    @ApiOkResponse({description: 'List of todos',type: [TodoResponse]})
    async getTodos(): Promise<TodoResponse[]> {
        return todos;
}

    @Get('/:id')
    @ApiOperation({summary: 'Returns one todo based on ID'})
    @ApiOkResponse({description: 'One todo',type: TodoResponse})
    async getTodoById(@Param('id') id: string): Promise<TodoResponse> {
         return todos.find((todo) => todo.id === id);
}

  @Post('/add')
  @ApiOperation({summary: 'Add new todo'})
  @ApiOkResponse({description: 'New todo',type: TodoResponse})
  async createTodo(@Body() todo: TodoResponse): Promise<TodoResponse> {
    todos.push(todo);
    return todos.find((data)=> data.id === todo.id);
}

// @Put('/edit')
// @ApiOperation({summary: 'edit an existing todo'})
// @ApiOkResponse({description: 'updated todo',type: TodoResponse})
// async updateTodo(@Body() todo: TodoResponse): Promise<TodoResponse> {
//    let currentTodo = todos.find((data)=>data.id === todo.id);
//    todos.
//    currentTodo.title = todo.title;
//    currentTodo.description = todo.description;
//    currentTodo.isCompleted = todo.isCompleted;
//    return currentTodo;
// }
   
}