
//Author Bill

var gl;
var points = [];
var  translationMatrix = [];
var modelViewMatrix = [];
var projectionMatirx = [];
var modelViewMatrix = [];
var projectionMatirx = [];
var line = [];
var vertices = new Float32Array([-1, -1, 0, 1, 1, -1]);
var spheres = [];
//var cone = [];
var cones = [];
var cylinders = [];
var disk = [];
var flatLineArray = new Float32Array();
var flattenCircle = new Float32Array();
var triangleLines = [];
var triangle = [];
var lineLength = 100;
var spherePos = vec3(0, 0, 0);
//the following two variables are for the render function to set the mode and count
var mode = 0;
var count = 3;
var u_Fragcolor;
var tx = 0.0;
var ty = 0.0;
var tz = 0.0;
var rx = 0.0;
var ry = 0.0;
var rz = 0.0;

var rotationMatrixLoc;
var translationMatrixMatrixLoc;
var relocateToOrignMatrixLoc;
var cosX = 0;
var cosy = 0;
var cosz = 0;

function translationMatrixCreate(tx, ty, tz)
{
 var newMatrix = new Float32Array ([
     1.0, 0.0, 0.0, 0.0,
	 0.0, 1.0, 0.0, 0.0,
	 
	 0.0, 0.0, 1.0, 0.0,
	 tx, ty, tz, 1.0
	 
]);
 return newMatrix;
}

var rotationMatrix = new Float32Array ([
     1.0, 0.0, 0.0, 0.0,
	 0.0, 1.0, 0.0, 0.0,
	 
	 0.0, 0.0, 1.0, 0.0,
	 cosX, cosy, cosz, 1.0
	 
]);


var relocateToOrginMatrix = new Float32Array ([
     1.0, 0.0, 0.0, 0.0,
	 0.0, 1.0, 0.0, 0.0,
	 
	 0.0, 0.0, 1.0, 0.0,
	 rx, ry, rz, 1.0
	 
]);

