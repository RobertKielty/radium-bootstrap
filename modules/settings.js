var computeSettings = require('./util/compute-settings.js');

var settings = {};

settings["grayBase"] = "#000";
settings["brandSuccess"] = "#5cb85c";
settings["brandInfo"] = "#5bc0de";
settings["brandWarning"] = "#f0ad4e";
settings["brandDanger"] = "#d9534f";
settings["bodyBg"] = "#fff";
settings["linkHoverDecoration"] = "underline";
settings["fontFamilySansSerif"] = "\"Helvetica Neue\", Helvetica, Arial, sans-serif";
settings["fontFamilySerif"] = "Georgia, \"Times New Roman\", Times, serif";
settings["fontFamilyMonospace"] = "Menlo, Monaco, Consolas, \"Courier New\", monospace";
settings["fontSizeBase"] = 14;
settings["lineHeightBase"] = 1.428571429;
settings["headingsFontFamily"] = "inherit";
settings["headingsFontWeight"] = "500";
settings["headingsLineHeight"] = "1.1";
settings["headingsColor"] = "inherit";
settings["iconFontPath"] = "\"../fonts/\"";
settings["iconFontName"] = "\"glyphiconsHalflingsRegular\"";
settings["iconFontSvgId"] = "\"glyphicons_halflingsregular\"";
settings["paddingBaseVertical"] = 6;
settings["paddingBaseHorizontal"] = 12;
settings["paddingLargeVertical"] = 10;
settings["paddingLargeHorizontal"] = 16;
settings["paddingSmallVertical"] = 5;
settings["paddingSmallHorizontal"] = 10;
settings["paddingXsVertical"] = 1;
settings["paddingXsHorizontal"] = 5;
settings["lineHeightLarge"] = 1.3333333;
settings["lineHeightSmall"] = 1.5;
settings["borderRadiusBase"] = 4;
settings["borderRadiusLarge"] = 6;
settings["borderRadiusSmall"] = 3;
settings["componentActiveColor"] = "#fff";
settings["caretWidthBase"] = 4;
settings["caretWidthLarge"] = 5;
settings["tableCellPadding"] = 8;
settings["tableCondensedCellPadding"] = 5;
settings["tableBg"] = "transparent";
settings["tableBgAccent"] = "#f9f9f9";
settings["tableBgHover"] = "#f5f5f5";
settings["tableBorderColor"] = "#ddd";
settings["btnFontWeight"] = "normal";
settings["btnDefaultColor"] = "#333";
settings["btnDefaultBg"] = "#fff";
settings["btnDefaultBorder"] = "#ccc";
settings["btnPrimaryColor"] = "#fff";
settings["btnSuccessColor"] = "#fff";
settings["btnInfoColor"] = "#fff";
settings["btnWarningColor"] = "#fff";
settings["btnDangerColor"] = "#fff";
settings["inputBg"] = "#fff";
settings["inputBorder"] = "#ccc";
settings["inputBorderFocus"] = "#66afe9";
settings["inputColorPlaceholder"] = "#999";
settings["legendBorderColor"] = "#e5e5e5";
settings["cursorDisabled"] = "not-allowed";
settings["dropdownBg"] = "#fff";
settings["dropdownBorder"] = "rgba(0,0,0,.15)";
settings["dropdownFallbackBorder"] = "#ccc";
settings["dropdownDividerBg"] = "#e5e5e5";
settings["dropdownLinkHoverBg"] = "#f5f5f5";
settings["dropdownCaretColor"] = "#000";
settings["screenXs"] = 480;
settings["screenSm"] = 768;
settings["screenMd"] = 992;
settings["screenLg"] = 1200;
settings["gridColumns"] = 12;
settings["gridGutterWidth"] = 30;
settings["navbarHeight"] = 50;
settings["navbarCollapseMaxHeight"] = 340;
settings["navbarDefaultColor"] = "#777";
settings["navbarDefaultBg"] = "#f8f8f8";
settings["navbarDefaultLinkColor"] = "#777";
settings["navbarDefaultLinkHoverColor"] = "#333";
settings["navbarDefaultLinkHoverBg"] = "transparent";
settings["navbarDefaultLinkActiveColor"] = "#555";
settings["navbarDefaultLinkDisabledColor"] = "#ccc";
settings["navbarDefaultLinkDisabledBg"] = "transparent";
settings["navbarDefaultBrandHoverBg"] = "transparent";
settings["navbarDefaultToggleHoverBg"] = "#ddd";
settings["navbarDefaultToggleIconBarBg"] = "#888";
settings["navbarDefaultToggleBorderColor"] = "#ddd";
settings["navbarInverseBg"] = "#222";
settings["navbarInverseLinkHoverColor"] = "#fff";
settings["navbarInverseLinkHoverBg"] = "transparent";
settings["navbarInverseLinkDisabledColor"] = "#444";
settings["navbarInverseLinkDisabledBg"] = "transparent";
settings["navbarInverseBrandHoverColor"] = "#fff";
settings["navbarInverseBrandHoverBg"] = "transparent";
settings["navbarInverseToggleHoverBg"] = "#333";
settings["navbarInverseToggleIconBarBg"] = "#fff";
settings["navbarInverseToggleBorderColor"] = "#333";
settings["navLinkPadding"] = "10px 15px";
settings["navTabsBorderColor"] = "#ddd";
settings["navTabsActiveLinkHoverBorderColor"] = "#ddd";
settings["navTabsJustifiedLinkBorderColor"] = "#ddd";
settings["paginationBg"] = "#fff";
settings["paginationBorder"] = "#ddd";
settings["paginationHoverBorder"] = "#ddd";
settings["paginationActiveColor"] = "#fff";
settings["paginationDisabledBg"] = "#fff";
settings["paginationDisabledBorder"] = "#ddd";
settings["pagerBorderRadius"] = 15;
settings["jumbotronPadding"] = 30;
settings["jumbotronColor"] = "inherit";
settings["jumbotronHeadingColor"] = "inherit";
settings["stateSuccessText"] = "#3c763d";
settings["stateSuccessBg"] = "#dff0d8";
settings["stateInfoText"] = "#31708f";
settings["stateInfoBg"] = "#d9edf7";
settings["stateWarningText"] = "#8a6d3b";
settings["stateWarningBg"] = "#fcf8e3";
settings["stateDangerText"] = "#a94442";
settings["stateDangerBg"] = "#f2dede";
settings["tooltipMaxWidth"] = 200;
settings["tooltipColor"] = "#fff";
settings["tooltipBg"] = "#000";
settings["tooltipOpacity"] = ".9";
settings["tooltipArrowWidth"] = 5;
settings["popoverBg"] = "#fff";
settings["popoverMaxWidth"] = 276;
settings["popoverBorderColor"] = "rgba(0,0,0,.2)";
settings["popoverFallbackBorderColor"] = "#ccc";
settings["popoverArrowWidth"] = 10;
settings["labelColor"] = "#fff";
settings["labelLinkHoverColor"] = "#fff";
settings["modalInnerPadding"] = 15;
settings["modalTitlePadding"] = 15;
settings["modalContentBg"] = "#fff";
settings["modalContentBorderColor"] = "rgba(0,0,0,.2)";
settings["modalContentFallbackBorderColor"] = "#999";
settings["modalBackdropBg"] = "#000";
settings["modalBackdropOpacity"] = ".5";
settings["modalHeaderBorderColor"] = "#e5e5e5";
settings["modalLg"] = 900;
settings["modalMd"] = 600;
settings["modalSm"] = 300;
settings["alertPadding"] = 15;
settings["alertLinkFontWeight"] = "bold";
settings["progressBg"] = "#f5f5f5";
settings["progressBarColor"] = "#fff";
settings["listGroupBg"] = "#fff";
settings["listGroupBorder"] = "#ddd";
settings["listGroupHoverBg"] = "#f5f5f5";
settings["listGroupLinkColor"] = "#555";
settings["listGroupLinkHeadingColor"] = "#333";
settings["panelBg"] = "#fff";
settings["panelBodyPadding"] = 15;
settings["panelHeadingPadding"] = "10px 15px";
settings["panelInnerBorder"] = "#ddd";
settings["panelFooterBg"] = "#f5f5f5";
settings["panelDefaultBorder"] = "#ddd";
settings["panelDefaultHeadingBg"] = "#f5f5f5";
settings["panelPrimaryText"] = "#fff";
settings["thumbnailPadding"] = 4;
settings["thumbnailBorder"] = "#ddd";
settings["thumbnailCaptionPadding"] = 9;
settings["wellBg"] = "#f5f5f5";
settings["badgeColor"] = "#fff";
settings["badgeLinkHoverColor"] = "#fff";
settings["badgeActiveBg"] = "#fff";
settings["badgeFontWeight"] = "bold";
settings["badgeLineHeight"] = "1";
settings["badgeBorderRadius"] = 10;
settings["breadcrumbPaddingVertical"] = 8;
settings["breadcrumbPaddingHorizontal"] = 15;
settings["breadcrumbBg"] = "#f5f5f5";
settings["breadcrumbColor"] = "#ccc";
settings["breadcrumbSeparator"] = "\"/\"";
settings["carouselTextShadow"] = "0 1px 2px rgba(0,0,0,.6)";
settings["carouselControlColor"] = "#fff";
settings["carouselControlWidth"] = "15";
settings["carouselControlOpacity"] = ".5";
settings["carouselControlFontSize"] = 20;
settings["carouselIndicatorActiveBg"] = "#fff";
settings["carouselIndicatorBorderColor"] = "#fff";
settings["carouselCaptionColor"] = "#fff";
settings["closeFontWeight"] = "bold";
settings["closeColor"] = "#000";
settings["closeTextShadow"] = "0 1px 0 #fff";
settings["codeColor"] = "#c7254e";
settings["codeBg"] = "#f9f2f4";
settings["kbdColor"] = "#fff";
settings["kbdBg"] = "#333";
settings["preBg"] = "#f5f5f5";
settings["preBorderColor"] = "#ccc";
settings["preScrollableMaxHeight"] = 340;
settings["componentOffsetHorizontal"] = 180;

settings = computeSettings(settings);

module.exports = settings;
