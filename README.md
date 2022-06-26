# 14 Model-View-Controller (MVC): Tech Blog

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the profile; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the profile, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts, and the opition to add a new blog post that include the post title and the date created
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to the homepage with my new blog post
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the profile option in the navigation
THEN I am taken to the profile and presented with any blog posts I have already created and the option to delete my blog post
WHEN I click on one of my existing posts in the profile
THEN I am prompted presented with the post's details and comment's details 
WHEN i click on  one the delete button for my existing posts in the profile
THEN the post will be deleted including all comments
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```
https://week14-coursework.herokuapp.com/

![alt text](./home_page.JPG "index page screenshot")
![alt text](./login_logout_page.JPG "login and sign up screenshot")
![alt text](./post_page.JPG "post screenshot")
![alt text](./profile_page.JPG "profile page screenshot")

