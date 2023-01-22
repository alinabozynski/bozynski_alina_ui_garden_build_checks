import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const StyledButton$2 = styled.button `
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: ${(props) => { var _a; return (((_a = props.disabled) !== null && _a !== void 0 ? _a : false) ? "not-allowed" : "pointer"); }};
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: ${(props) => props.size === "small"
    ? "7px 25px 8px"
    : props.size === "medium"
        ? "9px 30px 11px"
        : "14px 30px 16px"};
  color: ${(props) => {
    var _a, _b;
    return ((_a = props.default) !== null && _a !== void 0 ? _a : false)
        ? "#1b116e"
        : ((_b = props.disabled) !== null && _b !== void 0 ? _b : false)
            ? "#585858"
            : "#ffffff";
}};
  background-color: ${(props) => props.backgroundColor};
  opacity: ${(props) => { var _a; return (((_a = props.disabled) !== null && _a !== void 0 ? _a : false) ? 0.5 : 1); }};
  &:hover {
    background-color: ${(props) => {
    var _a, _b;
    return ((_a = props.default) !== null && _a !== void 0 ? _a : false)
        ? "#55bd90"
        : ((_b = props.disabled) !== null && _b !== void 0 ? _b : false)
            ? ""
            : "#6bedb5";
}};
  }
  &:active {
    border: solid 2px #1b116e;
    padding: ${(props) => props.size === "small"
    ? "5px 23px 6px"
    : props.size === "medium"
        ? "7px 28px 9px"
        : "12px 28px 14px"};
  }
`;
const Button = (_a) => {
    var { size, disabled, text, onClick } = _a, props = __rest(_a, ["size", "disabled", "text", "onClick"]);
    return (React.createElement(Fragment, null,
        React.createElement(StyledButton$2, Object.assign({ type: "button", onClick: onClick, disabled: disabled, size: size }, props), text)));
};

const StyledInput = styled.input `
  height: 40px;
  width: 300px;
  cursor: ${(props) => (props.disabled === true ? "not-allowed" : "text")};
  border-radius: 3px;
  border: solid 2px ${(props) => props.borderColor};
  background-color: ${(props) => { var _a; return ((_a = props.disabled) !== null && _a !== void 0 ? _a : false) ? "#e4e3ea" : "#fff"; }};
  &:focus {
    border: solid 2px #1b116e;
  }
`;
const StyledMessage$2 = styled.div `
  font-size: 14px;
  padding-top: 4px;
`;
const StyledText = styled.p `
  opacity: ${(props) => { var _a; return (((_a = props.disabled) !== null && _a !== void 0 ? _a : false) ? 0.5 : 1); }};
  margin: 0px;
  cursor: ${(props) => (props.disabled === true ? "not-allowed" : "text")};
  color: ${(props) => {
    var _a, _b;
    return ((_a = props.disabled) !== null && _a !== void 0 ? _a : false)
        ? "#e4e3ea"
        : ((_b = props.error) !== null && _b !== void 0 ? _b : false)
            ? "#a9150b"
            : "#080808";
}};
`;
const Text = (_a) => {
    var { disabled, message, error, success, onChange, placeholder } = _a, props = __rest(_a, ["disabled", "message", "error", "success", "onChange", "placeholder"]);
    return (React.createElement(Fragment, null,
        React.createElement(StyledText, { disabled: disabled, error: error }),
        React.createElement(StyledInput, Object.assign({ type: "text", onChange: onChange, disabled: disabled, error: error, success: success, placeholder: placeholder }, props)),
        React.createElement(StyledMessage$2, null,
            React.createElement(StyledText, Object.assign({}, props, { error: error }), message))));
};

