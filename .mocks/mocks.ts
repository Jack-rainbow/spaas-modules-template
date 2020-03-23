const defs = {
  ApiResponse: (...typeArgs) => {
    return {
      code: 27.754072711997367,
      message: '我是字串',
      type: '我是字串',
    };
  },
  Category: (...typeArgs) => {
    return {
      id: 90.19913963476749,
      name: '我是字串',
    };
  },
  Order: (...typeArgs) => {
    return {
      complete: true,
      id: 63.587255282144014,
      petId: 94.01584512351633,
      quantity: 89.42348614983197,
      shipDate: '我是字串',
      status: null,
    };
  },
  Pet: (...typeArgs) => {
    return {
      category: defs.Category(),
      id: 70.2637035229865,
      name: '我是字串',
      photoUrls: ['我是字串', '我是字串', '我是字串'],
      status: null,
      tags: [defs.Tag(), defs.Tag(), defs.Tag()],
    };
  },
  Tag: (...typeArgs) => {
    return {
      id: 37.57583160132745,
      name: '我是字串',
    };
  },
  User: (...typeArgs) => {
    return {
      email: '我是字串',
      firstName: '我是字串',
      id: 98.64496213088539,
      lastName: '我是字串',
      password: '我是字串',
      phone: '我是字串',
      userStatus: 97.47356647827459,
      username: '我是字串',
    };
  },
};

const escapeDeadCycle = (fn, num = 30) => {
  let n = 0;

  return (...args) => {
    if (n > num) return {};
    n++;

    const res = fn(...args);

    return res;
  };
};

Object.keys(defs).forEach(key => {
  defs[key] = escapeDeadCycle(defs[key]);
});

export default {
  /** Everything about your Pets */
  pet: {
    /** Add a new pet to the store */
    addPet: null,
    /** Update an existing pet */
    updatePet: null,
    /** Finds Pets by status
Multiple status values can be provided with comma separated strings */
    findPetsByStatus: [defs.Pet(), defs.Pet(), defs.Pet()],
    /** Finds Pets by tags
Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing. */
    findPetsByTags: [defs.Pet(), defs.Pet(), defs.Pet()],
    /** Find pet by ID
Returns a single pet */
    getPetById: defs.Pet(),
    /** Updates a pet in the store with form data */
    updatePetWithForm: null,
    /** Deletes a pet */
    deletePet: null,
    /** uploads an image */
    uploadFile: defs.ApiResponse(),
  },

  /** Access to Petstore orders */
  store: {
    /** Returns pet inventories by status
Returns a map of status codes to quantities */
    getInventory: null,
    /** Place an order for a pet */
    placeOrder: defs.Order(),
    /** Find purchase order by ID
For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions */
    getOrderById: defs.Order(),
    /** Delete purchase order by ID
For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors */
    deleteOrder: null,
  },

  /** Operations about user */
  user: {
    /** Create user
This can only be done by the logged in user. */
    createUser: null,
    /** Creates list of users with given input array */
    createUsersWithArrayInput: null,
    /** Creates list of users with given input array */
    createUsersWithListInput: null,
    /** Logs user into the system */
    loginUser: '我是字串',
    /** Logs out current logged in user session */
    logoutUser: null,
    /** Get user by user name */
    getUserByName: defs.User(),
    /** Updated user
This can only be done by the logged in user. */
    updateUser: null,
    /** Delete user
This can only be done by the logged in user. */
    deleteUser: null,
  },
};
