---
layout: single
title: Javascript로 시계 만들기! (1/2)
date: 2019-10-03 14:01
categories : "Javascript CSS"
comments: true
---

이번 포스트를 통해 `Javascript` 로 현재 시간을 나타내는 시계를 만들어봅시다.

우선 `index.html`, `index.js`, `index.css` 를 생성합니다. 경로는 다음과 같습니다.

~~~~javascript
root ─ index.html
     └ index.js
     └ index.css
~~~~

이후 `index.html`에 `div`을 생성하고 `clock`이라고 `id`를 지어줍니다.

`index.html`

```javascript
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>"TERADA'S CLOCK"</title>
</head>

<body>
    <div id="clock">00:00:00</div>
</body>
<script src="index.js"></script>

</html>
```



이 `div`이 시계를 표시할 것입니다. 현재까지는 다음과 같은 결과가 나타나겠죠.![1570075993141](https://drive.google.com/uc?id=1c3qpC4ioDJ-1Z8YQmRQqW5XZ_YBMSXYE)

&nbsp;&nbsp;&nbsp;&nbsp;이제 `Date object`를 사용해서 시계를 구현합니다. `div`은 hh:mm:ss 형식이니 시각, 분, 초를 각각 가져와야합니다. 또한 가져온 값으로 `div` 내용을 수정해야하니 코드는 다음과 같이 될 것입니다.

`index.js`

```javascript
const clock = document.querySelector("#clock");

function run() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    clock.innerHTML = `${hour}:${minute}:${second}`;
}
run();
```

`html`을 열어서 확인해보면 다음과 같은 결과를 얻을 수 있습니다. 

![1570078337671](https://drive.google.com/uc?id=1_89rhVkjjy0wyALICKvqTw3EXHE4UE4w)

> Issue 1
`run` 함수는 페이지가 로드되고  한 번만 실행되니, 제대로된 시계역할을 하지 않고 있습니다. 따라서 페이지가 로드되고 나서도 매 초마다 `run` 함수가 실행될 수 있도록 다음과 같이 코드를 작성해야합니다.

`index.js`

```javascript
const clock = document.querySelector("#clock");

function run() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}
run();

setInterval(run, 1000);
```

*Note*: `setInterval`의 2번째 인자 1000은 1000ms(1s)를 의미합니다.

> Issue 2
시계의 표시형식이 00:00:00 이므로, 10 이하의 수에 대하여 0N형식으로 표시되도록 코드를 수정해야 합니다.
따라서 `clock.innerText`부분을 다음과 같이 수정합니다.

~~~~javascript
clock.innerText = `${hours<10?`0${hours}`:`${hours}`}:${minutes < 10 ? `0${minutes}`:`${minutes}`}:${seconds<10? `0${seconds}`:`${seconds}`}`;
~~~~

이제 매초마다 갱신되는 시계가 완성되었습니다!

00:00:00
{:#clock}

<script>
const clock = document.querySelector("#clock");

function run() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clock.innerText = `${hours<10?`0${hours}`:`${hours}`}:${minutes < 10 ? `0${minutes}`:`${minutes}`}:${seconds<10? `0${seconds}`:`${seconds}`}`;
}
run();

setInterval(run, 1000);
</script>

다음 포스트는 이 `HTML`에 약간의 `CSS`를 추가하는 것에 관하여 올리겠습니다.

<style>
.page h1:before {
    padding-right: 0.3em;
    color: #9ddcff;
    content: "/";
}

.page h2:before {
    padding-right: 0.3em;
    color: #9ddcff;
    content: "//";
}

.page h3:before {
    padding-right: 0.3em;
    color: #9ddcff;
    content: "///";
}

.page h4:before {
    padding-right: 0.3em;
    color: #9ddcff;
    content: "////";
}

p>code,
a>code,
li>code,
figcaption>code,
td>code {
    padding-left: 0.18rem;
    padding-right: 0.18rem;
    padding-top: 0.09rem;
    font-size: 0.8em;
    background: #fff;
    color: #5283f3;
    border: solid 1px #e1e4e5;
    border-radius: 0px;
    font-family: open sans,clear sans,helvetica neue,Helvetica,Arial,sans-serif;
}
</style>