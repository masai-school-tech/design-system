import React from "react";
import ReactDOM from "react-dom";

import { Text, Margin } from "@masaischooltech/react";

import "@masaischooltech/scss/lib/atoms/Text.css";
import "@masaischooltech/scss/lib/atoms/Margin.css";
import "@masaischooltech/scss/lib/global.css";

ReactDOM.render(
  <Margin>
    <Text size='xs'>My name is Dhaval</Text>
  </Margin>,
  document.querySelector("#root")
);
