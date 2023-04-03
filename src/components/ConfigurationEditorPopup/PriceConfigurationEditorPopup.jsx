import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { activeProceConfigurationState } from "../../store";
import { UpdatePriceConfiguration } from "../UpdatePriceConfiguration";

export const PriceConfigurationEditorPopup = () => {
  const [ activeConfiguration, setActiveConfiguration ] = useRecoilState(
    activeProceConfigurationState
  );

  useEffect(() => {
    return () => {
      setActiveConfiguration({});
    };
  }, []);

  return <UpdatePriceConfiguration activeConfiguration={activeConfiguration} />;
};
