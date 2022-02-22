# Quick Quiz
Quick Quiz is a web page where users can test their knowledge in answering quick and short questions about science and nature. It is easy to use and can be repeated as many times as user wants. It is designed to be user friendly and not too complicated. 

# Table of Contents
* [UX]("UX")
 * [User Goals](#user-goals "User Goals")
    * [User Stories](#user-stories "User Stories")
    * [Site Owners Goals](#site-owners-goals)
    * [User Requirements and Expectations](#user-requirements-and-expectations)
         * [Requirements](#requirements)
         * [Expectations](#expectations)
         * [Design Choices](#design-choices)
         * [Fonts](#fonts)
         * [Colours](#colours)
         * [Structure](#structure)
   * [Wireframes](#wireframes "Wireframes")
   * [Features to be implemented](#features-to-be-implemented)
   * [Technologies used](#technologies-used)
   * [Deployment](#deployment)
# UX 

## User Goals
- Simple design 
- Easy to use
- Informative
- Score tracking

# User Story
- As a user, I want to interact with the site
- As a user, I want content to be informative
- As a user, I want use it as many times as I want
- As a user, I would like to use it on multiple screen sizes
- As a user, I want to track my progress

## Site Owners Goals
- Providing learning content to the users
- Easy to use
- Accessible on all screen sizes  

### Requirements 
- Easy to navigate on various screen sizes
- Using non complex design
- Possibility to play multiple times 

### Expectations
- I expect site to be easy to use
- I expect questions to not be too complex
- I expect screen size not to affect the quality of the website.
- I expect that correct answers are in reality real correct answers


## Design Choices

### Fonts
The selected font is imported and found at [Google Fonts](https://fonts.google.com/ "Google fonts"). From the beginning of the font search, I wanted font that is not to hard to read. When choosing fonts, I came across font named "Signika". It looked right for the website and is easy to read. In case of fallback, I included CSS generic font family "sans-serif".

### Colours 
I have used [RGBA Color Picker](https://rgbacolorpicker.com/ "RGBA Colorpicker") for picking colors. General experience from visiting website should be pleasing and nice. This is why I included bright and colorful colors, but setting their opacity to low values so the colors dont fall out and don't distract the user. In case of late change, I will work with variables so if needed, colors can be changed quickly. 

 ### Structure
 I will be building my website with a mobile first mindset using the 320px as the smallest screen size for styling to look good. Mobile first aproach is also used, as its expected that most users will visit the site through mobile device. I used this breakpoints, as they seem to be standard. 

 | Screen Size | Breakpoint |
| ----------- | ---------- |
| x-small     | <576px     |
| small       | => 576px   |
| medium      | => 768px   |
| large       | => 992px   |
| x-large     | => 1200px  |

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

# Wireframes 

I have used [Balsamic](https://balsamiq.com/wireframes/ "Balsamic") to develop my wireframe for the website. From the start, I am planning to build mobile first and then stretch it to fit larger screen sizes. When drawing my Wireframes, I haven't looked into colours, but did basic element positioning to get a brief presentation on how the website should look.

The wireframes are below: 

### [Mobile Wireframe](wireframes/quick-quiz-mobile.png "Mobile Wireframe")

### [Tablet Wireframe](wireframes/quick-quiz-tablet.png "Tablet wireframe")

### [Desktop Wireframe](wireframes/quick-quiz-desktop.png "Desktop wireframe")

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp; 

# Features

## Existing Features

### Landing Page
Landing page or "home page" is first thing that users see when they visit website. There they find basic and short information about what this page is, and if they decide that they want to play a quick quiz, they can click on "Try Now" button.
### Try Now Button
"Try Now" button takes user to the quiz. When clicked, user can start with quiz. At the end of the quiz, user can return to homepage and start over by clicking "Try Now" button.

   \
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

### Quiz Page
When users click on "Try Now" button, the page takes them to the quiz section. Users can see their question, possible answers, current score etc. When they are ready to answer the question, they can simply click on answer they think is right. The site then gives a feedback based on witch answer is right. In case of correct answer, the site will give a background color of green if the answer is correct. In this case, new question will load with new possible answer. If user click to incorrect answer, then page will give the feedback of background color red in the clicked answer. If user answer question wrong, they can still proceed to the next question. After user clicks one of the possible answers, in case of correct answer user get their score for the answer at the top right of the page. In case of wrong answer, user don't get any scores and can proceed to the next question. When user get to the final question, they can play again by clicking the button "Play Again". If they decide not to play, they can simply close the website. 

## Features to be Implemented

- The user could have a option to select on what level of difficulty should they played the quiz. That would mean adding more questions and possible answers.
- Rewards for high scores 
- Hints to the answers
- Sound effects when clicking the correct or incorrect answer

# Technologies Used

## Languages
- HTML 
- CSS 
- JavaScript

## Libraries
* [Google Fonts](https://fonts.google.com/ "Google Fonts")

## Tools
* [Gitpod](https://www.gitpod.io/ "Gitpod")
* [Balsamic](https://balsamiq.com/wireframes/ "Balsamic")
* [W3C HTML Validation Service](https://validator.w3.org/ "W3C HTML")
* [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/ "W3C CSS")
* [Color Picker](https://rgbacolorpicker.com// "Color Picker")
* [Google Fonts](https://fonts.google.com/ "Google Fonts")
* [Box Shadow Generator](https://html-css-js.com/css/generator/box-shadow/ "html-css-js.com")
* [Responsive Design](http://ami.responsivedesign.is/ "Am I Responsive")

# Deployment

Following writing the code then commiting and pushing to GitHub, this project was deployed using GitHub by the following steps.

+ Navigate to the repository on github and click 'Settings'.
+ Then select 'Pages' on the side navigation.
+ Select the 'None' dropdown, and then click 'master'.
+ Click on the 'Save' button.
+ Now the website is now live on https://sandibasagic.github.io/dream-day/
+ If any changes are required, they can be done, commited and pushed to GitHub and the changes will be updated.

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

# Acknowledgements

Dream Day Festival was designed and developed in conjunction with the Full Stack Software Developer Diploma course at the Code Institute. I would like to thank my mentor, tutors, Slack community and Code Institute for all their support.

[Back to top](<#contents>)