const StyledTable = styled.table `
  caption-side: top;
  cursor: ${(props) => { var _a; return (((_a = props.disabled) !== null && _a !== void 0 ? _a : false) ? "not-allowed" : "pointer"); }};
  border: none;
  color: ${(props) => { var _a; return (((_a = props.disabled) !== null && _a !== void 0 ? _a : false) ? "#515050" : "#000"); }};
  border-collapse: collapse;
  /* border-collapse: separate; */
  /* border-spacing: 5px 10px; */

  caption-side: top;
  td,
  th {
    border: none;
  }
  /* td,
  th {
    border: 1px solid;
  } */

  td {
    padding: 5px 10px;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: ${(props) => props.oddRowBackground};
    }
    :nth-of-type(even) {
      background-color: ${(props) => props.evenRowBackground};
    }
    :hover {
      background-color: ${(props) => { var _a; return ((_a = props.disabled) !== null && _a !== void 0 ? _a : false) ? "" : "#a3ff94"; }};
    }
  }
  thead > tr {
    background-color: ${(props) => props.headerBackground};
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }

  tfoot tr {
    :nth-of-type(odd) {
      background-color: ${(props) => props.footerBackground};
    }
    :nth-of-type(even) {
      background-color: ${(props) => props.footerBackground};
    }
  }
`;
const Table = (_a) => {
    var { disabled, caption, heading1, heading2, heading3, row1cell1, row1cell2, row1cell3, row2cell1, row2cell2, row2cell3, row3cell1, row3cell2, row3cell3, footer1, footer2, footer3 } = _a, props = __rest(_a, ["disabled", "caption", "heading1", "heading2", "heading3", "row1cell1", "row1cell2", "row1cell3", "row2cell1", "row2cell2", "row2cell3", "row3cell1", "row3cell2", "row3cell3", "footer1", "footer2", "footer3"]);
    return (React.createElement(StyledTable, Object.assign({ disabled: disabled }, props),
        React.createElement("caption", null, caption),
        React.createElement("thead", null,
            React.createElement("tr", Object.assign({}, props),
                React.createElement("th", null, heading1),
                React.createElement("th", null, heading2),
                React.createElement("th", null, heading3))),
        React.createElement("tbody", null,
            React.createElement("tr", Object.assign({}, props),
                React.createElement("td", null, row1cell1),
                React.createElement("td", null, row1cell2),
                React.createElement("td", null, row1cell3)),
            React.createElement("tr", Object.assign({}, props),
                React.createElement("td", null, row2cell1),
                React.createElement("td", null, row2cell2),
                React.createElement("td", null, row2cell3)),
            React.createElement("tr", Object.assign({}, props),
                React.createElement("td", null, row3cell1),
                React.createElement("td", null, row3cell2),
                React.createElement("td", null, row3cell3))),
        React.createElement("tfoot", null,
            React.createElement("tr", Object.assign({}, props),
                React.createElement("th", null, footer1),
                React.createElement("th", null, footer2),
                React.createElement("th", null, footer3)))));
};

const StyledWrapper = styled.div `
  opacity: ${(props) => { var _a; return (((_a = props.disabled) !== null && _a !== void 0 ? _a : false) ? 0.5 : 1); }};
  height: auto;
  width: 100%;
  padding: 0px 16px 24px 16px;
  box-sizing: border-box;
`;
const StyledItem = styled.div `
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 2px;
  margin-bottom: 10px;
`;
const StyledRadioButtonLabel = styled.label `
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #ccc;
`;
const StyledRadioButton = styled.input `
  opacity: 0;
  z-index: 1;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  cursor: ${(props) => { var _a; return (((_a = props.disabled) !== null && _a !== void 0 ? _a : false) ? "not-allowed" : "pointer"); }};
  &:hover ~ ${StyledRadioButtonLabel} {
    background: ${(props) => { var _a; return (((_a = props.disabled) !== null && _a !== void 0 ? _a : false) ? "" : "#b4fa6d"); }};
    &::after {
      font-family: "FontAwesome";
      display: block;
      color: white;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
  &:checked + ${StyledItem} {
    border: 2px solid yellowgreen;
  }
  &:checked + ${StyledRadioButtonLabel} {
    background: ${(props) => props.clickedColor};
    border: 1px solid yellowgreen;
    &::after {
      font-family: "FontAwesome";
      display: block;
      color: white;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
`;
const RadioButton = (_a) => {
    var { radioButtonLabel, disabled } = _a, props = __rest(_a, ["radioButtonLabel", "disabled"]);
    return (React.createElement(StyledWrapper, null,
        React.createElement(StyledItem, null,
            React.createElement(StyledRadioButton, Object.assign({}, props, { type: "radio", name: "radio", value: radioButtonLabel, disabled: disabled })),
            React.createElement(StyledRadioButtonLabel, null),
            React.createElement("div", null, radioButtonLabel))));
};

const StyledLabel = styled.label `
  font-size: 14px;
  color: ${(props) => props.fontColor};
  padding-bottom: 6px;
  cursor: ${(props) => { var _a; return (((_a = props.disabled) !== null && _a !== void 0 ? _a : false) ? "not-allowed" : "pointer"); }};
  opacity: ${(props) => { var _a; return (((_a = props.disabled) !== null && _a !== void 0 ? _a : false) ? 0.5 : 1); }};
`;
const Label = (_a) => {
    var { disabled, label } = _a, props = __rest(_a, ["disabled", "label"]);
    return (React.createElement(Fragment, null,
        React.createElement(StyledLabel, Object.assign({}, props, { disabled: disabled }), label)));
};

const img$1 = require('./img.png');

