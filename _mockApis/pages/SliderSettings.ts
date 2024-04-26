
//About page history slider
const historySliderSettings = {
  snapAlign: "start",
  itemsToShow: 2,
  itemsToScroll:1,
  autoplay: false,
  wrapAround:true,
  transition:600
};
const historySliderSettingsBreakpoints = {
  300: { itemsToShow: 1 },  
  600: { itemsToShow: 2 },
  767: { itemsToShow: 2 },
  991: { itemsToShow: 2},
  1024: { itemsToShow: 2 },
  1500: { itemsToShow: 2 },
  1800: { itemsToShow: 2 },
};


//Service Page Specialities slider
const specialitiesSliderSettings = {
  snapAlign: "start",
  itemsToShow: 2,
  itemsToScroll:1,
  autoplay: 4000,
  wrapAround:true,
  transition:600
};
const specialitiesSliderSettingsBreakpoints = {
  300: { itemsToShow: 1 },  
  600: { itemsToShow: 2 },
  767: { itemsToShow: 2 },
  991: { itemsToShow: 3},
  1024: { itemsToShow: 3 },
  1500: { itemsToShow: 4 },
  1800: { itemsToShow: 4 },
};

  export{historySliderSettings,historySliderSettingsBreakpoints,specialitiesSliderSettings,specialitiesSliderSettingsBreakpoints}