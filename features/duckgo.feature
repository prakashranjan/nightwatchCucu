Feature: Duck duck Go Search

Scenario: Searching Duck Duck go

  Given I open Duck's search page
  Then the title is "DuckDuckGo — Privacy, simplified."
  And the Duck search form exists