const StyledImage = styled.img `
  height: 20%;
  width: 25%;
  border-radius: 30px;
  filter: ${(props) => { var _a; return (((_a = props.disabled) !== null && _a !== void 0 ? _a : false) ? "grayscale(95%)" : ""); }};
  cursor: ${(props) => { var _a; return (((_a = props.disabled) !== null && _a !== void 0 ? _a : false) ? "not-allowed" : "pointer"); }};
`;
const Image = ({ disabled, alt }) => {
    return (React.createElement(Fragment, null,
        React.createElement(StyledImage, { disabled: disabled, src: img$1, alt: alt })));
};

const img = require('./hero_img.png');

const StyledButton$1 = styled.button `
  border: 0;
  cursor: ${(props) => { var _a; return (((_a = props.disabled) !== null && _a !== void 0 ? _a : false) ? "not-allowed" : "pointer"); }};
  line-height: 1;
  font-size: 15px;
  display: flex;
  margin: auto;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  padding: 7px 25px 8px;
  color: #ffffff;
  background-color: ${(props) => props.buttonBackground};
  opacity: 1;
  &:hover {
    background-color: ${(props) => { var _a; return ((_a = props.disabled) !== null && _a !== void 0 ? _a : false) ? "#639392" : "#fdebbc"; }};
    color: ${(props) => { var _a; return (((_a = props.disabled) !== null && _a !== void 0 ? _a : false) ? "#ffffff" : "#585858"); }};
  }
`;
const StyledDiv = styled.div `
  background-image: url(${img});
  filter: ${(props) => { var _a; return (((_a = props.disabled) !== null && _a !== void 0 ? _a : false) ? "grayscale(95%)" : ""); }};
  cursor: ${(props) => { var _a; return (((_a = props.disabled) !== null && _a !== void 0 ? _a : false) ? "not-allowed" : "initial"); }};
  width: 100%;
  height: 30%;
  padding: 15% 0%;
`;
const StyledMessage$1 = styled.label `
  display: flex;
  justify-content: center;
  cursor: ${(props) => { var _a; return (((_a = props.disabled) !== null && _a !== void 0 ? _a : false) ? "not-allowed" : "text"); }};
  font-size: 40px;
  font-weight: heavy;
  background-color: #c1c5c0;
  padding: 1%;
  margin: 0% auto 5% auto;
  width: fit-content;
  opacity: 0.6;
`;
const HeroImage = (_a) => {
    var { disabled, message, button, onClick } = _a, props = __rest(_a, ["disabled", "message", "button", "onClick"]);
    return (React.createElement(StyledDiv, { disabled: disabled },
        React.createElement(StyledMessage$1, { disabled: disabled }, message),
        React.createElement(StyledButton$1, Object.assign({ type: "button", disabled: disabled, onClick: onClick }, props), button)));
};

const StyledDropdown = styled.div `
  width: fit-content;
  height: fit-content;
`;
const StyledButton = styled.button `
  display: block;
  line-height: 1;
  font-size: 15px;
  cursor: ${(props) => { var _a; return (((_a = props.disabled) !== null && _a !== void 0 ? _a : false) ? "not-allowed" : "pointer"); }};
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: 7px 25px 8px;
  color: #fff;
  background-color: ${(props) => props.buttonBackgroundColor};
  opacity: ${(props) => { var _a; return (((_a = props.disabled) !== null && _a !== void 0 ? _a : false) ? 0.5 : 1); }};
  &:hover {
    background-color: ${(props) => { var _a; return (((_a = props.disabled) !== null && _a !== void 0 ? _a : false) ? "" : "#9135ff"); }};
  }
  &:active {
    border: solid 2px #1b116e;
    padding: 5px 23px 6px;
  }
`;
const StyledDropdownMenu = styled.ul `
  background-color: ${(props) => props.menuBackgroundColor};
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`;
const StyledDropdownItem = styled.a `
  cursor: pointer;
  background-color: ${(props) => props.menuBackgroundColor};
  color: #fff;
  padding: 12px 16px;
  display: block;
  text-align: left;
  &:hover {
    color: #000;
  }
`;
const Dropdown = (_a) => {
    var { label, item1, item2, item3, disabled } = _a, props = __rest(_a, ["label", "item1", "item2", "item3", "disabled"]);
    const [visible, setVisible] = useState(false);
    const openMenu = () => {
        setVisible((current) => !current);
    };
    return (React.createElement(StyledDropdown, { disabled: disabled },
        React.createElement(StyledButton, Object.assign({ type: "button", onClick: openMenu, disabled: disabled }, props), label),
        visible ? (React.createElement(StyledDropdownMenu, Object.assign({}, props),
            React.createElement(StyledDropdownItem, Object.assign({}, props), item1),
            React.createElement(StyledDropdownItem, Object.assign({}, props), item2),
            React.createElement(StyledDropdownItem, Object.assign({}, props), item3))) : null));
};

