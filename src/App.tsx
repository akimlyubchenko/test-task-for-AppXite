import "./index.css";
import React from "react";
import { RecoilRoot } from "recoil";

import { CreateNewBtn } from "./components";
import { PriceConfigurationsContainer } from "./components/PriceConfigurationsContainer";
import { PriceConfigurationEditorPopup } from "./components/PriceConfigurationEditorPopup";

export default function App() {
  return (
    <RecoilRoot>
      <PriceConfigurationEditorPopup />
      <CreateNewBtn />
      <br />
      <br />

      <PriceConfigurationsContainer />
    </RecoilRoot>
  );
}
