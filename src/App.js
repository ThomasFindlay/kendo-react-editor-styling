import React from "react";
import "./App.css";
import { Editor, EditorTools } from "@progress/kendo-react-editor";
import content from "./content";

const {
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
} = EditorTools;

function App() {
  return (
    <div className="app">
      <Editor
        tools={[
          [Bold, Italic, Underline],
          [Undo, Redo],
          [Link, Unlink],
          [AlignLeft, AlignCenter, AlignRight],
          [OrderedList, UnorderedList, Indent, Outdent],
        ]}
        contentStyle={{ height: 320 }}
        defaultContent={content}
      />
    </div>
  );
}

export default App;
