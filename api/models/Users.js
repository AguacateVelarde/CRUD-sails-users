/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    
      connection: 'mysql',
      attributes: {
          idCliente: {
              type: 'integer',
              autoIncrement: true,
              primaryKey: true
          },
          Nombre: {
              type: 'string'
          },
          Telefono: {
              type: 'string'
          },
          Domicilio: {
              type: 'string'
          },
          RFC: {
              type: 'string'
          },
          Email: {
              type: 'string'
          },
          CP: {
              type: 'string'
          }
      }

};
