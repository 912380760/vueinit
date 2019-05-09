百分比:
- width/height: 按父盒子的宽高

- margin/padding: 按父盒子的宽度
relative(left/top): 按父盒子的宽度

- absolute(left/top): 按定位依据对象(最近的relative父级对象)的宽高
- transform(translateX/Y): 按盒子自身的宽高(translateY会覆盖translateX);

- display: flex; 如果父盒子是flex，子元素的100%,相当于flex: 1;

flexBug position:absolute;下flex:1；计算宽度有问题；
