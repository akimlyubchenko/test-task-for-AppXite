import "./index.css";
import 'reactjs-popup/dist/index.css';
import { RecoilRoot } from "recoil";

import { CreateNewBtn } from "./components";
import { RowContainer } from "./components/RowContainer/RowContainer";
import { Popup } from "./components/Popup";

export default function App() {
  return (
    <RecoilRoot>
      <Popup />
      <CreateNewBtn />
      <br />
      <br />

      <RowContainer />
    </RecoilRoot>
  );
}
