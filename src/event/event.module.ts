import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { CreateEventRepository } from './repositories/create-event.repository';
import { CreateEventService } from './services/create-event.service';
import { ListEventService } from './services/list-event.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EventSchema } from './Schema/events.schema';
import { DeleteEventService } from './services/delete-event.service';
import { UpdateEventService } from './services/update-event.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Event.name, schema: EventSchema }])
  ],
  controllers: [EventController],
  providers: [CreateEventRepository, CreateEventService, ListEventService, UpdateEventService, DeleteEventService],
  exports: [CreateEventRepository, CreateEventService, ListEventService, UpdateEventService, DeleteEventService]
})
export class EventModule {}
