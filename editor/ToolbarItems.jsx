//Text editing tools

//Bold
Tb_text_bold = {
    content: <span className='glyphicon glyphicon-bold'></span>,
    action: function(){
        var action = document.execCommand("bold", false);
    }
}
//Italic
Tb_text_italic = {
    content: <span className='glyphicon glyphicon-italic'></span>,
    action: function(){
        var action = document.execCommand("italic", false);
    }
}