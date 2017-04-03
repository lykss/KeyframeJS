# KeyframeJS
A Javascript library that allows developer dynamically modified CSS3 keyframes.

## Getting Started
Import Keyframe.js
```html
<script type="text/javascript" src="/path/to/Keyframe.js" ></script>
```

When you need to modify CSS3 keyframes, you must get it at first.
```js
var demo1Keyframe = Keyframe.findKeyframe("demo-animation");
```
In code, Keyframe is an object that Keyframe.js expose to window. Such as $ for jQuery. And, "demo-animation" is the keyframes name that you want to modify.
```css
@keyframes demo-animation {
	0% {
		background-color: #000;
	}
	100% {
		background-color: #fff;
	}
}
```

When you need to add a rule to keyframes, you can do it like this.
```js
Keyframe.addKeyframe(demo1Keyframe, "20% {background-color: #0f0;}");
```
In code, demo1Keyframe is a CSSKeyframesRule Object that you just get. "20% {background-color: #0f0;}" is the rule that you want to add, just follow the normal CSS3 Keyframes as writing on it.Of course, you can add some rules to a Keyframes.

When you need to delete a rule from keyframes, you can do it like this.
```js
Keyframe.deleteKeyframe(demo1Keyframe, "80%");
```
In code, "80%" is that the name to a rule. Yes, you can delete "20% {background-color: #0f0;}" using
```js
Keyframe.deleteKeyframe(demo1Keyframe, "20%");
```

The end. Yes, simplicity is the most important. There is a demo prepare for you, in file demo. Welcome feedback if you have some ideas.