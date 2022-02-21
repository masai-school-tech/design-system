import React__default from 'react';
import { FontSize } from '@masaischooltech/foundation';

const Text = ({ size = FontSize.base, children }) => {
    const className = `masai-text masai-text-${size}`;
    return React__default.createElement("p", { className: className }, children);
};

export { Text as default };
//# sourceMappingURL=Text.js.map
