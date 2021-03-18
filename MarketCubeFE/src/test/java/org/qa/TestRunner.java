package org.qa;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {
                "src/test/resources/features/Test.feature"
        },
        plugin = {
                "pretty",
                "html:results",
                "json:results/cucumber.json"
        },
        monochrome = true,  	      
        dryRun=false,
        glue ={"stepDeinition"},
        tags= {"@Sanity"},
        strict=false
)


public class TestRunner {
}