# Vue
## L-1
> ### #实例化Vue
对象
```js
new Vue({
    el : "#vue-app",    //el:element 需要获取的元素，一定是HTML中的的根容器元素
    data : {            //用于数据的存储
        name : 'bin'
    },
    methods : {         //Vue的方法列表
        greet : function(str) {
            return str === '' ? 'Hello World!' : str;
        },
        test : function () {
            return this.name;   //方法中使用data数据直接使用this.属性名取出值
        }
    }
})
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>L-1</title>
</head>
<body>
    <!-- vue-app是根容器 -->
    <div id="vue-app">
        <!-- data中的数据,仅限于在Vue根容器下面 -->
        <h1>{{name}}</h1>
        <!-- 根容器中调用方法 -->
        <h1>{{greet('good night!')}}</h1>
    </div>
</body>
</html>
```

## L-2
> ### #Vue属性绑定
```js
new Vue({
    el : "#vue-app",    //el:element 需要获取的元素，一定是HTML中的的根容器元素
    data : {            //用于数据的存储
        name : 'bin',
        website : 'www.qq.com',
        websiteTag : '<a href="www.qq.com">链接</a>
    }
})
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>L-2</title>
</head>
<body>
    <!-- vue-app是根容器 -->
    <div id="vue-app">
        <!-- 标签属性中直接使用data数据会原样输出 -->
        <a href="{{website}}" />
        <!-- 使用属性绑定输出data数据 -->
        <a v-bind:href="website"></a>
        <input type="text" v-bind:value="name" />
        <!-- data数据是标签直接输出会成字符原样输出 -->
        {{websiteTag}}
        <!-- 输出标签 -->
        <p v-html="websiteTag"></p>
    </div>
</body>
</html>
```
## L-3
> ### #事件绑定
```js
new Vue({
    el : '#vue-app',
    data : {
        age : 25,
        x : 0,
        y : 0
    },
    methods : {
        add : function () {
            this.age++;
        },
        sub : function () {
            this.age--;
        },
        addN : function (num) {
            this.age += num;
        },
        subN : function (num) {
            this.age += num;
        },
        updateXY : function (event) {
            //事件自带event参数
            console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
})
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>L-2</title>
    <script src="https://unpkg.com/vue"></script>
    <style>
        #xy{
            width: 300px;
            height: 300px;
            line-height: 300px;
            border: 1px solid #CCC;
            text-align: center;
        }
    </style>
</head>
<body>
    <!-- vue-app是根容器 -->
    <div id="vue-app">
        <!-- 鼠标点击事件 -->
        <!-- 标签操作属性 -->
        <button v-on:click="age++">涨一岁</button>
        <button v-on:click="age--">减一岁</button>
        <!-- 调用方法操作 -->
        <button v-on:click="add">涨一岁</button>
        <button v-on:click="sub">减一岁</button>
        <button v-on:click="addN(10)">涨十岁</button>
        <button v-on:click="subN(10)">减十岁</button>
        <h1>{{age}}岁</h1>
        <!-- 鼠标移动事件 -->
        <div id="xy" v-on:mousemove="updateXY">
            x:{{x}}-y:{{y}}
        </div>
    </div>
</body>
<script src="test.js"></script>
</html>
```
## L-4
> ### #事件修饰符

* stop    阻止单击事件继续传播
* prevent 阻止默认事件
* capture 添加事件监听器时使用事件捕获模式
* self    只当在 event.target 是当前元素自身时触发处理函数
* once    只允许触发一次
* passive 与prevent作用相反，不能与prevent同时使用
```html
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即元素自身触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>
```
> 2.1.4 新增
```html
<!-- 点击事件将只会触发一次 -->
<a v-on:click.once="doThis"></a>
```
不像其它只能对原生的 DOM 事件起作用的修饰符，.once 修饰符还能被用到自定义的组件事件上。

> 2.3.0 新增

Vue 还对应 addEventListener 中的 passive 选项提供了 .passive 修饰符。
```html
<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
<!-- 而不会等待 `onScroll` 完成  -->
<!-- 这其中包含 `event.preventDefault()` 的情况 -->
<div v-on:scroll.passive="onScroll">...</div>
```
这个 .passive 修饰符尤其能够提升移动端的性能。

> ### #键值修饰符

* enter
* tab
* delete (捕获“删除”和“退格”键)
* esc
* space
* up
* down
* left
* right

在监听键盘事件时，我们经常需要检查常见的键值。Vue 允许为 v-on 在监听键盘事件时添加按键修饰符：
```html
<!-- 只有在 `keyCode` 是 13 时调用 `vm.submit()` -->
<input v-on:keyup.13="submit">
```

记住所有的 keyCode 比较困难，所以 Vue 为最常用的按键提供了别名：
```html
<!-- 同上 -->
<input v-on:keyup.enter="submit">

<!-- 缩写语法 -->
<input @keyup.enter="submit">
```

可以通过全局 config.keyCodes 对象自定义按键修饰符别名：

```js
// 可以使用 `v-on:keyup.f1`
Vue.config.keyCodes.f1 = 112
```

## L-5
> ### #双向数据绑定

> 方法1

