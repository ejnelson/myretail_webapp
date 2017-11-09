## My Retail Case Study
___
###To Run
- npm i
- npm start

###To Test
- npm run test -- --coverage


####continuous delivery flow diagram:

-  Develop environment
  - branch from develop for new features/bugs
  - pull request back into develop
  - develop branch is deployed via jenkins/artifactory to test environment
  - Jenkins executes automated unit tests during deployment
-  test environment
  - integration testing
  - pull request into master
  - master branch is deployed via jenkins/artifactory to stage environment
  - Jenkins executes unit tests during deployment
-  stage
  - performance testing
  - release branch cut
  - release is deployed via jenkins/artifactory to prod environment
-  Prod




myRetail is a rapidly growing company with HQ in Richmond, VA and over 200 stores across the east coast.
The company’s annual revenue last year was $5 billion and growing at the rate of 10% year over year.
myRetail sells general merchandise products, including a fast growing fresh grocery segment. The stores
average 80,000 sq. ft. in size and carry around 20,000 products. myRetail wants to provide a multi-channel
experience for its customers online.
myRetail is comparing solution options for the online grocery store. Create a web application that does the
following:
1) Use the provided design docs, desktop.psd and mobile.psd, as general guidelines to create the
user interface.
2) Use the provided json file, item-data.json, to populate the title, images and price.
3) The client side code can be backbone, angular or another framework of your choice. React
(additional library’s such as Redux are welcome). Use node to run the application.
4) Show the add to cart button only if the item is available online, purchasingChannelCode equals
0 or 1.
5) Show the pick up in store only if the item is available instore, purchasingChannelCode equals 0
or 2.
6) Create a carousel to scroll through the images
