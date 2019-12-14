@logout
Feature: projectHub logout
@adminLogout
Scenario Outline: logging out of projecthub as admin

  Then I logout
  Then I expect element "<homeHeader>"
 
Examples:
    | homeHeader | Header 2 | Header 3 |
    | Welcome to Project HUB  | Value 2  | Value 3  |