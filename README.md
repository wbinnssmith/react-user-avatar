# React UserAvatar

A bare-bones user avatar display with support for falling back to using the user's initials on a colored background as the avatar.

![](https://cloud.githubusercontent.com/assets/755844/11612136/7dc28cae-9ba2-11e5-8c6e-999d5d524642.png)

## Installation

`npm install -S react-user-avatar`

## Usage

```js
  <UserAvatar size="48" name="Will Binns-Smith" />
  <UserAvatar size="48" name="Will Binns-Smith" src="https://pbs.twimg.com/profile_images/429442426038538240/6Ac9kykG_400x400.jpeg" />
  <UserAvatar size="48" name="John Doe" colors={['#ccc', '#fafafa', '#ccaabb']}/>
  <UserAvatar size="48" name="Mary Ann Gilligans" />
  <UserAvatar size="48" name="Jane Doe" color="#FFF" />
  <UserAvatar size="48" name="Madonna" />
```

This module uses react-style inline styles to narrow the api, yet allows for reasonable extensibility by exposing
a number of DOM classes. Take a look (or simply use) `example.css` for ideas.

The fallback avatar's color may be set by passing in the `color` prop, or you can customize the range of colors
used by passing in an array of `colors`. The component uses a simple calculation to consistently use the same
color for the same user's name every time.

If the component determines that the color chosen was visually light, it will apply a `UserAvatar-light` class to the root element.
If the colors chosen was dark, it will apply `UserAvatar-light`. Take advantage of these to use the appropriately colored text or border
when styling the component.
