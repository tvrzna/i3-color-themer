/** Constants **/

/* Workspaces */
var statusBar = "i3bar";
var statusLine = "i3barStatus";
var stsBackground = "txtStatusBackground";
var stsLine = "txtStatusLine";
var stsSeparator = "txtStatusSeparator";

/* Focused workspace */
var wrkFocused = "i3barFocused";
var wrkFocusedBorder = "txtFocusBorder";
var wrkFocusedBackground = "txtFocusBackground";
var wrkFocusedText = "txtFocusText";

/* Active workspace */
var wrkActive = "i3barActive";
var wrkActiveBorder = "txtActiveBorder";
var wrkActiveBackground = "txtActiveBackground";
var wrkActiveText = "txtActiveText";

/* Inactive workspace */
var wrkInactive = "i3barInactive";
var wrkInactiveBorder = "txtInactiveBorder";
var wrkInactiveBackground = "txtInactiveBackground";
var wrkInactiveText = "txtInactiveText";

/* Urgent workspace */
var wrkUrgent = "i3barUrgent";
var wrkUrgentBorder = "txtUrgentBorder";
var wrkUrgentBackground = "txtUrgentBackground";
var wrkUrgentText = "txtUrgentText";

/* Focused window */
var winFocusedBody = "i3winBodyFocused";
var winFocusedTitle = "i3winTitleFocused";
var winFocusedTd = "i3winIndicatorFocused";
var winFocusedBorder = "txtFocusWinBorder";
var winFocusedBackground = "txtFocusWinBackground";
var winFocusedText = "txtFocusWinText";
var winFocusedIndicator = "txtFocusWinIndicator";

/* Inactive window */
var winInactiveBody = "i3winBodyInactive";
var winInactiveTitle = "i3winTitleInactive";
var winInactiveTd = "i3winIndicatorInactive";
var winInactiveBorder = "txtInactiveWinBorder";
var winInactiveBackground = "txtInactiveWinBackground";
var winInactiveText = "txtInactiveWinText";
var winInactiveIndicator = "txtInactiveWinIndicator";

/* Unfocused window */
var winUnfocusedBody = "i3winBodyUnfocused";
var winUnfocusedTitle = "i3winTitleUnfocused";
var winUnfocusedTd = "i3winIndicatorUnfocused";
var winUnfocusedBorder = "txtUnfocusWinBorder";
var winUnfocusedBackground = "txtUnfocusWinBackground";
var winUnfocusedText = "txtUnfocusWinText";
var winUnfocusedIndicator = "txtUnfocusWinIndicator";

/* Urgent window */
var winUrgentBody = "i3winBodyUrgent";
var winUrgentTitle = "i3winTitleUrgent";
var winUrgentTd = "i3winIndicatorUrgent";
var winUrgentBorder = "txtUrgentWinBorder";
var winUrgentBackground = "txtUrgentWinBackground";
var winUrgentText = "txtUrgentWinText";
var winUrgentIndicator = "txtUrgentWinIndicator";

/* Generated config */
var plcStatusBg = "$statusBg";
var plcStatusLine = "$statusLine";
var plcStatusSep = "$statusSep";

var plsWrkFocusBorder = "$wrkFocusBorder";
var plsWrkFocusBg = "$wrkFocusBg";
var plsWrkFocusTxt = "$wrkFocusTxt";

var plsWrkActiveBorder = "$wrkActiveBorder";
var plsWrkActiveBg = "$wrkActiveBg";
var plsWrkActiveTxt = "$wrkActiveTxt";

var plsWrkInactiveBorder = "$wrkInactiveBorder";
var plsWrkInactiveBg = "$wrkInactiveBg";
var plsWrkInactiveTxt = "$wrkInactiveTxt";

var plsWrkUrgentBorder = "$wrkUrgentBorder";
var plsWrkUrgentBg = "$wrkUrgentBg";
var plsWrkUrgentTxt = "$wrkUrgentTxt";

var plsWinFocusBorder = "$winFocusBorder";
var plsWinFocusBg = "$winFocusBg";
var plsWinFocusTxt = "$winFocusTxt";
var plsWinFocusIndc = "$winFocusIndc";

