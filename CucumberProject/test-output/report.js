$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("skybluebackground.feature");
formatter.feature({
  "line": 1,
  "name": "to test the background color change",
  "description": "",
  "id": "to-test-the-background-color-change",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 10,
  "name": "Sky white Background",
  "description": "",
  "id": "to-test-the-background-color-change;sky-white-background",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Set Skywhite Background button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on the button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the background color will change to white",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "SkyBlue.i_click_on_the_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});