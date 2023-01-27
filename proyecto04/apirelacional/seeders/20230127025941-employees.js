'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let name = ['Gilson','Jefferson','Ronny','Roberto','Raul','Pedro','Irving','Ivis','Monica','Laura']
    let last = ['Ponce','Hernandez','Perez','Limones','Briones','Velez','Vera','Pobeda','Encalada','Garcia']
    for (let i = 0; i < 10; i++) {  
      await queryInterface.bulkInsert('employees', [{  
          employeeNumber: '20231'+i,
          lastName: last[i],
          fisrtName: name[i],
          extension: '20'+i,
          email: 'cust'+name[i]+i+''+((i*2)+1)+'@employees.com',
          officeCode:'2023'+i,
          reportsTo:'',
          jobTitle:'Vendedor'+i,
      }], {});  
   } 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('employees', null, {});
  }
};
