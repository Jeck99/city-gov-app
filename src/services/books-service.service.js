
const basicUrl = 'https://moviesmern.herokuapp.com/books/';
/**
 * GET /movies/all
 * @param {} setSomething 
 * @returns 
 */
  export const getData = (setSomething) => {
    return fetch(`${basicUrl}all`)
      .then((res) => res.json())
      .then((data) => setSomething(data.data))
      .catch((error) => console.error("Error:", error));
  };
/**
 * GET movies/:id
 * @param {*} setSomething 
 * @returns 
 */
  export const getDataById = (id) => {
    return fetch(`${basicUrl}${id}`)
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error));
  };
  /**
   * POST movies/add
   * @param {*} setSomething 
   * @returns 
   */
  export const createData = (object) => {
    return fetch(`${basicUrl}add`,{})
          .then((res) => res.json())
      .then((data) => setSomething(data.data))
      .catch((error) => console.error("Error:", error));
  };
  /**
   * PUT movies/:id
   * @param {*} setSomething 
   * @returns 
   */
  export const updateData = (setSomething) => {
    return fetch("https://moviesmern.herokuapp.com/movies/all")
      .then((res) => res.json())
      .then((data) => setSomething(data.data))
      .catch((error) => console.error("Error:", error));
  };
  /**
   * DELETE movies/:id
   * @param {*} setSomething 
   * @returns 
   */
  export const deleteData = (setSomething) => {
    return fetch("https://moviesmern.herokuapp.com/movies/all")
      .then((res) => res.json())
      .then((data) => setSomething(data.data))
      .catch((error) => console.error("Error:", error));
  };