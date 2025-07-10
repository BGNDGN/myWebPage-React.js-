console.log('process.env.REACT_APP_API_URL:', process.env.REACT_APP_API_URL);

const baseURL = process.env.REACT_APP_API_URL || "http://localhost:7000";

console.log('Using baseURL:', baseURL);

export default baseURL;
