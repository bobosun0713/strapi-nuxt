'use strict';

/**
 * produce router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::produce.produce');
