;(function() {
	
	"use strict";
	
	function getStyleSheets() {
		return document.styleSheets;
	}
	
	function toArray(likeArray) {
		return [].slice.call(likeArray);
	}
	
	function getAllKeyframesRule() {
		var styleSheets = getStyleSheets();
		var styleSheetsArr = toArray(styleSheets);
		
		var keyframesRules = [];
		
		styleSheetsArr.forEach(function(sheet, idx) {
			var cssRules = sheet.cssRules;
			var cssRulesArr = toArray(cssRules);
			
			var keyframes = cssRulesArr.filter(function(ele, idx) {
				var cssKeyframesRule = ['[object CSSKeyframesRule]', '[object WebKitCSSKeyframesRule]'];
				var eleType = Object.prototype.toString.call(ele);
				
				return !!(cssKeyframesRule.indexOf(eleType) > -1);
			});
			
			keyframesRules = keyframesRules.concat(keyframes);
		});
		
		return keyframesRules;
	}
	
	function getKeyframesRuleByName(name) {
		var keyframesRules = getAllKeyframesRule();
		var targetKeyframes = keyframesRules.filter(function(rule, idx) {
			return rule.name == name;
		});
		
		return targetKeyframes;
	}
	
	function appendKeyframe(keyframeRules, keyframe) {
		keyframeRules.forEach(function(rule, idx) {
			if (rule.appendRule) {
				rule.appendRule(keyframe);
			} else if (rule.insertRule) {
				rule.insertRule(keyframe);
			}
		});
	}
	
	function deleteKeyframe(keyframeRules, ruleKey) {
		keyframeRules.forEach(function(rule, idx) {
			rule.deleteRule(ruleKey);
		});
	}
	
	window.Keyframe = {
		"findKeyframe": getKeyframesRuleByName,
		"addKeyframe": appendKeyframe,
		"deleteKeyframe": deleteKeyframe
	}
	
})();
