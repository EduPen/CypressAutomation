Feature: End to End Ecommerce validatipon

   appplication Regression

@Login
Scenario: Ecommerce product delivery
   When I open ecommerce page
   When I add items to Cart
   And validate the total prices
   Then select the country submit and verify Success 
