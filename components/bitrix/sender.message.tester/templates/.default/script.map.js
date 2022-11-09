{"version":3,"sources":["script.js"],"names":["window","BX","namespace","Sender","Message","Tester","Helper","prototype","classNameBtnWait","eventNameSend","init","params","this","context","containerId","id","actionUri","mess","ajaxAction","AjaxAction","messageCode","lastRecipients","type","types","button","getNode","result","buttonValidation","enablePhoneVerification","initSelector","bind","Bitrix24","PhoneVerify","showSlider","verified","send","validate","value","mail","validateEmail","phone","validatePhone","selector","UI","TileSelector","getById","Error","addCustomEvent","events","search","onSearch","buttonSelect","onButtonSelect","buttonSelectFirst","onButtonSelectFirst","title","searchTitleMail","searchTitlePhone","showSearcher","data","name","categoryLast","items","map","code","setSearcherData","split","forEach","trim","addTile","match","printResult","consent","node","isSuccess","errorCode","self","errorHandler","ErrorHandler","onError","text","resultErrors","join","consentSuccess","testSuccess","testSuccessPhone","textContent","removeWaitingIndicator","removeClass","addWaitingIndicator","addClass","convertDataFromPostToJson","key","hasOwnProperty","test","newKey","item","replace","reduce","accum","currentKey","isPlainObject","isNotEmptyObject","action","resultNode","list","getTilesId","filter","length","testEmpty","message","onCustomEvent","request","onsuccess","onfailure","messageId","messageData"],"mappings":"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","file":"script.map.js"}