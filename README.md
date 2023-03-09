# BeatFit

BeatFit is a site for people who wish to challenge more of their exercise goal by comparing their results with other peers. BeatFit is beneficial not only to the experienced person in workout but to whom wish to start their own exercise. By comparing your exercise goal with others gives you the motivation to keep on doing better than you can and by this workout beginners will easily make it as a habit. For those workout buffs could set a higher goal for making a better and healthy body.


## Features

### Existing Features

- __Navigation Bar__

  - Featured on all four pages. Navigation bar links to the Home, Timetable, Gallery and Join. Logo on the very left side leads to the home page. 
  - This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button. 

  ![Nav Bar](readme-image/navbar.png)

- __Main Background Image__

  - The main background image consists of three different workout related images rotating by slowly overlapping the previous one, and will stand as a default background image across all pages. 

  ![Main Background Image](readme-image/homepage.png)

- __Why Join BeatFit Section__

  - Why Join BeatFit has two sections; brief reasoning for why working out together is good, and why choose BeatFit for that reason. 
  - Users will seek why it could be benificial to workout together and this will make the users get interested in joining BeatFit. 

  ![Why Join BeatFit](readme-image/homepage-about.png)

- __TimeTable__

  - This section will allow the user to see the full weekly based schedules for every day and see which day will meet their workout plan. 
  
  ![Timetable](readme-image/timetable.png)

- __Gallery__

  - Gallery will provide the users with supporting images to see how the gym and the whole workout scene would look like. 

  ![Gallery](readme-image/gallery.png)

- __Join Page__

  - This page will allow the user to get signed up to BeatFit to start their workout journey by comparing with others. The user will be asked to fill in their first name, last name and email address as a mandatory field. Users could choose which days will fit their schedule during the week.

  ![Join](readme-image/join.png)

- __Thanks for Joining page__

  - This page will show up once the users sign up for joining BeatFit. 
  - The user will be notified that there will expect an email sent to the email address they entered for joining. The function for this will be added later. 

  ![Join](readme-image/afterjoina.png)

- __The Footer__ 

  - The footer section includes links to the relevant social media sites for BeatFit. The links will open to a new tab to allow easy navigation for the user. 
  - The footer is valuable to the user as it encourages them to keep connected via social media.

  ![Footer](readme-image/footer.png)

## Testing 

### Validator Testing 

#### __HTML__
  - On all html pages, two issues were found during the check over [W3C Validator check](https://validator.w3.org/#validate_by_input)

    - Warning: Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections, or else use a div element instead for any cases where no heading is needed. From line 31, column 5; to line 31, column 28
      > Changed section to div and solved the issue.

    - Error: Stray start tag footer. From line 59, column 1; to line 59, column 8
      > Placed the footer inside the body and fixed the issue.

  - On gallery.html, one issue was found during the check over [W3C Validator check](https://validator.w3.org/#validate_by_input)

    - Warning: Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections, or else use a div element instead for any cases where no heading is needed. From line 35, column 5; to line 35, column 26
      > Changed section to div and solved the issue.

#### __CSS__
  - No errors or bugs were found when passing through the official [W3C Validator check](https://validator.w3.org/#validate_by_input)

### Unfixed Bugs
  - There is no unfixed bugs. 

### Functional Testing
  - Functional testing performed for every single actions that could be taken within the website. If the actual behavior is the same as the expected behavior, it will be marked with P for pass, or not F for fail. 

| Action | Expected Behavior    | Actual Behavior    |
| :---:   | :---: | :---: |
| Enter the browser with the url link: https://choyoon88.github.io/beatfit/ | Enter the home page   | P   |
| Click BEAT FIT | Direct to home page   | P   |
| Click HOME | Direct to home page   | P   |
| Click TIMETABLE | Direct to timetable page with a timetable displayed on the bottom of the page   | P   |
| Click GALLERY | Direct to gallery with images displayed   | P   |
| Click JOIN | Direct to joining page with joining form   | P   |
| From JOIN, click Join the Team without typing anything | Popup message 'Please fill in this field' should show up on First Name text bar  | P   |
| From JOIN, input only the First Name, and click Join the Team | Popup message 'Please fill in this field' should show up on Last Name text bar   | P   |
| From JOIN, input only the Last Name, and click Join the Team | Popup message 'Please fill in this field' should show up on First Name text bar   | P   |
| From JOIN, input only the Email, and click Join the Team | Popup message 'Please fill in this field' should show up on First Name text bar   | P   |
| From JOIN, input only the First Name and Last Name, and click Join the Team | Popup message 'Please fill in this field' should show up on Email text bar   | P   |
| From JOIN, input First Name, Last Name and the Email but with an incorrect email address format, and click Join the Team | Popup message "Please include @ in the email address. '*typed content*' is missing an @" should show up on Email Text bar  | P   |
| From JOIN, input First Name, Last Name and the Email with correct email address format | Direct to a 'thanks for joining' page   | P   |
| From JOIN, select any day/s from 'Which day do you prefer' and do not enter anything, and click Join the Team | Popup message 'Please fill in this field' should show up on First Name text bar   | P   |
| From the Footer, click Instagram icon | Instagram website opens on a new tab   | P   |
| From the Footer, click Twitter icon | Twitter website opens on a new tab   | P   |
| From the Footer, click Youtube icon | Youtube website opens on a new tab   | P   |


### How It Works on Different Screen Size Device
  - This website is desiged to adapt on different screen size devices. 
  - **The background image** adapts to different screen sizes and maintains the same resolution to function as a background without being overlapped or cropped. 
    
    ![background](readme-image/homepage-smaller.png)

  - **Why Join Beatfit** have a different background color sizing applied so that the paragraph does not overlap the background. Two sections will then show vertically (right-inline will drop down) placed once the screen width is less than 700px.

    ![whyjoinimage](readme-image/whybeatfit.png)

  - **Timetable** also drops down as lining vertically once the screen width is less than 900px.

    ![timetable](readme-image/timtable01.png)

  - **Join Form** will be adjusted to move to the left once the screen width is smaller than 800px. 

    ![joinform](readme-image/joinsmaller.png) 

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab.
  - From the Code and automation menu, select the Pages.
  - From the Build and deployment section, selected the branch to have Main and /root, then hit save. 
  - Once the saved, the page will be automatically be refreshed and on top of the Github Pages section, the deployed page could be found after 'Your site is live at.'

The live link can be found here - https://choyoon88.github.io/beatfit/

## Local Deployment

- Local deployment could be done following the steps. 
  1. From my Gitpod BeatFit repository, click '<>Code' right next to green 'Gitpod' icon. 
  2. Select 'local' and HTTPS.
  3. Copy the HTTPS address: https://github.com/choyoon88/beatfit.git
  4. Open terminal on the Mac computer.
  5. Type **_git clone_** and paste the HTTPS address. 
  6. Install the git developer tools and download the command line in your computer. 


## Credits 

### Support

Useful links for validation and help:

- https://www.youtube.com/watch?v=riDzcEQbX6k
Basic JavaScript Structure for building the question functions.
- https://www.w3schools.com/
Searched for assistance and tips.
- https://twinfinite.net/2022/08/the-hardest-the-last-of-us-trivia-quiz-youll-ever-take/
Taken game questions.
- https://chat.openai.com/
Chat GPT was most helpful when asking questions of the function of my codes. Also I got assistance of how to create additional functions. (e.g. How to prevent the user from adding more than 1 to the score when clicking the answer multiple times, How to reset increment scores when clicking restart etc.)

### Content 

- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### Media

