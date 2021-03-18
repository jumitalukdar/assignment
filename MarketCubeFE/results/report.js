$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Test.feature");
formatter.feature({
  "name": "Market Cube Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.scenario({
  "name": "Validate Hundred results are displayed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Assignment"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Home Page is Loaded",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.verifyMarketCubeLogoIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify by default Hundred results is selected in rows drop down",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.verifyDropDownDefaultValue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Scroll to Showing 1 to 100 label on the page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.scrollToShowingRecordsLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify count of number of rows is hundred",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.verifyNumberOfRecordsDisplayed()"
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
formatter.scenario({
  "name": "Validate Filter Functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Assignment"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Home Page is Loaded",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.verifyMarketCubeLogoIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I mouse hover the cryptocurrencies link and click Random",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.mousehoverCyptoCurrencies()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user stores values of \"1\" record",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.getNameOfRecord(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Filters",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.clickOnFilters()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Price Filter",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.clickOnPrice()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I selected thousand plus price filter option",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.clickOnThousandPlus()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Apply Filter",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.clickApply()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validate correct records are displaying post filter",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.verifyValueAfterFilters()"
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
formatter.scenario({
  "name": "Validate Watchlist Functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Assignment"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Home Page is Loaded",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.verifyMarketCubeLogoIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Log In",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.clickOnLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"jumi.talukdar24@gmail.com\" email id",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.enterEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"Tarang123##\" password",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.clickLogIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User add \"6\" record to watchlist",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.addRecordToWatchList(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user stores values of \"6\" record",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.getNameOfRecord(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User add \"8\" record to watchlist",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.addRecordToWatchList(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user stores values of \"8\" record",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.getNameOfRecord(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to WatchList Section",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.navigateToWatchList()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validate correct records were added to watch list",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.verifyItemsAddedToWatchList()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I remove all items from watchlist",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.removeFromWatchlist()"
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