使用ref属性获取输入值
```js
new Vue({
    el : '#vue-app',
    data : {
        name : '',
        age : ''
    },
    methods : {
        //使用this.$refs获取输入值
        inputName : function () {
            console.log(this.$refs);
            this.name = this.$refs.name.value;
        },
        inputAge : function () {
            console.log(this.$refs);
            this.age = this.$refs.age.value;
        }
    }
})
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>L-2</title>
    <script src="https://unpkg.com/vue"></script>
</head>
<body>
    <!-- vue-app是根容器 -->
    <div id="vue-app">
        <!-- 使用ref属性获取输入值 -->
        <input type="text" ref="name" v-on:keyup="inputName">
        <h1>{{name}}</h1>
        <input type="text" ref="age" v-on:keyup="inputAge">
        <h1>{{age}}</h1>
    </div>
</body>
<script src="test.js"></script>
</html>
```
> 方法2

使用v-model属性进行双向绑定
```js
new Vue({
    el : '#vue-app',
    data : {
        name : '',
        age : ''
    },
    methods : {
    }
})
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>L-2</title>
    <script src="https://unpkg.com/vue"></script>
</head>
<body>
    <!-- vue-app是根容器 -->
    <div id="vue-app">
        <!-- 使用ref属性进行双向数据绑定 -->
        <input type="text" v-model="name">
        <h1>{{name}}</h1>
        <input type="text" v-model="age">
        <h1>{{age}}</h1>
    </div>
</body>
<script src="test.js"></script>
</html>
```

## L-5
>### 计算属性computed

<font color="red">
methods中的方法只要在HTML页面中触发过一次，后面每次触发任意一个方法，这几个方法都会执行，所以使用computed计算属性。

计算属性处理耗时，耗性能的方法。

Vue是将dom拷贝一份形成虚拟dom。

使用computed时，当虚拟dom与原先dom结构不一致时才会触发，一致时不触发对应方法。

使用methods中的方法时，每次触发方法都会执行。
</font>

> methods方法
```js
new Vue({
    el : '#vue-app',
    data : {
        a : 1,
        b : 1,
        age : 25
    },
    methods : {
        addToA : function () {
            console.log('addToA');
            return this.a + this.age;
        },
        addToB : function () {
            console.log('addToB');
            return this.b + this.age;
        },
        addToC : function () {
            console.log('addToC');
            return 0;
        }
    }
})
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>L-2</title>
    <script src="https://unpkg.com/vue"></script>
</head>
<body>
    <!-- vue-app是根容器 -->
    <div id="vue-app">
        <h1>a:{{a}}</h1>
        <h1>b:{{b}}</h1>
        <h1>Add To A:{{addToA()}}</h1>
        <h1>Add To B:{{addToB()}}</h1>
        <h1>Add To B:{{addToC()}}</h1>
        <button @click="a++">AddToA</button>
        <button @click="b++">AddToB</button>
    </div>
</body>
<script src="test.js"></script>
</html>
```
> computed计算属性
```js
new Vue({
    el : '#vue-app',
    data : {
        a : 1,
        b : 1,
        age : 25
    },
    methods : {
    },
    computed : {
        addToA : function () {
            console.log('addToA');
            return this.a + this.age;
        },
        addToB : function () {
            console.log('addToB');
            return this.b + this.age;
        },
        addToC : function () {
            console.log('addToC');
            return 0;
        }
    }
})
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>L-2</title>
    <script src="https://unpkg.com/vue"></script>
</head>
<body>
    <!-- vue-app是根容器 -->
    <div id="vue-app">
        <h1>a:{{a}}</h1>
        <h1>b:{{b}}</h1>
        <!-- computed计算属性不能带括号的方式调用，带括号默认调用methods中的方法 -->
        <h1>Add To A:{{addToA}}</h1>
        <h1>Add To B:{{addToB}}</h1>
        <h1>Add To B:{{addToC}}</h1>
        <button @click="a++">AddToA</button>
        <button @click="b++">AddToB</button>
    </div>
</body>
<script src="test.js"></script>
</html>
```

## L-5
>### #动态绑定CSS样式
```js
new Vue({
    el : '#vue-app',
    data : {
        changeColor : false,
        changeLength : false
    },
    methods : {
    },
    computed : {
        change : function () {
            return {
                changeColor : this.changeColor,
                changeLength : this .changeLength
            }
        }
    }
})
```
```css
div{
    background-color: skyblue;
    color: #FFF;
    width: 200px;
    height: 80px;
    line-height: 80px;
    text-align: center;
}
.changeColor{
    background-color: red;
}
.changeLength{
    width: 300px;
}
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>L-2</title>
    <script src="https://unpkg.com/vue"></script>
    <link rel="stylesheet" href="test.css">
</head>
<body>
    <!-- vue-app是根容器 -->
    <div id="vue-app">
        <!-- 使用v-bind绑定class属性，接收change返回的对象 -->
        <div id="blueDiv" v-bind:class="change" @click="changeColor = !changeColor">点击修改颜色</div>
        <button @click="changeLength = !changeLength">点击修改长度</button>
    </div>
</body>
<script src="test.js"></script>
</html>
```