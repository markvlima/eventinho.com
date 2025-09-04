import { Injectable, BadRequestException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { EventDocument } from "../Schema/events.schema";
import { Event } from "../Schema/events.schema";

@Injectable()
export class UpdateEventService {
    constructor(
        @InjectModel(Event.name) private eventModel: Model<EventDocument>,
    ) {}

    async updateById(id: string, updateData: Partial<Event>): Promise<Event | null> {
        // Valida se o id é um ObjectId válido
        if (!Types.ObjectId.isValid(id)) {
            throw new BadRequestException("ID not found.");
        }

        const updated = await this.eventModel
            .findByIdAndUpdate(id, updateData, { new: true })
            .exec();

        if (!updated) return null;

        const { __v, ...rest } = updated.toObject();
        return rest as Event;
    }
}