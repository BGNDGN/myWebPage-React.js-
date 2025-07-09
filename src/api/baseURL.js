const baseURL = process.env.REACT_APP_API_URL || "http://localhost:7000";

console.log('API base URL:', baseURL);  
console.log('All env vars:', process.env);

console.log('process.env.REACT_APP_API_URL:', process.env.REACT_APP_API_URL);
console.log('process.env.NODE_ENV:', process.env.NODE_ENV);
console.log('process.env.PUBLIC_URL:', process.env.PUBLIC_URL);



export default baseURL;

