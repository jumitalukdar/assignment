$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Test.feature");
formatter.feature({
  "name": "Test Sign-Up form",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate error messages for Email",
  "description": "",
  "keyword": "Scenario"
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
  "name": "User clicks on Register here link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.clickRegisterHere()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Proceed as Vendor button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.clickOnProceedAsVendor()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will wait for Page for load",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.implicitWait()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Register Button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.clickOnRegisterButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will verify Email Required Message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.verifyEmailReqdErrorMsg()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I print all required fields",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.printAllRequiredFields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will quit all session",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.tearDown()"
});
formatter.result({
  "status": "passed"
});
});