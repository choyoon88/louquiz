# The Last of Us Quiz Challenge

The Last of Us Quiz Challenge is a small quiz website designed for those gamers who love the game The Last of Us Part 1 and Part 2. There are total 5 questions with 4 answer options. 


## Features

### Existing Features

- __Main Front Page__

  - There is only one page for this quiz website. The main front page is what the user will first see once directed to the website. 
  - There is the *title* on the top center of the page, a *start button* to commence quiz, *scoreboard* and a *default image* of the game's protagonist Ellie and Joel to greet the user.

  ![Front Page](readme-images/frontpage.png)

- __Start Button__

  - Start button is for starting the quiz. 
  - Start button will be hidden once the user clicks it, and will trigger the question and the answer options to show up. 

  ![Start Btn](readme-images/start.png)

- __Next Button__

  - Next button is hidden by default but will show up once the user selects the answer.
  - Next button is also designed to be hidden when the user clicks the Next button. 

  ![Next btn](readme-images/next.png)

- __Restart Button__

  - Restart button will only show once the user finishes the last question. 
  - By clicking Restart button, the user can replay the game. 
  - Restart functions the same as the Start button.

  ![Restart btn](readme-images/restart.png)

- __Score Board__

  - Score board is for showing how many question the user got correct or wrong. 
  - Each *Correct Answer* and *Incorrect Answer* is set to 0 by default and it will be incremented by 1 when the user gets either the correct answer or the incorrect answer.
  
  ![Score Board](readme-images/scoreboard.png)

- __Question Area__

  - Once clicking start button from the initial page, the question area that contains the question and the answer options will show up.
  - When the user chooses an answer, the blue boarder will be drawn on the selected answer button to indicate the users selection. 
  - Also the answer text colour will change according to the correct answer being true (green) or false (red). 

  ![Questionarea](readme-images/questionarea.png)
  ![Questionarea-clicked](readme-images/questionarea-click.png)

- __Answer Explanation and Image__

  - Once the user choose an answer, the explanation for the correct answer will show up underneath the question area. 
  - Also a supporting image from the game play screenshot will be displayed to give detailed understanding of the answer.

  ![Answer Explanation](readme-images/fullview%20from%20bigger%20screen.png)

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

The live link can be found here - https://choyoon88.github.io/louquiz/

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

- https://codeinstitute.net/ JavaScript main study done by Code Institute. 
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

