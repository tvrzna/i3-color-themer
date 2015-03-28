function getColorValueFromId(elementId) {
	var regex = new RegExp("\\b[0-9a-fA-F]{3}\\b|\\b[0-9a-fA-F]{6}\\b");
	var object = document.getElementById(elementId);
	if (null != object && null != object.value && regex.test(object.value)) {
		var result = object.value;
		var sharpRegex = new RegExp("\#(.*)");
		if (!sharpRegex.test(result)) {
			result = "#" + result;
			object.value = result;
		}
		object.style.borderColor = '#101010';
		object.style.color = '#008000';
		return result;
	} else if (null != object && null != object.value && !regex.test(object.value)) {
		object.style.borderColor = '#401010';
		object.style.color = '#A00000';
		return null;
	} else {
		return null;
	}
}

/* Status bar part */
function applyStatusBar() {
	var bar = document.getElementById(statusBar);
	var line = document.getElementById(statusLine);
	var background = getColorValueFromId(stsBackground);
	var stline = getColorValueFromId(stsLine);
	var separator = getColorValueFromId(stsSeparator);
	if (null != background) {
		bar.style.backgroundColor = background;
	}
	if (null != stline) {
		line.style.color = stline;
	}
	if (null != separator) {
		for (var i = 0; i < line.children.length; i++) {
			var child = line.children[i];
			if ("separated" == child.className) {
				child.style.borderColor = separator;
			}
		}
	}
	generateConfig();
}

/* Workspace part */
function applyWorkspace(objectId, borderId, backgroundId, textId) {
	var object = document.getElementById(objectId);
	var border = getColorValueFromId(borderId);
	var background = getColorValueFromId(backgroundId);
	var text = getColorValueFromId(textId);
	if (null != border) {
		object.style.borderColor = border;
	}
	if (null != background) {
		object.style.backgroundColor = background;
	}
	if (null != text) {
		object.style.color = text;
	}
	generateConfig();
}

function applyFocusedWorkspace() {
	applyWorkspace(wrkFocused, wrkFocusedBorder, wrkFocusedBackground, wrkFocusedText);
}

function applyActiveWorkspace() {
	applyWorkspace(wrkActive, wrkActiveBorder, wrkActiveBackground, wrkActiveText);
}

function applyInactiveWorkspace() {
	applyWorkspace(wrkInactive, wrkInactiveBorder, wrkInactiveBackground, wrkInactiveText);
}

function applyUrgentWorkspace() {
	applyWorkspace(wrkUrgent, wrkUrgentBorder, wrkUrgentBackground, wrkUrgentText);
}

function readWorkspace(objectId, borderId, backgroundId, textId) {
	var object = document.getElementById(objectId);
	var border = document.getElementById(borderId);
	var background = document.getElementById(backgroundId);
	var text = document.getElementById(textId);

	border.value = object.style.borderColor;
	background.value = object.style.backgroundColor;
	text.value = object.style.color;
}

/* Window part */
function applyWindow(bodyId, titleId, tdId, borderId, backgroundId, textId, indicatorId) {
	var body = document.getElementById(bodyId);
	var title = document.getElementById(titleId);
	var td = document.getElementById(tdId);
	var border = getColorValueFromId(borderId);
	var background = getColorValueFromId(backgroundId);
	var text = getColorValueFromId(textId);
	var indicator = getColorValueFromId(indicatorId);
	if (null != border) {
		title.style.borderColor = border;
		body.style.borderColor = border;
	}
	if (null != background) {
		title.style.backgroundColor = background;
	}
	if (null != text) {
		title.style.color = text;
	}
	if (null != indicator) {
		td.style.borderColor = indicator;
	}
	generateConfig();
}

function applyFocusedWindow() {
	applyWindow(winFocusedBody, winFocusedTitle, winFocusedTd, winFocusedBorder, winFocusedBackground, winFocusedText, winFocusedIndicator);
}

function applyInactiveWindow() {
	applyWindow(winInactiveBody, winInactiveTitle, winInactiveTd, winInactiveBorder, winInactiveBackground, winInactiveText, winInactiveIndicator);
}

