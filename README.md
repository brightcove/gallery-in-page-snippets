# In-Page Snippets

This is a collection of custom code snippets that can be used to accomplish various functionality in a Gallery In-Page Experience.

## Usage

Each snippet can be found in the snippets directory of this project. In order to get a reference to the experience instance, the custom code needs to be provided with the HTML ID attribute on the `div` tag of the embed code. The example code in this project assumes that the ID is `my-experience`. In most cases you will have to update this code to use your ID by updating the first line of code in the snippet.

```html
<div id="my-experience" data-experience="59b16cf0dcc94d0010f9ca8b"></div>
<script src="https://players.brightcove.net/4036320274001/experience_59b16cf0dcc94d0010f9ca8b/live.js"></script>
```

## License

(c)  2017 Brightcove Inc.  Licensed under the MIT License, available at https://opensource.org/licenses/MIT.  Distributed "as is" and without any warranty; see license for details.
