Links = [
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css',
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css',
    'https://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css',
    '/editor.css'
  ];
Scripts = [
    'https://code.jquery.com/jquery-2.1.4.js',
    'https://code.jquery.com/ui/1.11.4/jquery-ui.js',
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js'
  ];

if (Meteor.isClient) {
  Meteor.startup(function(){
      
    
      ReactDOM.render(<ReactEditor />, document.getElementById("react-render"));
      
      for(var i in Scripts){
        loadjscssfile(Scripts[i], "js");
      }
      for(var x in Links){
        loadjscssfile(Links[x], "css");
      }  
      // name, content, http equiv
      loadmetatag("", "IE=edge", "X-UA-Compatible");
      loadmetatag("viewport", "width=device-width, initial-scale=1", "");
    
      
  });
  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}



function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}

function loadmetatag(name, content, httpequiv){
  var metaref = document.createElement('meta');
  metaref.setAttribute('name', name);
  metaref.setAttribute('content', content);
  metaref.setAttribute('http-equiv', httpequiv);
  
  document.getElementsByTagName("head")[0].appendChild(metaref)
}