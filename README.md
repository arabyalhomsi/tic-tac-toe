# TicTacToe

A place where you and your friends can play Tic-Tac-Toe and see the history.

## Review

Check this link for all the changes I added: [diff](https://github.com/arabyalhomsi/tic-tac-toe/compare/main...feedbackfruits)

## How to run the app

- Clone the project
- Do `git checkout feedbackfruits`

- Inside `frontend`, run the following commands:
  - `npm install`
  - `npm run test`
  - `npm run start`
- Inside `backend`, run the following commands:

  - `bundle install`
  - `rails db:migrate`
  - `rails server`

## Reflection

- How was it to get started

  - I barely used EmberJS or Ruby on Rails, many years ago I did a little bit.
  - To learn and catch up I used mainly the Ember tutorial and Rails tutorial to understand the basics.
  - Idea formulation
    - Making a tic-tac-toe game on the frontend is quite simple. The whole game and its state lives on the frontend.
    - I thought a lot about what the backend will have and I did not want to make it complicated so I made a simple tic-tac-toe game history with only one table.
  - TypeScript:
    - I used `ember-cli-typescript` because I like TypeScript and I thought I would learn a lot from this. The benefits that I enjoy most with TypeScript are
      - Detection of early bugs
      - Auto-completion
      - More predictable and readable code.

- Where did I get information from
  - The question of why Ember.js and Rails are together puzzled me and I found this great read:
    - [https://discuss.emberjs.com/t/how-cool-is-emberjs-than-other-frameworks/19073/2](https://discuss.emberjs.com/t/how-cool-is-emberjs-than-other-frameworks/19073/2)
  - I used the docs and the API reference.
  - StackOverFlow & Google.
  - A bit of ChatGPT for help with stuff I did not find because Ember4 is quite recent and does not have much resources or stack overflow questions yet.
  - Rails was easy to understand because I have already worked with Laravel which is similar. Laravel and Rails both have an MVC architecture which I am quite comfortable with.
  - Ember was a bit more difficult, it does have a bit of a steep learning curve. However, its MVC architecture and the fact that I am comfortable with the browser helped me navigate through the problems I faced.
- Easy parts of development
  - The API I made with Rails was quite easy and I faced no problems.
  - Ember’s opinionated nature and its MVC makes is simple to grasp and get comfortable with.
  - Ember’s separation of concerns is clear and had no hard time knowing what code goes where.
  - For the tic-tac-toe game logic, initially I was thinking of a matrix summation solution. I thought maybe it’s a bit of an overkill so I checked different implementations of tic-tac-toes’ online and I found a much simpler one.
  - Adjusting the linter for TypeScript and adding some more strict rules.
  - Structuring the SCSS files
  - Writing SCSS code and BEM classes
  - Making the app completely responsive on all screens.
- Difficult parts of development
  - There is a weird bug that I struggled with quite a lot and I spent some time trying to resolve it. I did not want to waste much time on it so I hacked my way around it.
    - I am still unsure what causes it. For some reason, clicking on a button in the tic-tac-toe game triggers the active state of the button next to it. I tested this outside of Ember’s environment and the bug is gone. So I am led to believe that it’s some Ember behavior.
    - The hack for the bug is in the `app/styles/base/reset.scss`. I wrote some comments about this there too.
  - TypeScript
    - It was not always clear how to type things in Ember. I had to do a lot of digging sometimes and read Ember source code so I understand how to type things.
    - The Ember ecosystem support for TypeScript is still not very good. For example, I wanted to use a library called tracked-toolbox but it did not have types.
  - Ember 4 is quite new and not so much resources. e.g stackoverflow questions
- Improvements
  - Create a layer where the logic of the business lies. For example, the logic of the tic-tac-toe.
  - I regret using material design lite, it’s outdated, requires too much overrides, and even then the behavior is unstable. I could have done stuff much faster with Tailwind.
  - Proper error handling with showing user-friendly errors to the user.
  - Setup Stylelint for SCSS (I tried a bit but did not have time).
  - More tests especially acceptance tests.
  - Proper documentation method like JSDoc.
  - Feature: Ability to see the last state of the game.
  - Feature: ability to play multiple games with the same names, and then you see in the end Arabi won 5, Kamal won 7
  - Other improvements are documented in the the code.
  - This assignment took me around 2.5 days. I did not plan to work on this so much, but I really enjoyed it and I kind of forgot myself for hours straight. Working in an Ember.js + Rails environment is certainly captivating.
