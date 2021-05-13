import * as React from 'react';
import { Editor, EditorTools } from '@progress/kendo-react-editor';
import content from './content';
// const {
//   Bold,
//   Italic,
//   Underline,
//   Strikethrough,
//   Subscript,
//   Superscript,
//   AlignLeft,
//   AlignCenter,
//   AlignRight,
//   AlignJustify,
//   Indent,
//   Outdent,
//   OrderedList,
//   UnorderedList,
//   Undo,
//   Redo,
//   FontSize,
//   FontName,
//   FormatBlock,
//   Link,
//   Unlink,
//   InsertImage,
//   ViewHtml,
//   InsertTable,
//   AddRowBefore,
//   AddRowAfter,
//   AddColumnBefore,
//   AddColumnAfter,
//   DeleteRow,
//   DeleteColumn,
//   DeleteTable,
//   MergeCells,
//   SplitCell,
// } = EditorTools;

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
  Unlink
} = EditorTools;
export default function BasicEditor() {
  return (
    <Editor
      tools={[
        [Bold, Italic, Underline],
        [Undo, Redo],
        [Link, Unlink],
        [AlignLeft, AlignCenter, AlignRight],
        [OrderedList, UnorderedList, Indent, Outdent]
      ]}
      contentStyle={{ height: 320 }}
      defaultContent={content}
    />
  );
}