function applyUnfocusedWindow() {
	applyWindow(winUnfocusedBody, winUnfocusedTitle, winUnfocusedTd, winUnfocusedBorder, winUnfocusedBackground, winUnfocusedText, winUnfocusedIndicator);
}

function applyUrgentWindow() {
	applyWindow(winUrgentBody, winUrgentTitle, winUrgentTd, winUrgentBorder, winUrgentBackground, winUrgentText, winUrgentIndicator);
}

function notNullcolor(color) {
	if (null != color) {
		return color;
	}
	return "errcolor";
}

function generateConfig() {
	var i3config = document.getElementById(configId);
	i3config.innerHTML = config
		.replace(plcStatusBg, notNullcolor(getColorValueFromId(stsBackground)))
		.replace(plcStatusLine, notNullcolor(getColorValueFromId(stsLine)))
		.replace(plcStatusSep, notNullcolor(getColorValueFromId(stsSeparator)))
		.replace(plsWrkFocusBorder, notNullcolor(getColorValueFromId(wrkFocusedBorder)))
		.replace(plsWrkFocusBg, notNullcolor(getColorValueFromId(wrkFocusedBackground)))
		.replace(plsWrkFocusTxt, notNullcolor(getColorValueFromId(wrkFocusedText)))
		.replace(plsWrkActiveBorder, notNullcolor(getColorValueFromId(wrkActiveBorder)))
		.replace(plsWrkActiveBg, notNullcolor(getColorValueFromId(wrkActiveBackground)))
		.replace(plsWrkActiveTxt, notNullcolor(getColorValueFromId(wrkActiveText)))
		.replace(plsWrkInactiveBorder, notNullcolor(getColorValueFromId(wrkInactiveBorder)))
		.replace(plsWrkInactiveBg, notNullcolor(getColorValueFromId(wrkInactiveBackground)))
		.replace(plsWrkInactiveTxt, notNullcolor(getColorValueFromId(wrkInactiveText)))
		.replace(plsWrkUrgentBorder, notNullcolor(getColorValueFromId(wrkUrgentBorder)))
		.replace(plsWrkUrgentBg, notNullcolor(getColorValueFromId(wrkUrgentBackground)))
		.replace(plsWrkUrgentTxt, notNullcolor(getColorValueFromId(wrkUrgentText)))
		.replace(plsWinFocusBorder, notNullcolor(getColorValueFromId(winFocusedBorder)))
		.replace(plsWinFocusBg, notNullcolor(getColorValueFromId(winFocusedBackground)))
		.replace(plsWinFocusTxt, notNullcolor(getColorValueFromId(winFocusedText)))
		.replace(plsWinFocusIndc, notNullcolor(getColorValueFromId(winFocusedIndicator)))
		.replace(plsWinInactiveBorder, notNullcolor(getColorValueFromId(winInactiveBorder)))
		.replace(plsWinInactiveBg, notNullcolor(getColorValueFromId(winInactiveBackground)))
		.replace(plsWinInactiveTxt, notNullcolor(getColorValueFromId(winInactiveText)))
		.replace(plsWinInactiveIndc, notNullcolor(getColorValueFromId(winInactiveIndicator)))
		.replace(plsWinUnfocusBorder, notNullcolor(getColorValueFromId(winUnfocusedBorder)))
		.replace(plsWinUnfocusBg, notNullcolor(getColorValueFromId(winUnfocusedBackground)))
		.replace(plsWinUnfocusTxt, notNullcolor(getColorValueFromId(winUnfocusedText)))
		.replace(plsWinUnfocusIndc, notNullcolor(getColorValueFromId(winUnfocusedIndicator)))
		.replace(plsWinUrgentBorder, notNullcolor(getColorValueFromId(winUrgentBorder)))
		.replace(plsWinUrgentBg, notNullcolor(getColorValueFromId(winUrgentBackground)))
		.replace(plsWinUrgentTxt, notNullcolor(getColorValueFromId(winUrgentText)))
		.replace(plsWinUrgentIndc, notNullcolor(getColorValueFromId(winUrgentIndicator)));
}