window.onload = function init(){
		
	
	var canvas = document.getElementById("gl-canvas");
	gl = WebGLUtils.setupWebGL(canvas);
	if(!gl)
	{
		alert("WebGL is not Available" );
	}
	    document.getElementById("clearScreen").onclick = function clearScreen()
		{
			
		for(var i =0; i < spheres.length; i++)
			
		       spheres.pop();	
			   	
		for(var i =0; i < spheres.length; i++)
			
		       spheres.pop();
		 
			
		 	
			for(var i =0; i < cones.length; i++)
			{
		       cones.pop();
		 
			}
				
			for(var i =0; i < cylinders.length; i++)
						
			{
		       cylinders.pop();
		 
			}
			 	
			for(var i =0; i < cylinders.length; i++)
						
			{
		       cylinders.pop();
		 
			}
				
			
		 refreshScreen();
		}
 
     
		
		document.getElementById("drawSphere").onclick = function sphereCreate()
		{
				var pos = [];
		  
		 
		 
			//  pos.push(document.getElementById("sphere_x"));
			//  pos.push(document.getElementById("sphere_y"));
			//  pos.push(document.getElementById("sphere_z"));
			  
			  
			
			 
			  var radius ;
			  var inputx;
			  var inputy;
			  var inputz;
		      radius  = document.getElementById("sphereSize");
			  inputx  = document.getElementById("sphere_x");
			  inputy  = document.getElementById("sphere_y");
			  inputz  = document.getElementById("sphere_z");
			  
		if(radius.value == "" )
		{
			 
			 if(inputx.value != "" && inputy.value != "" ) 
				 
			 {
				 if(inputz.value == "")
				 {
					 pos.push(inputx.value); 
			         pos.push(inputy.value); 
					 pos.push(0.0); 
				 }
					 
				else
				{
				  pos.push(inputz.value); 
				
			      pos.push(inputx.value); 
			      pos.push(inputy.value); 
			   }
					
				spheres.push(computeSphere(1, pos));
			 }
			 else 
	 		 {
				pos.push(0.0); 
			    pos.push(0.0); 
			    pos.push(0.0); 
			 
				spheres.push(computeSphere(1, pos));
		 	 }
				
			 
				
	 	 }
		
		 else  
		 {
			 if(inputx.value != "" && inputy.value != "" ) 
				 
			 {
				 if(inputz.value == "")
				 {
					 pos.push(inputx.value); 
			         pos.push(inputy.value); 
					 pos.push(0.0); 
				 }
					 
				else
				{
				  pos.push(inputz.value); 
				
			      pos.push(inputx.value); 
			      pos.push(inputy.value); 
			   }
					
				spheres.push(computeSphere(radius.value, pos));
			 }
			 else 
	 		 {
				pos.push(0.0); 
			    pos.push(0.0); 
			    pos.push(0.0); 
			 
				spheres.push(computeSphere(radius.value, pos));
		 	 }
		 
		}
			refreshScreen();
		
}
	 

	  document.getElementById("drawCone").onclick = function coneCreate()
	 {
				var pos = [];
		  
		 
		 
			
			  
			  
			
			 
			  var radius ;
			  var inputx;
			  var inputy;
			  var inputz;
			  var height;
			  height = document.getElementById("coneHeight");
		      radius  = document.getElementById("coneSize");
			  inputx  = document.getElementById("cone_x");
			  inputy  = document.getElementById("cone_y");
			  inputz  = document.getElementById("cone_z");
			  
			  
		if(radius.value == "" && height.value == "")
		{
			 
			 
			 if(inputx.value != "" && inputy.value != "" ) 
				 
			 {
				 if(inputz.value == "")
				 {
					 pos.push(inputx.value); 
			         pos.push(inputy.value); 
					 pos.push(0.0); 
				 }
					 
				else
				{
				
				
			      pos.push(inputx.value); 
			      pos.push(inputy.value);  
				  pos.push(inputz.value); 
			   }
					
				cones.push(computeCone(1, 1, pos));
			 }
			 else 
	 		 {
				pos.push(0.0); 
			    pos.push(0.0); 
			    pos.push(0.0); 
			 
				cones.push(computeCone(1, 1, pos));
		 	 }
				
			 
				
	 	 }
		
		 else if(radius.value != "" && height.value == "")
		 {
			 if(inputx.value != "" && inputy.value != "" ) 
				 
			 {
				 if(inputz.value == "")
				 {
					 pos.push(inputx.value); 
			         pos.push(inputy.value); 
					 pos.push(0.0); 
				 }
					 
				else
				{
				 
				
			      pos.push(inputx.value); 
			      pos.push(inputy.value);  
				  pos.push(inputz.value); 
			   }
					
				cones.push(computeCone(radius.value, 1, pos));
			 }
			 else 
	 		 {
				pos.push(0.0); 
			    pos.push(0.0); 
			    pos.push(0.0); 
			 
				cones.push(computeCone(radius.value, 1, pos));
		 	 }
		 
		}
		
		 else if(radius.value == "" && height.value != "")
		 {
			
			 if(inputx.value != "" && inputy.value != "" ) 
				 
			 {
				 if(inputz.value == "")
				 {
					 pos.push(inputx.value); 
			         pos.push(inputy.value); 
					 pos.push(0.0); 
				 }
					 
				else
				{
				
				
			      pos.push(inputx.value); 
			      pos.push(inputy.value);  
				  pos.push(inputz.value); 
			   }
					
				cones.push(computeCone(radius.value, height.value, pos));
			 }
			 else 
	 		 {
				pos.push(0.0); 
			    pos.push(0.0); 
			    pos.push(0.0); 
			 
				cones.push(computeCone(radius.value, 1, pos));
		 	 }
		 
		}
		
		 else if(radius.value != "" && height.value != "")
		 {
			 if(inputx.value != "" && inputy.value != "" ) 
				 
			 {
				 if(inputz.value == "")
				 {
					 pos.push(inputx.value); 
			         pos.push(inputy.value); 
					 pos.push(0.0); 
				 }
					 
				else
				{
				  pos.push(inputz.value); 
				
			      pos.push(inputx.value); 
			      pos.push(inputy.value); 
			   }
					
				cones.push(computeCone(radius.value, height.value, pos));
			 }
			 else 
	 		 {
				pos.push(0.0); 
			    pos.push(0.0); 
			    pos.push(0.0); 
			 
				cones.push(computeCone(radius.value, height.value, pos));
		 	 }
		 
		}
			refreshScreen();
			
		
		   
		 
	 }
	 
	  document.getElementById("drawCylinder").onclick = function cylinderCreate()
	 {	
	 
	 
	 
			var pos = [];
		  
		 
			  var radius ;
			  var inputx;
			  var inputy;
			  var inputz;
			  var height;
			  height = document.getElementById("cylinderHeight");
		      radius  = document.getElementById("cylinderSize");
			  inputx  = document.getElementById("cylinder_x");
			  inputy  = document.getElementById("cylinder_y");
			  inputz  = document.getElementById("cylinder_z");
			  
			  
		if(radius.value == "" && height.value == "")
		{
			 
			 
			 if(inputx.value != "" && inputy.value != "" ) 
				 
			 {
				 if(inputz.value == "")
				 {
					 pos.push(inputx.value); 
			         pos.push(inputy.value); 
					 pos.push(0.0); 
				 }
					 
				else
				{
				  pos.push(inputz.value); 
				
			      pos.push(inputx.value); 
			      pos.push(inputy.value); 
			   }
					
				cylinders.push(computeCylinder(1, 1, pos));
			 }
			 else 
	 		 {
				pos.push(0.0); 
			    pos.push(0.0); 
			    pos.push(0.0); 
			 
				cylinders.push(computeCylinder(1, 1, pos));
		 	 }
				
			 
				
	 	 }
		
		 else if(radius.value != "" && height.value == "")
		 {
			 if(inputx.value != "" && inputy.value != "" ) 
				 
			 {
				 if(inputz.value == "")
				 {
					 pos.push(inputx.value); 
			         pos.push(inputy.value); 
					 pos.push(0.0); 
				 }
					 
				else
				{
				 
				
			      pos.push(inputx.value); 
			      pos.push(inputy.value); 
				  pos.push(inputz.value); 
			   }
					
				cylinders.push(computeCylinder(radius.value, 1, pos));
			 }
			 else 
	 		 {
				pos.push(0.0); 
			    pos.push(0.0); 
			    pos.push(0.0); 
			    cylinders.push(computeCylinder(radius.value, 1, pos));
				
		 	 }
		     
		}
		
		 else if(radius.value == "" && height.value != "")
		 {
			
			 if(inputx.value != "" && inputy.value != "" ) 
				 
			 {
				 if(inputz.value == "")
				 {
					 pos.push(inputx.value); 
			         pos.push(inputy.value); 
					 pos.push(0.0); 
				 }
					 
				else
				{
				 
				
			      pos.push(inputx.value); 
			      pos.push(inputy.value); 
				  pos.push(inputz.value); 
			   }
					
				cylinders.push(computeCylinder(radius.value, height.value, pos));
			 }
			 else 
	 		 {
				pos.push(0.0); 
			    pos.push(0.0); 
			    pos.push(0.0); 
			 
				cylinders.push(computeCylinder(radius.value, 1, pos));
		 	 }
		 
		}
		
		 else if(radius.value != "" && height.value != "")
		 {
			 if(inputx.value != "" && inputy.value != "" ) 
				 
			 {
				 if(inputz.value == "")
				 {
					 pos.push(inputx.value); 
			         pos.push(inputy.value); 
					 pos.push(0.0); 
				 }
					 
				else
				{
				  pos.push(inputz.value); 
				 pos.push(inputy.value); 
			      pos.push(inputx.value); 
			     
			   }
					
				cylinders.push(computeCylinder(radius.value, height.value, pos));
			 }
			 else 
	 		 {
				pos.push(0.0); 
			    pos.push(0.0); 
			    pos.push(0.0); 
			 
				cylinders.push(computeCylinder(radius.value, height.value, pos));
		 	 }
		 
		}
		 
			refreshScreen();
	 }
	//Configure WebGL
	gl.clearColor(1.0,1.0, 1.0, 1.0);
	gl.enable(gl.DEPTH_TEST);
	//load shaders and initialize attribute buffers
	var program = initShaders(gl, "vertex-shader", "fragment-shader");
	gl.useProgram(program);
	
	gl.viewport(0,0, canvas.width, canvas.height);
	
	//load the data into the gpu
	
	
	
	var bufferId = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
 
	
 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
	 var a_Position = gl.getAttribLocation(program, "a_Position");
	u_Fragcolor = gl.getUniformLocation(program, "u_Fragcolor");
	 
	 var eye = vec3(0,0, 2);
	 var at = vec3(0.0, 0.0, 2);
     var up = vec3(0.0, 2.0, 0.0);

	modelViewMatrix = lookAt (eye, at, up );	
	var modelViewMatrixLoc = gl.getUniformLocation(program, 'modelViewMatrix');
	gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(modelViewMatrix));
	
	
	projectionMatirx = ortho (1 , -1, -1, 1 ,0, 2 );	
	
	
      
  

	
	  var projMatrixLoc = gl.getUniformLocation(program, 'projectionMatirx');
	  gl.uniformMatrix4fv(projMatrixLoc, false, flatten(projectionMatirx));
	  
	  
	   
	
	
	function refreshScreen()
	{
	 
	 gl.clear(gl.COLOR_BUFFER_BIT, gl.DEPTH_BUFFER_BIT);
	 
  for(var i = 0; i < spheres.length; i++)
  {
	   var x = spheres[i][spheres[i].length -1][0];
	   var y = spheres[i][spheres[i].length -1][1];
	   var z = spheres[i][spheres[i].length -1][2];
	   
	translationMatrix = translationMatrixCreate(x,y,z);
	  
	   var relocateToOrignMatrixLoc = gl.getUniformLocation(program, 'relocateToOrginMatrix');
	  gl.uniformMatrix4fv(relocateToOrignMatrixLoc, false, relocateToOrginMatrix);
	  
      var rotationMatrixLoc = gl.getUniformLocation(program, 'rotationMatrix');
	  gl.uniformMatrix4fv(rotationMatrixLoc, false, rotationMatrix);
	  
	  var translationMatrixLoc = gl.getUniformLocation(program, 'translationMatrix');
	  gl.uniformMatrix4fv(translationMatrixLoc, false, translationMatrix);
	
	 drawSphere(i, a_Position);
  	}
	for(var i = 0; i < cones.length; i++)
	{
		var conex = cones[i][2][0];
		var coney =  cones[i][2][1];
		var conez =   cones[i][2][2];
		translationMatrix = translationMatrixCreate(conex,coney,conez);
	  
	   var relocateToOrignMatrixLoc = gl.getUniformLocation(program, 'relocateToOrginMatrix');
	  gl.uniformMatrix4fv(relocateToOrignMatrixLoc, false, relocateToOrginMatrix);
	  
      var rotationMatrixLoc = gl.getUniformLocation(program, 'rotationMatrix');
	  gl.uniformMatrix4fv(rotationMatrixLoc, false, rotationMatrix);
	  
	  var translationMatrixLoc = gl.getUniformLocation(program, 'translationMatrix');
	  gl.uniformMatrix4fv(translationMatrixLoc, false, translationMatrix);
	
		drawCone(i, a_Position);
		
	}
	for(var i = 0; i < cylinders.length; i++)
	{ 
		//drawCylinder(i, a_Position); 

		
		var cylinderx = cylinders[i][2][0];
		var cylindery =  cylinders[i][2][1];
		var cylinderz =   cylinders[i][2][2];
	 	 translationMatrix = translationMatrixCreate(cylinderx,cylindery,cylinderz);
	  
	     var relocateToOrignMatrixLoc = gl.getUniformLocation(program, 'relocateToOrginMatrix');
	  gl.uniformMatrix4fv(relocateToOrignMatrixLoc, false, relocateToOrginMatrix);
	  
      var rotationMatrixLoc = gl.getUniformLocation(program, 'rotationMatrix');
	  gl.uniformMatrix4fv(rotationMatrixLoc, false, rotationMatrix);
	  
	  var translationMatrixLoc = gl.getUniformLocation(program, 'translationMatrix');
	  gl.uniformMatrix4fv(translationMatrixLoc, false, translationMatrix);
	
		 drawCylinder(i, a_Position);   
		 
	}
   
  
		

	}
	
}

 
function computeCylinder(r, height, position)
{
	
	var cylinder = [];
	var disk = [];
    var line = [];
	lineLength = 100;
	var tempDisk = [];
	var linesForHeight = [];
	var circle2 = [];
	var circle = [];
	var triangles = [];
	var rotation = (6.28/100.0);
	//create the cone about the origin and then translate it to its position
	//x^2 + y^2 + z^2 = r^2
	
     var x;
	 var y;
	 var z;
	
	
	
	
	//at the origin x, y and z ar
	
	for(var i = 0; i < 100; i++)
	{
	  rad = rotation * i;
	  x =  r * Math.cos(rad) * .5;
	  
	  z = -r * Math.sin(rad) * .5  ; 
      y = 0;
	  

	  //note a slight offset is added to the disk so it will not be hidden by the triangles that make up the sides here and to a second circle above
	 //that helps to make the disk that forms the bottom
	 
	 
		circle.push(x); circle.push(y); circle.push(z);
		circle2.push(x); circle2.push(y - .001); circle2.push(z);
	}

	  flatLineArray = flatten(circle2);	
	  disk.push(flatLineArray);
 	 
	for(var i = 0; i < 300; i += 3)
	{
		

		tempDisk.push(vec3(0,-.001,0), vec3(circle2[i + 3], circle2[i + 4],circle2[i+5]), vec3(circle2[i + 6], circle2[i + 7],circle2[i+8]));
	}
	
	
		tempDisk.push(vec3(0,-.001,0), vec3(circle2[297], circle2[298],circle2[299]),vec3(circle2[3], circle2[4], circle2[5]));
	   flatLineArray = flatten(tempDisk);
	   disk.push(flatLineArray);
	
	 
 
       cylinder.push(disk);

	  for(var j = 0; j < 30; j++)
	{
		
		var line = []; 
		for(var k = 0; k < 300; k+=3)
		{
			line.push(circle[k]);
			line.push(circle[k + 1]  +  j * height/29.0 );
			line.push( circle[k + 2]);
	
		
		}
		flatLineArray = flatten(line);	
		triangles.push(flatLineArray);	
		linesForHeight.push(line);
		
	}
	  for(var j = 1; j < 30; j++)
	  {
		  var triangleLines = [];
		for(var k = 0; k < 300; k+=3)	
		{
		      triangleLines.push(vec3(linesForHeight[j][k ],	linesForHeight[j][k + 1],linesForHeight[j] [k + 2]) );
			  triangleLines.push(vec3(linesForHeight[j - 1][k + 3 ],linesForHeight[j -1][k + 4],linesForHeight[j -1][k + 5]));	 
			  triangleLines.push(vec3(linesForHeight[j][k + 6],	linesForHeight[j][k + 7], linesForHeight[j][k + 8] ));
			 
			//  triangleLines.push(vec3(linesForHeight[j - 1][k],	linesForHeight[j -1][k + 1],linesForHeight[j -1][k+ 2]));
			//  triangleLines.push(vec3(linesForHeight[j][k + 3 ],linesForHeight[j][k + 4], linesForHeight[j] [k + 5])); 
			//  triangleLines.push(vec3(linesForHeight[j -1][k + 6],	linesForHeight[j -1][k + 7], linesForHeight[j -1][k + 8] ));
			
		}
	//	alert(triangleLines.length);
			flatLineArray = flatten(triangleLines);
			triangles.push(flatLineArray);
			
	
	  }
		cylinder.push(triangles);
	    cylinder.push(position);
		return cylinder;
	 
		
	 	 
		
}
function computeCone(r, height, position)
{
	var disk = [];
	var cone = [];
	var tempDisk = [];
	var rotation = (6.28/100.0);
	triangles = [];
	//create the cone about the origin and then translate it to its position
	//x^2 + y^2 + z^2 = r^2
	var circle2 = [];
     var x;
	 var y;
	 var z;
	
	var circle = [];
	
	//at the origin x, y and z ar
	
	
	for(var i = 0; i < 100; i++)
	{
	  rad = rotation * i;
	  x =  r * Math.cos(rad) * .5;
	  
	  z  = r * Math.sin(rad) * .5 ; 
      y = 0;
	  

	 
	 
	 
	circle.push(x); circle.push(y); circle.push(z);
	circle2.push(x); circle2.push(y + -.001); circle2.push(z);
	}

	 flatLineArray = flatten(circle2);	
	 disk.push(flatLineArray);
 	
	 //note a slight offset is added to the disk so it will not be hidden by the triangles that make up the sides here and to a second circle above
	 //that helps to make the disk that forms the bottom
	for(var i = 0; i < 300; i += 3)
	{
		

		tempDisk.push(vec3(0,-.001,0), vec3(circle2[i + 3], circle2[i + 4],circle2[i+5]), vec3(circle2[i + 6], circle2[i + 7],circle2[i+8]));
	}
	
	
		tempDisk.push(vec3(0,-.001,0), vec3(circle2[297], circle2[298],circle2[299]),vec3(circle2[3], circle2[4], circle2[5]));
	   flatLineArray = flatten(tempDisk);
	   disk.push(flatLineArray);
	
	 
 	cone.push(disk);

	 for(var j = 0; j < 150; j+= 3)
	{
		
	
		
			line[0] = (circle[j * 2] );
			line[1] = 0;
			line [ 2]=   circle[j * 2 + 2] ;
			
			line[3] = 0; 
           	line[4] = height; 	
			line [5]=   0;
			
			
			 line[6] = (circle[j * 2 + 6] );
		 	line[7] = 0;
		 	line [ 8]=   circle[j * 2 + 8] ;
			
			flatLineArray = flatten(line);
		    triangles.push(flatLineArray);
	}
	
	cone.push(triangles);
	cone.push(position);
    return cone;
}
function computeSphere(r, position)
{
	
	var sphere = [];
	
	var  linePrev = line;	
	triangle = [];
	lineLength = 100;
	var rotation = (6.28/100.0);
	//create the sphere about the origin and then translate it to its position
	//x^2 + y^2 + z^2 = r^2
	// gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
     var x;
	 var y;
	 var z;
	var rotationy = 6.28/50;
	var circle = [];
	
	//at the origin x, y and z ar
	
	
	for(var i = 0; i < 100; i++)
	{
	  rad = rotation * i;
	  x =  r * Math.cos(rad) * .5;
	  
	  y  = r * Math.sin(rad) * .5; 
      z = 0 ;
	 
		circle.push(x); circle.push(y); circle.push(z);
                
	}
	   
	var linePrev = circle;
	flatLineArray = flatten(circle);

	 for(var j = 1; j < 50; j++)
	{
		
		var line = [];
		
		for(var k = 0; k < 300; k+=3)
		{
			line[k] = (circle[k] * Math.cos(rotationy * j) +  circle[k + 2] * Math.sin(rotationy * j));
			line[k + 1] =  circle[k + 1];
			line [k + 2]=   -circle[k] * Math.sin(rotationy * j) +  circle[k + 2]  * Math.cos(rotationy * j) ;
			
		}
		
	 	
		//flatLineArray = flatten(line);
		//sphere.push(flatLineArray);
	

		var triangleLines = [];
		for(var l = 0; l < 300; l+=6)
		{
			
		     triangleLines.push(vec3(line[l],	line[l + 1],line [l + 2]) );
			 triangleLines.push(vec3(linePrev[l + 3 ],linePrev[l + 4], linePrev[l + 5]));	 
			 triangleLines.push(vec3(line[l + 6],	line[l + 7], line[l + 8] ));
			 
			//  triangleLines.push(vec3(linePrev[l],	linePrev[l + 1],linePrev [l+ 2]));
			//  triangleLines.push(vec3(line[l + 3 ],line [l + 4], line [l + 5])); 
			//  triangleLines.push(vec3(linePrev[l + 6],	linePrev[l + 7], linePrev[l + 8] ));
			
		
			
			
			
		}
			
			flatLineArray = flatten(triangleLines)
			sphere.push(flatLineArray);
			var linePrev = line;	
			
	}
 //	alert(position[0]);
	        //the last item in the sphere array will be its position;
            sphere.push(position);	
	return sphere;
	
	
}
function render()
{
	
	switch(mode)
	{
	 case (0):
		gl.drawArrays(gl.TRIANGLES,0, count);
		break;
		
	 case (1):
		gl.drawArrays(gl.TRIANGLE_STRIP,0, count);
		break;	
		
	case (2):
	   gl.drawArrays(gl.TRIANGLE_FAN, 0, count);
	   break;
	case (3):
	 	gl.drawArrays(gl.LINES,0, count);
		break;
		
	case (4):
	    gl.drawArrays(gl.LINE_LOOP,0, count);
		break;
		
	case (5):
	    gl.drawArrays(gl.LINE_STRIP,0, count);
		break;
		
   case (6):
	 gl.drawArrays(gl.POINTS,0, count);
		break;
			
	}
	  
		
	
		
}
function drawSphere(index ,a_Position)
{
	//translationMatrix = translationMatrixCreate(0.0,0.5,0.0);

	
	//initialiazeTransformationMarix();
	
	//alert("test");
  
	mode =0;
	count =150;

  gl.uniform4f(u_Fragcolor, 1, 0, 0, 1);
  // for(var i = 0; i < spheres.length; i++)
   { 
      
	 
	for(var j = 0; j < spheres[index].length - 1; j++)
	{ 
	
    gl.bufferData( gl.ARRAY_BUFFER,spheres[index][j], gl.STATIC_DRAW );
                                                                           
	
	 gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, 0, 0);
	 gl.enableVertexAttribArray(a_Position);
	
	//  
	
	// ty = alert(spheres[i][1]);
	// tz =   alert(spheres[i][2]);
	
	render();
 	}	
 	
	
 	/*
	count = 100;
	mode = 4;
		gl.uniform4f(u_Fragcolor, 1,0, 0, 1);
  for(var i = 0; i < spheres.length; i++)
	for(var j = 0; j < spheres[i].length; j++)
	{
    gl.bufferData( gl.ARRAY_BUFFER,spheres[i][j], gl.STATIC_DRAW );
                                                                           
	
	 gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, 0, 0);
	 gl.enableVertexAttribArray(a_Position);
	
 	render();
  }	*/
   }
}







