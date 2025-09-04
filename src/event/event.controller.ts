import { Body, Controller, Post, Get, Put, Delete, Param, Query, NotFoundException, HttpCode } from '@nestjs/common';
import { CreateEventService } from './services/create-event.service';
import { ListEventService } from './services/list-event.service';
import { UpdateEventService } from './services/update-event.service';
import { DeleteEventService } from './services/delete-event.service';
import * as IEventEntity from './interfaces/IEventEntity';

@Controller('event')
export class EventController {
    constructor(
        private readonly createEventService : CreateEventService,
        private readonly listEventService: ListEventService,
        private readonly updateEventService: UpdateEventService,
        private readonly deleteEventService: DeleteEventService
    ){}

    @Post('create')
    async create(@Body() event: IEventEntity.IEventEntity): Promise<IEventEntity.IEventEntity>{
        return this.createEventService.execute(event);
    }

    @Get()
    async searchEvent(@Query('name') name?: string): Promise<IEventEntity.IEventEntity[]> {
        if(name){
            return this.listEventService.searchByNameEvent(name);
        }
        return this.listEventService.searchAll();
    }
    
    @Put(':id')
    @HttpCode(200)
    async updateEvent(@Param('id') id: string, @Body() updateData: Partial<IEventEntity.IEventEntity>){
        const updated = await this.updateEventService.updateById(id, updateData);

        if (!updated) {
            throw new NotFoundException(`Event with ID ${id} not found.`);
        }

        return updated;
    }

    @Delete(':id')
    @HttpCode(204)
    async deleteEvent(@Param('id') id: string) {
        const deleted = await this.deleteEventService.deleteById(id);

        if (!deleted) {
            throw new NotFoundException(`Event with ID ${id} not found.`);
        }
    }
}