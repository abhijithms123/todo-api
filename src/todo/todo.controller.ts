import { Controller, Get, Param } from "@nestjs/common";
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
}