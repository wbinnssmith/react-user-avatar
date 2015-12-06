import UserAvatar from './index';
import React from 'react';
import ReactDOM from 'react-dom';

document.body.innerHTML = `
  <link rel="stylesheet" href="example.css"></link>
  <style>
    body {
      font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Open Sans","Helvetica Neue",sans-serif;
    }
    .UserAvatar {
      margin: 5px;
    }
  </style>
  <div id="react-container"
       style="margin: 50px auto;">
  </div>
`

ReactDOM.render(
  <div>
    <UserAvatar size="48" name="Will Binns-Smith" />
    <UserAvatar size="48" name="Will Binns-Smith" src="https://pbs.twimg.com/profile_images/429442426038538240/6Ac9kykG_400x400.jpeg" />
    <UserAvatar size="48" name="John Doe" />
    <UserAvatar size="48" name="Mary Ann Gilligans" />
    <UserAvatar size="48" name="Jane Doe" color="#FFF" />
    <UserAvatar size="48" name="Madonna" />
  </div>
, document.getElementById('react-container'));
