



export async function getUserInfo() {
  const BASE_USER_URL = "https://www.codewars.com/api/v1/users/"
  try {
  const response =  await fetch(`${BASE_USER_URL}MLeys`)
  const data = await response.json();
  return data;

  } catch(err) {
      console.log(err)
      res.status(500).send('Error getting Codewars Info');
      throw new Error('Error grabbing CodewarsApi h, check server terminal')
  }

}
