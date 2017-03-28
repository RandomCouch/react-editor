//Text editing tools

//Bold
var tb_text_bold = {
    content: <span className='glyphicon glyphicon-bold'></span>,
    action: function(e){
        console.log("Clicked bold! SEL: " + e);
        var action = document.execCommand("bold", false);
        if(action){
            console.log("action was a success");
        }else{
            console.log("Action is not supported");
        }
    }
}
//Italic
var tb_text_italic = {
    content: <span className='glyphicon glyphicon-italic'></span>,
    action: function(){
        var action = document.execCommand("italic", false);
        if(action){
            console.log("action was a success");
        }else{
            console.log("Action is not supported");
        }
    }
}
//Underline
var tb_text_underline = {
    content: <span className='fa fa-underline'></span>,
    action: function(){
        var action = document.execCommand("underline", false);
        if(action){
            console.log("action was a success");
        }else{
            console.log("Action is not supported");
        }
    }
}
//Strikthrough
var tb_text_strikethrough = {
    content: <span className='fa fa-strikethrough'></span>,
    action: function(){
        var action = document.execCommand("strikeThrough", false);
        if(action){
            console.log("action was a success");
        }else{
            console.log("Action is not supported");
        }
    }
}
//Subscript
var tb_text_subscript = {
    content: <span className='fa fa-subscript'></span>,
    action: function(){
        var action = document.execCommand("subscript", false);
        if(action){
            console.log("action was a success");
        }else{
            console.log("Action is not supported");
        }
    }
}
//Superscript
var tb_text_superscript = {
    content: <span className='fa fa-superscript'></span>,
    action: function(){
        var action = document.execCommand("superscript", false);
        if(action){
            console.log("action was a success");
        }else{
            console.log("Action is not supported");
        }
    }
}
//Remove formatting
var tb_text_removeFormat = {
    content: <span className='fa fa-remove'></span>,
    action: function(){
        var action = document.execCommand("removeFormat", false);
        if(action){
            console.log("action was a success");
        }else{
            console.log("Action is not supported");
        }
    }
}
var tb_list_ol = {
    content: <span className='fa fa-list-ol'></span>,
    action: function(){
        var action = document.execCommand("insertOrderedList", false);
        if(action){
            console.log("action was a success");
        }else{
            console.log("Action is not supported");
        }
    }
}
var tb_list_ul = {
    content: <span className='fa fa-list-ul'></span>,
    action: function(){
        var action = document.execCommand("insertUnorderedList", false);
        if(action){
            console.log("action was a success");
        }else{
            console.log("Action is not supported");
        }
    }
}
var tb_text_indent = {
    content: <span className='fa fa-indent'></span>,
    action: function(val){
        var action = document.execCommand("indent", false);
        if(action){
            console.log("action was a success");
        }else{
            console.log("Action is not supported");
        }
    }
}
var tb_text_outdent = {
    content: <span className='fa fa-outdent'></span>,
    action: function(val){
        var action = document.execCommand("outdent", false);
        if(action){
            console.log("action was a success");
        }else{
            console.log("Action is not supported");
        }
    }
}
var tb_justify_left = {
    content: <span className='fa fa-align-left'></span>,
    action: function(val){
        var action = document.execCommand("justifyLeft", false);
        if(action){
            console.log("action was a success");
        }else{
            console.log("Action is not supported");
        }
    }
}
var tb_justify_right = {
    content: <span className='fa fa-align-right'></span>,
    action: function(val){
        var action = document.execCommand("justifyRight", false);
        if(action){
            console.log("action was a success");
        }else{
            console.log("Action is not supported");
        }
    }
}
var tb_justify_center = {
    content: <span className='fa fa-align-center'></span>,
    action: function(val){
        var action = document.execCommand("justifyCenter", false);
        if(action){
            console.log("action was a success");
        }else{
            console.log("Action is not supported");
        }
    }
}
var tb_justify_full = {
    content: <span className='fa fa-align-justify'></span>,
    action: function(val){
        var action = document.execCommand("justifyFull", false);
        if(action){
            console.log("action was a success");
        }else{
            console.log("Action is not supported");
        }
    }
}
var tb_text_fontSize = {
    type: "select",
    label: "Size",
    items:[
        {val: '1', label:'1'},
        {val: '2', label:'2'},
        {val: '3', label:'3'},
        {val: '4', label:'4'},
        {val: '5', label:'5'},
        {val: '6', label:'6'},
        {val: '7', label:'7'}
        ],
    action: function(fontSelect){
        console.log("Val test: " + fontSelect.val());
        if(fontSelect.val() != ""){
            var action = document.execCommand("fontSize", false, fontSelect.val());
            if(action){
                console.log("action was a success");
            }else{
                console.log("Action is not supported");
            }
        }
    }
}
var tb_text_fontName = {
    type: "select",
    label: "Font",
    items:[
        {val: 'Arial', label:'Arial'},
        {val: 'Comic Sans MS', label:'Comic Sans MS'},
        {val: 'Courier New', label:'Courier New'},
        {val: 'Georgia', label:'Georgia'},
        {val: 'Lucida Sans Unicode', label:'Lucida Sans Unicode'},
        {val: 'Tahoma', label:'Tahoma'},
        {val: 'Times New Roman', label:'Times New Roman'},
        {val: 'Trebuchet MS', label: 'Trebuchet MS'},
        {val: 'Verdana', label: 'Verdana'},
        {val: 'Calibri', label: 'Calibri'},
        {val: 'Helvetica', label: 'Helvetica'}
        ],
    action: function(fontSelect){
        console.log("Val test: " + fontSelect.val());
        if(fontSelect.val() != ""){
            var action = document.execCommand("fontName", false, fontSelect.val());
            if(action){
                console.log("action was a success");
            }else{
                console.log("Action is not supported");
            }
        }
    }
}
var tb_text_format = {
    type: "select",
    label: "Format",
    items:[
        {val: 'P', label:'Normal Paragraph'},
        {val: 'H1', label:'Heading 1'},
        {val: 'H2', label:'Heading 2'},
        {val: 'H3', label:'Heading 3'},
        {val: 'H4', label:'Heading 4'},
        {val: 'PRE', label:'Code'},
        {val: 'BLOCKQUOTE', label: 'Quote'}
        ],
    action: function(formatSelect){
        console.log("Val test: " + formatSelect.val());
        if(formatSelect.val() != ""){
            var action = document.execCommand("formatBlock", false, formatSelect.val());
            if(action){
                console.log("action was a success");
            }else{
                console.log("Action is not supported");
            }
        }
    }
}
var tb_text_foreColor = {
    type:"color",
    label: "Foreground Color",
    content: <span className='glyphicon glyphicon-text-color'></span>,
    action: function(colorSelect){
        console.log("CHANGING COLOR TO : " + colorSelect);
        var action = document.execCommand("foreColor", false, colorSelect);
        if(action){
            console.log("action was a success");
        }else{
            console.log("Action is not supported");
        }
    }
}
var tb_text_backColor = {
    type:"color",
    label: "Background Color",
    content: <span className='glyphicon glyphicon-text-background'></span>,
    action: function(colorSelect){
        var action = document.execCommand("backColor", false, colorSelect);
        if(action){
            console.log("action was a success");
        }else{
            console.log("Action is not supported");
        }
    }
}

