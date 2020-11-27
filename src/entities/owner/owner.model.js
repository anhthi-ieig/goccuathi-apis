import mongoose from 'mongoose';

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const MODAL_NAME = 'Owner';

const FIELDS = Object.freeze({
  ID: '_id',
  EMAIL: 'email',
  FULLNAME: 'fullname',
  DATE_OF_BIRTH: 'dateOfBirth',
  PHONE: 'phone',
  UNIVERSITY: 'university',
  ABOUT_ME: 'aboutMe',
  AVATAR_URL: 'avatarUrl',
  CV_URL: 'cvUrl',
  FACEBOOK_URL: 'facebookUrl',
  INSTAGRAM_URL: 'instagramUrl',
  GITHUB_URL: 'githubUrl',
  LINKED_IN_URL: 'linkedinUrl'
});

const schema = new Schema({
  Id: ObjectId,
  [FIELDS.EMAIL]: {
    required: true,
    trim: true,
    type: String,
    unique: true
  },
  [FIELDS.FULLNAME]: {
    required: true,
    trim: true,
    type: String
  },
  [FIELDS.DATE_OF_BIRTH]: {
    required: true,
    type: Date
  },
  [FIELDS.PHONE]: {
    trim: true,
    type: String
  },
  [FIELDS.UNIVERSITY]: {
    trim: true,
    type: String
  },
  [FIELDS.ABOUT_ME]: {
    trim: true,
    type: String
  },
  [FIELDS.AVATAR_URL]: {
    type: String
  },
  [FIELDS.CV_URL]: {
    trim: true,
    type: String
  },
  [FIELDS.FACEBOOK_URL]: {
    trim: true,
    type: String
  },
  [FIELDS.INSTAGRAM_URL]: {
    trim: true,
    type: String
  },
  [FIELDS.GITHUB_URL]: {
    trim: true,
    type: String
  },
  [FIELDS.LINKED_IN_URL]: {
    trim: true,
    type: String
  }
}, { versionKey: false });

const model = mongoose.model(MODAL_NAME, schema);

export {
  model as default,
  MODAL_NAME,
  FIELDS
};
