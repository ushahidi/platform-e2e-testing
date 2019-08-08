import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class TestPlatform {
    public static void main (String[]args){
        ChromeDriver driver = new ChromeDriver();
        driver.get("https://test-deployment.steve-buscemi.ush.zone/views/map");

        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        WebElement buttonLogin = driver.findElementByXPath("//a[normalize-space()='Log in']");
        buttonLogin.click();

        WebElement fieldEmail = driver.findElementById ("email");
        fieldEmail.sendKeys ("enterEmailHere");

        WebElement fieldPass = driver.findElementById("password");
        fieldPass.sendKeys("enterPasswordHere");

        WebElement buttonSubmit = driver.findElementByXPath("//*[@id=\"bootstrap-app\"]/ush-modal-container/div/div[1]/modal-content/login/form/div[2]/div/button[2]");
        buttonSubmit.click();

        //go into settings
        WebElement buttonSettings = (new WebDriverWait(driver, 10)).until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[normalize-space()='Settings']")));
        buttonSettings.click();

        WebElement linkGeneral = driver.findElementByXPath("//*[@id='bootstrap-app']/ui-view/ui-view/div/main/div/div/div[1]/div/h2/a");
        linkGeneral.click();

        Thread.sleep(2000);
        driver.navigate().back();

        WebElement linkSurveys = driver.findElementByXPath("//*[@id=\"bootstrap-app\"]/ui-view/ui-view/div/main/div/div/div[2]/div/h2/a");
        linkSurveys.click();

        Thread.sleep(2000);
        driver.navigate().back();

        WebElement linkDataSources = driver.findElementByXPath("//*[@id=\"bootstrap-app\"]/ui-view/ui-view/div/main/div/div/div[3]/div/h2/a");
        linkDataSources.click();

        Thread.sleep(2000);
        driver.navigate().back();

        WebElement linkImport = driver.findElementByXPath("//*[@id=\"bootstrap-app\"]/ui-view/ui-view/div/main/div/div/div[4]/div/h2/a");
        linkImport.click();

        Thread.sleep(2000);
        driver.navigate().back();

        WebElement linkExport = driver.findElementByXPath("//*[@id=\"bootstrap-app\"]/ui-view/ui-view/div/main/div/div/div[6]/div/h2/a");
        linkExport.click();

        Thread.sleep(2000);
        driver.navigate().back();

        WebElement linkUsers = driver.findElementByXPath("//*[@id=\"bootstrap-app\"]/ui-view/ui-view/div/main/div/div/div[7]/div/h2/a");
        linkUsers.click();

        Thread.sleep(2000);
        driver.navigate().back();

        WebElement linkRoles = driver.findElementByXPath("//*[@id=\"bootstrap-app\"]/ui-view/ui-view/div/main/div/div/div[8]/div/h2/a");
        linkRoles.click();

        Thread.sleep(2000);
        driver.navigate().back();

        WebElement linkCategories = driver.findElementByXPath("//*[@id=\"bootstrap-app\"]/ui-view/ui-view/div/main/div/div/div[9]/div/h2/a");
        linkCategories.click();

        Thread.sleep(2000);
        driver.navigate().back();

        WebElement linkWebhooks = driver.findElementByXPath("//*[@id=\"bootstrap-app\"]/ui-view/ui-view/div/main/div/div/div[10]/div/h2/a");
        linkWebhooks.click();

        Thread.sleep(2000);
        driver.navigate().back();

        WebElement linkPlans = driver.findElementByXPath("//*[@id=\"bootstrap-app\"]/ui-view/ui-view/div/main/div/div/div[11]/div/h2/a");
        linkPlans.click();

        Thread.sleep(2000);
        driver.navigate().back();

    }
}
