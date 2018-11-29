/*총알을 정의한다*/
class Bullet{
	constructor(container, src,width,height,x,y,velX,velY){
		this.container=container;
		this.src=src;//게임 실행중에도 src를 변경할 수 있도록
		this.width=width;
		this.height=height;
		this.x=x;
		this.y=y;
		this.velX=velX;
		this.velY=velY;

		this.img=document.createElement("img");
		this.img.src=src;			
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";
		this.img.style.position="absolute";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		this.container.appendChild(this.img);
	}
	//tick() 이 객체의 속성변화를 처리하는 메서드 
	tick(){
		this.x=this.x+this.velX;
		this.y=this.y+this.velY;
	}
	//화면에 어떻게 그려질지를 결정하는 render()	
	render(){
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";
	}
}