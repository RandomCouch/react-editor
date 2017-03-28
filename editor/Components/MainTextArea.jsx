//Has to return events
//On input 
//On text selection



MainTextArea = React.createClass({
    getInitialState: function(){
        return{
            codeOutput: '',
            modal:null
        }
    },
    componentDidUpdate:function(){
        //this.updateCaret();
    },
    getModal:function(m){
      this.setState({modal:m});  
    },
    setModal:function(modalInfo){
        this.state.modal.setState({title: modalInfo.title, content:modalInfo.content, buttons: modalInfo.buttons, active:modalInfo.active});
    },
    handleChange:function(e){
        console.log("Got Change");
        var main = $(ReactDOM.findDOMNode(this.refs.content));
        var self = this;
        console.log("Editing content: " + main.html());
        if(main.html() == ""){
                var bool = document.execCommand("formatBlock", false, "P");
        
        }
        this.setState({codeOutput: main.html()});
        
    },
    getLine:function(lineComponent){
        var curRow = this.state.currentRow;
        if(curRow != lineComponent){
          this.setState({currentRow: lineComponent});  
        }
        
    },
    setFocus:function(){
        var main = $(ReactDOM.findDOMNode(this.refs.content));
        main.focus();
    },
    handleSelection:function(){
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
    },
    handleBs: function(e){
      //console.log("KEYCODE: " + e.which());
      console.log("KEYCODE TRY 2 : " + e.keyCode);
      this.handleChange(e);
    },
    componentDidMount: function(){
      this.props.getArea(this);  
    },
   render:function(){
       return(
            <div>
            <div className='rEditor mainEdit' onMouseUp={this.handleSelection} ref='content' dir='auto' onKeyUp={this.handleBs} onKeyPress={this.handleChange} contentEditable='true' spellCheck='true'>
            </div>
            <CodeArea>{this.state.codeOutput}</CodeArea>
            <Modal getModal={this.getModal}/>
            </div>)
   } 
    
});
var Modal = React.createClass({
   componentDidMount: function(){
        this.props.getModal(this);
    },
   getInitialState: function(){
     return{
         active: 0,
         title: this.props.title || '',
         content: this.props.content || '',
         buttons: this.props.buttons || []
     }  
   },
   closeModal:function(e){
     e.stopPropagation();
     e.preventDefault();
     this.setState({active:0});  
   },
   render: function(){
       if(this.state.active){
           return(
                <div className='rEditor modal'>
                    <div className='rEditor modal bg' onClick={this.closeModal} ref='bg'>
                        <div className='rEditor modal modal_main'>
                            <h4>{this.state.title}</h4>
                            <div>{this.state.content}</div>
                        </div>
                    </div>
                </div>
               )
       }else{
           return(<div></div>);
           
       }
   } 
    
});
var CodeArea = React.createClass({
   getInitialState: function(){
       return{
           content: this.props.content || ""
       }
       
   },
   updateContent: function(c){
     this.setState({content: c});  
   },
   render: function(){
       return(
            <div className='rEditor codeOutput'>
                <pre className='rEditor htmlOutput'>
                    {this.props.children}
                </pre>
            </div>
           )
       
   } 
    
});

