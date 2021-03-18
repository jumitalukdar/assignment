@Sanity
Feature: Market Cube Functionality

  @Assignment
  Scenario: Validate Hundred results are displayed
    Given User Home Page is Loaded
    When Verify by default Hundred results is selected in rows drop down
    Then Scroll to Showing 1 to 100 label on the page
    And Verify count of number of rows is hundred
    Then I will quit all session

  @Assignment
  Scenario: Validate Filter Functionality
    Given User Home Page is Loaded
    And I mouse hover the cryptocurrencies link and click Random
    Then user stores values of "1" record
    When I click on Filters
    And I click on Price Filter
    And I selected thousand plus price filter option
    Then I click on Apply Filter
    And User validate correct records are displaying post filter
    Then I will quit all session

  @Assignment
  Scenario: Validate Watchlist Functionality
    Given User Home Page is Loaded
    And User clicks on Log In
    Then User enter "jumi.talukdar24@gmail.com" email id
    And User enter "Tarang123##" password
    And User click on Login button
    Then User add "6" record to watchlist
    And user stores values of "6" record
    Then User add "8" record to watchlist
    And user stores values of "8" record
    Then User navigates to WatchList Section
    And User validate correct records were added to watch list
    Then I remove all items from watchlist
    Then I will quit all session
