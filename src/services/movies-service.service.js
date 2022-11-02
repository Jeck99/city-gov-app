
const basicUrl = 'https://moviesmern.herokuapp.com/movies/';
/**
 * GET /movies/all
 * @param {} setSomething 
 * @returns 
 */
export const getData = async () => {
  try {
     return await fetch(`${basicUrl}all`)
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error));
  } catch (error) {
    console.error("Error:", error)
  }

};
/**
 * GET movies/:id
 * @param {*} setSomething 
 * @returns 
 */
export const getDataById = () => {

};
/**
 * POST movies/add
 * @param {*} setSomething 
 * @returns 
 */
export const createData = () => {
};
/**
 * PUT movies/:id
 * @param {*} setSomething 
 * @returns 
 */
export const updateData = () => {

};
/**
 * DELETE movies/:id
 * @param {*} setSomething 
 * @returns 
 */
export const deleteData = () => {

};