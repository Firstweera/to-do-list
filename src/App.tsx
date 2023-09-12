import { Card } from "antd";
import "./App.css";
import ContentContainer from "./components/ContentContainer";

function App() {
  return (
    <>
      <ContentContainer>
        <div className="tw-text-lg">
          <p className="tw-text-blue-500">TO-do-list</p>
        </div>
        <div className="">
          <Card title="Card title" bordered={true} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
      </ContentContainer>
    </>
  );
}

export default App;
