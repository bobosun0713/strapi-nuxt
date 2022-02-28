'use strict';

/**
 * produce service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::produce.produce');
