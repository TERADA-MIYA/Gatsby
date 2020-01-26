---
title: "webhacking.kr 14번 문제"
date: 2019-11-23
comments: true
excerpt: "간단한 javascript 코드 해석, webhacking.kr 14번 문제입니다."
categories: "webhacking"
author_profile: false
header:
    teaser: "https://raw.githubusercontent.com/TERADA-DANTE/TERADA-DANTE.github.io/master/_images/teaser/webhacking_teaser.jpg"
toc: true 
toc_label: "이번 포스트에서는 ..." 
toc_icon: "chess-rook"
toc_sticky: true
---
<!-- Post ID : QDWOBnLb6S -->
<!--Language Button HTML -->
<span><a class="Javascript"><i class="fab fa-js-square"></i> Javascript</a><a class="Javascriptver">ES8</a></span>
<!--Language Button HTML -->
<!-- Main content-->

## 개요
Webhacking.kr에는 수많은 문제들이 있습니다. 그중에서도 유난히도 어려운 문제들이 있는가 하면 간단하고 쉬운 문제들도 있습니다. 자바스크립트를 해석하는 문제는 쉬운 문제에 속하는데요. 이번 포스트는 webhacking.kr 14번 문제에 관한 것입니다.

페이지의 첫 화면은 다음과 같은 폼이 하나 등장합니다.

![QDWOBnLb6S_1](https://i.imgur.com/h34dSg7.png)

sleep(5), 1, 0 과 같은 데이터를 입력해봐도 wrong이라는 alert만 뜰 뿐입니다. 아무래도 문제는 SQL Injection 보다는 Javascript에 관한 것 같습니다. 개발자모드(Ctrl+Shift+I)를 통해 페이지의 소스코드를 분석해보면 `<script></script>` 사이에 문제가 숨겨져 있습니다. 문제는 다음과 같습니다.

~~~javascript
function ck(){
  var ul = document.URL;
  ul = ul.indexOf(".kr");
  ul = ul*30;
  if(ul == pw.input_pwd.value) {
      location.href = "?" + ul * pw.input_pwd.value; 
      }
  else {
       alert("Wrong"); 
       }
}
~~~

소스코드가 짧고 간단해서 분석은 필요하지 않을 것 같습니다. [풀이](#풀이)에서 소스코드의 해설을 제공하고 문제를 해결하겠습니다. 

## 분석

이번 포스트에서는 분석을 생략합니다.

## 풀이

소스코드를 해석하면 다음과 같습니다.
~~~javascript
function ck(){
  var ul = document.URL;
  // ul = 페이지의 주소 저장
  ul = ul.indexOf(".kr");
  // ul = 문자열 속 ".kr"의 위치를 저장 = 18
  ul = ul*30;
  // ul = 18*30 = 540
  if(ul == pw.input_pwd.value) {
      location.href = "?" + ul * pw.input_pwd.value; 
      }
  // ul 과 폼에 입력한 값이 같을 때
  // "./?ul*폼에입력한값" 으로 페이지 이동
  // == "./?291600"
  else {
       alert("Wrong"); 
       }
}
~~~
if 문이 true가 되는 경우는 폼에 입력한 값과 ul 값이 같을 경우입니다. ul 값은 540으로 고정되있으므로 폼에 540을 입력하고 check을 클릭합니다. 간단하게 문제가 해결됩니다. 아니면 강제로 페이지의 URL을 `"./?291600"`으로 변경해줘도 되겠죠?

check 버튼을 클릭한다는 것(onclick)은 ck()를 실행시키는 것입니다. 엔터는 다른 결과를 일으킬 수 있습니다.
{: .notice--info}

<!-- Main content-->

<!-- Javascript -->

<!-- Javascript -->

<!-- CSS -->

<!-- CSS -->
