# Portfolio 사이트 제작(22.08.08~22.08.29)

![portfolio_mockup](https://user-images.githubusercontent.com/102039456/187333876-62bd4858-838d-41c4-b599-c6e411c636fb.jpg)

Demo : [https://dvlpdana.github.io/portfolio/](https://dvlpdana.github.io/portfolio/)

<br />

## 프로젝트 개발목표

<p align="justify" lineHeight="1.6" >
-  나를 표현하는 포트폴리오 사이트 React library 활용하여 제작 <br/ >
-  Router 통해 빠른 페이지 전환효과 구현 <br/ >
-  반복하여 사용되는 기능 및 요소 Component로 독립적으로 제작한 뒤, 이를 조립하여 각각의 페이지 구현 <br/ >
</p>

<br />

## 기술 스택

| JavaScript |     CSS     |  React   |
| :--------: | :---------: | :------: |
|   <img src="https://user-images.githubusercontent.com/102039456/187168448-0611cda1-c3e6-4fd7-bc1c-30da00bab9cd.png" width="35" height="50" >    |   <img src="https://user-images.githubusercontent.com/102039456/187168206-52fac0b8-6c5d-40e5-8f1b-1cb6b2bb22d2.png" width="35" height="50" >    |   <img src="https://user-images.githubusercontent.com/102039456/187166778-00c9be9f-ca97-4e20-92d6-f359f1821735.png" width="50" height="50" >   |

<br>

## Advandced Feature

### 1. Horizontal 기능 구현
> 코드(horizontable.jsx)
```javascript
import React, { useRef, useEffect } from "react";

const style = {
  width: "100%",
  overflow: "hidden"
};

const Horizontable = ({ children }) => {
  const ref = useRef(null);

  let isDown = false;
  let startX;
  let scrollLeft;

  const onMouseDown = (event) => {
    isDown = true;
    startX = event.pageX - ref.current.offsetLeft;

    scrollLeft = ref.current.scrollLeft;
  };

  const onTouchDown = (event) => {
    startX = event.targetTouches[0].pageX - ref.current.offsetLeft;

    scrollLeft = ref.current.scrollLeft;
  };

  const onDown = () => (isDown = false);

  const onTouchMove = (event) => {
    const x = event.targetTouches[0].pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 1;

    scrollingLeft(scrollLeft - walk);
  };

  const onMouseMove = (event) => {
    if (!isDown) {
      return;
    }

    event.preventDefault();
    const x = event.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 1;

    scrollingLeft(scrollLeft - walk);
  };

  const onWheel = (event) => {
    event.preventDefault();
    scrollingLeft(ref.current.scrollLeft + event.deltaY);
  };

  const scrollingLeft = (left) => (ref.current.scrollLeft = left);

  useEffect(() => {
    ref.current.addEventListener("wheel", onWheel, { passive: false });
  }, []);

  return (
    <div
      style={style}
      ref={ref}
      onTouchStart={onTouchDown}
      onTouchMove={onTouchMove}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onDown}
      onMouseLeave={onDown}
    >
      {children}
    </div>
  );
};

export default Horizontable;
```

> 구현화면
<img src="https://user-images.githubusercontent.com/102039456/187335543-d9193ff6-aeed-4778-8ba0-4e20f4634de9.gif">

### 2. Router 라이브러리 활용하여 페이지 이동 및 전환효과 구현
> 코드(App.js)
```javascript
  ・・・
function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Introduce />} />
        <Route path="main-index" element={<MainIndex />} />

        <Route path="first-project/*" element={<FirstProjectViewer />}>
          <Route index element={<FirstProject />} />
          <Route path="proposal" element={<FirstProjectProposal />} />
          <Route path="wireframe" element={<FirstProjectWireframe />} />
          <Route path="styleguide" element={<FirstProjectStyleguide />} />
        </Route>

        <Route path="second-project/*" element={<SecondProjectViewer />}>
          <Route index element={<SecondProject />} />
          <Route path="proposal" element={<SecondProjectProposal />} />
          <Route path="wireframe" element={<SecondProjectWireframe />} />
          <Route path="styleguide" element={<SecondProjectStyleguide />} />
        </Route>

        <Route path="third-project/*" element={<ThirdProjectViewer />}>
          <Route index element={<ThirdProject />} />
          <Route path="proposal" element={<ThirdProjectProposal />} />
          <Route path="wireframe" element={<ThirdProjectWireframe />} />
          <Route path="styleguide" element={<ThirdProjectStyleguide />} />
        </Route>

        <Route path="fourth-project/*" element={<FourthProjectViewer />}>
          <Route index element={<FourthProject />} />
          <Route path="proposal" element={<FourthProjectProposal />} />
          <Route path="wireframe" element={<FourthProjectWireframe />} />
          <Route path="styleguide" element={<FourthProjectStyleguide />} />
        </Route>

        <Route path="fifth-project/*" element={<FifthProjectViewer />}>
          <Route index element={<FifthProject />} />
          <Route path="proposal" element={<FifthProjectProposal />} />
          <Route path="wireframe" element={<FifthProjectWireframe />} />
          <Route path="styleguide" element={<FifthProjectStyleguide />} />
        </Route>

        <Route path="sixth-project" element={<SixthProject />} />
      </Routes>
    </>
  );
}
  ・・・
```
> 구현화면
<img src="https://user-images.githubusercontent.com/102039456/187337326-e595719c-d191-4836-ba26-61dbc3146c54.gif">

<br />

## 개선사항

<p align="justify">
- 필요한 기능만을 남겨둔 채, 라이브러리를 덜어내어 파일의 용량을 줄여 로딩되는 속도를 빠르게 할 것 <br/>
- 기획서, 와이어프레임, 스타일 가이드 등의 문서로 이동 시, 사용자를 고려하여 새 창으로 열고 다른 문서로 이동할 수 있는 링크 설정하기
</p>

<br />

## 라이센스

MIT &copy; [dvlpDana](mailto:colleksql3@gmail.com)


