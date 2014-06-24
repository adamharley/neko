// NEKO FOR JAVASCRIPT
// THIS SCRIPT CODE IS (C) 2004 GREGORY BELL, ALL RIGHTS RESERVED.
// ANYONE IS GRANTED THE RIGHT TO EXECUTE THIS PROGRAM BY LINKING TO IT
// IN THEIR WEB PAGE.
//
// THIS RIGHT DOES NOT EXTEND TO TAKING THE CODE AND HOSTING IT ON A DIFFERENT
// SERVER.
//
// I WORKED HARD TO MAKE THIS AND WOULD LIKE TO KEEP IT, SO PLEASE HAVE FUN
// BUT DON'T STEAL IT!  
//
// THANK YOU


op=navigator.userAgent.indexOf('Opera')!=-1;

px='px';


function gE( e, f ) {
	
	if ( document.layers ) {
		
		f= (f) ? f : self;
		
		var V = f.document.layers;
		
		if( V[e] ) return V[e];
		
		for ( var W=0; W<V.length; ) t = gE ( e, V[ W++ ] );
		
		return t;
		
	}
	
	if( document.all ) return document.all[ e ];
	
	return document.getElementById(e);
	
}

function sE ( e ) {
	
	document.layers ? e.visibility = 'show' : e.style.visibility = 'visible';
	
}

function hE ( e ) {
	
	document.layers ? e.visibility = 'hide' : e.style.visibility = 'hidden';
	
}

function sZ( e, z ) {
	
	document.layers ? e.zIndex = z : e.style.zIndex = z;
	
}

function sX ( e, x ) {
	
	document.layers ? e.left = x : op ? e.style.pixelLeft = x : e.style.left = x + px;
	
}

function sY ( e, y ) {
	
	document.layers ? e.top = y : op ? e.style.pixelTop = y : e.style.top = y + px;
	
}

function sW ( e, w ) {
	
	document.layers ? e.clip.width = w : op ? e.style.pixelWidth = w : e.style.width = w + px;
	
}

function sH ( e, h ){
	
	document.layers ? e.clip.height = h : op ? e.style.pixelHeight = h : e.style.height = h + px;
	
}

function sC ( e, t, r, b, x ) {
	
	document.layers ? ( X = e.clip, X.top = t, X.right = r, X.bottom = b, X.left = x) : e.style.clip = 'rect('+t+px+' '+r+px+' '+b+px+' '+x+px+')';
	
}

function wH ( e, h ) {
	
	if ( document.layers ) {
		
		Y = e.document;
		
		Y.open();
		
		Y.write( h );
		
		Y.close();
		
	}
	
	if ( e.innerHTML ) e.innerHTML = h;

}

function cE ( i ) {
	
	if ( document.layers ) {
		
		document.layers[i] = new Layer( 0 );
		
		eval( "document."+i+"=document.layers[i]" );
		
	}
	
	else {
		
		if ( typeof document.createElement!='undefined' ) {
			
			X="<div id='"+i+"' style=\"position:absolute\">&nbsp;</div>";
			
			Y=document.createElement("DIV");
			
			if( Y ) {
				
				Y.innerHTML=X;
				
				document.body.appendChild(Y);
			
			}
			
			else if ( typeof document.body.insertAdjacentHTML!='undefined' ) document.body.insertAdjacentHTML("BeforeEnd",X);
			
		}
		
	}
	
}


var checkerboardEccentricity=10;

var checkerboardScale=20;

var nDelayVariance=20;

var nFirstRealFrame=5;


function byName ( array, name ) {
	
	for ( var i=0; i<array.length; i++ ) {
		
		if ( array[i].name == name ) {
			
			return array[i];
			
		}
		
	}
	
	return null;
	
}

var aNekos = new Array ();

function createLayer ( strLayer, x, y, w, h, strContent ) {
	
	cE ( strLayer );
	
	var o = gE ( strLayer );
	
	sC ( o, 0, w, h, 0 );
	
	sE ( o );
	
	sX ( o, x );
	
	o.myx = x;
	
	sY ( o, y );
	
	o.myy = y;
	
	wH ( o, strContent );
	
	sZ ( o, 99999 );
	
	return o;
	
}



