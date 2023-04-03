import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { activePriceConfigurationState } from "../../store";
import { UpdatePriceConfiguration } from "../UpdatePriceConfiguration";

export const PriceConfigurationEditorPopup = () => {
  const [ activeConfiguration, setActiveConfiguration ] = useRecoilState(
    activePriceConfigurationState
  );

  useEffect(() => {
    return () => {
      setActiveConfiguration({});
    };
  }, []);

  return <UpdatePriceConfiguration activeConfiguration={activeConfiguration} />;
};
