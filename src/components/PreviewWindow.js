import { React } from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';
import { marked } from 'marked';

function PreviewWindow({ previewText }) {
  const renderer = new marked.Renderer();

  return (
    <Card id="PreviewWindow">
      <CardHeader title="Preview" />
      <CardContent>
        <div dangerouslySetInnerHTML={{
          __html: marked(previewText, { renderer: renderer, breaks: true })
        }} id="preview"></div>
      </CardContent>
    </Card>
  );
};

export default PreviewWindow;
