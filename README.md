# Card matching game

Your task is to build a simple card-matching game, the kind that your brother/sister/best friend always cheated at when you were little. In case you need a reminder, here’s how it should work:

1. Present the user with an even number of cards, “face down”.
1. When the user clicks a card, “flip it over” and reveal the hidden image.
1. When two cards are revealed:
   1. If the cards are identical, remove them from play.
   1. If they are not, flip them back.
1. The game ends when all the cards are removed.

To get full points, your app should also fulfill all of the below requirements:
- It should be responsive.
- It should have a landing page for the app that explains the rules, and a separate screen for the actual game.
- We expect a SPA.
- Allow the user to play more than one game without reloading the page.
- Allow the user to set the number of cards before a new game (min. 3, max. 10 pairs).
- Present the user with a step counter that increments after every second card flip.
- Allow the user to continue the previously played game after reloading the page.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run tests

```sh
npm run test
```