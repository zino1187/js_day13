/*게임에 사용될 단어를 정의한다!!*/
class Word{
	constructor(container,text){
		//span 태그는 인라인 속성이므로, 너비가 컨텐츠만큼
		//만 확보된다
		this.span=document.createElement("span");
		this.span.innerText=text;
		this.span.style.fontSize="20px";
		this.span.style.fontWeight="bold";
		container.appendChild(this.span);
	}
	move(){

	}
}