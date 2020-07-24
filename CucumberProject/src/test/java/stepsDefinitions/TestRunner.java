package stepsDefinitions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features ="src\\test\\java\\features",glue= {"stepsDefinitions"},
 dryRun = false,
 monochrome = true,
 tags = {"~@SmokeTest","@Test"},
 plugin = {"pretty", "html:test-output"}
 )

public class TestRunner {
	
	

}
