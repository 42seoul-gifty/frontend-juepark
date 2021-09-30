# frontend-juepark

**[clone 전 환경설정]**

1.node 설치

- 버전확인 명령어
```bash
node --version
```

- 설치되어있지 않다면 [설치](https://nodejs.org/ko/download/)한다.(플랫폼에 맞게 설치)

- node를 설치하면 npm을 사용할 수 있다.   
  npm: node package manager   


**[로컬에서 설치 및 실행]**

1. `git clone`으로 저장소를 받아옵니다.

```bash
git clone <https://github.com/42seoul-gifty/frontend-juepark.git>
```

1. 저장소가 저장된 폴더로 이동합니다.

```bash
cd frontend-juepark
```

2. 애플리케이션 종속성을 설치 및 웹앱을 실행합니다.

```bash
npm install
npm start
```
<br/>


**[배포 방법]**

- commit 후 push를 하면 github action으로 자동으로 배포가 됩니다.

1. 터미널에서 Visual Studio Code를 실행하거나 Visual Studio Code에서 해당 폴더를 엽니다.

* Terminal에서 vsc열기
  * 레포안으로 이동
```bash
cd frontend-juepark
```
  * Visual Studio Code열기
```bash
code .
```

* Visual Studio Code 프로그램 열기
  * `Open folder` 누르고 저장소 찾아 열기  

2. commit, push 합니다.

- [배포한 주소 링크](http://gifty-juepark.s3-website.ap-northeast-2.amazonaws.com/)
