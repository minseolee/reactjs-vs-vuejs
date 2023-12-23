# reactjs-vs-vuejs


# Reactjs VS Vuejs 
---
# 0. Motivation
- 이민서 (mmmm@ajou.ac.kr)
- Production Projects
	- Reactjs 6 projects (2 years)
	- Vuejs 3 projects (1 year)
- Toy Projects
	- Reactjs 5 projects
	- Vuejs 2 projects

- 운이 좋게도 어린나이에 프론트엔드 개발자로 일할 기회가 있었습니다
	- Reactjs 를 주로 다루었고, 이후 Vuejs 를 다뤄야할 상황이 생기게 되었습니다.
	- 많은 염려가 있었으나, 사실은 두 프레임워크가 같은 원리, 비슷한 동작을 한다는 것을 깨달았습니다
	- 각각의 프레임워크를 다루면서 느낀점, 깨달은점을 비교 형식으로 제공하고자 합니다
- 개발에 입문하는 여러분께 Framework 는 그저 도구일 뿐, 새로운 것에 주저하지 않기를 희망합니다.

---
# 1. Reactjs VS Vuejs ON CONCEPT

## 1-1. What is Vuejs, Reactjs?
- React.js 와 Vue.js 는 CSR(Client-Side-Rendering)을 활용하여 SPA(Single-Page-Application)을 만드는 Modern Web Framework 입니다. 

## 1-2. CSR? SPA?
- 먼저 CSR과 SPA에 대해 생소한 개념일 수 있습니다.
- CSR이란 Client-Side-Rendering으로, 사용자의 Event / Interaction 등 Web application 의 변화에 대해 Client 가 직접 Rendering에 관여하는 개념입니다.

- 기존 Web application 의 작동방식은, Server 가 HTML template 전체를 만들어서 Network 를 통해 Client 에게 전달하는 방식
	- 이러한 방식을 (SSR) Server-Side-Rendering 이라고 합니다
		- 하지만 SSR 방식은 서버의 부담이 매우 크다는 단점이 존재하였고
		- 사용자 또한 간단한 변화에도 페이지 전체를 Load 받아야 하며, Client / Server 모두 Overhead 가 발생하게 되었습니다

- 세상은 점점 변화하여
	- 기하급수적으로 증가하는 프로세서 성능
	- 더욱 Eventful 한 Web Application 수요의 증가
	- 와 같은 흐름이 발생하여 SSR 에서 벗어나 CSR 에 대한 방식이 주목되었고
- CSR 을 활용하여 페이지를 이동하고 있음에도 
- 하나의 페이지에서 렌더링함으로써 하나의 Application 과 같은 사용자경험을 제공하는
- Single-Page-Application, 즉 SPA 개발 방법론이 발전하게 되었습니다.

- 2010년 Google 의 Angular
- 2013년 Facebook 의 Reactjs
- 2014년 Evan You 의 Vuejs
- 2016년 Rich Harris 의 Svelte
	- 같은 SPA Framework 들이 큰 인기를 얻게 되었습니다
	- 그 중 Facebook 의 Reactjs 와 Evan You의 Vuejs 를 이번 강의에서 다루도록 하겠습니다

### 1-a. Appendix SSR vs CSR
- 얼핏 보기에는 CSR 이 무조건적으로 좋다고 생각될 수 있는데, 그렇지만은 않습니다
- CSR 방식의 단점으로
	- 첫 로드에 해당 서비스에 사용될 페이지 별 script 를 로드해야하여 느리며
	- Client 의 부담이 증가하여 메모리 사용량이 크게 증가합니다
	- 또한 한 개의 HTML 만을 갖기 때문에, 쇼핑몰과 같이 다양한 검색엔진최적화 (SEO) 가 부족합니다.
- 큰 규모의 Web application 이 아니라면, CSR 은 SSR 에 비해 느리고 무겁습니다.
- 검색엔진최적화를 위해 Nextjs, Gatsby 와 같이 SSR 을 지원하는 하이브리드 프레임워크가 발전하고 있습니다.

---
# 2. Reactjs VS Vuejs ON FIELD

## 2-1. Why should?
- 일반적인 Developer 는 대부분의 길이 회사로 통합니다
- Web application 을 만드는 회사는 큰 서비스를 목표로 하기 때문에 대부분의 회사에서는 SPA 개발 경험이 있는 개발자를 필요로 하며
- 실제 직무에서도 SPA Framework 를 통한 서비스를 만들게됩니다.
- 실제 한국의 유명 IT 기업들은 메인 홈페이지를 기준으로
	- N사 React
	- K사 Vue
	- L사 React
	- B사 React 
	- D사 React
	- T사 React
	- Framework 를 사용하는 것으로 확인됩니다.