function Neko ( x,y,active,imagedirectory ) {
		
	this.findHome = function () {
		
		this.homeX=eval ( this.homeXfn );
	
		this.homeY=eval ( this.homeYfn );
		
	};

	if ( !x ) x=0;

	if ( !y ) y=0;

	if ( parseInt ( x ) != x ) {
		
		this.homeXfn=x;
		
		this.homeYfn=y;
		
		this.findHome();
		
		x=this.homeX;
		
		y=this.homeY;
		
	}
	else {
		
		x=parseInt ( x );
		
		y=parseInt ( y );
		
	}

	if ( !active ) active=false;

	if ( !imagedirectory && window.NekoType ) imagedirectory = window.NekoType;

	if ( !imagedirectory ) imagedirectory="i";

	if ( !window.remoteimages ) imagedirectory = "http://webneko.net/" + imagedirectory;
	else imagedirectory = window.remoteimages + imagedirectory;
	
	this.directory=imagedirectory;

	var aPreLoad=new Array ( "alert","still","nrun1","nrun2","nerun1","nerun2","erun1","erun2","serun1","serun2","srun1","srun2","swrun1","swrun2","wrun1","wrun2","nwrun1","nwrun2","yawn","sleep1","sleep2","itch1","itch2","nscratch1","nscratch2","escratch1","escratch2","sscratch1","sscratch2","wscratch1","wscratch2" );

	this.aGifs=new Array ();

	for ( var i=0; i<aPreLoad.length; i++ ) {
		
		var imgTemp=new Image ();
		
		imgTemp.src=this.directory+"/"+aPreLoad[i]+".gif";
		
		this.aGifs[aPreLoad[i]]=imgTemp;
		
	}

	this.whichNeko=aNekos.length;

	aNekos[aNekos.length]=this;

	this.a_resting=new Array ( "","this.SetBehavior ( \"wakingup\" ) ","this.chooseIdle () ","8","1","still" );

	this.a_itching=new Array ( "","this.SetBehavior ( \"wakingup\" ) ","this.SetBehavior ( \"resting\" ) ","6",".5","itch2","itch1" );

	this.a_scratching=new Array ( "","this.SetBehavior ( \"wakingup\" ) ","this.SetBehavior ( \"resting\" ) ","4","2","scratch1","scratch2" );

	this.a_yawning=new Array ( "","this.SetBehavior ( \"wakingup\" ) ","this.SetBehavior ( \"resting2\" ) ","5","1","yawn" );

	this.a_resting2=new Array ( "","this.SetBehavior ( \"wakingup\" ) ","this.SetBehavior ( \"sleeping\" ) ","9","1","still" );

	this.a_wakingup=new Array ( "this.SetBehavior ( \"resting\" ) ","","this.SetBehavior ( \"chasing\" ) ","1","1","alert","still" );

	this.a_chasing=new Array ( "this.SetBehavior ( \"resting\" ) ","","","0","1","run1","run2" );

	this.a_sleeping=new Array ( "","this.SetBehavior ( \"wakingup\" ) ","","0","1","sleep1","sleep1","sleep1","sleep2","sleep2","sleep2" );

	this.behaviorRepetition=0;

	this.loopTimes=0;

	var strLayer="layerNeko"+this.whichNeko;

	var strImage="imageNeko"+this.whichNeko;

	var strImageSrc=this.directory+"/still.gif";

	var strNekoObj="aNekos["+this.whichNeko+"]";

	var strContent="<a onclick=\""+strNekoObj+".active = !"+strNekoObj+".active;return false;\" onfocus=\"this.blur()\"><img border=\"0\" id=\"neko\" name=\""+strImage+"\" src=\""+strImageSrc+"\" /></a>";

	this.layer=createLayer ( strLayer, x, y, 32, 32, strContent );

	this.layer.Neko=this;

	this.homeX=this.layer.myx;

	this.homeY=this.layer.myy;

	this.doc=this.layer.document;

	if ( !this.doc ) this.doc=document;

	this.image=byName ( this.doc.images,strImage );

	this.image.Neko=this;

	if ( window.delay && window.delay>0 ) {
		this.delay=window.delay + Math.floor ( nDelayVariance * Math.random () -5 );
	}
	else{
		this.delay=250 + Math.floor ( nDelayVariance * Math.random () -5 );
	}

	this.delayMultiplier = 1;

	if ( window.stepsize && window.stepsize > 0 ) {
		this.stepsize=window.stepsize;
	}
	else{
		this.stepsize = 16;
	}



	if ( !active ) active = false;

	this.active=active;

	this.SetBehavior ( "resting" );

	this.frame=nFirstRealFrame;

	this.direction="";

	this.looseDirection="";

	this.endx=0;

	this.endy;

	this.distx;

	this.disty;

	this.steps;

	this.caught=true;

	this.dx;

	this.dy;

	this.boardX=-1;

	this.boardY=-1;

	this.eccX=Math.floor ( checkerboardEccentricity*Math.random () -checkerboardEccentricity/2 );

	this.eccY=Math.floor ( checkerboardEccentricity*Math.random () -checkerboardEccentricity/2 );

	this.Think ();

}



