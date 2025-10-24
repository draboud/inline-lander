//............................................................
//............................................................
//IMPORTS
import { BLACKOUT_STANDARD, PAUSE_AFTER_FEATURE_END } from "./0_config";
import * as global from "./0_global";
//............................................................
//............................................................
//CLASS
class features {
  //............................................................
  //............................................................
  //DEFINITIONS
  allVidsFeatures = global.sectionFeatures.querySelectorAll(".vid");
  allCtrlBtnsFeatures =
    global.ctrlBtnWrapper.querySelectorAll(".ctrl-btn.features");
  featureTextTimer;
  featureVidTimer;
  //............................................................
  //............................................................
  //EVENTS
  AddHandlerVidsFeaturesEnd = function (handler) {
    this.allVidsFeatures.forEach(function (el) {
      el.addEventListener("ended", function () {
        handler();
      });
    });
  };
  AddHandlerCtrlBtnWrapperFeatures = function (handler) {
    global.ctrlBtnWrapper.addEventListener("click", function (e) {
      const clicked = e.target.closest(".ctrl-btn.features");
      if (!clicked) return;
      const parentElement = clicked.parentElement;
      global.SetCtrlBtnIndex(
        Array.prototype.indexOf.call(parentElement.children, clicked)
      );
      handler();
    });
  };
}
export default new features();
