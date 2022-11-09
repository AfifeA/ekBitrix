{"version":3,"sources":["call-background.bundle.js"],"names":["this","BX","exports","main_core","im_lib_uploader","im_lib_utils","ui_infoHelper","ui_notification","ui_vue","ui_progressbarjs_uploader","im_const","CallBackgroundItem","props","selected","type","Boolean","default","item","Object","mounted","createProgressbar","beforeDestroy","removeProgressbar","methods","_this","uploader","state","progress","Uploader","container","$refs","labels","loading","localize","completed","canceled","cancelTitle","megabyte","cancelCallback","event","$emit","destroyCallback","start","size","offsetHeight","offsetWidth","setProgressTitleVisibility","updateProgressbar","result","status","FileStatus","error","setProgress","setCancelDisable","setIcon","icon","setProgressTitle","wait","cloud","cancel","setByteSent","destroy","computed","uploadProgress","BitrixVue","getFilteredPhrases","watch","template","ActionType","freeze","none","upload","blur","gaussianBlur","LimitCode","image","component","isDesktop","width","height","data","actions","standard","custom","diskFolderId","components","created","defaultValue","window","desktop","getBackgroundImage","id","source","limit","ajax","runAction","then","response","list","forEach","element","video","includes","canRemove","supported","push","title","Loc","getMessage","map","filter","UI","InfoHelper","isInited","init","frameUrlTemplate","infohelper","hideLoader","_this2","inputNode","uploadInput","generatePreview","fileMaxSize","subscribe","eventData","getData","file","Notification","Center","notify","content","replace","name","autoHideDelay","isAllowedType","previewData","addTask","taskId","concat","Date","now","chunkSize","fileData","fileName","generateUniqueName","previewBlob","filePreview","URL","createObjectURL","unshift","preview","startsWith","find","links","download","select","fileId","containerSize","backgrounds","uploadTypes","Utils","platform","isBitrixDesktop","hasLimit","elementId","active","articleCode","show","click","setBackgroundImage","remove","deleteTask","el","save","close","Messenger","Lib","ProgressBarJs","Const"],"mappings":"AAAAA,KAAKC,GAAKD,KAAKC,IAAM,IACpB,SAAUC,EAAQC,EAAUC,EAAgBC,EAAaC,EAAcC,EAAgBC,EAAOC,EAA0BC,GACxH,aAUA,IAAIC,EAAqB,CACvBC,MAAO,CACLC,SAAU,CACRC,KAAMC,QACNC,QAAW,OAEbC,KAAM,CACJH,KAAMI,OACNF,QAAW,KAGfG,QAAS,SAASA,IAChBnB,KAAKoB,qBAEPC,cAAe,SAASA,IACtBrB,KAAKsB,qBAEPC,QAAS,CACPH,kBAAmB,SAASA,IAC1B,IAAII,EAAQxB,KAEZ,GAAIA,KAAKyB,SAAU,CACjB,OAAO,KAGT,IAAKzB,KAAKiB,KAAKS,MAAO,CACpB,OAAO,KAGT,GAAI1B,KAAKiB,KAAKS,MAAMC,WAAa,IAAK,CACpC,OAAO,MAGT3B,KAAKyB,SAAW,IAAIhB,EAA0BmB,SAAS,CACrDC,UAAW7B,KAAK8B,MAAMD,UACtBE,OAAQ,CACNC,QAAShC,KAAKiC,SAAS,wDACvBC,UAAWlC,KAAKiC,SAAS,0DACzBE,SAAUnC,KAAKiC,SAAS,yDACxBG,YAAapC,KAAKiC,SAAS,6DAC3BI,SAAUrC,KAAKiC,SAAS,kDAE1BK,eAAgBtC,KAAKiB,KAAKS,MAAMC,SAAW,EAAI,KAAO,SAAUY,GAC9Df,EAAMgB,MAAM,SAAU,CACpBvB,KAAMO,EAAMP,KACZsB,MAAOA,KAGXE,gBAAiB,SAASA,IACxB,GAAIjB,EAAMC,SAAU,CAClBD,EAAMC,SAAW,SAIvBzB,KAAKyB,SAASiB,QAEd,GAAI1C,KAAKiB,KAAKS,MAAMiB,MAAQ3C,KAAKiB,KAAKS,MAAMiB,KAAO,KAAO,MAAQ,GAAK3C,KAAK8B,MAAMD,UAAUe,cAAgB,IAAM5C,KAAK8B,MAAMD,UAAUgB,YAAc,IAAK,CACxJ7C,KAAKyB,SAASqB,2BAA2B,OAG3C9C,KAAK+C,oBACL,OAAO,MAETA,kBAAmB,SAASA,IAC1B,IAAK/C,KAAKyB,SAAU,CAClB,IAAIuB,EAAShD,KAAKoB,oBAElB,IAAK4B,EAAQ,CACX,OAAO,OAIX,GAAIhD,KAAKiB,KAAKS,MAAMuB,SAAWvC,EAASwC,WAAWC,MAAO,CACxDnD,KAAKyB,SAAS2B,YAAY,GAC1BpD,KAAKyB,SAAS4B,iBAAiB,OAC/BrD,KAAKyB,SAAS6B,QAAQ7C,EAA0BmB,SAAS2B,KAAKJ,OAC9DnD,KAAKyB,SAAS+B,iBAAiBxD,KAAKiC,SAAS,4DACxC,GAAIjC,KAAKiB,KAAKS,MAAMuB,SAAWvC,EAASwC,WAAWO,KAAM,CAC9DzD,KAAKyB,SAAS2B,YAAYpD,KAAKiB,KAAKS,MAAMC,SAAW,EAAI3B,KAAKiB,KAAKS,MAAMC,SAAW,GACpF3B,KAAKyB,SAAS4B,iBAAiB,MAC/BrD,KAAKyB,SAAS6B,QAAQ7C,EAA0BmB,SAAS2B,KAAKG,OAC9D1D,KAAKyB,SAAS+B,iBAAiBxD,KAAKiC,SAAS,6DACxC,GAAIjC,KAAKiB,KAAKS,MAAMC,WAAa,IAAK,CAC3C3B,KAAKyB,SAAS2B,YAAY,UACrB,GAAIpD,KAAKiB,KAAKS,MAAMC,YAAc,EAAG,CAC1C3B,KAAKyB,SAAS2B,YAAY,IAC1BpD,KAAKyB,SAAS+B,iBAAiBxD,KAAKiC,SAAS,6DACxC,CACL,GAAIjC,KAAKiB,KAAKS,MAAMC,WAAa,EAAG,CAClC3B,KAAKyB,SAAS6B,QAAQ7C,EAA0BmB,SAAS2B,KAAKI,QAGhE,IAAIhC,EAAW3B,KAAKiB,KAAKS,MAAMC,SAAW,EAAI3B,KAAKiB,KAAKS,MAAMC,SAAW,EACzE3B,KAAKyB,SAAS2B,YAAYzB,GAE1B,GAAI3B,KAAKiB,KAAKS,MAAMiB,KAAO,KAAO,MAAQ,EAAG,CAC3C3C,KAAKyB,SAAS+B,iBAAiBxD,KAAKiC,SAAS,6DACxC,CACLjC,KAAKyB,SAASmC,YAAY5D,KAAKiB,KAAKS,MAAMiB,KAAO,IAAM3C,KAAKiB,KAAKS,MAAMC,SAAU3B,KAAKiB,KAAKS,MAAMiB,SAIvGrB,kBAAmB,SAASA,IAC1B,IAAKtB,KAAKyB,SAAU,CAClB,OAAO,KAGTzB,KAAKyB,SAASoC,QAAQ,OACtB,OAAO,OAGXC,SAAU,CACRC,eAAgB,SAASA,IACvB,IAAK/D,KAAKiB,KAAKS,MAAO,CACpB,MAAO,GAGT,OAAO1B,KAAKiB,KAAKS,MAAMuB,OAAS,IAAMjD,KAAKiB,KAAKS,MAAMC,UAExDM,SAAU,SAASA,IACjB,OAAOzB,EAAOwD,UAAUC,mBAAmB,oCAAqCjE,QAGpFkE,MAAO,CACLH,eAAgB,SAASA,IACvB/D,KAAK+C,sBAGToB,SAAU,ogCAGZ,IAAIC,EAAalD,OAAOmD,OAAO,CAC7BC,KAAM,OACNC,OAAQ,SACRC,KAAM,OACNC,aAAc,iBAEhB,IAAIC,EAAYxD,OAAOmD,OAAO,CAC5BG,KAAM,uBACNG,MAAO,oBAETnE,EAAOwD,UAAUY,UAAU,2CAA4C,CACrEhE,MAAO,CACLiE,UAAW,CACT/D,KAAMC,QACNC,QAAW,OAEb8D,MAAO,CACL9D,QAAW,GAEb+D,OAAQ,CACN/D,QAAW,MAGfgE,KAAM,SAASA,IACb,MAAO,CACLC,QAAS,GACTC,SAAU,GACVC,OAAQ,GACRtE,SAAU,GACVuD,WAAYA,EACZpC,QAAS,KACToD,aAAc,IAGlBC,WAAY,CACV,gDAAiD1E,GAEnD2E,QAAS,SAASA,IAChB,IAAI9D,EAAQxB,KAEZA,KAAKuF,aAAevF,KAAK6E,UAAYW,OAAOvF,GAAGwF,QAAQC,qBAAuB,CAC5EC,GAAIvB,EAAWE,KACfsB,OAAQ,IAEV5F,KAAKa,SAAWb,KAAKuF,aAAaI,GAClC3F,KAAK6F,MAAQ,GACb1F,EAAU2F,KAAKC,UAAU,wBAAyB,IAAIC,MAAK,SAAUC,GACnEzE,EAAMQ,QAAU,MAChBR,EAAM4D,aAAea,EAASjB,KAAKI,aACnCa,EAASjB,KAAKkB,KAAK,WAAWC,SAAQ,SAAUC,GAC9CA,EAAQC,MAAQD,EAAQT,GAAGW,SAAS,UACpCF,EAAQjB,OAAS,MACjBiB,EAAQG,UAAY,MACpBH,EAAQI,UAAY,KAEpBhF,EAAM0D,SAASuB,KAAKL,MAEtBH,EAASjB,KAAKkB,KAAKf,OAAOgB,SAAQ,SAAUC,GAC1CA,EAAQjB,OAAS,KACjBiB,EAAQG,UAAY,KAEpB,GAAIH,EAAQI,UAAW,CACrBJ,EAAQM,MAAQvG,EAAUwG,IAAIC,WAAW,+CACpC,CACLR,EAAQM,MAAQvG,EAAUwG,IAAIC,WAAW,gDAG3CpF,EAAM2D,OAAOsB,KAAKL,MAEpBH,EAASjB,KAAKa,MAAMM,SAAQ,SAAUC,GACpC5E,EAAMqE,MAAMO,EAAQT,IAAMS,KAG5B,GAAI5E,EAAM4D,aAAc,CACtB5D,EAAMyD,QAAUzD,EAAMyD,QAAQ4B,KAAI,SAAUT,GAC1CA,EAAQI,UAAY,KACpB,OAAOJ,SAEJ,CACL5E,EAAMyD,QAAUzD,EAAMyD,QAAQ6B,QAAO,SAAUV,GAC7C,OAAOA,EAAQT,KAAOvB,EAAWG,UAIrC,IAAKiB,OAAOvF,GAAG8G,GAAGC,WAAWC,WAAY,CACvCzB,OAAOvF,GAAG8G,GAAGC,WAAWE,KAAK,CAC3BC,iBAAkBlB,EAASjB,KAAKoC,WAAWD,mBAI/C,GAAI3F,EAAMqD,UAAW,CACnBW,OAAOvF,GAAGwF,QAAQ4B,iBAEnB,UAAS,WACV7F,EAAMQ,QAAU,SAElBhC,KAAKiF,QAAQwB,KAAK,CAChBd,GAAIvB,EAAWE,KACfoC,MAAOvG,EAAUwG,IAAIC,WAAW,gDAChChB,OAAQxB,EAAWE,OAErBtE,KAAKiF,QAAQwB,KAAK,CAChBd,GAAIvB,EAAWG,OACfmC,MAAOvG,EAAUwG,IAAIC,WAAW,oDAElC5G,KAAKiF,QAAQwB,KAAK,CAChBd,GAAIvB,EAAWK,aACfiC,MAAOvG,EAAUwG,IAAIC,WAAW,gDAChChB,OAAQxB,EAAWK,eAErBzE,KAAKiF,QAAQwB,KAAK,CAChBd,GAAIvB,EAAWI,KACfkC,MAAOvG,EAAUwG,IAAIC,WAAW,oDAChChB,OAAQxB,EAAWI,QAGvBrD,QAAS,SAASA,IAChB,IAAImG,EAAStH,KAEbA,KAAKyB,SAAW,IAAIrB,EAAgBwB,SAAS,CAC3C2F,UAAWvH,KAAK8B,MAAM0F,YACtBC,gBAAiB,KACjBC,YAAa,IAAM,KAAO,OAE5B1H,KAAKyB,SAASkG,UAAU,yBAAyB,SAAUpF,GACzD,IAAIqF,EAAYrF,EAAMsF,UACtB,IAAIC,EAAOF,EAAUE,KACrB7H,GAAG8G,GAAGgB,aAAaC,OAAOC,OAAO,CAC/BC,QAAS/H,EAAUwG,IAAIC,WAAW,uDAAuDuB,QAAQ,UAAW,KAAKA,QAAQ,cAAeL,EAAKM,MAC7IC,cAAe,SAGnBrI,KAAKyB,SAASkG,UAAU,gBAAgB,SAAUpF,GAChD,IAAIqF,EAAYrF,EAAMsF,UACtB,IAAIC,EAAOF,EAAUE,KAErB,IAAKR,EAAOgB,cAAcR,EAAKhH,QAAU8G,EAAUW,YAAa,CAC9DtI,GAAG8G,GAAGgB,aAAaC,OAAOC,OAAO,CAC/BC,QAAS/H,EAAUwG,IAAIC,WAAW,qDAAqDuB,QAAQ,cAAeL,EAAKM,MACnHC,cAAe,MAEjB,OAAO,MAGTf,EAAO7F,SAAS+G,QAAQ,CACtBC,OAAQ,UAAUC,OAAOC,KAAKC,OAC9BC,UAAW,KAAO,KAClBC,SAAUhB,EACViB,SAAUjB,EAAKM,KACfhD,aAAckC,EAAOlC,aACrB4D,mBAAoB,KACpBC,YAAarB,EAAUW,iBAG3BvI,KAAKyB,SAASkG,UAAU,iBAAiB,SAAUpF,GACjD,IAAIqF,EAAYrF,EAAMsF,UACtB,IAAIqB,EAAcC,IAAIC,gBAAgBxB,EAAUW,aAEhDjB,EAAOnC,OAAOkE,QAAQ,CACpB1D,GAAIiC,EAAUjC,GACdC,OAAQsD,EACRI,QAASJ,EACTxC,MAAOvG,EAAUwG,IAAIC,WAAW,2CAChCP,MAAOuB,EAAUE,KAAKhH,KAAKyI,WAAW,SACtCpE,OAAQ,KACRoB,UAAW,MACXC,UAAW,KACXxE,QAAS,KACTN,MAAO,CACLC,SAAU,EACVsB,OAAQvC,EAASwC,WAAWqB,OAC5B5B,KAAMiF,EAAUE,KAAKnF,WAI3B3C,KAAKyB,SAASkG,UAAU,cAAc,SAAUpF,GAC9C,IAAIqF,EAAYrF,EAAMsF,UAEtB,IAAIzB,EAAUkB,EAAOnC,OAAOqE,MAAK,SAAUpD,GACzC,OAAOA,EAAQT,KAAOiC,EAAUjC,MAGlC,IAAKS,EAAS,CACZ,OAGFA,EAAQ1E,MAAMC,SAAWiG,EAAUjG,YAErC3B,KAAKyB,SAASkG,UAAU,cAAc,SAAUpF,GAC9C,IAAIqF,EAAYrF,EAAMsF,UAEtB,IAAIzB,EAAUkB,EAAOnC,OAAOqE,MAAK,SAAUpD,GACzC,OAAOA,EAAQT,KAAOiC,EAAUjC,MAGlC,IAAKS,EAAS,CACZ,OAGFA,EAAQT,GAAKiC,EAAU5E,OAAOgC,KAAK8C,KAAKnC,GAExC,GAAIS,EAAQC,MAAO,CACjBD,EAAQR,OAASgC,EAAU5E,OAAOgC,KAAK8C,KAAK2B,MAAMC,SAGpDtD,EAAQpE,QAAU,MAClBoE,EAAQG,UAAY,KAEpBe,EAAOqC,OAAOvD,GAEdjG,EAAU2F,KAAKC,UAAU,2BAA4B,CACnDf,KAAM,CACJ4E,OAAQxD,EAAQT,SAItB3F,KAAKyB,SAASkG,UAAU,qBAAqB,SAAUpF,GACrD,IAAIqF,EAAYrF,EAAMsF,UAEtB,IAAIzB,EAAUkB,EAAOnC,OAAOqE,MAAK,SAAUpD,GACzC,OAAOA,EAAQT,KAAOiC,EAAUjC,MAGlC,IAAKS,EAAS,CACZ,OAGFA,EAAQ1E,MAAMuB,OAASvC,EAASwC,WAAWC,MAC3CiD,EAAQ1E,MAAMC,SAAW,KAE3B3B,KAAKyB,SAASkG,UAAU,qBAAqB,SAAUpF,GACrD,IAAIqF,EAAYrF,EAAMsF,UAEtB,IAAIzB,EAAUkB,EAAOnC,OAAOqE,MAAK,SAAUpD,GACzC,OAAOA,EAAQT,KAAOiC,EAAUjC,MAGlC,IAAKS,EAAS,CACZ,OAGFA,EAAQ1E,MAAMuB,OAASvC,EAASwC,WAAWC,MAC3CiD,EAAQ1E,MAAMC,SAAW,MAG7BmC,SAAU,CACR+F,cAAe,SAASA,IACtB,IAAI7G,EAAS,GAEb,GAAIhD,KAAK6E,UAAW,CAClB7B,EAAO+B,OAAS,yBACX,CACL/B,EAAO+B,OAAS/E,KAAK+E,OAAS,KAGhC,GAAI/E,KAAK8E,MAAQ,EAAG,CAClB9B,EAAO8B,MAAQ9E,KAAK8E,MAAQ,KAG9B,OAAO9B,GAET8G,YAAa,SAASA,IACpB,MAAO,GAAGpB,OAAO1I,KAAKmF,QAAQuD,OAAO1I,KAAKkF,WAE5C6E,YAAa,SAASA,IACpB,GAAI1J,EAAa2J,MAAMC,SAASC,kBAAmB,CACjD,MAAO,GAGT,MAAO,kCAGX3I,QAAS,CACP4I,SAAU,SAASA,EAASC,GAC1B,GAAIA,IAAchG,EAAWE,KAAM,CACjC,OAAO,KAGT,GAAI,CAACF,EAAWI,KAAMJ,EAAWK,cAAc6B,SAAS8D,GAAY,CAClE,GAAIpK,KAAK6F,MAAMnB,EAAUF,OAASxE,KAAK6F,MAAMnB,EAAUF,MAAM6F,QAAUrK,KAAK6F,MAAMnB,EAAUF,MAAM8F,aAAe9E,OAAOvF,GAAG8G,GAAGC,WAAY,CACxIxB,OAAOvF,GAAG8G,GAAGC,WAAWuD,KAAKvK,KAAK6F,MAAMnB,EAAUF,MAAM8F,aACxD,OAAO,MAGT,OAAO,KAGT,GAAItK,KAAK6F,MAAMnB,EAAUC,QAAU3E,KAAK6F,MAAMnB,EAAUC,OAAO0F,QAAUrK,KAAK6F,MAAMnB,EAAUC,OAAO2F,aAAe9E,OAAOvF,GAAG8G,GAAGC,WAAY,CAC3IxB,OAAOvF,GAAG8G,GAAGC,WAAWuD,KAAKvK,KAAK6F,MAAMnB,EAAUC,OAAO2F,aACzD,OAAO,MAGT,OAAO,MAETX,OAAQ,SAASA,EAAOvD,GACtB,IAAKpG,KAAKmK,SAAS/D,EAAQT,IAAK,CAC9B,OAAO,MAGT,IAAKS,EAAQI,WAAaJ,EAAQpE,QAAS,CACzC,OAAO,MAGT,GAAIoE,EAAQT,KAAOvB,EAAWG,OAAQ,CACpCvE,KAAK8B,MAAM0F,YAAYgD,QACvB,OAAO,MAGTxK,KAAKa,SAAWuF,EAAQT,GAExB,GAAI3F,KAAK6E,UAAW,CAClBW,OAAOvF,GAAGwF,QAAQgF,mBAAmBrE,EAAQT,GAAIS,EAAQR,QAG3D,OAAO,MAET8E,OAAQ,SAASA,EAAOtE,GACtB,GAAIA,EAAQT,KAAO3F,KAAKa,SAAU,CAChCb,KAAKa,SAAWuD,EAAWE,KAE3B,GAAItE,KAAK6E,UAAW,CAClBW,OAAOvF,GAAGwF,QAAQgF,mBAAmBrG,EAAWE,KAAMF,EAAWE,OAIrE,GAAI8B,EAAQpE,QAAS,CACnBhC,KAAKyB,SAASkJ,WAAWvE,EAAQT,QAC5B,CACLxF,EAAU2F,KAAKC,UAAU,uBAAwB,CAC/Cf,KAAM,CACJ4E,OAAQxD,EAAQT,MAKtB3F,KAAKmF,OAASnF,KAAKmF,OAAO2B,QAAO,SAAU8D,GACzC,OAAOA,EAAGjF,KAAOS,EAAQT,MAE3B,OAAO,MAETkF,KAAM,SAASA,IACbrF,OAAOsF,SAETnH,OAAQ,SAASA,IACf,GAAI3D,KAAKuF,aAAaI,KAAO3F,KAAKa,SAAU,CAC1C2E,OAAOsF,QACP,OAAO,KAGT,GAAI9K,KAAK6E,UAAW,CAClBW,OAAOvF,GAAGwF,QAAQgF,mBAAmBzK,KAAKuF,aAAaI,GAAI3F,KAAKuF,aAAaK,QAAQI,MAAK,WACxFR,OAAOsF,eAEJ,CACLtF,OAAOsF,QAGT,OAAO,MAETxC,cAAe,SAASA,EAAcxH,GACpC,MAAO,CAAC,YAAa,aAAc,YAAa,YAAa,mBAAmBwF,SAASxF,KAG7FqD,SAAU,kuEAzfb,CA4fGnE,KAAKC,GAAG8K,UAAY/K,KAAKC,GAAG8K,WAAa,GAAI9K,GAAGA,GAAG8K,UAAUC,IAAI/K,GAAG8K,UAAUC,IAAI/K,GAAGA,GAAGA,GAAGA,GAAGgL,cAAchL,GAAG8K,UAAUG","file":"call-background.bundle.map.js"}