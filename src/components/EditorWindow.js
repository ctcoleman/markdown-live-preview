import { React } from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';

import './EditorWindow.css';

function EditorWindow({ markdown, parseMark }) {
  return (
    <Card id="EditorWindow">
      <CardHeader title="Editor" />
      <CardContent id="textarea-container">
        <textarea id="editor" value={markdown} onChange={parseMark}></textarea>
      </CardContent>
    </Card>
  );
};

export default EditorWindow;
