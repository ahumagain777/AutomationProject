Feature: to test the background color change

@Test
Scenario: Sky Blue Background
Given Set SkyBlue Background button exists
When I click on the button
Then the background color will change to sky blue

@SmokeTest
Scenario: Sky white Background
Given Set Skywhite Background button exists
When I click on the button
Then the background color will change to white