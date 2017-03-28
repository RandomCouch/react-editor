
Toolbar = React.createClass({
   render:function(){
       var self = this;
       return(
            <div className='navbar-inverse navbar'>
                <ul className='nav navbar-nav navbar-center'>
                    {this.props.options.map(function(option, i){
                       return(<ToolbarItem key={i} area={self.props.area} title={option.title} content={option.content} items={option.items || []} type={option.type || null} label={option.label || ""} action={option.action} selection={self.props.selection}/>) 
                    })}
                </ul>
            </div>
           )
       
   } 
    
});

var ToolbarItem = React.createClass({
    getInitialState:function(){
      return{
          active:false
      }  
    },
    handleClick:function(e){
      console.log("Clicked toolbar button");
      if(!this.props.type){
          e.preventDefault();
      }
      
      e.stopPropagation();
      if(this.props.type == "color"){
        //this.props.action($(ReactDOM.findDOMNode(this.refs.colorInput)));
      }else{
        this.props.action($(ReactDOM.findDOMNode(this.refs.input)));
        $(ReactDOM.findDOMNode(this.refs.input)).val("");
      }
      this.props.area.handleChange();
      this.props.area.setFocus();
      var activeState = this.state.active
      if(this.props.type == "color"){
        if(!activeState){
            this.setState({active: !activeState});
        } else{
            e.preventDefault();
        }
      }else{
          this.setState({active: !activeState});
      }
    },
    componentDidMount: function(){
        if(this.props.type && this.props.type == "color"){
            var self = this;
            /*
            $(ReactDOM.findDOMNode(this.refs.colorInput)).colorpicker().on('changeColor.colorpicker', function(event){
                var c = event.color.toRGB();
                var cStr = "rgba(" + c.r + "," + c.g + "," + c.b + "," + c.a + ")";
                self.props.action(cStr);
                self.props.area.handleChange();
            });
            */
        }    
      
    },
    handleClickColor: function(color){
        console.log("CLICKED COLOR PICKER");
        var rgba = "rgba(" + color.rgb.r + "," + color.rgb.g + "," + color.rgb.b + ","  + color.rgb.a + ")";
        this.props.action(rgba);
        //e.stopPropagation();
        //e.preventDefault();
        //this.props.area.setFocus();
        //this.props.action($(ReactDOM.findDOMNode(this.refs.colorInput)));
    },
    handleColorClose: function(){
      this.setState({active: false});  
    },
    handleModalClick: function(e){
        e.preventDefault();
        e.stopPropagation();
        var modalInfo = {
            title: this.props.title,
            content:this.props.content,
            active:1, 
            buttons: this.props.buttons
        }
        this.props.area.setModal(modalInfo);
    },
    render:function(){
        var activeClass = "rEditor tbItem";
        if(this.state.active){
            activeClass = "rEditor tbItem active";
        }
        if(this.props.type){
            if(this.props.type == "select"){
                return(
                    <li className='rEditor tbItem' onMouseDown={this.handleClick}>
                    <select className='form-control' ref='input' onChange={this.handleClick} placeHolder='Font Size'>
                        <option value='' disabled selected>{this.props.label}</option>
                    {this.props.items.map(function(c, i){
                       return(
                        <option key={i} value={c.val}>{c.label}</option>
                       ) 
                    })}
                </select>
                </li>)
            }
            if(this.props.type == "color"){
                var pPos = {
                    position: 'absolute',
                    top:'50%',
                    left:'40%'
                    
                };
                return(
                    <li className='rEditor tbItem' onMouseDown={this.handleClick}>
                        <button onClick={this.handleClick}>{this.props.content}</button>
                        <ColorPicker positionCSS={pPos} onClose={this.handleColorClose} position="below" display={this.state.active} onChangeComplete={this.handleClickColor} type="chrome" ref='colorInput'/>
                    </li>   
                )
            }
            if(this.props.type == "modal"){
                return(<li className={activeClass} onMouseDown={this.handleModalClick}>{this.props.label}</li>);
            }
        }else{
            return(<li className={activeClass} onMouseDown={this.handleClick}>{this.props.content}</li>);
        }
        
    }
})