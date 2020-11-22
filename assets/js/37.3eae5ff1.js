(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{391:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"方法语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法语法"}},[t._v("#")]),t._v(" 方法语法")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/ch05-03-method-syntax.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("ch05-03-method-syntax.md"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("\ncommit a86c1d315789b3ca13b20d50ad5005c62bdd9e37")])]),t._v(" "),a("p",[a("strong",[t._v("方法")]),t._v(" 与函数类似：它们使用 "),a("code",[t._v("fn")]),t._v(" 关键字和名称声明，可以拥有参数和返回值，同时包含在某处调用该方法时会执行的代码。不过方法与函数是不同的，因为它们在结构体的上下文中被定义（或者是枚举或 trait 对象的上下文，将分别在第六章和第十七章讲解），并且它们第一个参数总是 "),a("code",[t._v("self")]),t._v("，它代表调用该方法的结构体实例。")]),t._v(" "),a("h3",{attrs:{id:"定义方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义方法"}},[t._v("#")]),t._v(" 定义方法")]),t._v(" "),a("p",[t._v("让我们把前面实现的获取一个 "),a("code",[t._v("Rectangle")]),t._v(" 实例作为参数的 "),a("code",[t._v("area")]),t._v(" 函数，改写成一个定义于 "),a("code",[t._v("Rectangle")]),t._v(" 结构体上的 "),a("code",[t._v("area")]),t._v(" 方法，如示例 5-13 所示：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[derive(Debug)]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("Rectangle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("impl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rectangle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("area")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" rect1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rectangle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The area of the rectangle is {} square pixels."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        rect1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("area")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 5-13：在 "),a("code",[t._v("Rectangle")]),t._v(" 结构体上定义 "),a("code",[t._v("area")]),t._v(" 方法")])]),t._v(" "),a("p",[t._v("为了使函数定义于 "),a("code",[t._v("Rectangle")]),t._v(" 的上下文中，我们开始了一个 "),a("code",[t._v("impl")]),t._v(" 块（"),a("code",[t._v("impl")]),t._v(" 是 "),a("em",[t._v("implementation")]),t._v(" 的缩写）。接着将 "),a("code",[t._v("area")]),t._v(" 函数移动到 "),a("code",[t._v("impl")]),t._v(" 大括号中，并将签名中的第一个（在这里也是唯一一个）参数和函数体中其他地方的对应参数改成 "),a("code",[t._v("self")]),t._v("。然后在 "),a("code",[t._v("main")]),t._v(" 中将我们先前调用 "),a("code",[t._v("area")]),t._v(" 方法并传递 "),a("code",[t._v("rect1")]),t._v(" 作为参数的地方，改成使用 "),a("strong",[t._v("方法语法")]),t._v("（"),a("em",[t._v("method syntax")]),t._v("）在 "),a("code",[t._v("Rectangle")]),t._v(" 实例上调用 "),a("code",[t._v("area")]),t._v(" 方法。方法语法获取一个实例并加上一个点号，后跟方法名、圆括号以及任何参数。")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("area")]),t._v(" 的签名中，使用 "),a("code",[t._v("&self")]),t._v(" 来替代 "),a("code",[t._v("rectangle: &Rectangle")]),t._v("，因为该方法位于 "),a("code",[t._v("impl Rectangle")]),t._v(" 上下文中所以 Rust 知道 "),a("code",[t._v("self")]),t._v(" 的类型是 "),a("code",[t._v("Rectangle")]),t._v("。注意仍然需要在 "),a("code",[t._v("self")]),t._v(" 前面加上 "),a("code",[t._v("&")]),t._v("，就像 "),a("code",[t._v("&Rectangle")]),t._v(" 一样。方法可以选择获取 "),a("code",[t._v("self")]),t._v(" 的所有权，或者像我们这里一样不可变地借用 "),a("code",[t._v("self")]),t._v("，或者可变地借用 "),a("code",[t._v("self")]),t._v("，就跟其他参数一样。")]),t._v(" "),a("p",[t._v("这里选择 "),a("code",[t._v("&self")]),t._v(" 的理由跟在函数版本中使用 "),a("code",[t._v("&Rectangle")]),t._v(" 是相同的：我们并不想获取所有权，只希望能够读取结构体中的数据，而不是写入。如果想要在方法中改变调用方法的实例，需要将第一个参数改为 "),a("code",[t._v("&mut self")]),t._v("。通过仅仅使用 "),a("code",[t._v("self")]),t._v(" 作为第一个参数来使方法获取实例的所有权是很少见的；这种技术通常用在当方法将 "),a("code",[t._v("self")]),t._v(" 转换成别的实例的时候，这时我们想要防止调用者在转换之后使用原始的实例。")]),t._v(" "),a("p",[t._v("使用方法替代函数，除了可使用方法语法和不需要在每个函数签名中重复 "),a("code",[t._v("self")]),t._v(" 的类型之外，其主要好处在于组织性。我们将某个类型实例能做的所有事情都一起放入 "),a("code",[t._v("impl")]),t._v(" 块中，而不是让将来的用户在我们的库中到处寻找 "),a("code",[t._v("Rectangle")]),t._v(" 的功能。")]),t._v(" "),a("blockquote",[a("h3",{attrs:{id:"运算符到哪去了"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运算符到哪去了"}},[t._v("#")]),t._v(" "),a("code",[t._v("->")]),t._v(" 运算符到哪去了？")]),t._v(" "),a("p",[t._v("在 C/C++ 语言中，有两个不同的运算符来调用方法："),a("code",[t._v(".")]),t._v(" 直接在对象上调用方法，而 "),a("code",[t._v("->")]),t._v(" 在一个对象的指针上调用方法，这时需要先解引用（dereference）指针。换句话说，如果 "),a("code",[t._v("object")]),t._v(" 是一个指针，那么 "),a("code",[t._v("object->something()")]),t._v(" 就像 "),a("code",[t._v("(*object).something()")]),t._v(" 一样。")]),t._v(" "),a("p",[t._v("Rust 并没有一个与 "),a("code",[t._v("->")]),t._v(" 等效的运算符；相反，Rust 有一个叫 "),a("strong",[t._v("自动引用和解引用")]),t._v("（"),a("em",[t._v("automatic referencing and dereferencing")]),t._v("）的功能。方法调用是 Rust 中少数几个拥有这种行为的地方。")]),t._v(" "),a("p",[t._v("他是这样工作的：当使用 "),a("code",[t._v("object.something()")]),t._v(" 调用方法时，Rust 会自动为 "),a("code",[t._v("object")]),t._v(" 添加 "),a("code",[t._v("&")]),t._v("、"),a("code",[t._v("&mut")]),t._v(" 或 "),a("code",[t._v("*")]),t._v(" 以便使 "),a("code",[t._v("object")]),t._v(" 与方法签名匹配。也就是说，这些代码是等价的：")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[t._v("# "),a("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[derive(Debug,Copy,Clone)]")]),t._v("\n# "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("Point")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n#     x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("f64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n#     y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("f64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n# "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n#\n# "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("impl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Point")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n#    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("distance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" other"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Point")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("f64")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n#        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x_squared "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("f64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("powi")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("other"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n#        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" y_squared "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("f64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("powi")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("other"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n#\n#        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("f64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sqrt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x_squared "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" y_squared"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n#    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n# "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n# "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" p1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Point")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n# "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" p2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Point")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6.5")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\np1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("distance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("p2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("p1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("distance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("p2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("第一行看起来简洁的多。这种自动引用的行为之所以有效，是因为方法有一个明确的接收者———— "),a("code",[t._v("self")]),t._v(" 的类型。在给出接收者和方法名的前提下，Rust 可以明确地计算出方法是仅仅读取（"),a("code",[t._v("&self")]),t._v("），做出修改（"),a("code",[t._v("&mut self")]),t._v("）或者是获取所有权（"),a("code",[t._v("self")]),t._v("）。事实上，Rust 对方法接收者的隐式借用让所有权在实践中更友好。")])]),t._v(" "),a("h3",{attrs:{id:"带有更多参数的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#带有更多参数的方法"}},[t._v("#")]),t._v(" 带有更多参数的方法")]),t._v(" "),a("p",[t._v("让我们通过实现 "),a("code",[t._v("Rectangle")]),t._v(" 结构体上的另一方法来练习使用方法。这回，我们让一个 "),a("code",[t._v("Rectangle")]),t._v(" 的实例获取另一个 "),a("code",[t._v("Rectangle")]),t._v(" 实例，如果 "),a("code",[t._v("self")]),t._v(" 能完全包含第二个长方形则返回 "),a("code",[t._v("true")]),t._v("；否则返回 "),a("code",[t._v("false")]),t._v("。一旦定义了 "),a("code",[t._v("can_hold")]),t._v(" 方法，就可以编写示例 5-14 中的代码。")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust,ignore extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('fn main() {\n    let rect1 = Rectangle { width: 30, height: 50 };\n    let rect2 = Rectangle { width: 10, height: 40 };\n    let rect3 = Rectangle { width: 60, height: 45 };\n\n    println!("Can rect1 hold rect2? {}", rect1.can_hold(&rect2));\n    println!("Can rect1 hold rect3? {}", rect1.can_hold(&rect3));\n}\n')])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 5-14：使用还未实现的 "),a("code",[t._v("can_hold")]),t._v(" 方法")])]),t._v(" "),a("p",[t._v("同时我们希望看到如下输出，因为 "),a("code",[t._v("rect2")]),t._v(" 的两个维度都小于 "),a("code",[t._v("rect1")]),t._v("，而 "),a("code",[t._v("rect3")]),t._v(" 比 "),a("code",[t._v("rect1")]),t._v(" 要宽：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Can rect1 hold rect2? true\nCan rect1 hold rect3? false\n")])])]),a("p",[t._v("因为我们想定义一个方法，所以它应该位于 "),a("code",[t._v("impl Rectangle")]),t._v(" 块中。方法名是 "),a("code",[t._v("can_hold")]),t._v("，并且它会获取另一个 "),a("code",[t._v("Rectangle")]),t._v(" 的不可变借用作为参数。通过观察调用方法的代码可以看出参数是什么类型的："),a("code",[t._v("rect1.can_hold(&rect2)")]),t._v(" 传入了 "),a("code",[t._v("&rect2")]),t._v("，它是一个 "),a("code",[t._v("Rectangle")]),t._v(" 的实例 "),a("code",[t._v("rect2")]),t._v(" 的不可变借用。这是可以理解的，因为我们只需要读取 "),a("code",[t._v("rect2")]),t._v("（而不是写入，这意味着我们需要一个不可变借用），而且希望 "),a("code",[t._v("main")]),t._v(" 保持 "),a("code",[t._v("rect2")]),t._v(" 的所有权，这样就可以在调用这个方法后继续使用它。"),a("code",[t._v("can_hold")]),t._v(" 的返回值是一个布尔值，其实现会分别检查 "),a("code",[t._v("self")]),t._v(" 的宽高是否都大于另一个 "),a("code",[t._v("Rectangle")]),t._v("。让我们在示例 5-13 的 "),a("code",[t._v("impl")]),t._v(" 块中增加这个新的 "),a("code",[t._v("can_hold")]),t._v(" 方法，如示例 5-15 所示：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[t._v("# "),a("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[derive(Debug)]")]),t._v("\n# "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("Rectangle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n#     width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n#     height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n# "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n#\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("impl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rectangle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("area")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("can_hold")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" other"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rectangle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" other"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" other"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 5-15：在 "),a("code",[t._v("Rectangle")]),t._v(" 上实现 "),a("code",[t._v("can_hold")]),t._v(" 方法，它获取另一个 "),a("code",[t._v("Rectangle")]),t._v(" 实例作为参数")])]),t._v(" "),a("p",[t._v("如果结合示例 5-14 的 "),a("code",[t._v("main")]),t._v(" 函数来运行，就会看到期望的输出。在方法签名中，可以在 "),a("code",[t._v("self")]),t._v(" 后增加多个参数，而且这些参数就像函数中的参数一样工作。")]),t._v(" "),a("h3",{attrs:{id:"关联函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关联函数"}},[t._v("#")]),t._v(" 关联函数")]),t._v(" "),a("p",[a("code",[t._v("impl")]),t._v(" 块的另一个有用的功能是：允许在 "),a("code",[t._v("impl")]),t._v(" 块中定义 "),a("strong",[t._v("不")]),t._v(" 以 "),a("code",[t._v("self")]),t._v(" 作为参数的函数。这被称为 "),a("strong",[t._v("关联函数")]),t._v("（"),a("em",[t._v("associated functions")]),t._v("），因为它们与结构体相关联。它们仍是函数而不是方法，因为它们并不作用于一个结构体的实例。你已经使用过 "),a("code",[t._v("String::from")]),t._v(" 关联函数了。")]),t._v(" "),a("p",[t._v("关联函数经常被用作返回一个结构体新实例的构造函数。例如我们可以提供一个关联函数，它接受一个维度参数并且同时作为宽和高，这样可以更轻松的创建一个正方形 "),a("code",[t._v("Rectangle")]),t._v(" 而不必指定两次同样的值：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[t._v("# "),a("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[derive(Debug)]")]),t._v("\n# "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("Rectangle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n#     width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n#     height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n# "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n#\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("impl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rectangle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("square")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rectangle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rectangle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" size "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("使用结构体名和 "),a("code",[t._v("::")]),t._v(" 语法来调用这个关联函数：比如 "),a("code",[t._v("let sq = Rectangle::square(3);")]),t._v("。这个方法位于结构体的命名空间中："),a("code",[t._v("::")]),t._v(" 语法用于关联函数和模块创建的命名空间。第七章会讲到模块。")]),t._v(" "),a("h3",{attrs:{id:"多个-impl-块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多个-impl-块"}},[t._v("#")]),t._v(" 多个 "),a("code",[t._v("impl")]),t._v(" 块")]),t._v(" "),a("p",[t._v("每个结构体都允许拥有多个 "),a("code",[t._v("impl")]),t._v(" 块。例如，示例 5-16 中的代码等同于示例 5-15，但每个方法有其自己的 "),a("code",[t._v("impl")]),t._v(" 块。")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[t._v("# "),a("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[derive(Debug)]")]),t._v("\n# "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("Rectangle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n#     width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n#     height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n# "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n#\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("impl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rectangle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("area")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("impl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rectangle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("can_hold")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" other"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rectangle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" other"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" other"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 5-16：使用多个 "),a("code",[t._v("impl")]),t._v(" 块重写示例 5-15")])]),t._v(" "),a("p",[t._v("这里没有理由将这些方法分散在多个 "),a("code",[t._v("impl")]),t._v(" 块中，不过这是有效的语法。第十章讨论泛型和 trait 时会看到实用的多 "),a("code",[t._v("impl")]),t._v(" 块的用例。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("结构体让你可以创建出在你的领域中有意义的自定义类型。通过结构体，我们可以将相关联的数据片段联系起来并命名它们，这样可以使得代码更加清晰。方法允许为结构体实例指定行为，而关联函数将特定功能置于结构体的命名空间中并且无需一个实例。")]),t._v(" "),a("p",[t._v("但结构体并不是创建自定义类型的唯一方法：让我们转向 Rust 的枚举功能，为你的工具箱再添一个工具。")])])}),[],!1,null,null,null);s.default=e.exports}}]);