function NekoTargetMouse () {
	
	var endx = mouse.x + 4;

	var endy = mouse.y - 20;

	this.endx = endx;

	this.endy = endy;

	box.setBoard ( this.whichNeko, this.endx, this.endy );

}

Neko.prototype.TargetMouse = NekoTargetMouse;


function NekoShow () {
	sE ( this.layer );
}

Neko.prototype.Show = NekoShow;


function NekoHide () {
	hE ( this.layer );
}

Neko.prototype.Hide = NekoHide;


function NekoTargetHome () {
	this.endx = this.homeX;
	this.endy = this.homeY;
}

Neko.prototype.TargetHome = NekoTargetHome;


function NekoCalculateDistance () {
	this.distx = this.endx - this.layer.myx;
	
	this.disty = this.endy - this.layer.myy;
	
	this.steps = Math.sqrt ( Math.pow ( this.distx, 2 ) + Math.pow ( this.disty, 2 )  ) / this.stepsize;


	if ( this.steps >= 1 ) {
	
	
	if ( this.caught ) {
		eval ( this.onUnCaught );
	}
	
	this.caught=false;
	
	}
	
	
	else {
	
	
	if ( !this.caught ) {
		eval ( this.onCaught );
	}
	
	this.caught=true;
	
	}

	this.dx = this.distx / this.steps;
	
	this.dy = this.disty / this.steps;
	
}

Neko.prototype.CalculateDistance=NekoCalculateDistance;


function NekoSetBehavior ( strNewBehavior ) {
	
	this.behavior=strNewBehavior;
	
	this.frame=nFirstRealFrame;
	
	var paImages=eval ( "aNekos["+this.whichNeko+"].a_"+this.behavior );
	
	this.onCaught=paImages[0];
	
	this.onUnCaught=paImages[1];
	
	this.onLoopEnd=paImages[2];
	
	this.loopTimes=paImages[3];
	
	this.delayMultiplier=paImages[4];
	
}

Neko.prototype.SetBehavior=NekoSetBehavior;


function NekoUpdateImage () {
	
	var paImages=eval ( "aNekos["+this.whichNeko+"].a_"+this.behavior );


	if ( this.frame>=paImages.length ) {
		
		this.behaviorRepetition++;

		if ( this.loopTimes!=0&&this.behaviorRepetition>=this.loopTimes ) {
		
			this.behaviorRepetition=0;
			
			eval ( this.onLoopEnd );
			
			var paImages=eval ( "aNekos["+this.whichNeko+"].a_"+this.behavior );
			
		}


		else {
		
			this.frame=nFirstRealFrame;
		
		}

	}



	if ( this.aGifs[this.direction+paImages[this.frame]] ) {
		
		var strImage=this.aGifs[this.direction+paImages[this.frame]].src;
		
		this.image.src=strImage;
		
	}
	else if ( this.aGifs[paImages[this.frame]] ) {
		
		var strImage=this.aGifs[paImages[this.frame]].src;
		
		this.image.src=strImage;
		
	}
	else if ( this.looseDirection+this.aGifs[paImages[this.frame]] ) {
		
		var strImage=this.aGifs[this.looseDirection+paImages[this.frame]].src;
		
		this.image.src=strImage;
		
	}
	else {
		
		this.image.src=this.aGifs["alert"].src;
		
	}
	
	this.frame++;
	
}

