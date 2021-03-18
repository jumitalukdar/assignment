Feature: Test Sign-Up form

  Scenario: Validate error messages when user doesn't enter required fields in sign-up form

    Given User is on signup page
    When User submits the form without any details
    Then Print labels of all required fields


    Scenario: Validate user is able to upload image

      Given User clicks on Upload New Photo
      When User uploads a new image
      Then Image is uploaded


      Scenario: Validate user is able to submit the form

        Given User enters all the required fields
        When User clicks on submit button
        Then Form is successfully submitted