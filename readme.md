# Google Chrome extension template

This is a skeleton of empty Google Chrome extension with all basic files.

## Installation example:
```
git clone https://github.com/vvmspace/chrome-extension-template extensionname && cd extensionname && rm -rf ./.git && git init && git add -A && git commit -m "First commit"
```

## Calling background function from content script:

You can use js/cross folder in your project.

in your content.js:

```
CC.act('action', data, (response) => {
    // callback
});
```

in your background.js:

```
CB.react('action', (data) => {
    // callback
});
```

Or just fork me on github.