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