/* Color mixer */
function copyValue(objectFromId, objectToId) {
	var from = document.getElementById(objectFromId);
	var to = document.getElementById(objectToId);
	to.value = from.value;
	joinColors();
}

function zeroPad(num, places) {
	var zero = places - num.toString().length + 1;
	return Array( + (zero > 0 && zero)).join("0") + num;
}

function decToHex(dec) {
	if (null != dec) {
		return zeroPad(parseInt(dec, 10).toString(16), 2);
	}
	return 0;
}

function hexToDec(hex) {
	if (null != hex) {
		return zeroPad(parseInt(hex, 16).toString(10), 2);
	}
	return 0;
}

function joinColors() {
	var object = document.getElementById(mixedColor);
	var textObject = document.getElementById(mixedColorHex);
	var redObject = document.getElementById(numberRed);
	var greenObject = document.getElementById(numberGreen);
	var blueObject = document.getElementById(numberBlue);
	var red = decToHex(redObject.value);
	var green = decToHex(greenObject.value);
	var blue = decToHex(blueObject.value);
	var hex = "#" + red + green + blue;
	object.style.backgroundColor = hex;
	textObject.innerHTML = hex;
}

function setValue(objectId, value) {
	var object = document.getElementById(objectId);
	object.value = value;
}

function addClickListener(objectId, fce) {
	var object = document.getElementById(objectId);
	object.onclick = fce;
}

function addChangeListener(objectId, fce) {
	var object = document.getElementById(objectId);
	object.onchange = fce;
}

function addInputListener(objectId, fce) {
	var object = document.getElementById(objectId);
	object.oninput = fce;
}

function addKeyUpListener(objectId, fce) {
	var object = document.getElementById(objectId);
	object.onkeyup = fce;
}

function statusListeners() {
	addKeyUpListener(stsBackground, function () {
		applyStatusBar();
	})
	setValue(stsBackground, "#000000");
	addKeyUpListener(stsLine, function () {
		applyStatusBar();
	})
	setValue(stsLine, "#ffffff");
	addKeyUpListener(stsSeparator, function () {
		applyStatusBar();
	})
	setValue(stsSeparator, "#666666");
}

function workspaceListeners() {
	// focused workspace
	addKeyUpListener(wrkFocusedBorder, function () {
		applyFocusedWorkspace();
	});
	setValue(wrkFocusedBorder, "#4c7899");
	addKeyUpListener(wrkFocusedBackground, function () {
		applyFocusedWorkspace();
	});
	setValue(wrkFocusedBackground, "#285577");
	addKeyUpListener(wrkFocusedText, function () {
		applyFocusedWorkspace();
	});
	setValue(wrkFocusedText, "#ffffff");

	// active workspace
	addKeyUpListener(wrkActiveBorder, function () {
		applyActiveWorkspace();
	});
	setValue(wrkActiveBorder, "#333333");
	addKeyUpListener(wrkActiveBackground, function () {
		applyActiveWorkspace();
	});
	setValue(wrkActiveBackground, "#5f676a");
	addKeyUpListener(wrkActiveText, function () {
		applyActiveWorkspace();
	});
	setValue(wrkActiveText, "#ffffff");

	// inactive workspace
	addKeyUpListener(wrkInactiveBorder, function () {
		applyInactiveWorkspace();
	});
	setValue(wrkInactiveBorder, "#333333");
	addKeyUpListener(wrkInactiveBackground, function () {
		applyInactiveWorkspace();
	});
	setValue(wrkInactiveBackground, "#222222");
	addKeyUpListener(wrkInactiveText, function () {
		applyInactiveWorkspace();
	});
	setValue(wrkInactiveText, "#ffffff");

	// urgent workspace
	addKeyUpListener(wrkUrgentBorder, function () {
		applyUrgentWorkspace();
	});
	setValue(wrkUrgentBorder, "#2f343a");
	addKeyUpListener(wrkUrgentBackground, function () {
		applyUrgentWorkspace();
	});
	setValue(wrkUrgentBackground, "#900000");
	addKeyUpListener(wrkUrgentText, function () {
		applyUrgentWorkspace();
	});
	setValue(wrkUrgentText, "#ffffff");
}

