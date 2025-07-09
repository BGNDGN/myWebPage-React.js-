const baseURL = process.env.REACT_APP_API_URL;
console.log('API base URL:', baseURL);  // Burada undefined olmamalı
console.log('All env vars:', process.env);

export default baseURL;
