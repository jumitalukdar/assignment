package org.qa;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Utils {
	public static boolean jsClick(WebElement element, WebDriver driver){
		try{
			JavascriptExecutor executor = (JavascriptExecutor)driver;
			executor.executeScript("arguments[0].scrollIntoView(true);", element);
			Thread.sleep(1000);
			executor.executeScript("arguments[0].click();", element);
			Thread.sleep(1000);
			return true;
		}catch(Exception e){
			System.out.println("Unable to click element " +element);
			return false;
		}	
	}
}
