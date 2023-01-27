'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    for (let i = 0; i <10; i++) {  
      await queryInterface.bulkInsert('offices', [{  
          officeCode: '2023'+i,
          city: 'Guayaquil',
          phone:'+593 9'+i+' 596 235'+i,
          addressLine1: 'Coop n'+i,
          addressLine2: 'Coop n'+(i+1),
          state:'Guayas',
          country:'Ecuador',
          postalCode:'09010'+i,
          territory:'Ecuador Amazonico'
      }], {});  
   } 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('offices', null, {});
  }
};