function drawCylinder(cylinderNum, a_Position)
{
 

	
	//gl.uniform4f(u_Fragcolor, 1, 0,1, 1);
	count = 300;
	mode = 0;
	
 	 for(i = 0; i < cylinders[cylinderNum][0].length; i++)
  {
    gl.bufferData( gl.ARRAY_BUFFER,cylinders[cylinderNum][0][i], gl.STATIC_DRAW );
                                                                           
	
	 gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, 0, 0);
	 gl.enableVertexAttribArray(a_Position);
	
	
	
 	
 	render();
  }	
	mode = 0;
	count = 300;
	  gl.uniform4f(u_Fragcolor, 1, 0, 0, 1);
	

  for(var i = 0; i < cylinders[cylinderNum][1].length; i++)
  {
   gl.bufferData( gl.ARRAY_BUFFER,cylinders[cylinderNum][1][i], gl.STATIC_DRAW );
                                                                           
	
	 gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, 0, 0);
	 gl.enableVertexAttribArray(a_Position);
	
	
	
 	
 	render();
  }
  mode = 0;
  count = 303
for(i = 0; i < cylinders[0][0].length; i++)
  {
    gl.bufferData( gl.ARRAY_BUFFER,cylinders[0][0][i], gl.STATIC_DRAW );
                                                                           
	
	 gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, 0, 0);
	 gl.enableVertexAttribArray(a_Position);
	
 	
	render();
  }
    
    count = 100;
	mode = 4;	
	
  for(i = 0; i < cylinders[0][0].length; i++)
  {
    gl.bufferData( gl.ARRAY_BUFFER,cylinders[0][0][i], gl.STATIC_DRAW );
                                                                           
	
	 gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, 0, 0);
	 gl.enableVertexAttribArray(a_Position);
	
 	
	render();
  }

  
  /* 
	

  gl.uniform4f(u_Fragcolor, 1, 0, 0, 1);
  for(var i = 0; i < triangle.length ; i++)
  { 
	
    gl.bufferData( gl.ARRAY_BUFFER,triangle[i], gl.STATIC_DRAW );
                                                                           
	
	 gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, 0, 0);
	 gl.enableVertexAttribArray(a_Position);
	
	
	
 	
 	render();
  }	
 	*/
}

