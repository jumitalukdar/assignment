$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/techlift.feature");
formatter.feature({
  "name": "Understanding data driven",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Simple Data Driven Exampe",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.userIsOnSignupPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Login Link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.clickLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"testology.qa.learning@gmail.com\" email id",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.enterEmailId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"Testology@123\" password",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Parameterization Example",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User click on Login Link",
  "keyword": "And "
});
formatter.step({
  "name": "User enter \"\u003cemail\u003e\" email id",
  "keyword": "When "
});
formatter.step({
  "name": "User enter \"\u003cpassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "name": "click on Login Button",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "testology.qa.learning@gmail.com",
        "Testology@123"
      ]
    },
    {
      "cells": [
        "testology.qa.learning@gmail.com",
        "Testology@1234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Parameterization Example",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.userIsOnSignupPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Login Link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.clickLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"testology.qa.learning@gmail.com\" email id",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.enterEmailId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"Testology@123\" password",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Parameterization Example",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.userIsOnSignupPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Login Link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.clickLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"testology.qa.learning@gmail.com\" email id",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.enterEmailId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"Testology@1234\" password",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});