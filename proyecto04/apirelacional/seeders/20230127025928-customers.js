'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let conteo = 0
    let custom = [103,112,114,119,121,124,128,129,131,141,144,145,146,148,151,157,161,166,167,171,172,173,175,177,181,186,187,189,198,201,202,204,205,209,211,216,219,227,233,239,240,242,249,250,256,259,260,276,278,282,286,298,299,311,314,319,320,321,323,324,328,333,334,339,344,347,350,353,357,362,363,379,381,382,385,386,398,406,412,415,424,447,448,450,452,455,456,458,462,471,473,475,484,486,487,489,495,496]
    for (let i = 0; i < custom.length; i++) { 
      if (conteo > 10) conteo = 0; 
      await queryInterface.bulkInsert('customers', [{  
          customerNumer: custom[i],
          customerName: 'Consumidor Final '+i,
          contactLastName:'Consumidor',
          contactFirstName:'Consumidor',
          phone:'999999999',
          addressLine1:'Local '+i,
          addressLine2:'Local '+i,
          city:'Guayaquil',
          state:'Guayas',
          postalCode:'09010'+i,
          country:'Ecuador',
          salesRepEmployeeNumber:'20231'+conteo,
          creditLimit:'10'+i
      }], {});  
      conteo++;
   } 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('customers', null, {});
  }
};