var plsWinInactiveBorder = "$winInactiveBorder";
var plsWinInactiveBg = "$winInactiveBg";
var plsWinInactiveTxt = "$winInactiveTxt";
var plsWinInactiveIndc = "$winInactiveIndc";

var plsWinUnfocusBorder = "$winUnfocusBorder";
var plsWinUnfocusBg = "$winUnfocusBg";
var plsWinUnfocusTxt = "$winUnfocusTxt";
var plsWinUnfocusIndc = "$winUnfocusIndc";

var plsWinUrgentBorder = "$winUrgentBorder";
var plsWinUrgentBg = "$winUrgentBg";
var plsWinUrgentTxt = "$winUrgentTxt";
var plsWinUrgentIndc = "$winUrgentIndc";

var configId = "i3config";

var config = "bar {" +
	"\n\tcolors {" +
	"\n\t\tbackground $statusBg" +
	"\n\t\tstatusline $statusLine" +
	"\n\t\tseparator  $statusSep" +
	"\n" +
	"\n\t\tfocused_workspace\t$wrkFocusBorder\t$wrkFocusBg\t$wrkFocusTxt" +
	"\n\t\tactive_workspace\t$wrkActiveBorder\t$wrkActiveBg\t$wrkActiveTxt" +
	"\n\t\tinactive_workspace\t$wrkInactiveBorder\t$wrkInactiveBg\t$wrkInactiveTxt" +
	"\n\t\turgent_workspace\t$wrkUrgentBorder\t$wrkUrgentBg\t$wrkUrgentTxt" +
	"\n\t}" +
	"\n}" +
	"\n\nclient.focused\t\t$winFocusBorder\t$winFocusBg\t$winFocusTxt\t$winFocusIndc" +
	"\nclient.focused_inactive\t$winInactiveBorder\t$winInactiveBg\t$winInactiveTxt\t$winInactiveIndc" +
	"\nclient.unfocused\t$winUnfocusBorder\t$winUnfocusBg\t$winUnfocusTxt\t$winUnfocusIndc" +
	"\nclient.urgent\t\t$winUrgentBorder\t$winUrgentBg\t$winUrgentTxt\t$winUrgentIndc\n";