## 2-2. Field Usage 
- Stackoverflow 의 2023년 survey 에 따르면 
	- Reactjs 의 Field 에서 사용률이 42%,
	- Vuejs 의 사용률이 17% 으로 나타났습니다.
- Programmers 의 2023년 12월 채용공고에 따르면
	- Reactjs 의 채용공고가 165개,
	- Vuejs 의 채용공고가 90개 존재하였습니다.
- 전반적으로 Field 에서 Reactjs 가 약 두 배 가량 높은 것으로 나타납니다.
- Reactjs 가 높은 사용률이 발생하여 더 좋게 느끼실 수 있지만
- 반대로 생각하여 Vuejs 를 포기하게 된다면 Reactjs 의 50% 에 해당하는 만큼의 기회를 잃을 수 있다는 의미가 될 수 있습니다.


## 2-3. Opensource Usage
- Reactjs 는 Facebook 에 의해, 
- Vuejs 는 Evan You 개인에 의해 발표되었다고 말씀드린 바 있습니다.
- 오픈소스 기여 측면에서 
	- React 는 미국의 한 기업에서 출발하여 커뮤니티 위주로 형성되었고
	- Vuejs 는 중국의 한 개발자로부터 출발하여 팀 위주로 형성되었습니다.
		- 이러한 특성에 의거하여
		- Reactjs 는 다양한 Contributor, 개방적인 성격을 띄는 반면
		- Vuejs 는 소수적인 Contributor, 폐쇄적인 성격을 띄고 있습니다.
			- 실제로 Contributor 숫자는 Reactjs 1645명, Vuejs 365명입니다.
			- 이러한 특성 때문에 Vuejs 의 Issue, PR 등에서 종종 중국어를 볼 수 있는데
			- 한국인 오픈소스 입장에서는 당혹스러운 부분이 존재할 수 있으며,
			- Vuejs 의 팀 위주의 폐쇄적인 성격에 의해 Issue 와 PR 의 Deny 발생률이 높을 수 있습니다.

## 2-4. Library Usage
- SPA 를 개발함에 있어 전역상태관리, SSR, Bundler 라이브러리 사용이 필수적일 수 있습니다.
- Reactjs 는 
	- 전역상태관리로 Redux, Recoil, Mobx
	- SSR hybrid 을 위해 Nextjs, Gatsby
	- Bundler 로 Webpack, Vite 를 활용합니다
- Vuejs 는
	- 전역상태관리로 Vuex, 
	- SSR hybrid 를 위해 Nuxtjs
	- Bundler 로 VueSFC, Vite 를 활용합니다. 
- Reactjs 는 선택지가 많고, Vuejs 는 선택지가 적다고 크게 평가해볼 수 있습니다.
	- 저는 개인적으로 선택지가 적은 것을 선호하는 편인데, 개인의 편차에 따라 다를 것이라 생각합니다.
- 또 다른 주요한 차이점으로, Vuejs 의 대부분의 라이브러리는 Vuejs 팀이 직접 개발했다는 점입니다
	- 특히 요즘 ESBuild 를 활용한 Vite Bundler 가 Reactjs, Vuejs 를 가리지 않고 큰 인기를 얻고 있는데, 이 Vite 역시 Vuejs 팀에 의해, 주로 Vuejs 를 위해 개발되었다는 점입니다.
	- Third-party-library 를 활용함에 있어 호환성이 높은 Vuejs 가 유리할 수 있습니다.


### 2-a. Appendix: Vue is weak on type?
- 흔히 Vuejs 가 type에 약하다는 얘기가 있습니다.
	- 불과 몇 년전까지만 하더라도 저도 충분히 동의할 내용인 것 같습니다
	- 하지만 버전이 올라가며 vuejs 도 타입에 대한 호환이 충분해졌습니다.
- Vue가 기본적으로 Prop type 에 대한 Schema를 지향하기 때문에 오히려 React보다 타입 호환이 강할 수 있습니다.

### 2-b. Appendix: Vue is heavy?
- 간혹 Vuejs 가 무겁기 때문에 쓰지 않는다는 얘기도 있습니다.
- 이는 정확히 틀린 얘기입니다.
- Reactjs 가 Vuejs 에 비해 일반용에서 약 30%, 개발용에서 300% 무겁습니다.
- 각자 부가적인 router, global state management 등을 추가하였을 때에도 2-4 Library usage에서 말씀드렸듯, Reactjs 가 훨씬 무거워지게 됩니다.

# 3. Reactjs VS Vuejs ON CODE-LEVEL

## 3-1. Overview
- Reactjs 는 MVC Pattern 을 지향하며, .jsx, 즉 Extendted js 파일을 활용합니다
- Vuejs 는 MVVM Pattern 을 지향하며, .vue 파일을 활용합니다.
- 이후 실습을 진행하며 차차 살펴보겠습니다.


