# Visible2

Visible2 allows you to detect an elements visibility within the viewport!


## How to Use


#### 1 - Include Script

[Download the file from here](https://github.com/tobialagbe/Visible2/blob/master/src/visible.min.js) and include it in your webpage.

```html
<script src="path/to/visible.min.js"></script>
```


#### 2 - Instantiate a new visible object with the target element to watch and two callback functions. The first to be called whenever the element is visible in the viewport and the second when the element is no longer visible

```js
    let v = new Visible(".targetElement",visibleCallbackFunction,visibleCallbackFunction);
```


#### 3 - Call the watch method on the visible object

```js
    v.watch();
```