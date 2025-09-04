import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { EventDocument } from "../Schema/events.schema";

@Injectable()
export class DeleteEventService {
    constructor(
        @InjectModel(Event.name) private eventModel: Model<EventDocument>,
    ) {}

    async deleteById(id: string): Promise<Event | null> {
        const deleted = await this.eventModel.findByIdAndDelete(id).lean().exec();
        if (!deleted) return null;

        return deleted as unknown as Event;
    }
}