## 3-2. Installation
- Reactjs
>>> npx create-react-app <project-name>
- Vuejs
>>> npm create vue@latest

## 3-3. CSS
- Reactjs 는 별도 파일에서 CSS 를 정의합니다.
	- 대부분 styled-component, emotionjs 등 외부 라이브러리들을 주로 활용하지만
	- .module.css 파일을 정의하여 해당하는 파일에 대해서만 스타일을 정의할 수 있습니다.
- Vuejs 는 파일 내에서 다룹니다. 하단의 style 태그를 활용하여 정의할 수 있습니다.
	- style 은 SPA 특성상 전체 시스템의 스타일에 영향을 끼칩니다.
	- style scoped 는 해당 파일 내의 스타일에 대해서만 영향을 끼칩니다.

## 3-4. Component
- 컴포넌트의 간단한 예시로, name 과 age 값을 받아 동적으로 구현하는 컴포넌트를 각각 작성하였습니다.
- Reactjs 는 컴포넌트를 정의하기 위해 주로 Functional component 를 선언하고 
	- 인자로 Props 를 받습니다.
- Vuejs 는 컴포넌트를 정의하기 위해 template 을 선언하고, script 부분에서 props 를 schema 형식으로 받을 수 있습니다.
- dynamic 한 값을 가지는 변수를 위해 react 는 single bracket, vue 는 double bracket 으로 구성된 것도 확인하실 수 있습니다.

## 3-5. State
- 간단한 예시를 위해 카운트를 1씩 증가시키는 예제를 구현하였습니다.
- Reactjs 는 state를 활용하기 위해 useState 라는 hook 을 활용할 수 있습니다.
	- useState hook 의 특징은, 원본 state 는 오직 readonly 하고, 변경에 추적 가능하며, 
	- 값의 변화를 위해서는 setState setter 만을 활용해야하여 데이터 변경이 단방향이라는 특징이 발생하게 됩니다.
	- 또한 핸들러를 사용하기 위해서 onClick 과 같이 attribute 로 핸들러를 제공할 수 있습니다.
- Vuejs 는 state 를 활용하기 위해 reactive 라는 hook 을 활용할 수 있습니다.
	- 작동방식은 React 와 거의 유사하며
	- 특징으로는 setter 메소드를 통하지 않고 원본 state 자체를 변화시킬 수 있습니다.
		- 이러한 부분은 Parent-child component 간의 양방향에서의 데이터 변경이 가능하다는 점으로 작용합니다.

## 3-6. Effect
- State 에서 사용하였던 예제에서 카운트가 변경될 때마다 로그를 출력하는 로직을 추가하였습니다.
- Reactjs 는 변경 감지를 위해 useEffect 라는 hook 을 활용할 수 있습니다.
	- useEffect 의 첫번째 인자는 callback function, 두번째 인자로는 depedency  를 가지며
	- depdendency 내부의 변수에 대해 변경사항이 발생할 때마다 이를 감지하여 callback function 을 실행합니다.
	- component mount, dependency 변경 시 작동한다는 특징이 있습니다.
- Vuejs 는 변경감지를 위해 watch 라는 hook 을 활용할 수 있습니다.
	- React 의 useEffect hook 과 거의 유사합니다.
	- 첫번째 인자로 변경을 감지할 dependency 를, 두번쨰 인자로 callback 을 받습니다. 
	- 특징으로 변경되기 직전의 oldValue 를 callback function 에서 제공하는데, 이 부분은 Reactjs 에서 존재하지 않는 기능입니다.


# 4. Reactjs VS Vuejs ON DEVELOPMENT
- react와 vue를 이용해서 간단한 todo list application 을 만들어 보겠습니다.
- 같은 기능에 대해 react와 vue를 번갈아가며 코딩 시현을 보여드리겠습니다.
- 조금은 다른 코드의 모습을 띄지만, 비슷한 동작을 한다는 것에 집중하시면 좋겠습니다.

# 5. Conclusion
- React 와 Vue 에 대해 개념부터, 필드, 코드레벨, 실습까지의 차이를 살펴보았습니다
- 각각 달라보이지만, 사실은 같은 동작을 하고 있다는 모습을 눈치 채셨을까요?
- 영상에 활용한 코드와 자료는 이 깃허브 링크를 통해 확인하실 수 있습니다
- 혹시나 궁금하거나 질문사항이 있다면 유튜브의 댓글도 괜찮고, 직접 이메일 남겨주셔도 괜찮습니다
- 영상 초반에 말씀드렸듯, 여러분들께서 framework 에 얽매이지 않아도 된다는 것을 깨달으셨을거라 생각합니다
- 이상으로 영상 마치겠습니다 시청해주셔서 감사드립니다

