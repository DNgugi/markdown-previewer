window.onload = init;
function init(){
    loadDefaults();
    renderPreview();    
}

function loadDefaults(){
    defaultEditorText = `\
# Welcome to our Markdown Previewer!

## We are Team Bidii...
[Team Bidii's Website]("http://teambidii.co.ke")
    
Heres some code, \`<div></div>\`, between 2 backticks.
    
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
And feel free to go crazy ~~crossing stuff out~~.
    
There's also [links](https://www.freecodecamp.com), and
> Block Quotes!
    
  
- And of course there are lists.
- Some are bulleted.
- With different indentation levels.
    - That look like this.
    
    
    1. And there are numbererd lists too.
    2. Use just 1s if you want!
    3. And last but not least, let's not forget embedded images:
    
![React Logo w/ Text](https://goo.gl/Umyytc)
    

    `;
    document.getElementById('editor').value = defaultEditorText;
}

function renderPreview(){
    document.getElementById('preview').innerHTML = marked(document.getElementById('editor').value);
}