'use strict';

/**
 * testcollection service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::testcollection.testcollection');
