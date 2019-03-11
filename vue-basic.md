#Vue
##L-1
###实例化Vue对象
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

##L-2
###Vue属性绑定
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