Neko.prototype.UpdateImage=NekoUpdateImage;


function NekoMoveAStep () {
	
	if ( this.steps>=1 ) {
		
		this.layer.myx+=this.dx;
		
		this.layer.myy+=this.dy;
		
	}
	else {
		
		this.layer.myx=this.endx;
		
		this.layer.myy=this.endy;
		
	}


	if ( box.checkBoard ( this.whichNeko,this.layer.myx,this.layer.myy )  ) {
		
		this.layer.myx+=this.eccX;
		
		this.layer.myy+=this.eccY;
		
	}

	sX ( this.layer,this.layer.myx );

	sY ( this.layer,this.layer.myy );

	box.setBoard ( this.whichNeko,this.layer.myx,this.layer.myy );
	
}

Neko.prototype.MoveAStep=NekoMoveAStep;


function NekoFindDirection () {

	if (  ( dx==0 ) && ( dy==0 )  ) {
		
		this.direction="";
		
		return;
		
	}

	var dy=-1*this.dy;
	
	var dx=this.dx;
	
	var adx=Math.abs ( dx );
	
	var ady=Math.abs ( dy );
	
	var ns="";
	
	var ew="";
	
	var tan=ady/adx;
	
	var bNSShallow= ( tan<.41421 );
	
	var bEWShallow= ( tan>2.4142 );


	if ( dy>0 ) {

		if ( !bNSShallow ) ns="n";

	}
	else {

		if ( !bNSShallow ) ns="s";
	
	}
	
	if ( dx>0 ) {
		
		if ( !bEWShallow ) ew="e";
		
	}
	else {
	
		if ( !bEWShallow ) ew="w";
		
	}
	
	if ( ew!="" ) {
		
		this.looseDirection=ew;
		
	}
	else {
		
		this.looseDirection=ns;
		
	}

	this.direction=ns+ew;
	
}

Neko.prototype.FindDirection=NekoFindDirection;


function NekoThink () {

	if ( this.active ) {
		
		this.TargetMouse ();
		
	}
	else {
		
		this.TargetHome ();
		
	}

	this.CalculateDistance ();
	
	this.FindDirection ();
	
	this.UpdateImage ();

	if ( this.behavior=="chasing" ) {
		
		this.MoveAStep ();
		
	}

	var delay=Math.floor ( this.delay*this.delayMultiplier );
	
	setTimeout ( "aNekos["+this.whichNeko+"].Think () ",delay );
}

Neko.prototype.Think=NekoThink;


function nekoChooseIdle () {
	
	var aChoice=new Array ( "resting","yawning","itching","scratching" );
	
	var nChoice=Math.floor ( Math.random () *aChoice.length );
	
	this.SetBehavior ( aChoice[nChoice] );
	
}

Neko.prototype.chooseIdle=nekoChooseIdle;


function startANeko () {
	
	var x=0;
	
	var y=0;
	
	if ( window.startNekoX ) x=window.startNekoX;
	
	if ( window.startNekoY ) y=window.startNekoY;
	
	if ( parseInt ( x ) !=x ) {
		
		window.onresize=function () {
			
			for ( var i=0; i<aNekos.length; i++ ) {
			
				if ( aNekos[i].homeXfn ) {
					
					aNekos[i].findHome ();
					
				}
				
			}
			
		};
	
	}

	if ( window.nekoImages && window.nekoType )	var cat = new Neko ( x, y, window.nekoImages + '/' + window.nekoType );
	else var cat = new Neko ( x, y, false );
	
	window.onloadOriginal ();
	
}

window.onloadOriginal=new Function ();


if ( window.onload ) {
	
	window.onloadOriginal=window.onload;
	
}


