//.......................................................................
//.......................................................................
//IMPORTS
import {
  COMP_BTNS_END_RANGE_A,
  COMP_BTNS_END_RANGE_B,
  COMP_BTNS_START_RANGE_A,
  COMP_BTNS_START_RANGE_B,
} from "./0_config";
import * as global from "./0_global";
import features from "./1_features";
import components from "./2_components";
import instructions from "./3_instructions";
//.......................................................................
//.......................................................................
//CLASS EVENTS
class navigation {
  AddHandlerStartButton = function (handler) {
    global.startButton.addEventListener("click", function () {
      handler();
    });
  };
  AddHandlerAllNavLinks = function (handler) {
    global.allNavLinks.forEach(function (el) {
      el.addEventListener("click", function (e) {
        const clicked = e.target.closest(".nav_menu_link");
        if (!clicked) return;
        handler(clicked);
      });
    });
  };
  AddHandlerNavLinkInstructionsHoverIn = function (handler) {
    global.navLinkInstructions.addEventListener("mouseenter", function () {
      handler();
    });
  };
  AddHandlerNavLinkInstructionsHoverOut = function (handler) {
    global.navLinkInstructions.addEventListener("mouseleave", function () {
      handler();
    });
  };
  AddHandlerNavLinkInstructionsClick = function (handler) {
    global.navLinkInstructions.addEventListener("click", function () {
      handler();
    });
  };
  AddHandlerNavLinkDropdownMenuHoverIn = function (handler) {
    global.navLinkDropdownMenu.addEventListener("mouseenter", function () {
      handler();
    });
  };
  AddHandlerNavLinkDropdownMenuHoverOut = function (handler) {
    global.navLinkDropdownMenu.addEventListener("mouseleave", function () {
      handler();
    });
  };
  AddHandlerAllNavLinkDropdownOpts = function (handler1, handler2, handler3) {
    global.allNavLinkDropdownOpts.forEach(function (el, index) {
      el.addEventListener("mouseenter", function () {
        handler1(el);
      });
      el.addEventListener("mouseleave", function () {
        handler2(el);
      });
      el.addEventListener("click", function () {
        global.SetActiveSectionName(
          el.parentElement.parentElement.querySelector(".nav_menu_link")
        );
        let dropdownIndex = index;
        handler3(dropdownIndex);
      });
    });
  };
  AddHandlerDropdownIconBtn = function (handler) {
    global.dropdownIconBtn.addEventListener("click", function () {
      handler();
    });
  };
  AddHandlerNavBtnMobile = function (handler) {
    global.navButtonMobile.addEventListener("click", function () {
      handler();
    });
  };
  AddHandlerAllCtrlBtnsMouseEnter = function (handler) {
    global.allCtrlBtns.forEach(function (el) {
      el.addEventListener("mouseenter", function () {
        handler(el);
      });
    });
  };
  AddHandlerAllCtrlBtnsMouseLeave = function (handler) {
    global.allCtrlBtns.forEach(function (el) {
      el.addEventListener("mouseleave", function () {
        handler(el);
      });
    });
  };
  //.......................................................................
  //.......................................................................
  //FUNCTIONS
  ActivateNavLink = function () {
    global.allNavLinkBars.forEach(function (el) {
      el.classList.remove("active");
    });
    global.allNavLinks.forEach(function (el) {
      el.classList.remove("current");
      if (el.classList.contains(global.activeSectionName)) {
        el.classList.add("current");
        el.parentElement
          .querySelector(".nav_menu_link-bar")
          .classList.add("active");
      }
    });
  };
  ActivateNavLinkDropdown = function (navLinkName) {
    global.allNavLinks.forEach(function (el) {
      el.classList.remove("current");
    });
    navLinkName.classList.add("current");
  };
  ResetSectionSpecial = function () {
    switch (global.activeSectionName) {
      case "features":
        global.ActivateSectionVideo("main");
        global.DeactivateActivateCurrentCtrlButtons("features");
        break;
      case "components":
        components.optsMenuWrapper.classList.remove("active");
        global.DeactivateActivateSectionImage(global.currentViewName);
        [
          components.datasheetsAllWrapper,
          ...components.allDatasheetWraps,
        ].forEach(function (el) {
          el.classList.remove("active");
        });
        if (global.currentViewName === "view-a") {
          global.SetStartBtnRange(COMP_BTNS_START_RANGE_A);
          global.SetEndBtnRange(COMP_BTNS_END_RANGE_A);
        } else {
          global.SetStartBtnRange(COMP_BTNS_START_RANGE_B);
          global.SetEndBtnRange(COMP_BTNS_END_RANGE_B);
        }
        components.dimmer.classList.remove("active");
        components.textImgBtn.textContent = "image";
        components.textImgBtnLabel = "image";
        global.DeactivateActivateCtrlBtnRange(
          "components",
          global.startBtnRange,
          global.endBtnRange
        );
        break;
      case "instructions":
        global.DeactivateActivateSectionImage("main");
        global.DeactivateActivateCurrentCtrlButtons("instructions");
        break;
    }
  };
}
export default new navigation();
