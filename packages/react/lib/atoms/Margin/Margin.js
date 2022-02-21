import React__default from 'react';

const Margin = ({ space = "xxxs", children, left, right, top, bottom, }) => {
    let className = ``;
    console.log("left", left, right, top, bottom);
    if (!left && !right && !top && !bottom) {
        className = `masai-margin-${space}`;
    }
    if (left) {
        className = `${className} masai-margin-left-${left}`;
    }
    if (right) {
        className = `${className} masai-margin-right-${right}`;
    }
    if (top) {
        className = `${className} masai-margin-top-${top}`;
    }
    if (bottom) {
        className = `${className} masai-margin-bottom-${bottom}`;
    }
    return React__default.createElement("div", { className: className }, children);
};

export { Margin as default };
//# sourceMappingURL=Margin.js.map
