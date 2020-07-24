package stepsDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SkyBlue {
WebDriver driver;
	@Given("^Set SkyBlue Background button exists$")
	public void set_SkyBlue_Background_button_exists()  {
		
		System.out.println("Inside step-Set SkyBlue Background button exists");
		
String projectPath = System.getProperty("driver = new ChromeDriver()		");
	
	System.out.println("projectPath is:"+projectPath);
		
		System.setProperty("webdriver.chrome.driver","./driver/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(40,TimeUnit.SECONDS);
		driver.manage().deleteAllCookies();
		driver.navigate().to("http://techfios.com/test/101/");
	
	
	
	}

	@When("^I click on the button$")
	public void i_click_on_the_button() {
		
		driver.findElement(By.xpath("//button[@onclick= 'myFunctionSky()']")).click();
	}

	@Then("^the background color will change to sky blue$")
	public void the_background_color_will_change_to_sky_blue() {
		
	}


}
