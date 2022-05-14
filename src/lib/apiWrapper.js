export default async function getDataFromEndpoint(endpoint) {
    console.log(process.env.REACT_APP_API_URL);
    var target = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : 'http://localhost:4000';
    const response = await fetch(target + endpoint);
    const data = await response.json();
    return data;
  }