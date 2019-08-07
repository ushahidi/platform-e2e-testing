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
        fieldEmail.sendKeys ("walter@ushahidi.com");

        WebElement fieldPass = driver.findElementById("password");
        fieldPass.sendKeys("t3stushahidi");

        WebElement buttonSubmit = driver.findElementByXPath("//*[@id=\"bootstrap-app\"]/ush-modal-container/div/div[1]/modal-content/login/form/div[2]/div/button[2]");
        buttonSubmit.click();

//        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        //go into settings
        WebElement buttonSettings = driver.findElementByXPath("//a[normalize-space()='Settings']");
        buttonSettings.click();

        WebElement linkGeneral = driver.findElementByXPath("//*[@id='bootstrap-app']/ui-view/ui-view/div/main/div/div/div[1]/div/h2/a");
        linkGeneral.click();

        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);

        driver.navigate().back();

        WebElement linkSurverys = driver.findElementByPartialLinkText("/surveys");
        linkSurverys.click();

        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        driver.navigate().back();

        WebElement linkDataSources = driver.findElementByPartialLinkText("/datasources");
        linkDataSources.click();

        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        driver.navigate().back();

        WebElement linkImport = driver.findElementByPartialLinkText("/import");
        linkImport.click();

        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        driver.navigate().back();

        WebElement linkExport = driver.findElementByPartialLinkText("/export");
        linkExport.click();

        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        driver.navigate().back();

        WebElement linkUsers = driver.findElementByPartialLinkText("/users");
        linkUsers.click();

        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        driver.navigate().back();

        WebElement linkRoles = driver.findElementByPartialLinkText("/roles");
        linkRoles.click();

        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        driver.navigate().back();

        WebElement linkCategories = driver.findElementByPartialLinkText("/categories");
        linkCategories.click();

        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        driver.navigate().back();

        WebElement linkWebhooks = driver.findElementByPartialLinkText("/webhooks");
        linkWebhooks.click();

        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        driver.navigate().back();

        WebElement linkPlans = driver.findElementByPartialLinkText("/plans");
        linkPlans.click();

        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        driver.navigate().back();

    }
}
