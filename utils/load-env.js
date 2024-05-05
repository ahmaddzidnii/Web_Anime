/**
 * Retrieves the value of the specified environment variable.
 *
 * @param {string} key - The name of the environment variable to retrieve.
 * @return {string|undefined} The value of the environment variable, or undefined if it is not set.
 */
export const env = (key) => {
  return process.env[key];
};
