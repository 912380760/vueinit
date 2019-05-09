### vue computed
计算属性可以设置getter 和 setter
``` JS
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
// 现在再运行 this.fullName = 'John Doe' 时，setter 会被调用，vm.firstName 和 vm.lastName 也会相应地被更新。
```

### watch 'a.b'
可以通过'a.b'的方式监听this.a.b

### $attrs
在组件实例上绑定的attr属性都可以通过$attrs获取

### $listeners
在组件实例上绑定的的所有自定义事件可以通过$listeners获取

### .sync
.sync修饰符只是update:myPropName模式下的语法糖  
不能和表达式一起使用 (例如 v-bind:title.sync=”doc.title + ‘!’” 是无效的)。
``` html
<!-- 以下两个是相同的 -->
<text-document
  v-bind:title="title"
  v-on:update:title="title = $event"
></text-document>

<text-document
  :title.sync="title"
></text-document>
```

### ref 和 $refs 
ref 被用来给元素或子组件注册引用ID。引用ID将会注册在父组件的 $refs 对象上。如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例：
$refs 如果ref 引用的是一个组件,通过这个实例是可以调用它的方法和属性

### $parent
用来从一个子组件访问父组件的实例

### provide 和 inject
依赖注入,允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。
``` js
// 父级组件提供 'foo'
var Provider = {
  provide: {
    foo: 'bar'
  },
  // ...
}

// 子组件注入 'foo'
var Child = {
  inject: ['foo'],
  created () {
    console.log(this.foo) // => "bar"
  }
  // ...
}
```

### $forceUpdate
强制更新Vue数据

### vueBus $emit $on $off
跨组件分发事件
``` js
// app.js
var eventBus = {
  install(Vue,options) {
      Vue.prototype.$bus = vue
  }
};
Vue.use(eventBus);

// 在不同组件中使用
this.$bus.$emit('todoSth', params);
this.$bus.$on('todoSth', (params) => {
  //todo something
})
```

### slot
通过插槽传递组件内数据
``` html
<!-- current-user.vue components -->
<template>
  <span>
    <slot v-bind:user="user">
      {{user.lastName}}
    </slot>
  </span>  
</template>

<!-- user views page -->
<current-user>
  <template v-slot:default="slotProps">
    {{ slotProps.user.firstName }}
  </template>
</current-user>
```

### vue-router props
``` js
// router.js
{
  path: xxx,
  component: () => import('@/views/xxx.vue'),
  props: route => ({
    aaa: route.query.aaa,
  }),
}

// xxx.vue views
export default {
  name: 'xxx',
  props: ['aaa'],
}  
```

### 过渡
通过以下特性来自定义过渡类名
- enter-class
- enter-active-class
- enter-to-class (2.1.8+)
- leave-class
- leave-active-class
- leave-to-class (2.1.8+)

``` HTML
<transition
  enter-active-class="animated tada"
  leave-active-class="animated bounceOutRight"
>
  <p v-if="show">hello</p>
</transition>
```

### mixin
mixin分发Vue组件中的可复用功能,当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。