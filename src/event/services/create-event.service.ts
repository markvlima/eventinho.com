import {Injectable} from '@nestjs/common';
import {CreateEventRepository} from '../repositories/create-event.repository';
import {IEventEntity} from '../interfaces/IEventEntity';

@Injectable()
export class CreateEventService{
    constructor(
        private readonly createEventRepository : CreateEventRepository
    ){}

    async execute(event: IEventEntity): Promise<IEventEntity> {
        let newEvent = await this.createEventRepository.execute(event);

        return newEvent;
    }
}