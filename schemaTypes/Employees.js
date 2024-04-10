export default {
    name: 'employees',
    type: 'document',
      title: 'Employees',
    fields: [
      {
        name: 'employeeImg',
        type: 'image',
        title: 'Employee Image'
      },
      {
        name: 'name',
        type: 'string',
        title: 'Employee Name'
      },
      {
        name: 'designation',
        type: 'string',
        title: 'Designation'
      },

    ]
  }