const StyledCard = styled.div `
  cursor: ${(props) => { var _a; return (((_a = props.disabled) !== null && _a !== void 0 ? _a : false) ? "not-allowed" : "initial"); }};
  position: relative;
  width: 250px;
  height: 400px;
  font-family: Quicksand, arial, sans-serif;
  background-color: ${(props) => props.bodyBackgroundColor};
  color: ${(props) => { var _a; return (((_a = props.disabled) !== null && _a !== void 0 ? _a : false) ? "#666666" : "#000"); }};
  opacity: ${(props) => { var _a; return (((_a = props.disabled) !== null && _a !== void 0 ? _a : false) ? 0.6 : 1); }};
`;
const StyledHeader = styled.header `
  padding: 20px 0px;
  background-color: ${(props) => props.headerBackgroundColor};
`;
const StyledHeading = styled.h2 `
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  word-wrap: break-word;
  max-width: 250px;
  padding: 5px;
`;
const StyledCardBody = styled.div `
  padding: 0px 5%;
`;
const StyledMessage = styled.p `
  text-align: center;
  word-wrap: break-word;
  max-width: 250px;
  padding: 5px;
`;
const StyledFooter = styled.div `
  font-size: 20px;
  position: absolute;
  bottom: 0;
`;
const StyledFooting = styled.h2 `
  width: 250px;
  font-size: 15px;
  text-align: center;
  word-wrap: break-word;
`;
const Card = (_a) => {
    var { disabled, headerMessage, mainMessage, footerMessage } = _a, props = __rest(_a, ["disabled", "headerMessage", "mainMessage", "footerMessage"]);
    return (React.createElement(StyledCard, Object.assign({ disabled: disabled }, props),
        React.createElement(StyledHeader, Object.assign({ disabled: disabled }, props),
            React.createElement(StyledHeading, null, headerMessage)),
        React.createElement(StyledCardBody, null,
            React.createElement(StyledMessage, null, mainMessage)),
        React.createElement(StyledFooter, null,
            React.createElement(StyledFooting, null, footerMessage))));
};

export { Button, Card, Dropdown, HeroImage, Image, Label, RadioButton, Table, Text };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCIuLi8uLi9zcmMvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLnRzeCIsIi4uLy4uL3NyYy9jb21wb25lbnRzL1RleHQvVGV4dC50c3giLCIuLi8uLi9zcmMvY29tcG9uZW50cy9UYWJsZS9UYWJsZS50c3giLCIuLi8uLi9zcmMvY29tcG9uZW50cy9SYWRpb0J1dHRvbi9SYWRpb0J1dHRvbi50c3giLCIuLi8uLi9zcmMvY29tcG9uZW50cy9MYWJlbC9MYWJlbC50c3giLCIuLi8uLi9zcmMvYXNzZXRzL2ltYWdlcy9pbWcucG5nIiwiLi4vLi4vc3JjL2NvbXBvbmVudHMvSW1hZ2UvSW1hZ2UudHN4IiwiLi4vLi4vc3JjL2Fzc2V0cy9pbWFnZXMvaGVyb19pbWcucG5nIiwiLi4vLi4vc3JjL2NvbXBvbmVudHMvSGVyb0ltYWdlL0hlcm9JbWFnZS50c3giLCIuLi8uLi9zcmMvY29tcG9uZW50cy9Ecm9wZG93bi9Ecm9wZG93bi50c3giLCIuLi8uLi9zcmMvY29tcG9uZW50cy9DYXJkL0NhcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XHJcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xyXG4gICAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEluKHN0YXRlLCByZWNlaXZlcikge1xyXG4gICAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XHJcbiAgICByZXR1cm4gdHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciA9PT0gc3RhdGUgOiBzdGF0ZS5oYXMocmVjZWl2ZXIpO1xyXG59XHJcbiIsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLCJjb25zdCBpbWcgPSByZXF1aXJlKCcuL2ltZy5wbmcnKTsgZXhwb3J0IGRlZmF1bHQgaW1nOyIsbnVsbCwiY29uc3QgaW1nID0gcmVxdWlyZSgnLi9oZXJvX2ltZy5wbmcnKTsgZXhwb3J0IGRlZmF1bHQgaW1nOyIsbnVsbCxudWxsLG51bGxdLCJuYW1lcyI6WyJTdHlsZWRCdXR0b24iLCJTdHlsZWRNZXNzYWdlIiwiaW1nIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNEJBO0FBQ08sU0FBUyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUM3QixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNmLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUN2RixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEIsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksT0FBTyxNQUFNLENBQUMscUJBQXFCLEtBQUssVUFBVTtBQUN2RSxRQUFRLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDaEYsWUFBWSxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxD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
