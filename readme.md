# EKA TECHNICAL CHALLENGE - 2


## INTRODUCTION
For this technical challenge, we would like you to provide an interface for a user to input information. This workflow is commonly referred to as an onboarding process, and involves the user inputting their information into a series of forms.

## TECHNOLOGIES
This challenge implies building a single page fullstack application. Here's a list of the technologies that we expect you to utilize:

### FRONT-END
* React
* Redux
* Webpack
* Babel
* React-Router

### BACK-END
* Node
* Express
* Bookshelf
* PostgreSQL

## SPECIFICS
Please make sure to read through the ENTIRE wall of text below before proceeding to build your submission.

The basic workflow is:
1.  When the User requests the homepage, the user is taken to a generic landing page. On the landing page, there should be a button that redirects the user to the FIRST form of the onboarding process.
2.  There should be a total of 3 forms in the onboarding process. For reference, we'll refer to these 3 forms as Form1, Form2, and Form3.
3.  Each form will collect a specific set of information:
  * Form1 will collect username, password, and e-mail address.
  * Form2 will collect first name, last name, and telephone number.
  * Form3 will collect address (street address, city, state, zip).
4.  At the bottom of each form should be a SAVE button that saves the information that the user just entered.
5.  When the user clicks on the SAVE button on each form (Form1, Form2, Form3), it should send a request to your API/server that saves that user's information into the PostgreSQL DB that it is hooked up to.
6.  When the user clicks on the SAVE button on each form, it should take them to the next form in the series.
  * eg. User fills out Form1 and clicks save. Info should be saved in DB and user is then taken to Form2.
  * eg. User fills out Form3 (last in the series) and clicks save. Info should be saved in DB and User is then taken back to the landing page.

OPTIONAL: Form validation. All of this data that we're collecting is necessary to make our future features work, so we need all this information! Prevent users from putting in gibberish information like 'haha' for their e-mail address (should be a proper e-mail address), password validation, and also prevent them from continuing to the next form until they've filled out all the fields in the current form.

OPTIONAL: Users don't like being restricted. What if the user doesn't have time to sit through our lengthy onboarding process all at one go? Devise a way for a user to save their progress and continue onboarding at a later time.

OPTIONAL: Passwords should never be stored in databases unencrypted. Encrypt the user's password before it ever hits the database.

OPTIONAL: Oops. I'm a silly user. I finished Form2 but realized that I just gave you the wrong information! Devise a way for users to move back to forms that they have previously completed in order to modify their information.
  * eg. I finished Form1 and am now on Form2. I should be able to go back to Form1 and change my information there. I should _not_ be able to move forward to Form3 without first completing Form2.

OPTIONAL: Is your code working the way it should be? Write some tests using Nighwatch.js that covers the full onboarding process.

OPTIONAL: Deploy your application on Heroku.

## WHAT WE LOOK FOR IN SUBMISSIONS
Obviously since you're taking this challenge, you want to wow us. But how? Here's what we're looking for:

1. You need to make sure your application works.

2. Is your codebase a mess? You can be sure that at the very least we're going to take a quick look at your source code, and we should be looking at modular, extensible code that is easy to follow.

3. Did you complete any of the optional challenges? The optional challenges are really your place to shine and stand out from other applicants, so if you have time left over before your submission is due, I would strongly suggest trying to complete some of the optionals.

4. How does your application look? Making your application look stylish and sleek is always a good idea.

## HELP
If you encounter any errors that you believe is a result of lack of information/misinformation on our part, send an e-mail to joseph@go-eka.com. We will get back to you as soon as possible.
