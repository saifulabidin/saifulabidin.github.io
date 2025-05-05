document.addEventListener('DOMContentLoaded', function() {
    // Initial markdown sample that demonstrates all required elements
    const defaultMarkdown = `# Welcome to my Markdown Previewer!
  
  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Here's some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And ~~strike through~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `;
  
    // DOM Elements
    const editor = document.getElementById('editor');
    const preview = document.getElementById('preview');
    const editorContainer = document.getElementById('editor-container');
    const previewContainer = document.getElementById('preview-container');
    const editorToggle = document.getElementById('editor-toggle');
    const previewToggle = document.getElementById('preview-toggle');
    const editorMaximize = document.getElementById('editor-maximize');
    const editorMinimize = document.getElementById('editor-minimize');
    const previewMaximize = document.getElementById('preview-maximize');
    const previewMinimize = document.getElementById('preview-minimize');
  
    // Configure marked to parse breaks
    marked.use({
      breaks: true,
      gfm: true
    });
  
    // Set initial content
    editor.value = defaultMarkdown;
    preview.innerHTML = marked.parse(defaultMarkdown);
  
    // Update preview when editor content changes
    editor.addEventListener('input', function() {
      preview.innerHTML = marked.parse(editor.value);
    });
  
    // Toggle editor maximize/minimize
    editorToggle.addEventListener('click', function() {
      if (editorContainer.classList.contains('maximized')) {
        // Minimize editor
        editorContainer.classList.remove('maximized');
        previewContainer.classList.remove('hidden-section');
        editorMaximize.classList.remove('hidden');
        editorMinimize.classList.add('hidden');
      } else {
        // Maximize editor
        editorContainer.classList.add('maximized');
        previewContainer.classList.add('hidden-section');
        editorMaximize.classList.add('hidden');
        editorMinimize.classList.remove('hidden');
  
        // Ensure preview is not maximized
        previewContainer.classList.remove('maximized');
        previewMaximize.classList.remove('hidden');
        previewMinimize.classList.add('hidden');
      }
    });
  
    // Toggle preview maximize/minimize
    previewToggle.addEventListener('click', function() {
      if (previewContainer.classList.contains('maximized')) {
        // Minimize preview
        previewContainer.classList.remove('maximized');
        editorContainer.classList.remove('hidden-section');
        previewMaximize.classList.remove('hidden');
        previewMinimize.classList.add('hidden');
      } else {
        // Maximize preview
        previewContainer.classList.add('maximized');
        editorContainer.classList.add('hidden-section');
        previewMaximize.classList.add('hidden');
        previewMinimize.classList.remove('hidden');
  
        // Ensure editor is not maximized
        editorContainer.classList.remove('maximized');
        editorMaximize.classList.remove('hidden');
        editorMinimize.classList.add('hidden');
      }
    });
  });