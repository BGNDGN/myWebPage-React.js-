const devURL = "http://localhost:7000";
const prodURL = "https://burakgundogan.net";

const baseURL = process.env.NODE_ENV === "production" ? prodURL : devURL;

console.log('Final baseURL:', baseURL);

export default baseURL;
