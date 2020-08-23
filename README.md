# Angular App - Payment Initiation Sandbox API

Payment Initiation is a angular app & will interact with REST service which will validate all the payment request details given by the customer.

The application takes payment details as input from UI and validates the following:

Check the request validation

Check whether the Amount limit exceeded.

Check the White listed certificates validation, If a CN start with `Sandbox-TPP`

Check the input signature validation.

Steps to run the angular application:

Import the project in Visual Studio Code [Angular Project]

1. Install angular devkit,

===> npm install --save-dev @angular-devkit/build-angular

2. Run the build

3. Run the application using,

 ===> ng serve

Hit the http://localhost:4200 URL in browser.

Enter all the user inputs.

Click on submit.