var regexpConfigBackground = /background[\s\t]*(#[a-fA-F0-9]{1,6})/;
var regexpConfigStatusLine = /statusline[\s\t]*(#[a-fA-F0-9]{1,6})/;
var regexpConfigSeparator = /separator[\s\t]*(#[a-fA-F0-9]{1,6})/;

var regexpConfigFocusedWorkspace = /focused_workspace[\s\t]*(#[a-fA-F0-9]{1,6})[\s\t]*(#[a-fA-F0-9]{1,6})[\s\t]*(#[a-fA-F0-9]{1,6})/;
var regexpConfigActiveWorkspace = /[^\w]active_workspace[\s\t]*(#[a-fA-F0-9]{1,6})[\s\t]*(#[a-fA-F0-9]{1,6})[\s\t]*(#[a-fA-F0-9]{1,6})/;
var regexpConfigInactiveWorkspace = /inactive_workspace[\s\t]*(#[a-fA-F0-9]{1,6})[\s\t]*(#[a-fA-F0-9]{1,6})[\s\t]*(#[a-fA-F0-9]{1,6})/;
var regexpConfigUrgentWorkspace = /urgent_workspace[\s\t]*(#[a-fA-F0-9]{1,6})[\s\t]*(#[a-fA-F0-9]{1,6})[\s\t]*(#[a-fA-F0-9]{1,6})/;

var regexpConfigClientFocused = /client.focused[\s\t]*(#[a-fA-F0-9]{1,6})[\s\t]*(#[a-fA-F0-9]{1,6})[\s\t]*(#[a-fA-F0-9]{1,6})[\s\t]*(#[a-fA-F0-9]{1,6})/;
var regexpConfigClientFocusedInactive = /client.focused_inactive[\s\t]*(#[a-fA-F0-9]{1,6})[\s\t]*(#[a-fA-F0-9]{1,6})[\s\t]*(#[a-fA-F0-9]{1,6})[\s\t]*(#[a-fA-F0-9]{1,6})/;
var regexpConfigClientUnfocused = /client.unfocused[\s\t]*(#[a-fA-F0-9]{1,6})[\s\t]*(#[a-fA-F0-9]{1,6})[\s\t]*(#[a-fA-F0-9]{1,6})[\s\t]*(#[a-fA-F0-9]{1,6})/;
var regexpConfigClientUrgent = /client.urgent[\s\t]*(#[a-fA-F0-9]{1,6})[\s\t]*(#[a-fA-F0-9]{1,6})[\s\t]*(#[a-fA-F0-9]{1,6})[\s\t]*(#[a-fA-F0-9]{1,6})/;

var rangeRed = "rangeRed";
var numberRed = "numberRed";
var rangeGreen = "rangeGreen";
var numberGreen = "numberGreen";
var rangeBlue = "rangeBlue";
var numberBlue = "numberBlue";
var mixedColor = "mixedColor";
var mixedColorHex = "mixedColorHex";
var mixedColor1 = "mixedColor1";
var mixedColorHex1 = "mixedColorHex1";
var mixedColor2 = "mixedColor2";
var mixedColorHex2 = "mixedColorHex2";
var mixedColor3 = "mixedColor3";
var mixedColorHex3 = "mixedColorHex3";
var mixedColor4 = "mixedColor4";
var mixedColorHex4 = "mixedColorHex4";
var mixedColor5 = "mixedColor5";
var mixedColorHex5 = "mixedColorHex5";
var mixedColor6 = "mixedColor6";
var mixedColorHex6 = "mixedColorHex6";


/**
 * Read color from text input, checks if is correct.
 * 
 * @param elementId element id of text input
 * @returns HEX code of color
 */
function getColorValueFromId(elementId) {
    var regex = new RegExp("\\b[0-9a-fA-F]{3}\\b|\\b[0-9a-fA-F]{6}\\b");
    var object = document.getElementById(elementId);
    if (null !== object && null !== object.value && regex.test(object.value)) {
	var result = object.value;
	var sharpRegex = new RegExp("\#(.*)");
	if (!sharpRegex.test(result)) {
	    result = "#" + result;
	    object.value = result;
	}
	object.style.borderColor = '#101010';
	object.style.color = '#008000';
	return result;
    } else if (null !== object && null !== object.value && !regex.test(object.value)) {
	object.style.borderColor = '#401010';
	object.style.color = '#A00000';
	return null;
    } else {
	return null;
    }
}

/**
 * Sets specified color to 
 * 
 * @param elementId element id of text input
 * @param color HEX code of color
 */
function setColorValueToId(elementId, color) {
    var regex = new RegExp("\\b[0-9a-fA-F]{3}\\b|\\b[0-9a-fA-F]{6}\\b");
    var object = document.getElementById(elementId);
    if (null !== object && regex.test(color)) {
	var result = color;
	var sharpRegex = new RegExp("\#(.*)");
	if (!sharpRegex.test(result)) {
	    result = "#" + result;
	    object.value = result;
	}
	object.style.borderColor = '#101010';
	object.style.color = '#008000';
	object.value = result;
    } else if (null !== object && !regex.test(color)) {
	object.style.borderColor = '#401010';
	object.style.color = '#A00000';
	object.value = "errcolor";
    }
}

/**
 * Applies color on Status Bar.
 */
function applyStatusBar() {
    var bar = document.getElementById(statusBar);
    var line = document.getElementById(statusLine);
    var background = getColorValueFromId(stsBackground);
    var stline = getColorValueFromId(stsLine);
    var separator = getColorValueFromId(stsSeparator);
    if (null !== background) {
	bar.style.backgroundColor = background;
    }
    if (null !== stline) {
	line.style.color = stline;
    }
    if (null !== separator) {
	for (var i = 0; i < line.children.length; i++) {
	    var child = line.children[i];
	    if ("separated" === child.className) {
		child.style.borderColor = separator;
	    }
	}
    }
}

/**
 * Applies colors on workspace defined workspace.
 * 
 * @param objectId element id of workspace element
 * @param borderId element id of text input with border color
 * @param backgroundId element id of text input with background color
 * @param textId element id of text input with text color
 */
function applyWorkspace(objectId, borderId, backgroundId, textId) {
    var object = document.getElementById(objectId);
    var border = getColorValueFromId(borderId);
    var background = getColorValueFromId(backgroundId);
    var text = getColorValueFromId(textId);
    if (null !== border) {
	object.style.borderColor = border;
    }
    if (null !== background) {
	object.style.backgroundColor = background;
    }
    if (null !== text) {
	object.style.color = text;
    }
}

/**
 * Applies colors for focused workspace (using constants).
 */
function applyFocusedWorkspace() {
    applyWorkspace(wrkFocused, wrkFocusedBorder, wrkFocusedBackground, wrkFocusedText);
}

/**
 * Applies colors for active workspace (using constants).
 */
function applyActiveWorkspace() {
    applyWorkspace(wrkActive, wrkActiveBorder, wrkActiveBackground, wrkActiveText);
}

/**
 * Applies colors for inactive workspace (using constants).
 */
function applyInactiveWorkspace() {
    applyWorkspace(wrkInactive, wrkInactiveBorder, wrkInactiveBackground, wrkInactiveText);
}

/**
 * Applies colors for urgent workspace (using constants).
 */
function applyUrgentWorkspace() {
    applyWorkspace(wrkUrgent, wrkUrgentBorder, wrkUrgentBackground, wrkUrgentText);
}

/**
 * Reads colors from workspace. <br />
 * This function is currently unused.
 * 
 * @param objectId element id of workspace element
 * @param borderId element id of text input for border color
 * @param backgroundId element id of text input for background color
 * @param textId element id of text input for text color
 */
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

/**
 * Applies colors on defined window.
 * 
 * @param bodyId element id of window body
 * @param titleId element id of window title
 * @param tdId element id of window td (for indicators)
 * @param borderId element id of text input with border color
 * @param backgroundId element id of text input with background color
 * @param textId element id of text input with text color
 * @param indicatorId element id of text input with indicator color
 */
function applyWindow(bodyId, titleId, tdId, borderId, backgroundId, textId, indicatorId) {
    var body = document.getElementById(bodyId);
    var title = document.getElementById(titleId);
    var td = document.getElementById(tdId);
    var border = getColorValueFromId(borderId);
    var background = getColorValueFromId(backgroundId);
    var text = getColorValueFromId(textId);
    var indicator = getColorValueFromId(indicatorId);
    if (null !== border) {
	title.style.borderColor = border;
	body.style.borderColor = border;
    }
    if (null !== background) {
	title.style.backgroundColor = background;
    }
    if (null !== text) {
	title.style.color = text;
    }
    if (null !== indicator) {
	td.style.borderColor = indicator;
    }
}

/**
 * Applies colors for focused window (using constants).
 */
function applyFocusedWindow() {
    applyWindow(winFocusedBody, winFocusedTitle, winFocusedTd, winFocusedBorder, winFocusedBackground, winFocusedText, winFocusedIndicator);
}

/**
 * Applies colors for inactive window (using constants).
 */
function applyInactiveWindow() {
    applyWindow(winInactiveBody, winInactiveTitle, winInactiveTd, winInactiveBorder, winInactiveBackground, winInactiveText, winInactiveIndicator);
}

/**
 * Applies colors for unfocused window (using constants).
 */
function applyUnfocusedWindow() {
    applyWindow(winUnfocusedBody, winUnfocusedTitle, winUnfocusedTd, winUnfocusedBorder, winUnfocusedBackground, winUnfocusedText, winUnfocusedIndicator);
}

/**
 * Applies colors for urgent window (using constants).
 */
function applyUrgentWindow() {
    applyWindow(winUrgentBody, winUrgentTitle, winUrgentTd, winUrgentBorder, winUrgentBackground, winUrgentText, winUrgentIndicator);
}

/**
 * Checks if color is not null, if is, it return constant "errcolor".
 * 
 * @param color
 * @returns color
 */
function notNullcolor(color) {
    if (null !== color) {
	return color;
    }
    return "errcolor";
}

/**
 * Reads all color from text inputs and generate i3 config.
 */
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

/**
 * Copies values between two inputs.
 * 
 * @param objectFromId element id of source element
 * @param objectToId element id of target element
 */
function copyValue(objectFromId, objectToId) {
    var from = document.getElementById(objectFromId);
    var to = document.getElementById(objectToId);
    to.value = from.value;
    joinColors();
}

/**
 * Handles zero padding for number values.
 * 
 * @param num number
 * @param places number length
 * @returns padded number
 */
function zeroPad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}

/**
 * Converts decimal number to hex number. Return 0, if parameter is null.
 * 
 * @param dec decimal number
 * @returns hex number
 */
function decToHex(dec) {
    if (null !== dec) {
	return zeroPad(parseInt(dec, 10).toString(16), 2);
    }
    return 0;
}

/**
 * Converts hex number to decimal number. Return 0, if parameter is null.
 * 
 * @param hex hex number
 * @returns decimal number
 */
function hexToDec(hex) {
    if (null !== hex) {
	return zeroPad(parseInt(hex, 16).toString(10), 2);
    }
    return 0;
}

/**
 * Joins decimal colors from mixer and converts it into HEX color number in mixer.
 */
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

/**
 * Sets value into object (according element id).
 * 
 * @param objectId element id of element
 * @param value wanted value
 */
function setValue(objectId, value) {
    var object = document.getElementById(objectId);
    object.value = value;
}

/**
 * Adds onclick event into object (according element id). 
 * 
 * @param objectId element id of element
 * @param fce function of event
 */
function addClickListener(objectId, fce) {
    var object = document.getElementById(objectId);
    object.onclick = fce;
}

/**
 * Adds onchange event into object (according element id).
 * 
 * @param objectId element id of element
 * @param fce function of event
 */
function addChangeListener(objectId, fce) {
    var object = document.getElementById(objectId);
    object.onchange = fce;
}

/**
 * Adds oninput event into object (according element id).
 * 
 * @param objectId element id of element
 * @param fce function of event
 */
function addInputListener(objectId, fce) {
    var object = document.getElementById(objectId);
    object.oninput = fce;
}

/**
 * Adds onkeyup event into object (according element id).
 * 
 * @param objectId element id of element
 * @param fce function of event
 */
function addKeyUpListener(objectId, fce) {
    var object = document.getElementById(objectId);
    object.onkeyup = fce;
}

/**
 * Adds event listeners and default values into Status Bar inputs.
 */
function statusListeners() {
    addKeyUpListener(stsBackground, function () {
	applyStatusBar();
	generateConfig();
    });
    setValue(stsBackground, "#000000");
    addKeyUpListener(stsLine, function () {
	applyStatusBar();
	generateConfig();
    });
    setValue(stsLine, "#ffffff");
    addKeyUpListener(stsSeparator, function () {
	applyStatusBar();
	generateConfig();
    });
    setValue(stsSeparator, "#666666");
}

/**
 * Adds event listeners and default values into Workspace inputs.
 */
function workspaceListeners() {
    // focused workspace
    addKeyUpListener(wrkFocusedBorder, function () {
	applyFocusedWorkspace();
	generateConfig();
    });
    setValue(wrkFocusedBorder, "#4c7899");
    addKeyUpListener(wrkFocusedBackground, function () {
	applyFocusedWorkspace();
	generateConfig();
    });
    setValue(wrkFocusedBackground, "#285577");
    addKeyUpListener(wrkFocusedText, function () {
	applyFocusedWorkspace();
	generateConfig();
    });
    setValue(wrkFocusedText, "#ffffff");

    // active workspace
    addKeyUpListener(wrkActiveBorder, function () {
	applyActiveWorkspace();
	generateConfig();
    });
    setValue(wrkActiveBorder, "#333333");
    addKeyUpListener(wrkActiveBackground, function () {
	applyActiveWorkspace();
	generateConfig();
    });
    setValue(wrkActiveBackground, "#5f676a");
    addKeyUpListener(wrkActiveText, function () {
	applyActiveWorkspace();
	generateConfig();
    });
    setValue(wrkActiveText, "#ffffff");

    // inactive workspace
    addKeyUpListener(wrkInactiveBorder, function () {
	applyInactiveWorkspace();
	generateConfig();
    });
    setValue(wrkInactiveBorder, "#333333");
    addKeyUpListener(wrkInactiveBackground, function () {
	applyInactiveWorkspace();
	generateConfig();
    });
    setValue(wrkInactiveBackground, "#222222");
    addKeyUpListener(wrkInactiveText, function () {
	applyInactiveWorkspace();
	generateConfig();
    });
    setValue(wrkInactiveText, "#ffffff");

    // urgent workspace
    addKeyUpListener(wrkUrgentBorder, function () {
	applyUrgentWorkspace();
	generateConfig();
    });
    setValue(wrkUrgentBorder, "#2f343a");
    addKeyUpListener(wrkUrgentBackground, function () {
	applyUrgentWorkspace();
	generateConfig();
    });
    setValue(wrkUrgentBackground, "#900000");
    addKeyUpListener(wrkUrgentText, function () {
	applyUrgentWorkspace();
	generateConfig();
    });
    setValue(wrkUrgentText, "#ffffff");
}

/**
 * Adds event listeners and default values into Window inputs.
 */
function windowListeners() {
    // focused window
    addKeyUpListener(winFocusedBorder, function () {
	applyFocusedWindow();
	generateConfig();
    });
    setValue(winFocusedBorder, "#4c7899");
    addKeyUpListener(winFocusedBackground, function () {
	applyFocusedWindow();
	generateConfig();
    });
    setValue(winFocusedBackground, "#285577");
    addKeyUpListener(winFocusedText, function () {
	applyFocusedWindow();
	generateConfig();
    })
    setValue(winFocusedText, "#ffffff");
    addKeyUpListener(winFocusedIndicator, function () {
	applyFocusedWindow();
	generateConfig();
    });
    setValue(winFocusedIndicator, "#2e9ef4");

    // inactive window
    addKeyUpListener(winInactiveBorder, function () {
	applyInactiveWindow();
	generateConfig();
    });
    setValue(winInactiveBorder, "#333333");
    addKeyUpListener(winInactiveBackground, function () {
	applyInactiveWindow();
	generateConfig();
    });
    setValue(winInactiveBackground, "#5f676a");
    addKeyUpListener(winInactiveText, function () {
	applyInactiveWindow();
	generateConfig();
    });
    setValue(winInactiveText, "#ffffff");
    addKeyUpListener(winInactiveIndicator, function () {
	applyInactiveWindow();
	generateConfig();
    });
    setValue(winInactiveIndicator, "#484e50");

    // unfocused window
    addKeyUpListener(winUnfocusedBorder, function () {
	applyUnfocusedWindow();
	generateConfig();
    });
    setValue(winUnfocusedBorder, "#333333");
    addKeyUpListener(winUnfocusedBackground, function () {
	applyUnfocusedWindow();
	generateConfig();
    });
    setValue(winUnfocusedBackground, "#222222");
    addKeyUpListener(winUnfocusedText, function () {
	applyUnfocusedWindow();
	generateConfig();
    });
    setValue(winUnfocusedText, "#888888");
    addKeyUpListener(winUnfocusedIndicator, function () {
	applyUnfocusedWindow();
	generateConfig();
    });
    setValue(winUnfocusedIndicator, "#292d2e");

    // urgent window
    addKeyUpListener(winUrgentBorder, function () {
	applyUrgentWindow();
	generateConfig();
    });
    setValue(winUrgentBorder, "#2f343a");
    addKeyUpListener(winUrgentBackground, function () {
	applyUrgentWindow();
	generateConfig();
    });
    setValue(winUrgentBackground, "#900000");
    addKeyUpListener(winUrgentText, function () {
	applyUrgentWindow();
	generateConfig();
    });
    setValue(winUrgentText, "#ffffff");
    addKeyUpListener(winUrgentIndicator, function () {
	applyUrgentWindow();
	generateConfig();
    });
    setValue(winUrgentIndicator, "#900000");
}

/**
 * Adds event listener and default values into color mixer inputs.
 */
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

    addClickListener(mixedColor6, function () {
	readColorFromHistory(mixedColorHex6);
    });
}

function configListeners() {
    addKeyUpListener(configId, function () {
	applyFromI3config();
    });
}

/**
 * Apply color from color mixer.
 * 
 * @param applier element of button
 */
function applyColor(applier) {
    var inputs = applier.parentNode.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
	var input = inputs[i];
	if ("text" === input.getAttribute("type")) {
	    var color = document.getElementById(mixedColorHex).innerHTML;
	    input.value = color;
	    storeColor(color);
	    input.onkeyup();
	    break;
	}
    }
}

/**
 * Loads color value from Color mixer history.
 * 
 * @param mixerHexValue element id of history element
 */
function readColorFromHistory(mixerHexValue) {
    var colorObject = document.getElementById(mixerHexValue);
    if (null !== colorObject) {
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

/**
 * Parses colors from changes on config and applies them into editor.
 */
function applyFromI3config() {
    var value = document.getElementById(configId).innerHTML;

    handleStatusBarConfig(value);
    handleWorkspacesConfig(value);
    handleWindowsConfig(value);
}

/**
 * Handles loading data from manually loaded status bar configuration.
 * 
 * @param value
 */
function handleStatusBarConfig(value) {
    arrBackgroundColors = regexpFromText(value, regexpConfigBackground, 1);
    arrStatusLineColors = regexpFromText(value, regexpConfigStatusLine, 1);
    arrSeparatorColors = regexpFromText(value, regexpConfigSeparator, 1);

    setColorValueToId(stsBackground, arrBackgroundColors[0]);
    setColorValueToId(stsLine, arrStatusLineColors[0]);
    setColorValueToId(stsSeparator, arrSeparatorColors[0]);
    applyStatusBar();
}

/**
 * Handles loading data from manually loaded workspaces configuration.
 * 
 * @param value
 */
function handleWorkspacesConfig(value) {
    arrFocusedWorkspaceColors = regexpFromText(value, regexpConfigFocusedWorkspace, 3);
    setColorValueToId(wrkFocusedBorder, arrFocusedWorkspaceColors[0]);
    setColorValueToId(wrkFocusedBackground, arrFocusedWorkspaceColors[1]);
    setColorValueToId(wrkFocusedText, arrFocusedWorkspaceColors[2]);
    applyFocusedWorkspace();

    arrActiveWorkspaceColors = regexpFromText(value, regexpConfigActiveWorkspace, 3);
    setColorValueToId(wrkActiveBorder, arrActiveWorkspaceColors[0]);
    setColorValueToId(wrkActiveBackground, arrActiveWorkspaceColors[1]);
    setColorValueToId(wrkActiveText, arrActiveWorkspaceColors[2]);
    applyActiveWorkspace();

    arrInactivedWorkspaceColors = regexpFromText(value, regexpConfigInactiveWorkspace, 3);
    setColorValueToId(wrkInactiveBorder, arrInactivedWorkspaceColors[0]);
    setColorValueToId(wrkInactiveBackground, arrInactivedWorkspaceColors[1]);
    setColorValueToId(wrkInactiveText, arrInactivedWorkspaceColors[2]);
    applyInactiveWorkspace();

    arrUrgentWorkspaceColors = regexpFromText(value, regexpConfigUrgentWorkspace, 3);
    setColorValueToId(wrkUrgentBorder, arrUrgentWorkspaceColors[0]);
    setColorValueToId(wrkUrgentBackground, arrUrgentWorkspaceColors[1]);
    setColorValueToId(wrkUrgentText, arrUrgentWorkspaceColors[2]);
    applyUrgentWorkspace();
}

/**
 * Handles loading data from manually loaded windows configuration.
 * 
 * @param value
 */
function handleWindowsConfig(value) {
    arrFocusedClientColors = regexpFromText(value, regexpConfigClientFocused, 4);
    setColorValueToId(winFocusedBorder, arrFocusedClientColors[0]);
    setColorValueToId(winFocusedBackground, arrFocusedClientColors[1]);
    setColorValueToId(winFocusedText, arrFocusedClientColors[2]);
    setColorValueToId(winFocusedIndicator, arrFocusedClientColors[3]);
    applyFocusedWindow();

    arrFocusedInactiveClientColors = regexpFromText(value, regexpConfigClientFocusedInactive, 4);
    setColorValueToId(winInactiveBorder, arrFocusedInactiveClientColors[0]);
    setColorValueToId(winInactiveBackground, arrFocusedInactiveClientColors[1]);
    setColorValueToId(winInactiveText, arrFocusedInactiveClientColors[2]);
    setColorValueToId(winInactiveIndicator, arrFocusedInactiveClientColors[3]);
    applyInactiveWindow();

    arrUnfocusedClientColors = regexpFromText(value, regexpConfigClientUnfocused, 4);
    setColorValueToId(winUnfocusedBorder, arrUnfocusedClientColors[0]);
    setColorValueToId(winUnfocusedBackground, arrUnfocusedClientColors[1]);
    setColorValueToId(winUnfocusedText, arrUnfocusedClientColors[2]);
    setColorValueToId(winUnfocusedIndicator, arrUnfocusedClientColors[3]);
    applyUnfocusedWindow();

    arrUrgentClientColors = regexpFromText(value, regexpConfigClientUrgent, 4);
    setColorValueToId(winUrgentBorder, arrUrgentClientColors[0]);
    setColorValueToId(winUrgentBackground, arrUrgentClientColors[1]);
    setColorValueToId(winUrgentText, arrUrgentClientColors[2]);
    setColorValueToId(winUrgentIndicator, arrUrgentClientColors[3]);
    applyUrgentWindow();
}

function regexpFromText(source, regexp, matchesCount) {
    var matches = [];
    var match = regexp.exec(source);
    if (null !== match) {
	for (var i = 1; i <= matchesCount; i++) {
	    matches.push(match[i]);
	}
    }
    return matches;
}

/**
 * Create color applier for object.
 * 
 * @param object
 */
function createColorApplier(object) {
    var applier = document.createElement("input");
    applier.setAttribute("type", "button");
    applier.setAttribute("class", "colorApplier");
    applier.setAttribute("value", "<<");
    applier.addEventListener("click", function () {
	applyColor(this);
    });
    object.parentNode.appendChild(applier);
}

/**
 * Adds color appliers into all text inputs in editor.
 */
function addColorAppliers() {
    var div = document.getElementById("editor");
    var inputs = div.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
	var input = inputs[i];
	if ("text" === input.getAttribute("type")) {
	    createColorApplier(input);
	}
    }
}

/**
 * Moves colors from one element into another.
 * 
 * @param objMixerColor
 * @param objMixerColorHex
 * @param objMixerColor2
 * @param objMixerColorHex2
 */
function forwardValues(objMixerColor, objMixerColorHex, objMixerColor2, objMixerColorHex2) {
    objMixerColor2.style.backgroundColor = objMixerColor.style.backgroundColor;
    objMixerColorHex2.innerHTML = objMixerColorHex.innerHTML;
}

/**
 * Saves colors and push it into colors history.
 * 
 * @param color HEX number of color
 */
function storeColor(color) {
    var mixer1 = document.getElementById(mixedColor1);
    var mixerHex1 = document.getElementById(mixedColorHex1);

    if (color !== mixerHex1.innerHTML) {
	var mixer2 = document.getElementById(mixedColor2);
	var mixerHex2 = document.getElementById(mixedColorHex2);

	var mixer3 = document.getElementById(mixedColor3);
	var mixerHex3 = document.getElementById(mixedColorHex3);

	var mixer4 = document.getElementById(mixedColor4);
	var mixerHex4 = document.getElementById(mixedColorHex4);

	var mixer5 = document.getElementById(mixedColor5);
	var mixerHex5 = document.getElementById(mixedColorHex5);

	var mixer6 = document.getElementById(mixedColor6);
	var mixerHex6 = document.getElementById(mixedColorHex6);

	forwardValues(mixer5, mixerHex5, mixer6, mixerHex6);
	forwardValues(mixer4, mixerHex4, mixer5, mixerHex5);
	forwardValues(mixer3, mixerHex3, mixer4, mixerHex4);
	forwardValues(mixer2, mixerHex2, mixer3, mixerHex3);
	forwardValues(mixer1, mixerHex1, mixer2, mixerHex2);

	mixer1.style.backgroundColor = color;
	mixerHex1.innerHTML = color;
    }
}

/**
 * Pushes default colors into mixer history.
 */
function initMixerHistory() {
    storeColor("#285577");
    storeColor("#5f676a");
    storeColor("#333333");
    storeColor("#4c7899");
    storeColor("#ffffff");
    storeColor("#000000");
}

function applyConfig() {
    applyStatusBar();
    applyFocusedWorkspace();
    applyActiveWorkspace();
    applyInactiveWorkspace();
    applyUrgentWorkspace();
    applyFocusedWindow();
    applyInactiveWindow();
    applyUnfocusedWindow();
    applyUrgentWindow();
}

/**
 * Init method.
 */
function init() {
    statusListeners();
    workspaceListeners();
    windowListeners();
    mixerListeners();
    configListeners();
    addColorAppliers();
    generateConfig();
    initMixerHistory();
    applyConfig();
}

window.addEventListener("load", init, false);
