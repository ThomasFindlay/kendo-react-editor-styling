import React from "react";
import "./App.css";
import { Editor, EditorTools } from "@progress/kendo-react-editor";
import { loadMessages, LocalizationProvider } from "@progress/kendo-react-intl";
import { deMessages } from "./deMessages";
import content from "./content";

loadMessages(deMessages, "de");

const {
  FindAndReplace,
  Pdf,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignRight,
  AlignCenter,
  Indent,
  Outdent,
  OrderedList,
  UnorderedList,
  Undo,
  Redo,
  Link,
  Unlink,
  Print,
} = EditorTools;

const CustomPdf = props => (
  <Pdf
    {...props}
    savePdfOptions={{
      fileName: "React Rich Text Editor",
      paperSize: "A4",
      marign: "3cm",
    }}
  />
);

const editorStyles = `
    .k-content {
      font-size: 24px;
      color: #92400E;
    }
`;

function App() {
  const onMount = event => {
    const iframeDocument = event.dom.ownerDocument;
    const style = iframeDocument.createElement("style");
    style.appendChild(iframeDocument.createTextNode(editorStyles));
    iframeDocument.head.appendChild(style);
  };

  return (
    <LocalizationProvider language="en">
      <div className="app">
        <Editor
          defaultEditMode="div"
          tools={[
            [Bold, Italic, Underline],
            [Undo, Redo],
            [Link, Unlink],
            [AlignLeft, AlignCenter, AlignRight],
            [OrderedList, UnorderedList, Indent, Outdent],
            [FindAndReplace, CustomPdf, Print],
          ]}
          contentStyle={{ height: 320 }}
          defaultContent={content}
          onMount={onMount}
        />
      </div>
    </LocalizationProvider>
  );
}

export default App;
