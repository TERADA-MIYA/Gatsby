---
title: "webhacking.kr 15번 문제"
date: 2019-11-26
comments: true
excerpt: "webhacking.kr 에서 가장 쉬운 문제?!"
categories: "webhacking"
author_profile: false
header:
    teaser: "https://raw.githubusercontent.com/TERADA-DANTE/TERADA-DANTE.github.io/master/_images/teaser/webhacking_teaser.jpg"
toc: true 
toc_label: "이번 포스트에서는 ..." 
toc_icon: "chess-rook"
toc_sticky: true
---
<!-- Post ID : h9GWEvJhDL -->
<!--Language Button HTML -->
<span><a class="Javascript"><i class="fab fa-js-square"></i> Javascript</a><a class="Javascriptver">ES8</a></span>
<!--Language Button HTML -->
<!-- Main content-->

## 개요
지금까지 webhacking.kr 문제풀이를 올리면서 어려운 문제도 있었고 쉬운 문제도 있었지만 적어도 배점은 100점 이상이었습니다. 이번문제는 50점짜리 문제로 너무너무 간단한 문제입니다. 이번 포스트에서는 분석과 풀이를 생략하고 빠르고 쉽게 문제를 해결해나가 봅시다.

![h9GWEvJhDL_1](https://raw.githubusercontent.com/TERADA-DANTE/TERADA-DANTE.github.io/master/_images/post/webhacking/h9GWEvJhDL_1.png)

15번 문제를 클릭하자마자 Alert가 등장합니다. 확인을 눌러보면 이전페이지로 이동해버려 문제에 도전조차 할 수 없게 해두었습니다. 어쩌면 이게 문제가 아닐까요?🥶 12번 문제페이지에 접근하기위해서는 자바스크립트 작동을 해제해야합니다. 자바스크립트를 끄는 방법은 간단합니다. 

> 개발자도구(F12) > 세팅(F1) > 디버거(Debugger) > Disable Javascript에 체크

웹 페이지의 드래그 방지가 걸려있는 페이지의 드래그, 복사를 할 때 이 기능을 사용하면 유용합니다.
{: .notice--info}

자바스크립트를 끄고 다시한번 12번 페이지에 접속해봅니다. 자바스크립트가 동작하지 않으니 아무런 Alert도 등장하지 않습니다. 페이지의 소스코드를 확인해보면 다음과 같습니다. 

~~~javascript
...
alert("Access_Denied");
location.href='/';
document.write("<a href=?getFlag>[Get Flag]</a>");
...
~~~

line 4의 document.write가 실행되기도 전에 alert가 등장하고 이전 페이지로 페이지를 이동시키니 [Get Flag]라는 링크를 보지 못했던 거군요. 페이지의 주소를 `../?getFlag`로 이동하여 보겠습니다.

![h9GWEvJhDL_2](https://raw.githubusercontent.com/TERADA-DANTE/TERADA-DANTE.github.io/master/_images/post/webhacking/h9GWEvJhDL_2.png)

Wow..🤣 역대급으로 쉬운문제였습니다. 
<!-- Main content-->

<!-- Javascript -->

<!-- Javascript -->

<!-- CSS -->

<!-- CSS -->
