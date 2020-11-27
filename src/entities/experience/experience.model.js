import mongoose from 'mongoose';

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const MODAL_NAME = 'Experience';

const FIELDS = Object.freeze({
  ID: '_id',
  NAME: 'name',
  YEAR_EXP: 'yearExp'
});

const schema = new Schema({
  Id: ObjectId,
  [FIELDS.NAME]: {
    required: true,
    trim: true,
    type: String
  },
  [FIELDS.YEAR_EXP]: {
    required: true,
    trim: true,
    type: Number
  }
}, { versionKey: false });

const model = mongoose.model(MODAL_NAME, schema);

export {
  model as default,
  MODAL_NAME,
  FIELDS
};
