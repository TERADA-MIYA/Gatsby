---
title: '제이쿼리 배우기 2 - jQuery의 선택자, Selector'
date: '2019-12-09'
excerpt: '제이쿼리의 선택자(Selector)에 대해서'
categories: 'javascript'
tags: ['jquery', 'javascript']
---

<!-- Post ID : h2e11xEh37 -->

<!--Language Button HTML -->
<span><a class="jQuery"><i class="fab fa-ravelry"></i> jQuery</a><a class="jQueryVer">3.2.1</a></span>  <span><a class="HTML"><i class="fab fa-html5"></i> HTML</a><a class="HTMLVer">5</a></span>  <span><a class="CSS"><i class="fab fa-css3-alt"></i> CSS</a><a class="CSSVer">3</a></span>  <span><a class="Javascript"><i class="fab fa-js-square"></i> Javascript</a><a class="Javascriptver">ES8</a></span>
<!--Language Button HTML -->

## 개요
[제이쿼리 배우기 1 - jQuery란?](https://terada-dante.github.io/javascript/jQuery1/)이라는 포스트에서 jQuery의 기본문법에 대해 잠깐 언급했습니다. 그러면서 jQuery의 선택자에 대해서 간단히 설명한 적이 있었습니다. 

jQuery의 선택자는 HTML 요소(element)를 선택하고 조작하는데 필요한 아주 중요한 키워드입니다. jQuery는 HTML 요소를 name, id, class, type, attribute, value 등으로 특정할 수 있게 해주고, 심지어는 jQuery만의 특별한 선택자 또한 가지고 있습니다.

이번 포스트는 jQuery의 문법에 앞서 jQuery의 선택자, Selector에 대해서 설명합니다.

## 기본 선택자
HTML 요소를 선택하는 방법은 다음과 같습니다.<br>
~~~javascript
const target = $('선택자');
~~~

HTML 요소의 경우,
~~~javascript
const target = $('p');
// <p> 요소 선택
const target = $('a');
// <a> 요소 선택
const target = $('button');
// <button> 요소 선택
~~~
id의 경우에는 `#`을, class의 경우에는`.`을 이용하여 선택합니다.

|            HTML             |     jQuery      | Remark |
| :-------------------------: | :-------------: | :----: |
|  <div id="target1"></div>   | `$('#target1')` |   id   |
| <div class="target2"></div> | `$('.target2')` | class  |

## 기타 선택자
이하에서 다양한 jQuery의 선택자에 대해 설명하겠습니다.

|         jQuery         |                                설명                                 |
| :--------------------: | :---------------------------------------------------------------: |
|         $("*")         |                           모든 HTML 요소 선택                           |
|        $(this)         |                           현재 HTML 요소 선택                           |
|      $("p.intro")      |                 `<p>` 요소 중 class가 "intro"인 요소 선택                  |
|      $("p:first")      |                          첫번째 `<p>` 요소 선택                          |
|    $("ul li:first")    |                  첫번째 `<ul>` 요소의 첫번째 `<li>` 요소 선택                  |
| $("ul li:first-child") |                  모든 `<ul>` 요소의 첫번째 `<li>` 요소 선택                   |
|      $("[href]")       |                 href 속성(attribute)을 가지는 모든 요소 선택                  |
|   $("a[attr='val']")   |    `<a>` 요소 중 속성(attribute)이 'attr'이며 값(value)이 'val' 인 요소 선택     |
|  $("a[attr!='val']")   | `<a>` 요소 중 속성(attribute)이 'attr'이며 값(value)이 'val' 이 **아닌** 요소 선택 |
|      $(":button")      |         `<button>` 요소와 `<input>`요소중 type이 'button'인 요소 선택         |
|      $("tr:even")      |                       `<tr>` 요소의 짝수번째 요소 선택                       |
|      $("tr:odd")       |                       `<tr>` 요소의 홀수번째 요소 선택                       |

<!-- Main content-->

<!-- Main content-->
