# A Chinese typography experiment

1. `git clone git@github.com:huijing/zh-type.git`
2. `npm install`
3. `gulp`

- Styles go in the styles.scss file, and will be compiled by Gulp
- Scripts go into the js folder, and will be concatenated by Gulp

## Project notes

If you examine the source stylesheet and markup, you will find a lot of code commented out. This is because there are 4 different implementations in the stylesheet, and the currently active one utilises the checkbox hack without flexbox. Read the [write-up](https://www.chenhuijing.com/blog/vertical-typesetting-revisited/) for more details.
