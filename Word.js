/*게임에 사용될 단어를 정의한다!!*/
class Word{
	constructor(container,text,x,y){
		//span 태그는 인라인 속성이므로, 너비가 컨텐츠만큼
		//만 확보된다
		this.x=x;
		this.y=y;
		this.span=document.createElement("span");
		this.span.innerText=text;
		this.span.style.fontSize="20px";
		this.span.style.fontWeight="bold";
		this.span.style.position="absolute";
		this.span.style.left=this.x+"px";
		this.span.style.top=this.y+"px";

		container.appendChild(this.span);
	}
	move(){
		this.y+=5;//기존 y값을 5씩 누적!!
		this.span.style.top=this.y+"px";
	}
}