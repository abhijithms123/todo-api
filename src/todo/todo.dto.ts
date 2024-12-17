import { ApiProperty } from "@nestjs/swagger";

export class TodoResponse {
    @ApiProperty({description: 'ID of the todo'})
    id: string;
    @ApiProperty({description: 'Title of the todo'})
    title: string;
    @ApiProperty({description: 'Description of the todo'})
    description:string;
    @ApiProperty({description: 'Status of the todo'})
    isCompleted: boolean;
}