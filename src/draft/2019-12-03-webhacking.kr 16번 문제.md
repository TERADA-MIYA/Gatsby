---
title: "webhacking.kr 16번 문제"
date: 2019-12-03
comments: true
excerpt: "webhacking.kr 에서 제공하는 자바스크립트 해킹 문제"
categories: "webhacking"
author_profile: false
header:
    teaser: "https://raw.githubusercontent.com/TERADA-DANTE/TERADA-DANTE.github.io/master/_images/teaser/webhacking_teaser.jpg"
---
<!-- Post ID : iNcx43yKb7 -->
<!--Language Button HTML -->
<span><a class="Javascript"><i class="fab fa-js-square"></i> Javascript</a><a class="Javascriptver">ES8</a></span>
<!--Language Button HTML -->
<!-- Main content-->

## 개요
webhacking.kr 14~17번 문제는 자바스크립트에 대한 이해를 요구합니다. 하지만 그 난이도가 SQL Injection이나 PHP에 비해서는 그리 높진 않습니다. 이번 문제는 100점짜리 문제이지만 점수에 비해서는 상당히 쉽습니다. 이번 포스트에서도 분석과 풀이를 생략합니다.

![iNcx43yKb7_1](/assets/images/post/webhacking/iNcx43yKb7_1.png)

페이지의 첫 화면은 별 문자가 있네요. 소스코드를 확인하면 문제의 해결이 이 별 문자와 관계가 있음을 알 수 있습니다.

~~~javascript
 document.body.innerHTML += 
    "<font 
        color=yellow 
        id=aa 
        style=position:relative;
        left:0;
        top:0>
        *
        </font>"

 function mv(cd) {
     kk(star.style.left - 50, star.style.top - 50);
     if (cd == 100) {
         star.style.left = 
            parseInt(star.style.left + 0, 10) + 
            50 + 
            "px";
     }
     if (cd == 97) {
         star.style.left = 
            parseInt(star.style.left + 0, 10) - 
            50 + 
            "px";
     }
     if (cd == 119) {
         star.style.top = 
            parseInt(star.style.top + 0, 10) - 
            50 + 
            "px";
     }
     if (cd == 115) {
         star.style.top = 
            parseInt(star.style.top + 0, 10) + 
            50 + 
            "px";
     }
     if (cd == 124) {
         location.href = 
            String.fromCharCode(cd) + 
            ".php"; 
            // do it!
     }

     function kk(x, y) {
         rndc = Math.floor(Math.random() * 9000000);
         document.body.innerHTML += 
         "<font 
            color=#" + 
            rndc + 
            " id=aa 
            style=position:relative;
            left:" + 
            x + 
            ";top:" + 
            y + 
            " onmouseover=this.innerHTML=''>
            *
            </font>"
        }
    }
~~~
페이지의 `<script></script>`를 나름 보기 좋게 정리해 보았습니다. 이 부분에서는 aa라는 id의 *을 페이지에 추가하고, mv 함수와 kk 함수를 정의합니다. 그런데 페이지의 소스코드🧩를 자세히 보면, 다음과 같은 코드가 존재합니다.

~~~html
<body onload="kk(1,1)" 
      onkeypress="mv(event.keyCode)" 
      bgcolor="black">
~~~

페이지가 로드되면 `kk(1,1)`을 호출하고, 키보드 입력이 있으면 `mv(event.keyCode)`를 실행합니다. 

`key(x, y)` 함수는 별
<!-- Main content-->

<!-- Javascript -->

<!-- Javascript -->

<!-- CSS -->

<!-- CSS -->
