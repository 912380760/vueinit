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

### ref 和 #refs 

