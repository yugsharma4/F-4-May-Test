# Acciojob_Module_Test_F4_05.05.2023
- Deployed Link: https://shubham-lolusare.github.io/Acciojob_Module_Test_F4_05.05.2023/

# Task
- To execute dummy authentication using api given at https://dummyjson.com/docs/auth
- Make a login UI and a profile page, the login takes only username and password and has a login button.
- The task is to take the username and password from the user and then on click of the log in button send a post request at the api given in the link above.
- The post request should look like this -
  fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
  username:${usernameState},
  password:${passwordState},
  })
 }) 
 .then(res => res.json())
 .then(console.log);
- If the response is 200 OK, then save the entire user object including token and the id in redux state and send the user to profile page.
- Inside the profile page , make a useEffect which sends a fetch request at https://dummyjson.com/users/${id} , where id is the id you saved in the redux state
- Save the user object with all the details using redux again and display all of the information you receive.
- Use any one of the usernames and passwords given below to actually log in and get a successful response, if the response is not 200 OK or successful then show the error provided by the api in the frontend on login.
- Dummy Credentials to get a successful response - Username - atuny0 , Password - 9uQFF1Lh
  Username - hbingley1 , password - CQutx25i8r
  Username - rshawe2 , password - OWsTbMUgFc
- You can get more valid usernames and password from - https://dummyjson.com/users.
- If its an invalid username or password the login api will automatically show an error.

# Marking Scheme (100 Marks)
- Dummy authentication execution (10 marks)
- Login UI and profile page creation (20 marks)
- Username and password handling (15 marks)
- Saving user object and navigating to the profile page (15 marks)
- Fetching user details in the profile page (15 marks)
- Displaying user information (15 marks)
- Deployment (10 Marks)