function windowListeners() {
	// focused window
	addKeyUpListener(winFocusedBorder, function () {
		applyFocusedWindow();
	});
	setValue(winFocusedBorder, "#4c7899");
	addKeyUpListener(winFocusedBackground, function () {
		applyFocusedWindow();
	});
	setValue(winFocusedBackground, "#285577");
	addKeyUpListener(winFocusedText, function () {
		applyFocusedWindow();
	})
	setValue(winFocusedText, "#ffffff");
	addKeyUpListener(winFocusedIndicator, function () {
		applyFocusedWindow();
	});
	setValue(winFocusedIndicator, "#2e9ef4");

	// inactive window
	addKeyUpListener(winInactiveBorder, function () {
		applyInactiveWindow();
	});
	setValue(winInactiveBorder, "#333333");
	addKeyUpListener(winInactiveBackground, function () {
		applyInactiveWindow();
	});
	setValue(winInactiveBackground, "#5f676a");
	addKeyUpListener(winInactiveText, function () {
		applyInactiveWindow();
	});
	setValue(winInactiveText, "#ffffff");
	addKeyUpListener(winInactiveIndicator, function () {
		applyInactiveWindow();
	});
	setValue(winInactiveIndicator, "#484e50");

	// unfocused window
	addKeyUpListener(winUnfocusedBorder, function () {
		applyUnfocusedWindow();
	});
	setValue(winUnfocusedBorder, "#333333");
	addKeyUpListener(winUnfocusedBackground, function () {
		applyUnfocusedWindow();
	});
	setValue(winUnfocusedBackground, "#222222");
	addKeyUpListener(winUnfocusedText, function () {
		applyUnfocusedWindow();
	});
	setValue(winUnfocusedText, "#888888");
	addKeyUpListener(winUnfocusedIndicator, function () {
		applyUnfocusedWindow();
	});
	setValue(winUnfocusedIndicator, "#292d2e");

	// urgent window
	addKeyUpListener(winUrgentBorder, function () {
		applyUrgentWindow();
	});
	setValue(winUrgentBorder, "#2f343a");
	addKeyUpListener(winUrgentBackground, function () {
		applyUrgentWindow();
	});
	setValue(winUrgentBackground, "#900000");
	addKeyUpListener(winUrgentText, function () {
		applyUrgentWindow();
	});
	setValue(winUrgentText, "#ffffff");
	addKeyUpListener(winUrgentIndicator, function () {
		applyUrgentWindow();
	});
	setValue(winUrgentIndicator, "#900000");
}

function mixerListeners() {
	// red
	addChangeListener(rangeRed, function () {
		copyValue(rangeRed, numberRed);
	});
	addInputListener(rangeRed, function () {
		copyValue(rangeRed, numberRed);
	});
	setValue(rangeRed, "255");
	addChangeListener(numberRed, function () {
		copyValue(numberRed, rangeRed);
	});
	setValue(numberRed, "255");

	// green
	addChangeListener(rangeGreen, function () {
		copyValue(rangeGreen, numberGreen);
	});
	addInputListener(rangeGreen, function () {
		copyValue(rangeGreen, numberGreen);
	});
	setValue(rangeGreen, "255");
	addChangeListener(numberGreen, function () {
		copyValue(numberGreen, rangeGreen);
	});
	setValue(numberGreen, "255");

	// blue
	addChangeListener(rangeBlue, function () {
		copyValue(rangeBlue, numberBlue);
	});
	addInputListener(rangeBlue, function () {
		copyValue(rangeBlue, numberBlue);
	});
	setValue(rangeBlue, "255");
	addChangeListener(numberBlue, function () {
		copyValue(numberBlue, rangeBlue);
	});
	setValue(numberBlue, "255");
	
	// mixer history
	addClickListener(mixedColor1, function () {
		readColorFromHistory(mixedColorHex1);
	});
	
	addClickListener(mixedColor2, function () {
		readColorFromHistory(mixedColorHex2);
	});
	
	addClickListener(mixedColor3, function () {
		readColorFromHistory(mixedColorHex3);
	});
	
	addClickListener(mixedColor4, function () {
		readColorFromHistory(mixedColorHex4);
	});
	
	addClickListener(mixedColor5, function () {
		readColorFromHistory(mixedColorHex5);
	});
}