if ( !window.NekoNoDefault ) {
	
	window.onload=startANeko;
	
}


function mouse () {

	this.x=0;

	this.y=0;

}

mouse=new mouse ();


function box () {
	
	this.width=function () {

		if ( window.innerWidth ) {
			
			return window.innerWidth;
			
		}
		else {
			
			return document.body.clientWidth;
			
		}

	};
	
	this.height=function () {

		if ( window.innerHeight ) {
			
			return window.innerHeight;
			
		}
		else {
			
			return document.body.clientHeight;
			
		}

	};
	
	this.xoffset=function () {
		
		if ( typeof window.pageXOffset!="undefined" ) return window.pageXOffset;
		
		else return document.body.scrollLeft;
		
	};
	
	this.yoffset=function () {
		
		if ( typeof window.pageYOffset!="undefined" ) return window.pageYOffset;
		
		else return document.body.scrollTop;
		
	};
	
}



function boxBoundWidth ( x ) {
	
	if ( x!=0&&!x ) x=this.width ();
	
	var minx=0;
	
	var maxx=this.width () -36;
	
	if ( x<minx ) x=minx;
	
	if ( x>maxx ) x=maxx;
	
	return x;
	
}

box.prototype.boundWidth=boxBoundWidth;


function boxBoundHeight ( y ) {
	
	if ( y!=0&&!y ) y=this.height ();
	
	var miny=20;
	
	var maxy=this.height () -12;
	
	if ( y<miny ) y=miny;
	
	if ( y>maxy ) y=maxy;
	
	return y;
	
}

box.prototype.boundHeight=boxBoundHeight;


function boxSetBoard ( nNeko, x, y ) {
	
	var sx=Math.floor ( x/this.width () *checkerboardScale );
	
	var sy=Math.floor ( y/this.height () *checkerboardScale );

	if ( sx<0 ) sx=0;

	if ( sx>=checkerboardScale ) sx=checkerboardScale-1;

	if ( sy<0 ) sy=0;

	if ( sy>=checkerboardScale ) sy=checkerboardScale-1;
	
	var oN=aNekos[nNeko];
	
	if ( oN.boardX!=sx||oN.boardY!=sy ) {
		
		if ( oN.boardX!=-1 ) {
			
			checkerboard[oN.boardX][oN.boardY]--;
			
		}
		
		checkerboard[sx][sy]++;
		
		oN.boardX=sx;
		
		oN.boardY=sy;
		
	}
	
	if ( checkerboard[sx][sy]==0 ) return 0;
	
	return checkerboard[sx][sy]-1;
	
}

box.prototype.setBoard=boxSetBoard;


function boxCheckBoard ( nNeko, x, y ) {
	
	var sx=Math.floor ( x/this.width () *checkerboardScale );
	
	var sy=Math.floor ( y/this.height () *checkerboardScale );
	
	if ( sx<0 ) sx=0;
	
	if ( sx>=checkerboardScale ) sx=checkerboardScale-1;
	
	if ( sy<0 ) sy=0;
	
	if ( sy>=checkerboardScale ) sy=checkerboardScale-1;
	
	var oN=aNekos[nNeko];
	
	var nDec=0;
	
	if ( oN.boardX==sx&&oN.boardY==sy ) {
		
		nDec=1;
		
	}
	
	return checkerboard[sx][sy]-nDec;
	
}

box.prototype.checkBoard=boxCheckBoard;

box=new box ();

document.onmousemove=function ( e ) {
	var x=e?e.pageX:event.x+document.body.scrollLeft;
	
	var y=e?e.pageY:event.y+document.body.scrollTop;
	
	mouse.x=box.boundWidth ( x );
	
	mouse.y=box.boundHeight ( y );
	
};


if ( document.captureEvents ) document.captureEvents ( Event.MOUSEMOVE );

var checkerboard=new Array ( checkerboardScale );

for ( var i=0; i<checkerboardScale; i++ ) {
	
	checkerboard[i]=new Array ( checkerboardScale );
	
	for ( var j=0; j<checkerboardScale; j++ ) {
		
		checkerboard[i][j]=0;
		
	}

}