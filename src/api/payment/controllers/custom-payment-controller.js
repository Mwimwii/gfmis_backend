'use strict';

/**
 * student controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::payment.payment', ({strapi}) => ({
    async createPayments(ctx) {
        const payment = {amount: 1800,  }
      
        const { data: schoolIds } = ctx.request.body;
        // find all the students in the schools
        let students = [];
        let payments;
        try {

          students = await strapi.db.query('api::student.student').findMany({
            where: {
              school: schoolIds
              
            },
            populate: ['school']
          })
          payments = await strapi.db.query('api::payment.payment').createMany({
            data : students.map(student=>{
              return {
                amount: "1800",
                student: student.id,
                school: student.school.id,
                is_verified: false,
              }
            })  
          })
        }
        catch(err) {
          console.log(err)
        }

      const response = students;

      return response;
    },
    async uploadBankTx(ctx) {
        const payment = {amount: 1800,  }
      
        const { schoolId, bankTx } = ctx.request.body;
        // find all the students in the schools
        let students = [];
        let payments;
        try {

          students = await strapi.db.query('api::student.student').findMany({
            where: {
              school: schoolIds
              
            },
            populate: ['school']
          })
          payments = await strapi.db.query('api::payment.payment').updateMany({
            data : students.map(student=>{
              return {
                amount: "1800",
                student: student.id,
                school: student.school.id,
                is_verified: false,
              }
            })  
          })
        }
        catch(err) {
          console.log(err)
        }

      const response = students;

      //   const studentRole = await strapi.db.query('plugin::users-permissions.role').findOne({
      //     where: {
      //       name: 'Student'
      //     } 
      //    });
      //   const studentUser = await strapi.db.query('plugin::users-permissions.user').create({
      //       data: 
      //       {  email,
      //         username,
      //         password: "dummyPass",
      //         firstName,
      //         lastName,
      //         gender,
      //         dateOfBirth,
      //         role: {
      //           connect: [
      //             {
      //               id: studentRole.id
      //             }
      //           ]
      //         },
      //         confirmed: false
      //       }
      //     });
      //   const { parentAddress, parentFirstName, parentLastName, parentMobile, parentNRC } = ctx.request.body.data;
      //   const parentRole = await strapi.db.query('plugin::users-permissions.role').findOne({
      //     where: {
      //       name: 'Parent'
      //     } 
      //    });

      //   console.log('Creating Parent user')
      //   let parentUser = await strapi.db.query('plugin::users-permissions.user').findOne({
      //     where: {
      //       nrc: parentNRC
      //     }})
      //     let parent = {}

      //   if(parentUser) {
      //     parent = await strapi.db.query('api::parent.parent').findOne({
      //         where: {
      //           user: parentUser.id
      //         } 
      //       });
      //   } else {
      //     parentUser = await strapi.db.query('plugin::users-permissions.user').create({
      //       data: { 
      //         username: parentFirstName + '.' + parentLastName +  Math.random().toString(36),
      //         email: parentFirstName + '.' + parentLastName +  Math.random().toString(36) + '@global.com',
      //         password: "dummyPass",
      //         firstName: parentFirstName,
      //         lastName: parentLastName,
      //         gender: "Male",
      //         nrc: parentNRC,
      //         role: {
      //           connect: [
      //             {
      //               id: parentRole.id
      //             }
      //           ]
      //         },
      //         mobile: parentMobile,
      //         confirmed: false
      //       }
      //     })
      //     parent = await strapi.db.query('api::parent.parent').create({
      //       data:
      //       {
      //             address: parentAddress,
      //             user: parentUser.id,
      //             createdAt: Date.now(),
      //             updatetedAt: Date.now(),
      //             publishedAt: Date.now(),
      //           }
      //       })      
      //     }
      // // Create a student in the student collection
      //   const { gradeId, schoolId } = ctx.request.body.data;
      //   ctx.request.body = {
      //     ...ctx.request.body,
      //     data: {
      //       user: studentUser.id,
      //       beneficiary: false,
      //       enrolledAt: "2015-02-02",
      //       parent: parent.id,
      //       grade: gradeId,
      //       school: schoolId }
      //   };
    
      
      // // 3
      // const response = await super.create(ctx);
  
      // // 4
      return response;
    }
})
);
