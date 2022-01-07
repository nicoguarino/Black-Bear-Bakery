
// checks if count is = 1 if not returns name as plural
export function pluralize(name, count) {
  if (count === 1) {
    return name
  }
  return name + 's'
}

// for offline functionality
export function idbPromise(storeName, method, object) {
  return new Promise((resolve, reject) => {

    // open connection to the database 
    const request = window.indexedDB.open('black-bear-bakery', 1);

    // create variables to hold reference to the database, trans, and object store
    let database, trans, store;

    // if version has changed or first time needed, run this method and create new object stores 
    request.onupgradeneeded = function (e) {
      const database = request.result;

      // create object store for each type of data and set primary key = to _id
      database.createObjectStore('products', { keyPath: '_id' });
      database.createObjectStore('categories', { keyPath: '_id' });
      database.createObjectStore('cart', { keyPath: '_id' });
    };

    // handle any errors with connecting
    request.onerror = function (e) {
      console.log('There was an error');
    };

    // on database open success
    request.onsuccess = function (e) {

      database = request.result;

      trans = database.transaction(storeName, 'readwrite');

      store = trans.objectStore(storeName);

      // checks if there's any errors
      database.onerror = function (e) {
        console.log('error', e);
      };

      switch (method) {
        case 'put':
          store.put(object);
          resolve(object);
          break;
        case 'get':
          const all = store.getAll();
          all.onsuccess = function () {
            resolve(all.result);
          };
          break;
        case 'delete':
          store.delete(object._id);
          break;
        default:
          console.log('No valid method');
          break;
      }

      // close the connection if transaction is complete
      trans.oncomplete = function () {
        database.close();
      };
    };

  });
}

export function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}