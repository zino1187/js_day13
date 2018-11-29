/*게임에서의 체력을 정의한다!!!*/
class HP{
	constructor(container){
		this.div=document.createElement("div");
		this.div.style.width=46+"px";
		this.div.style.height=46+"px";
		this.div.style.border="2px solid yellow";
		this.div.style.background="red";
		this.div.style.float="left";
		container.appendChild(this.div);
	}
	//이 객체의 색상을 변경한다
	setBg(bg){
		this.div.style.background=bg;
	}
}