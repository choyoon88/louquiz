# The Last of Us Quiz Challenge

The Last of Us Quiz Challenge is a small quiz website designed for those gamers who love the game The Last of Us Part 1 and Part 2. There are total 5 questions with 4 answer options. Gamers who love The Last of Us series can try out to test their knowledge of the game with this short quiz challenge.


## Features

### Existing Features

- __Main Front Page__

  - There is only one page for this quiz website. The main front page is what the user will first see once directed to the website. 
  - There is the *title* on the top center of the page, a *start button* to commence quiz, *scoreboard* and a *default image* of the game's protagonist Ellie and Joel to greet the user.

  ![Front Page](readme-images/front-page.png)

- __Start Button__

  - Start button is for starting the quiz. 
  - Start button will be hidden once the user clicks it, and will trigger the question and the answer options to show up. 

  ![Start Btn](readme-images/start.png)

- __Next Button__

  - Next button is hidden by default but will show up once the user selects an answer.
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
  - When the user chooses an answer, an electric blue coloured boarder will be drawn on the selected answer button to indicate the users selection. 
  - Also the answer text colour will change according to the correct answer being true (green) or false (red). 

  ![Questionarea](readme-images/questionarea.png)
  ![Questionarea-clicked](readme-images/answerclick.png)

- __Answer Explanation and Image__

  - Once the user choose an answer, the explanation for the correct answer will show up underneath the question area. 
  - Also a supporting image from the game play screenshot will be displayed to give detailed understanding of the answer.

  ![Answer Explanation](readme-images/explainscreen.png)

## Testing 

### Validator Testing 

#### __HTML__
  - Two issues were found during the check over [W3C Validator check](https://validator.w3.org/#validate_by_input)

    - Error: Element img is missing required attribute src.
    From line 34, column 13; to line 34, column 50

          <img id="answer-image" class="hidden">↩     

      > Changed img to div and solved the issue. 

    - Error: An img element must have an alt attribute, except under certain conditions. For details, consult guidance on providing text alternatives for images.

      From line 34, column 13; to line 34, column 50

          <img id="answer-image" class="hidden">↩     
      > Same issue as above. Changed img to div and solved the issue. 

#### __CSS__
  - No errors or bugs were found when passing through the official [W3C Validator check](https://validator.w3.org/#validate_by_input)

#### __JavaScript__
  - Passed my JS codes using [JSHint](https://jshint.com/) 
  - Six warnings were found:
    - 73	Missing semicolon.
    - 81	Missing semicolon.
    - 93	A leading decimal point can be confused with a dot: '.5'.
    - 96	Missing semicolon.
    - 135	Missing semicolon.
    - 207	Unnecessary semicolon.
     > Row 73, 81, 96, 135: Add semicolon

     > Row 207: Remove semicolon

     > Row 93: Change from .5 to 0.5

  - One unused variable found:
    - 69	imageEl
    > Disabled the const imageEl = document.getElementById('answer-image');


### Lighthouse 

#### __Desktop__
  ![lighthouse desktop](readme-images/lighthouseDesktop.png)
**100%!**
#### __Mobile__
  ![lighthouse mobile](readme-images/lighthouse-mobile.png)
  
### Unfixed Bugs
  - There is no unfixed bugs. 

### Functional Testing
Functional testing performed for every single actions that could be taken within the website. If the actual behavior is the same as the expected behavior, it will be marked with P for pass, or not F for fail.

| Action | Expected Behavior    | Actual Behavior    |
| :---:   | :---: | :---: |
| Enter the website with the correct url: https://choyoon88.github.io/louquiz/ | <p align="left"> - Direct to the quiz website </p> | P
| Click 'Start' to commence quiz | <p align="left"> - Randomized quiz question with 4 answer options should be displayed on the middle of the screen <br> - 'Start' button should be hidden</p> | P
| Click any answer from the 4 options | <p align="left"> - Clicked answer box should have a blue border <br> - Answer texts colour should change according to the answers being either correct (one <span style="color:green">green</span>) or incorrect (three <span style="color:red">red</span>) <br> - 'Next' button should appear on the right side of the screen <br> - Explanation text should appear underneath the question area <br> - Screenshot from the game to support the answer should appear on the image area </p> | P
| Select the correct answer | <p align="left"> - Increment of 1 should be added up on 'Correct Answer' scoreboard </p> | P
| Select the incorrect answer | <p align="left"> - Increment of 1 should be added up on 'Incorrect Answer' scoreboard</p> | P
| Click 'Next' | <p align="left"> - Randomized question with 4 answer options should be displayed. <br> - The question should not be the one already shown before. <br> - Explanation area and the Explanation Image from the previous question should be hidden <br> - 'Next' button should be hidden</p> | P
| Once reached the last question and select an answer | <p align="left"> - Same functions when clicking the answer button should work (See above 'Click any answer from the 4 options') <br> - 'Restart' Button should show up</p> | P
| Click 'Restart' | <p align="left"> - Same functionality as the 'Start' button: Game should start again</p> | P 

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  1. In the GitHub repository, navigate to the Settings tab.
  2. From the Code and automation menu, select the Pages.
  3. From the Build and deployment section, selected the branch to have Main and /root, then hit save. 
  4. Once the saved, the page will be automatically be refreshed and on top of the Github Pages section, the deployed page could be found after 'Your site is live at.'

The live link can be found here - https://choyoon88.github.io/louquiz/

## Local Deployment

- Local deployment could be done following the steps. 
  1. From my Gitpod BeatFit repository, click '<>Code' right next to green 'Gitpod' icon. 
  2. Select 'local' and HTTPS.
  3. Copy the HTTPS address: https://github.com/choyoon88/louquiz.git
  4. Open terminal on the Mac computer.
  5. Type **_git clone_** and paste the HTTPS address. 
  6. Install the git developer tools and download the command line in your computer. 


## Credits 

### Support

Useful links for validation and help:

- [Code Institute](https://codeinstitute.net/): JavaScript main study done by Code Institute. 
- [Build A Quiz App With JavaScript - Youtube](https://www.youtube.com/watch?v=riDzcEQbX6k):
Basic JavaScript Structure for building the question functions.
- [w3schools](https://www.w3schools.com/):
Searched for assistance and tips for various codes.
- [ChatGPT](https://chat.openai.com/): Helpful tool when asking questions of the function of my codes. Gathered assistance of how to create additional functions. (e.g. How to prevent the user from adding more than 1 to the score when clicking the answer multiple times, How to reset increment scores when clicking restart etc.)
- [Codewars](https://www.codewars.com/): Extra study for JavaScript was conducted.


### Content 

- [The Last of Us Part1](https://www.playstation.com/en-ie/games/the-last-of-us-part-i/) & [Part2](https://www.playstation.com/en-ie/games/the-last-of-us-part-ii/) from PlayStation: Image screenshots were taken from the game.
- [Quiz Question](https://twinfinite.net/2022/08/the-hardest-the-last-of-us-trivia-quiz-youll-ever-take/): 
Every quiz questions were taken from this website.
- [Google Font](https://fonts.google.com/): Font was used from Google Font.
- [Favicon Source](https://www.pngitem.com/middle/hiiJwT_the-last-of-us-wiki-last-of-us/): Favicon was downloaded from here. 


