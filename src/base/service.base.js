import {
  isEmpty, isArray, isObject, isNumber
} from 'lodash';

class BaseService {
  static Model;

  constructor(model) {
    this.Model = model;
  }

  //
  // ────────────────────────────────────────────────────────────────── I ──────────
  //   :::::: G E T   O N E   B Y   I D : :  :   :    :     :        :          :
  // ────────────────────────────────────────────────────────────────────────────
  //

  async getOneById(id) {
    const result = await this.Model
      .findById(id)
      .cache()
      .exec();

    return isEmpty(result)
      ? null
      : result.toObject();
  }

  //
  // ──────────────────────────────────────────────────────────────────────── I ──────────
  //   :::::: G E T   O N E   B Y   F I E L D : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────────────────────────
  //

  async getOneByField(filterField) {
    const result = await this.Model
      .findOne(filterField)
      .cache()
      .exec();

    return isEmpty(result)
      ? null
      : result.toObject();
  }

  //
  // ──────────────────────────────────────────────────────────────────────────── I ──────────
  //   :::::: G E T   M A N Y   B Y   F I E L D S : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────────────────────────────
  //

  async getManyByFields(condition = {}) {
    const {
      filterField, selectFields,
      sortFields, limit
    } = condition;

    let buildQueries = this.Model.find(filterField);

    if (isArray(selectFields)) {
      buildQueries = buildQueries.select(selectFields.join(' '));
    }

    if (isObject(sortFields)) {
      buildQueries = buildQueries.sort(sortFields);
    }

    if (isNumber(limit)) {
      buildQueries = buildQueries.limit(limit);
    }

    const originItems = await buildQueries
      .cache()
      .exec();

    return isArray(originItems)
      ? originItems.map((item) => item.toObject())
      : [];
  }

  //
  // ────────────────────────────────────────────────────── I ──────────
  //   :::::: G E T   A L L : :  :   :    :     :        :          :
  // ────────────────────────────────────────────────────────────────
  //

  async getAll() {
    const buildQueries = this.Model.find();
    const originItems = await buildQueries
      .cache()
      .exec();

    return isArray(originItems)
      ? originItems.map((item) => item.toObject())
      : [];
  }

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: C R E A T E : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //

  async create(item) {
    const itemInstance = new this.Model(item);
    const result = await itemInstance.save();
    this.Model.clearCache();

    return isEmpty(result)
      ? null
      : result.toObject();
  }

  //
  // ──────────────────────────────────────────────────────────────── I ──────────
  //   :::::: U P D A T E   B Y   I D : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────────────────
  //

  async updateById({
    id,
    updatedItem
  }) {
    const result = await this.Model
      .clearCache()
      .findByIdAndUpdate(id, { $set: updatedItem }, { new: true });

    return isEmpty(result)
      ? null
      : result.toObject();
  }

  //
  // ────────────────────────────────────────────────────────────────────── I ──────────
  //   :::::: U P D A T E   B Y   F I E L D : :  :   :    :     :        :          :
  // ────────────────────────────────────────────────────────────────────────────────
  //

  async updateByField({
    filterField,
    updatedItem
  }) {
    const result = await this.Model
      .clearCache()
      .findOneAndUpdate(filterField, { $set: updatedItem }, { new: true });

    return isEmpty(result)
      ? null
      : result.toObject();
  }

  //
  // ──────────────────────────────────────────────────────────────── I ──────────
  //   :::::: D E L E T E   B Y   I D : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────────────────
  //

  async deleteById(id) {
    const result = await this.Model
      .clearCache()
      .findByIdAndDelete(id);

    return isEmpty(result)
      ? null
      : result.toObject();
  }

  //
  // ──────────────────────────────────────────────────────────────────────────────── I ──────────
  //   :::::: D E L E T E   M A N Y   B Y   F I E L D : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────────────────────────────────
  //

  async deleteManyByField(filterField) {
    if (!filterField) {
      return null;
    }

    const result = await this.Model
      .clearCache()
      .deleteMany(filterField);

    return result;
  }

  //
  // ──────────────────────────────────────────────────────────── I ──────────
  //   :::::: D E L E T E   A L L : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────────────
  //

  async deleteAll() {
    await this.Model
      .clearCache()
      .deleteMany();
  }
}

export default BaseService;
