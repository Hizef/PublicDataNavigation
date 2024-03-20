# PublicDataNavigation

---

공공 데이터와 API를 이용하여 기존 존재하던 네비게이션을 구축하고, 개선점을 적용한 프로젝트입니다.

## 프로젝트 소개

---

"기존 존재하는 네비게이션을 이용하면서 불편했던 점을 개선하자"라는 의견에서 시작된 반응형 웹 앱 페이지입니다. 추후 계속 추가되어 나갈 예정입니다.

## 개발 기간

### 기획 기간

---

2024.03.12 ~ 2024.03.15

### 구현 기간

---

## 개발자 소개

---

## 프로그램 설치 방법

### ESLint 설치

---

1. npm init -y을 사용해서 package.json 설치

-   터미널 열기 (ctrl + `)를 한 후 입력.

2. npm init @eslint/config 으로 EsLint 설정

-   여러 질문을 답한 후 .eslintrc.~ 파일이 생겼다면 esLint 설치가 끝났다는 것.

### Prettier 설치

---

1. npm i -D prettier eslint-config-prettier 입력

-   prettier와 eslint-config-prettier 설치하는 명령어.

2. 루트 폴더에 .prettierrc 라는 파일을 생성.

3. 안에 Prettier Options를 참고하여 설정값 입력.

4. ESLint와 충돌을 방지하기 위해 .eslintrc.~ 파일 안에 extends 부분을 extends: ['질문에서 설정한 기본 값', 'prettier'], 로 설정.

> 만약 vscode 사용시 ESLint와 Prettier 확장 프로그램을 설치하고 설정(Ctrl + ,)에서 settings.json 파일에 들어가 다음 코드를 입력하면 된다
>
> > "editor.codeActionsOnSave": { "source.fixAll.eslint": true }, "editor.defaultFormatter": "esbenp.prettier-vscode", "editor.formatOnSave": true,


## Github 설치

---

1. .git 다운로드 (https://git-scm.com/downloads)

2. git 최초 설정 (사용자 이름, 이메일 설정)

> 1. git bash 켜기

> 2. 입력

>>git config --global user.name "Your Name"

>>git config --global user.email you@example.com 

3. github 가입

4. github 로그인 후 your repositories로 이동

5. 오른쪽 위 New 초록색 버튼 클릭

> 레포지토리 이름(프로젝트 이름 작성)
> Add a README file 선택

6. 생성되고 나서 "…or create a new repository on the command line"을 개발 도구 터미널에 한 줄씩 작성

> 1. git init
> 2. git add README.md
> 3. git commit -m "first commit"
> 4. git branch -M main
> 5. git remote add origin https://github.com/Hizef/111.git
> 6. git push -u origin main