var modalTest = {
    type:"modal",
    label: <span className='fa-cloud-upload'></span>,
    title:"Some modal test",
    content: "Just some content for the modal",
    buttons: [<button> OK</button>, <button> Cancel </button>]
    
}
var toolbar_items = [tb_text_bold, tb_text_italic, tb_text_underline, tb_text_strikethrough, tb_text_subscript, tb_text_superscript,
                    tb_text_removeFormat, tb_list_ol, tb_list_ul, tb_text_indent,tb_text_outdent,tb_text_fontSize, tb_text_fontName,
                    tb_text_format,tb_text_foreColor,tb_text_backColor, tb_justify_left, tb_justify_center, tb_justify_right, tb_justify_full, modalTest];


ReactEditor = React.createClass({
    getInitialState:function(){
      return{
          textArea: null,
          selection: ''
      }  
    },
    handleSelection:function(e){
        e.preventDefault();
        e.stopPropagation();
        var txt = "";
        if(window.getSelection){
            txt = window.getSelection();
        }else if(document.getSelection()){
            console.log("document.getSelection()");
            txt = document.getSelection();
        }else if(document.selection){
            console.log("document.selection");
            txt = document.selection.createRange().text;
        }else if($(".rEditor.mainEdit").html()){
            txt = $(".rEditor.mainEdit").html();
        }
        console.log("Selected text: " + txt);
        this.setState({selection: txt});
    },
    getArea: function(area){
        this.setState({textArea: area});
    },
   render:function(){
       return(
                <div className='container rEditorContainer' >
                    <div className='rEditor toolbar'>
                        <Toolbar area={this.state.textArea} options={toolbar_items} selection={this.state.selection}/>
                    </div>
                    <MainTextArea  onMouseUp={this.handleSelection} getArea={this.getArea}/>
                </div>
           )
       
   } 
    
});