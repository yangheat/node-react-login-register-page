# express install

- 'package.json'의 'script' 항목에 "start": node start" 추가
  - 'npm run start' 실행 시 node 실행

# mongoose install

- MongoDB를 원할하게 사용할 수 있도록 제공하는 패키지

# MongoDB 의 모델과 스키마

- 스키마는 일반적으로 생각하는 테이블 스키마를 생각하면 될 것 같음.
- 모델은 스키마를 감싸고 있는 것으로 보아 데이터베이스로 보면 될 것 같음.

# gitignore 캐시 제거

- git rm --cached [파일/폴더명] -r

# 안전한 통신을 위한 git ssh 생성

- https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

# ./node_modules은 git에 올릴 필요없음

- 패키지 설치 시 자동으로 `package.json`의 `dependencies` 정의되는데 `npm install` 입력 시 모든 패키지를 설치

# npm i body-parser

# postman install

- https://www.postman.com/downloads/

# 개발자용으로 nodemon install

- nodemon은 watch 기능을 가짐
- npm i nodemon --save-dev
- 'package.json'의 'devDependencies' 항목에 nodemon 내용이 작성됨.

# 코드내 비밀정보 보호하기(몽고DB URI, 아이디, 패스워드)

- './config/development.js'는 local 환경에서 개발할 때 사용
- '/config.productuon.js'는 실제 배포 환경에서 사용
  -- HEROKU에서 가져옴

# 비밀번호 암호화

- npm i bcrypt

# 토큰 만들기

- npm i jsonwebtoken

# 생성한 토큰을 쿠키에 저장

- npm i cookie-parser

# 라우터 기능

- ㅉreact-router-dom

# axios 설치

- npm i axios

# 프론트, 백엔드 동시 실행

- npm iconcurrently

# 프론트엔드 css 프레임워크 antd 설치

- npm i antd

# 리덕스

- 리덕스 스토어를 통해 컴포넌트의 state값을 공유하여 상위의 상위 컴포넌트에서도 state 값을 사용할 수 있도록 도와준다.
- 리덕스 실행 순서는 React Component, Dispatch(action), action, reducer, stort, subscribe 순서이다
- npm i redux react-redux redux-promise redux-thunk
- 일반적으로 리덕스는 object의 action을 사용하지만 Promise, Function 또한 사용한다.
  - 따라서 더 나은 사용을 위하여 dispatch에 function을 받는 방법을 알려주는 redux-thunk와 dispatch에 Promise를 받는 방법을 알려주는 redux-promise를 사용한다.

# 리듀서

- 리듀서는 각자의
- 리듀서는 state 변화한 값만 리턴하며 각자마다 우유
