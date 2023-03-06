#컴퓨터 만드는 설명서 


# 1. 운영체제 설치(노드 14 버전과 npm과 yarn이 모두 설치되어있는 리눅스를 설치)
 FROM node:14

# 2.내 컴퓨터에 있는 폴더나 파일을 도커 컴퓨터 안에 복사하기
#도커 파일이 있는 현 위치에서  index파일을 복사해서 도커 컴퓨터 안에 qqq란 폴더안에 붙여넣기 해줘 
# RUN mkdir qqq
COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
WORKDIR /myfolder/
RUN yarn install

COPY . /myfolder/





# 3. 도커안에서 index.js 실행시키기
#실행 명령어 
CMD yarn start:dev

