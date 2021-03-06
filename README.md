
Ember CLI Addon for marked.js

## Install and setup

```bash
ember install ember-cli-marked
```

This provides
- `import marked from 'marked'`


```js
// app/app.js

import marked from 'marked';

marked.setOptions({
  renderer: new marked.Renderer(),
  breaks: true
});
```

You can now create helpers like this.

```js
// app/helpers/format-markdown.js

import Ember from 'ember';
import marked from 'marked';

export default Ember.Helper.helper(function(params) {
  let value = params[0];
  return Ember.String.htmlSafe(marked(value));
});
```

## Sample app

Tom Dale's blog example using Ember CLI and ember-cli-marked: [broerse/ember-cli-blog](https://github.com/broerse/ember-cli-blog)

## Credits

And of course thanks to all our wonderful contributors, [here](https://github.com/martinic/ember-cli-marked/graphs/contributors)!

## Changelog
* **0.1.1** - Update to Babel 6, node >4.5  and ember-cli 3.1.4
* **0.1.0** - Release v0.1.0
* **0.1.0-beta.4** - Switch to broccoli-stew
* **0.1.0-beta.3** - Switch to the marked.js npm package
* **0.1.0-beta.2** - Fix blueprint
* **0.1.0-beta.1** - First Beta release
