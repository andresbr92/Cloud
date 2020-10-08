This is a technical test for Cloud district. This is a CRUD with API consumption made with react redux, hooks, axios,styled components.

## Installation

Create an .env file in the main directory of the app. You will need a developer key from google, facebook and twitter to test the app.
REACT_APP_TEST_FACEBOOK= 'UserKey' <br>
REACT_APP_TEST_GOOGLE= 'UserKey'<br>
REACT_APP_TEST_TWITTER = 'UserKey'<br>
REACT_APP_TEST_TWITTER_SECRET = 'UserKey'<br>

Then, in the control panel of the developer portal of each social network, you must enable access to the project URL: https://localhost:3000/


<img src='/public/images/url.png'>


About the api you will not need an API-key since it is free to use.

Now you are ready to run:
### `HTTPS= true npm start`


Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
Does it look like this:
<img src='./public/images/homeScreen.png'>

You can log in with your Google, Facebook or Twitter account.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### About the features of the app:
When you log in with any of the social networks, depending on which one, the app extracts your profile photo and your name from the object returned by the API of the specific social network:
<img src='/public/images/socialPhoto.png'>

When the session starts successfully, the app automatically redirects you to / users. Here the app makes an API-request to show the users.

If the login has failed, the error displayed in the console can be debugged. Additionally an alert will be displayed on the screen.

Similarly, you can create users that will not be displayed on the screen. The API will return a confirmation to us.


<img src='/public/images/error.png'>
<br>
You can access the detail of each user, edit it or even delete it. Delete and edit is not displayed. The API only returns a confirmation to us.



## Social Media

Follow me on [Linkedin](https://www.linkedin.com/in/andres-barros-rivas/).
