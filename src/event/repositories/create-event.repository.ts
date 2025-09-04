import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { EventDocument } from "../Schema/events.schema";
import { Model } from "mongoose";
import { IEventEntity } from "../interfaces/IEventEntity";

@Injectable()
export class CreateEventRepository {
    constructor(
        @InjectModel(Event.name) private eventModel: Model<EventDocument>,
    ){}

    async execute(event: IEventEntity): Promise<IEventEntity>{
        const CreatedEvent = new this.eventModel(event);
        await CreatedEvent.save();
        return CreatedEvent.toObject();
    }
} 