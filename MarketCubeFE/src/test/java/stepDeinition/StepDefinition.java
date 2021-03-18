package stepDeinition;

import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.qa.Constant;
import org.qa.Utils;
import org.testng.Assert;
import cucumber.api.java.After;
import io.cucumber.java.en.When;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class StepDefinition {

	private static WebDriver driver;
	private String driverPath = System.getProperty("user.dir") + File.separator + "chromedriver";
	private static List<String> values = new ArrayList(4);

	@Before
	public void setup() {
		System.out.println(driverPath);
		System.setProperty("webdriver.chrome.driver", driverPath);
		driver = new ChromeDriver();
		driver.get(Constant.URL);
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}

	@Given("User Home Page is Loaded")
	public void verifyMarketCubeLogoIsDisplayed() {
		if (driver.findElement(By.xpath("(//a[@title='Go to homepage'])[2]")).isDisplayed()) {
			System.out.println("User is on Home Page");
		} else {
			System.out.println("User is not on Home page");
		}
	}
	
	@Then("Scroll to Showing 1 to 100 label on the page")
	public void scrollToShowingRecordsLink() {
		Actions actions = new Actions(driver);
    	WebElement lblShowingRecords = driver.findElement(By.xpath("//p[contains(text(),'Showing 1 - 100')]"));
    	actions.moveToElement(lblShowingRecords).perform();
	}
	@Given("Verify by default Hundred results is selected in rows drop down")
	public void verifyDropDownDefaultValue() {
		String size = driver.findElement(By.xpath("(//div[@display='flex']/div)[1]")).getText().toString();
		Assert.assertEquals(size, "100");
	}

	@Then("Verify count of number of rows is hundred")
	public void verifyNumberOfRecordsDisplayed() throws InterruptedException {
		((JavascriptExecutor) driver).executeScript("window.scrollTo(0, document.body.scrollHeight)");
		Thread.sleep(2000);
		List<WebElement> rows = driver.findElements(By.xpath("//tbody//td/p[@color='text2']"));
		String text = rows.get(rows.size() - 1).getText().toString();
		Assert.assertEquals(text, "100");
	}

	@And("User clicks on Log In")
	public void clickOnLogin() {
		driver.findElements(By.linkText("Log In")).get(0).click();
	}

	@Then("^User enter \"(.*)\" email id$")
	public void enterEmail(String email) {
		WebElement txtBxEmail = driver.findElement(By.xpath("//input[@type='email']"));
		txtBxEmail.sendKeys(email);
	}

	@And("^User enter \"(.*)\" password$")
	public void enterPassword(String password) {
		driver.findElement(By.xpath("//input[@type='password']")).sendKeys(password);
	}

	@And("User click on Login button")
	public void clickLogIn() {
		driver.findElement(By.xpath("//button[text()='Log In']")).click();
	}

	@Then("I will quit all session")
	public void tearDown() {
		driver.quit();
	}

	@When("^User add \"(.*)\" record to watchlist$")
	public void addRecordToWatchList(int i) throws InterruptedException {
		try {
			WebElement watchList = driver.findElement(By.xpath("(//td//span[@class='icon-Star'])[" + i + "]"));
			Utils.jsClick(watchList, driver);
			if(driver.findElement(By.xpath("//button[text()='Check It Out']")).isDisplayed()){
				driver.findElement(By.xpath("//button[text()='Check It Out']")).click();
			}
		} catch (Exception e) {
			throw e;
		}
	}

	@When("^user stores values of \"(.*)\" record$")
	public void getNameOfRecord(int i) {
		String name = driver.findElement(By.xpath("(//td//a//div/p)[" + (i * 2 - 1) + "]")).getText().toString();
		String brand = driver.findElement(By.xpath("(//td//a//div/p)[" + (i * 2) + "]")).getText().toString();
		values.add(name);
		values.add(brand);
	}

	@Then("User navigates to WatchList Section")
	public void navigateToWatchList() {
		WebElement element = driver.findElement(By.xpath("(//span[text()='Watchlist'])[2]"));
		Utils.jsClick(element, driver);
	}

	@Then("User validate correct records were added to watch list")
	public void verifyItemsAddedToWatchList() {
		List<WebElement> elements = driver.findElements(By.xpath("//tbody/tr"));
		int numberOfRecords = elements.size();
		int k = 1;
		for (int i = 1; i <= numberOfRecords; i++) {
			String name = driver.findElement(By.xpath("(//td//a//div/p)[" + i + "]")).getText().toString();
			String brand = driver.findElement(By.xpath("(//td//a//div/p)[" + (i + 1) + "]")).getText().toString();
			Assert.assertEquals(values.get(2 * (i - 1)), name);
			Assert.assertEquals(values.get(k), brand);
			k = k + 2;
		}
	}
	
	@Then("User validate correct records are displaying post filter")
	public void verifyValueAfterFilters() {
			String name = driver.findElement(By.xpath("(//td//a//div/p)[1]")).getText().toString();
			String brand = driver.findElement(By.xpath("(//td//a//div/p)[2]")).getText().toString();
			Assert.assertEquals(values.get(0), name);
			Assert.assertEquals(values.get(1), brand);
		}
	@When("I remove all items from watchlist")
	public void removeFromWatchlist() {
		List<WebElement> watchlists = driver.findElements(By.xpath("//span[@class='icon-Star-Filled']"));
		int size = watchlists.size();
		for (int i = 0; i < watchlists.size(); i++) {
			Utils.jsClick(driver.findElements(By.xpath("//span[@class='icon-Star-Filled']")).get(0), driver);
		}
	}
	
	@When("I mouse hover the cryptocurrencies link and click Random")
	public void mousehoverCyptoCurrencies() {
		Actions actions = new Actions(driver);
    	WebElement menuOption = driver.findElement(By.xpath("(//span[text()='Cryptocurrencies'])[2]"));
    	actions.moveToElement(menuOption).perform();
    	WebElement subMenuOption = driver.findElement(By.xpath("//h6[text()='Ranking']")); 
    	actions.moveToElement(subMenuOption).perform();
    	subMenuOption.click();
	}
	
	@When("I click on Filters")
	public void clickOnFilters() {
		WebElement btnFilters=driver.findElement(By.xpath("(//button[text()='Filters'])[2]"));
		btnFilters.click();
	}
	
	@And("I click on Price Filter")
	public void clickOnPrice() {
		WebElement btnPrice=driver.findElement(By.xpath("//button[text()='Price']"));
		btnPrice.click();
	}
	
	@And("I selected thousand plus price filter option")
	public void clickOnThousandPlus() {
		WebElement btnThousandPlus=driver.findElement(By.xpath("//button[text()='$1,000 +']"));
		btnThousandPlus.click();
	}
	
	@Then("I click on Apply Filter")
	public void clickApply() {
		WebElement btnApply=driver.findElement(By.xpath("//button[text()='Apply']"));
		btnApply.click();
	}
}