function drawCone( numOfCones, a_Position)
{
	//cones[number]
	
	
/*
cones is an array of cones each cone in cones consist of three parts.
the firs part is a disk for the bottom it is offset slightly to provide visibility 
int a side view because the sides hide the bottom the disk on a side view
provides a view produces the line at the bottom.

the second element in cone is 
*/	
count = 3;
	
  gl.uniform4f(u_Fragcolor, 1,1, 1, 1);
  for(i = 0; i < cones[numOfCones][1]; i++)
  {
    gl.bufferData( gl.ARRAY_BUFFER,cones[numOfCones][1][i], gl.STATIC_DRAW );
	
                                                                           
	
	 gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, 0, 0);
	 gl.enableVertexAttribArray(a_Position);
	
 	render();

  }	

	count = 303;
	mode = 0;

  gl.uniform4f(u_Fragcolor, 0, 0, 0, 1);
  for(i = 0; i <  cones[numOfCones][0].length; i++)
  {
    gl.bufferData( gl.ARRAY_BUFFER,cones[numOfCones][0][i], gl.STATIC_DRAW );
                                                                           
	
	 gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, 0, 0);
	 gl.enableVertexAttribArray(a_Position);
	
	
	
 	
  render();
  }	
  
    
    count = 100;
	mode = 4;	
	
  for(i = 0; i < cones[numOfCones][0].length; i++)
  {
    gl.bufferData( gl.ARRAY_BUFFER,cones[numOfCones][0][i], gl.STATIC_DRAW );
                                                                           
	
	 gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, 0, 0);
	 gl.enableVertexAttribArray(a_Position);
	
 	
	render();
  }


  gl.uniform4f(u_Fragcolor, 0, 0, 0, 1);

	count = 2;
	mode = 3;	
  gl.uniform4f(u_Fragcolor, 0, 0, 0, 1);
  for(i = 0; i < cones[numOfCones][1].length; i++)
  {
     gl.bufferData( gl.ARRAY_BUFFER,cones[numOfCones][1][i], gl.STATIC_DRAW );
                                                                           
	
	 gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, 0, 0);
	 gl.enableVertexAttribArray(a_Position);
	
	
	
 	
	render();
  }

}



	


