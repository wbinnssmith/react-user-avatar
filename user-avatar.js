'use strict';

var React = require('react');
var initials = require('initials');
var addPx = require('add-px');
var contrast = require('contrast');

// from https://flatuicolors.com/
var defaultColors = ['#2ecc71', // emerald
'#3498db', // peter river
'#8e44ad', // wisteria
'#e67e22', // carrot
'#e74c3c', // alizarin
'#1abc9c', // turquoise
'#2c3e50'];

// midnight blue
function sumChars(str) {
  var sum = 0;
  for (var i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }

  return sum;
}

var UserAvatar = function UserAvatar(props) {
  var _props$borderRadius = props.borderRadius;
  var borderRadius = _props$borderRadius === undefined ? '100%' : _props$borderRadius;
  var src = props.src;
  var srcset = props.srcset;
  var name = props.name;
  var color = props.color;
  var _props$colors = props.colors;
  var colors = _props$colors === undefined ? defaultColors : _props$colors;
  var size = props.size;
  var style = props.style;
  var onClick = props.onClick;

  if (!name) throw new Error('UserAvatar requires a name');

  var abbr = initials(name);
  size = addPx(size);

  var imageStyle = {
    display: 'block',
    borderRadius: borderRadius
  };

  var innerStyle = {
    display: 'table-cell',
    textAlign: 'center',
    verticalAlign: 'middle',
    borderRadius: borderRadius
  };

  if (size) {
    imageStyle.width = innerStyle.width = innerStyle.maxWidth = size;
    imageStyle.width = innerStyle.height = size;
  }

  var inner = undefined,
      classes = ['UserAvatar'];
  if (src || srcset) {
    inner = React.createElement('img', { className: 'UserAvatar--img', style: imageStyle, src: src, srcset: srcset, alt: name });
  } else {
    var background = undefined;
    if (color) {
      background = color;
    } else {
      // pick a deterministic color from the list
      var i = sumChars(name) % colors.length;
      background = colors[i];
    }

    innerStyle.backgroundColor = background;

    inner = abbr;
  }

  if (innerStyle.backgroundColor) {
    classes.push('UserAvatar--' + contrast(innerStyle.backgroundColor));
  }

  return React.createElement(
    'div',
    { 'aria-label': name, className: classes.join(' '), style: style },
    React.createElement(
      'div',
      { className: 'UserAvatar--inner', style: innerStyle },
      inner
    )
  );
};

module.exports = UserAvatar;

//# sourceMappingURL=user-avatar.js.map