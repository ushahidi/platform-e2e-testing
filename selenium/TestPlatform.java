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

        WebElement linkSurverys = driver.findElementByXPath("//*[@id=\"bootstrap-app\"]/ui-view/ui-view/div/main/div/div/div[2]/div/h2/a");
        linkSurverys.click();

        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.navigate().back();

        WebElement linkDataSources = driver.findElementByXPath("//*[@id=\"bootstrap-app\"]/ui-view/ui-view/div/main/div/div/div[3]/div/h2/a");
        linkDataSources.click();

        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        driver.navigate().back();

        WebElement linkImport = driver.findElementByXPath("//*[@id=\"bootstrap-app\"]/ui-view/ui-view/div/main/div/div/div[4]/div/h2/a");
        linkImport.click();

        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        driver.navigate().back();

        WebElement linkExport = driver.findElementByXPath("//*[@id=\"bootstrap-app\"]/ui-view/ui-view/div/main/div/div/div[6]/div/h2/a");
        linkExport.click();

        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        driver.navigate().back();

        WebElement linkUsers = driver.findElementByXPath("//*[@id=\"bootstrap-app\"]/ui-view/ui-view/div/main/div/div/div[7]/div/h2/a");
        linkUsers.click();

        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        driver.navigate().back();

        WebElement linkRoles = driver.findElementByXPath("//*[@id=\"bootstrap-app\"]/ui-view/ui-view/div/main/div/div/div[8]/div/h2/a");
        linkRoles.click();

        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        driver.navigate().back();

        WebElement linkCategories = driver.findElementByXPath("//*[@id=\"bootstrap-app\"]/ui-view/ui-view/div/main/div/div/div[9]/div/h2/a");
        linkCategories.click();

        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        driver.navigate().back();

        WebElement linkWebhooks = driver.findElementByXPath("<a ui-sref=\"settings.webhooks\" translate=\"\" href=\"/settings/webhooks\">Webhooks</a>");
        linkWebhooks.click();

        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        driver.navigate().back();

        WebElement linkPlans = driver.findElementByXPath("//*[@id=\"bootstrap-app\"]/ui-view/ui-view/div/main/div/div/div[11]/div/h2/a");
        linkPlans.click();

        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        driver.navigate().back();

    }
}
