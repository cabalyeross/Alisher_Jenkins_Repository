$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/features/manageAccess.feature");
formatter.feature({
  "name": "Manage Access",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify admin can add new users",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to Interview Prep",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.iNavigateToInterviewPrep()"
});
formatter.write("2021-02-28 14:41:47 PASS: Successfully navigated to the url");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"Login\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iShouldSeeThePage(String)"
});
formatter.write("2021-02-28 14:41:50 PASS: Login page is displayed");
formatter.embedding("image/png", "embedded0.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"admin@yahoo.com\" in the \"Enter Username\" input box",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iEnterInTheInputBox(String,String)"
});
formatter.write("2021-02-28 14:41:52 PASS: admin@yahoo.com was entered in Enter Username input box successfully");
formatter.embedding("image/png", "embedded1.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"adminUserPassword\" in the \"Enter Password\" input box",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iEnterInTheInputBox(String,String)"
});
formatter.write("2021-02-28 14:41:55 PASS: adminuser123 was entered in Enter Password input box successfully");
formatter.embedding("image/png", "embedded2.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Login\" button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iClickButton(String)"
});
formatter.write("2021-02-28 14:41:58 PASS: Login button was successfully clicked ");
formatter.embedding("image/png", "embedded3.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"Home\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iShouldSeeThePage(String)"
});
formatter.write("2021-02-28 14:42:02 PASS: Home page is displayed");
formatter.embedding("image/png", "embedded4.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Manage Access\" link",
  "keyword": "And "
});
formatter.match({
  "location": "ManageAccessSteps.iClickLink(String)"
});
formatter.write("2021-02-28 14:42:06 PASS: Manage Access was successfully clicked ");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the following values in the following fields",
  "rows": [
    {
      "cells": [
        "First Name",
        "Will"
      ]
    },
    {
      "cells": [
        "Last Name",
        "Smith"
      ]
    },
    {
      "cells": [
        "E-mail",
        "will.smith@gmail.com"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ManageAccessSteps.iEnterTheFollowingValuesInTheFollowingFields(String,String\u003e)"
});
formatter.write("2021-02-28 14:42:07 PASS: Will was entered in First Name input box successfully");
formatter.embedding("image/png", "embedded5.png", null);
formatter.write("2021-02-28 14:42:08 PASS: Smith was entered in Last Name input box successfully");
formatter.embedding("image/png", "embedded6.png", null);
formatter.write("2021-02-28 14:42:09 PASS: will.smith@gmail.com was entered in E-mail input box successfully");
formatter.embedding("image/png", "embedded7.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I choose \"Instructor\" from dropdown \"Role\"",
  "keyword": "And "
});
formatter.match({
  "location": "ManageAccessSteps.iChooseFromDropdown(String,String)"
});
formatter.write("2021-02-28 14:42:13 PASS: Instructor was successfully selected from dropdown Role");
formatter.embedding("image/png", "embedded8.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I choose \"10\" from dropdown \"Batch\"",
  "keyword": "And "
});
formatter.match({
  "location": "ManageAccessSteps.iChooseFromDropdown(String,String)"
});
formatter.write("2021-02-28 14:42:14 PASS: 10 was successfully selected from dropdown Batch");
formatter.embedding("image/png", "embedded9.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Add User\" button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iClickButton(String)"
});
formatter.write("2021-02-28 14:42:17 PASS: Add User button was successfully clicked ");
formatter.embedding("image/png", "embedded10.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the following user exists in the table",
  "rows": [
    {
      "cells": [
        "First Name",
        "admin"
      ]
    },
    {
      "cells": [
        "Last Name",
        "admin"
      ]
    },
    {
      "cells": [
        "E-mail",
        "admin@yahoo.com"
      ]
    },
    {
      "cells": [
        "Role",
        "Mentor"
      ]
    },
    {
      "cells": [
        "Batch",
        "N/A"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ManageAccessSteps.verifyTheFollowingUserExistsInTheTable(String,String\u003e)"
});
formatter.write("2021-02-28 14:42:28 PASS: The user exists in row 4");
formatter.write("2021-02-28 14:42:28 PASS: The user exists");
formatter.embedding("image/png", "embedded11.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Action\" button of user \"will.smith@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "ManageAccessSteps.iClickButtonOfUser(String,String)"
});
formatter.write("2021-02-28 14:42:30 PASS: Successfully clicked the button Action for will.smith@gmail.com");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Edit\" button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iClickButton(String)"
});
formatter.write("2021-02-28 14:42:31 PASS: Edit button was successfully clicked ");
formatter.embedding("image/png", "embedded12.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I edit the user with following",
  "rows": [
    {
      "cells": [
        "Email",
        "will.smith.new@gmail.com"
      ]
    },
    {
      "cells": [
        "Role",
        "Mentor"
      ]
    },
    {
      "cells": [
        "Batch",
        "N/A"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ManageAccessSteps.iEditTheUserWithFollowing(String,String\u003e)"
});
formatter.write("2021-02-28 14:42:34 PASS: All entries have updated");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Update User\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iClickButton(String)"
});
formatter.write("2021-02-28 14:42:35 PASS: Update User button was successfully clicked ");
formatter.embedding("image/png", "embedded13.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the following user exists in the table",
  "rows": [
    {
      "cells": [
        "First Name",
        "Will"
      ]
    },
    {
      "cells": [
        "Last Name",
        "Smith"
      ]
    },
    {
      "cells": [
        "E-mail",
        "will.smith.new@gmail.com"
      ]
    },
    {
      "cells": [
        "Role",
        "Mentor"
      ]
    },
    {
      "cells": [
        "Batch",
        "N/A"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ManageAccessSteps.verifyTheFollowingUserExistsInTheTable(String,String\u003e)"
});
formatter.write("2021-02-28 14:42:43 PASS: The user exists in row 1");
formatter.write("2021-02-28 14:42:43 PASS: The user exists");
formatter.embedding("image/png", "embedded14.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Action\" button of user \"will.smith.new@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "ManageAccessSteps.iClickButtonOfUser(String,String)"
});
formatter.write("2021-02-28 14:42:44 PASS: Successfully clicked the button Action for will.smith.new@gmail.com");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Delete\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iClickButton(String)"
});
formatter.write("2021-02-28 14:42:45 PASS: Delete button was successfully clicked ");
formatter.embedding("image/png", "embedded15.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Delete\" button in \"User Delete Window\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iClickButtonIn(String,String)"
});
formatter.write("2021-02-28 14:42:47 PASS: Delete button was successfully clicked ");
formatter.embedding("image/png", "embedded16.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the following user does NOT exist in the table",
  "rows": [
    {
      "cells": [
        "First Name",
        "John"
      ]
    },
    {
      "cells": [
        "Last Name",
        "Smith"
      ]
    },
    {
      "cells": [
        "E-mail",
        "john.smith@gmail.com"
      ]
    },
    {
      "cells": [
        "Role",
        "Instructor"
      ]
    },
    {
      "cells": [
        "Batch",
        "4"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ManageAccessSteps.verifyTheFollowingUserDoesNOTExistInTheTable(String,String\u003e)"
});
formatter.write("2021-02-28 14:42:58 PASS: The user does not exist as expected");
formatter.embedding("image/png", "embedded17.png", null);
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});