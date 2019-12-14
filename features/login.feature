@login
Feature: projectHub login
@adminLogin
Scenario Outline: logging into projecthub as admin

  Given I open projecthub page
  Then I open admin login page
  Then I login as Admin
  Then I expect element "<adminHomeDesc>" to be present
 
Examples:
    | adminHomeDesc | Header 2 | Header 3 |
    | All of your active projects that have one or more items requiring Hilton review are listed below.  | Value 2  | Value 3  |