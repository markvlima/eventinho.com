import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Event, EventDocument } from "../Schema/events.schema";
import { Model } from "mongoose";

@Injectable()
export class ListEventService {
    constructor(
        @InjectModel(Event.name) private eventModel: Model<EventDocument>,
    ){}

    async searchAll(): Promise<Event[]> {
        return this.eventModel.find().exec();
    }

    async searchByNameEvent(name: string): Promise<Event[]> {
        return this.eventModel.find({name: new RegExp(name, 'i')}).exec();
    }
}