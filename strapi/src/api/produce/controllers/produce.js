'use strict';

/**
 *  produce controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::produce.produce');
