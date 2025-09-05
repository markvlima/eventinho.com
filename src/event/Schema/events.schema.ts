import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type EventDocument = HydratedDocument<Event>;

@Schema({
  timestamps: true,
  versionKey: false,
})
export class Event {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ 
  required: true, 
  type: String, 
  validate: {
    validator: (v: string) => /^([01]\d|2[0-3]):([0-5]\d)$/.test(v),
    message: props => `${props.value} não é uma hora válida! Use HH:mm`
  }
})
hour: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  value: number;

  createdAt: Date;
  updatedAt: Date;
}

export const EventSchema = SchemaFactory.createForClass(Event);

EventSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (_doc, ret: any) => {
    // remove __v se existir
    if (ret.__v !== undefined) {
      delete ret.__v;
    }

    // formata a data principal
    if (ret.date) {
      const d = new Date(ret.date);
      ret.date = d.toISOString().split("T")[0]; // YYYY-MM-DD
    }

    // formata createdAt
    if (ret.createdAt) {
      const d = new Date(ret.createdAt);
      ret.createdAt = d.toISOString().split("T")[0];
    }

    // formata updatedAt
    if (ret.updatedAt) {
      const d = new Date(ret.updatedAt);
      ret.updatedAt = d.toISOString().split("T")[0];
    }

    return ret;
  },
});