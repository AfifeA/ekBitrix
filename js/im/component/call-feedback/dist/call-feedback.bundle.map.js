{"version":3,"sources":["call-feedback.bundle.js"],"names":["this","BX","exports","ui_vue","ui_forms","main_popup","im_lib_logger","BitrixVue","component","props","darkMode","type","Boolean","required","default","callDetails","Object","_default","id","provider","userCount","browser","isMobile","isConference","data","selectedRating","hoveredRating","selectedProblem","problemDescription","isFilled","created","initProblemsList","problemsList","noProblem","computed","showTextarea","other","wrapClasses","methods","onRatingMouseover","index","onRatingMouseOut","onRatingClick","prepareFeedback","event","call_id","kind","callRating","callProblem","getProblemCode","problem","_i","_Object$entries","entries","length","_Object$entries$_i","babelHelpers","slicedToArray","key","value","sendFeedback","feedback","Logger","warn","$emit","Call","Util","sendTelemetryEvent","getRatingStarClasses","$Bitrix","Loc","getMessage","videoQuality","cantSeeEachOther","cantHearEachOther","audioQuality","screenSharingProblem","recordingProblem","callInterfaceProblem","gotDisconnected","createProblemSelectPopup","_this","problemSelect","$refs","className","items","_i2","_Object$values","values","push","text","onclick","item","onProblemClick","problemSelectPopup","Menu","bindElement","offsetTop","toggleProblemSelectPopup","toggle","template","Messenger","Main","Lib"],"mappings":"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","file":"call-feedback.bundle.map.js"}