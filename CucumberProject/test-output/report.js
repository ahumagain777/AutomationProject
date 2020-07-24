$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("skybluebackground.feature");
formatter.feature({
  "line": 1,
  "name": "to test the background color change",
  "description": "",
  "id": "to-test-the-background-color-change",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Sky Blue Background",
  "description": "",
  "id": "to-test-the-background-color-change;sky-blue-background",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Set SkyBlue Background button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the background color will change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "location": "SkyBlue.set_SkyBlue_Background_button_exists()"
});
formatter.result({
  "duration": 5004280999,
  "status": "passed"
});
formatter.match({
  "location": "SkyBlue.i_click_on_the_button()"
});
formatter.result({
  "duration": 301030400,
  "status": "passed"
});
formatter.match({
  "location": "SkyBlue.the_background_color_will_change_to_sky_blue()"
});
formatter.result({
  "duration": 43601,
  "status": "passed"
});
});