function applyColor(applier) {
	var inputs = applier.parentNode.getElementsByTagName("input");
	for (var i = 0; i < inputs.length; i++) {
		var input = inputs[i];
		if ("text" == input.getAttribute("type")) {
			var color = document.getElementById(mixedColorHex).innerHTML;
			input.value = color;
			storeColor(color);
			input.onkeyup();
			break;
		}
	}
}

function readColorFromHistory(mixerHexValue) {
	var colorObject = document.getElementById(mixerHexValue);
	if (null != colorObject) {
		var color = colorObject.innerHTML;
		var red = hexToDec(color.substring(1, 3));
		var green = hexToDec(color.substring(3, 5));
		var blue = hexToDec(color.substring(5, 7));
		
		var rangeRedObject = document.getElementById(rangeRed);
		var rangeGreenObject = document.getElementById(numberGreen);
		var rangeBlueObject = document.getElementById(numberBlue);
		
		rangeRedObject.value = red;
		rangeRedObject.onchange();
		
		rangeGreenObject.value = green;
		rangeGreenObject.onchange();
		
		rangeBlueObject.value = blue;
		rangeBlueObject.onchange();
		
		setValue(rangeRed, red);
		setValue(numberGreen, green);
		setValue(numberBlue, blue);
	}
}

function createColorApplier(object) {
	var applier = document.createElement("input");
	applier.setAttribute("type", "button");
	applier.setAttribute("class", "colorApplier");
	applier.setAttribute("value", "<<");
	applier.addEventListener("click", function() {
		applyColor(this);
	});
	object.parentNode.appendChild(applier);
}

function addColorAppliers() {
	var div = document.getElementById("editor");
	var inputs = div.getElementsByTagName("input");
	for (var i = 0; i < inputs.length; i++) {
		var input = inputs[i];
		if ("text" == input.getAttribute("type")) {
			createColorApplier(input);
		}
	}
}

function forwardValues(objMixerColor, objMixerColorHex, objMixerColor2, objMixerColorHex2) {
	objMixerColor2.style.backgroundColor = objMixerColor.style.backgroundColor;
	objMixerColorHex2.innerHTML = objMixerColorHex.innerHTML;
}

function storeColor(color) {
	var mixer1 = document.getElementById(mixedColor1);
	var mixerHex1 = document.getElementById(mixedColorHex1); 
	
	if (color != mixerHex1.innerHTML) {
		var mixer2 = document.getElementById(mixedColor2);
		var mixerHex2 = document.getElementById(mixedColorHex2); 
		
		var mixer3 = document.getElementById(mixedColor3);
		var mixerHex3 = document.getElementById(mixedColorHex3); 
		
		var mixer4 = document.getElementById(mixedColor4);
		var mixerHex4 = document.getElementById(mixedColorHex4); 
		
		var mixer5 = document.getElementById(mixedColor5);
		var mixerHex5 = document.getElementById(mixedColorHex5);
		
		forwardValues(mixer4, mixerHex4, mixer5, mixerHex5);
		forwardValues(mixer3, mixerHex3, mixer4, mixerHex4);
		forwardValues(mixer2, mixerHex2, mixer3, mixerHex3);
		forwardValues(mixer1, mixerHex1, mixer2, mixerHex2);
		
		mixer1.style.backgroundColor = color;
		mixerHex1.innerHTML = color;
	}
}

function init() {
	statusListeners();
	workspaceListeners();
	windowListeners();
	mixerListeners();
	addColorAppliers();
	generateConfig();
}
