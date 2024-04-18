const wrap = document.querySelector('main'); // main 요소를 선택하여 wrap 변수에 할당
const btns = wrap.querySelectorAll('#navi li'); // main 요소 내의 #navi 아이디를 가진 li 요소를 선택하여 btns 변수에 할당
const panels = wrap.querySelectorAll('section article'); // main 요소 내의 section 아래의 article 요소를 선택하여 panels 변수에 할당

btns.forEach((btn, index) => { // btns 요소들에 대해 forEach 루프를 실행하면서 각 요소에 이벤트 리스너를 추가
  btn.addEventListener('click', e => { // 버튼 클릭 이벤트에 대한 핸들러 함수
    for(let i=0; i<btns.length; i++){ // btns 요소를 반복하여 모든 버튼에서 'on' 클래스 제거 및 패널에서 'on' 클래스가 있는지 확인하고 'mask' 클래스 추가
      btns[i].classList.remove('on'); // 모든 버튼에서 'on' 클래스 제거
      if(panels[i].classList.contains('on')){ // 패널에서 'on' 클래스가 있는지 확인
        panels[i].classList.add('mask'); // 'on' 클래스가 있으면 'mask' 클래스 추가
      }
    }

    btns[index].classList.add('on'); // 클릭된 버튼에 'on' 클래스 추가
    panels[index].classList.add('lower'); // 해당 패널에 'lower' 클래스 추가

    setTimeout(() => { // 1400밀리초 후에 실행되는 함수
      for(let i=0; i<panels.length; i++){ // 모든 패널을 반복하여 'on' 클래스 및 'mask' 클래스 제거
        if(panels[i].classList.contains('on')){ // 'on' 클래스가 있는지 확인
          panels[i].classList.remove('on'); // 'on' 클래스 제거
          panels[i].classList.remove('mask'); // 'mask' 클래스 제거
        }
      }
      panels[index].classList.remove('lower'); // 해당 패널에서 'lower' 클래스 제거
      panels[index].classList.add('on'); // 해당 패널에 'on' 클래스 추가
    }, 1400);
  })
})