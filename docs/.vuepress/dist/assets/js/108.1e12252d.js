(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{462:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"为使用不同类型的值而设计的-trait-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为使用不同类型的值而设计的-trait-对象"}},[t._v("#")]),t._v(" 为使用不同类型的值而设计的 trait 对象")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/ch17-02-trait-objects.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("ch17-02-trait-objects.md"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("\ncommit 7b23a000fc511d985069601eb5b09c6017e609eb")])]),t._v(" "),s("p",[t._v("在第八章中，我们谈到了 vector 只能存储同种类型元素的局限。示例 8-10 中提供了一个定义 "),s("code",[t._v("SpreadsheetCell")]),t._v(" 枚举来储存整型，浮点型和文本成员的替代方案。这意味着可以在每个单元中储存不同类型的数据，并仍能拥有一个代表一排单元的 vector。这在当编译代码时就知道希望可以交替使用的类型为固定集合的情况下是完全可行的。")]),t._v(" "),s("p",[t._v("然而有时我们希望库用户在特定情况下能够扩展有效的类型集合。为了展示如何实现这一点，这里将创建一个图形用户接口（Graphical User Interface， GUI）工具的例子，它通过遍历列表并调用每一个项目的 "),s("code",[t._v("draw")]),t._v(" 方法来将其绘制到屏幕上 —— 此乃一个 GUI 工具的常见技术。我们将要创建一个叫做 "),s("code",[t._v("gui")]),t._v(" 的库 crate，它含一个 GUI 库的结构。这个 GUI 库包含一些可供开发者使用的类型，比如 "),s("code",[t._v("Button")]),t._v(" 或 "),s("code",[t._v("TextField")]),t._v("。在此之上，"),s("code",[t._v("gui")]),t._v(" 的用户希望创建自定义的可以绘制于屏幕上的类型：比如，一个程序员可能会增加 "),s("code",[t._v("Image")]),t._v("，另一个可能会增加 "),s("code",[t._v("SelectBox")]),t._v("。")]),t._v(" "),s("p",[t._v("这个例子中并不会实现一个功能完善的 GUI 库，不过会展示其中各个部分是如何结合在一起的。编写库的时候，我们不可能知晓并定义所有其他程序员希望创建的类型。我们所知晓的是 "),s("code",[t._v("gui")]),t._v(" 需要记录一系列不同类型的值，并需要能够对其中每一个值调用 "),s("code",[t._v("draw")]),t._v(" 方法。这里无需知道调用 "),s("code",[t._v("draw")]),t._v(" 方法时具体会发生什么，只要该值会有那个方法可供我们调用。")]),t._v(" "),s("p",[t._v("在拥有继承的语言中，可以定义一个名为 "),s("code",[t._v("Component")]),t._v(" 的类，该类上有一个 "),s("code",[t._v("draw")]),t._v(" 方法。其他的类比如 "),s("code",[t._v("Button")]),t._v("、"),s("code",[t._v("Image")]),t._v(" 和 "),s("code",[t._v("SelectBox")]),t._v(" 会从 "),s("code",[t._v("Component")]),t._v(" 派生并因此继承 "),s("code",[t._v("draw")]),t._v(" 方法。它们各自都可以覆盖 "),s("code",[t._v("draw")]),t._v(" 方法来定义自己的行为，但是框架会把所有这些类型当作是 "),s("code",[t._v("Component")]),t._v(" 的实例，并在其上调用 "),s("code",[t._v("draw")]),t._v("。不过 Rust 并没有继承，我们得另寻出路。")]),t._v(" "),s("h3",{attrs:{id:"定义通用行为的-trait"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义通用行为的-trait"}},[t._v("#")]),t._v(" 定义通用行为的 trait")]),t._v(" "),s("p",[t._v("为了实现 "),s("code",[t._v("gui")]),t._v(" 所期望的行为，让我们定义一个 "),s("code",[t._v("Draw")]),t._v(" trait，其中包含名为 "),s("code",[t._v("draw")]),t._v(" 的方法。接着可以定义一个存放 "),s("strong",[t._v("trait 对象")]),t._v("（"),s("em",[t._v("trait object")]),t._v("） 的 vector。trait 对象指向一个实现了我们指定 trait 的类型的实例，以及一个用于在运行时查找该类型的trait方法的表。我们通过指定某种指针来创建 trait 对象，例如 "),s("code",[t._v("&")]),t._v(" 引用或  "),s("code",[t._v("Box<T>")]),t._v(" 智能指针，还有 "),s("code",[t._v("dyn")]),t._v("  keyword， 以及指定相关的 trait（第十九章  "),s("RouterLink",{attrs:{to:"/articles/trpl/ch19-04-advanced-types.html#dynamically-sized-types-and-the-sized-trait"}},[t._v("““动态大小类型和 "),s("code",[t._v("Sized")]),t._v(" trait”")]),t._v(" 部分会介绍 trait 对象必须使用指针的原因）。我们可以使用 trait 对象代替泛型或具体类型。任何使用 trait 对象的位置，Rust 的类型系统会在编译时确保任何在此上下文中使用的值会实现其 trait 对象的 trait。如此便无需在编译时就知晓所有可能的类型。")],1),t._v(" "),s("p",[t._v("之前提到过，Rust 刻意不将结构体与枚举称为 “对象”，以便与其他语言中的对象相区别。在结构体或枚举中，结构体字段中的数据和 "),s("code",[t._v("impl")]),t._v(" 块中的行为是分开的，不同于其他语言中将数据和行为组合进一个称为对象的概念中。trait 对象将数据和行为两者相结合，从这种意义上说 "),s("strong",[t._v("则")]),t._v(" 其更类似其他语言中的对象。不过 trait 对象不同于传统的对象，因为不能向 trait 对象增加数据。trait 对象并不像其他语言中的对象那么通用：其（trait 对象）具体的作用是允许对通用行为进行抽象。")]),t._v(" "),s("p",[t._v("示例 17-3 展示了如何定义一个带有 "),s("code",[t._v("draw")]),t._v(" 方法的 trait "),s("code",[t._v("Draw")]),t._v("：")]),t._v(" "),s("p",[s("span",{staticClass:"filename"},[t._v("文件名: src/lib.rs")])]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("trait")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Draw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("draw")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("span",{staticClass:"caption"},[t._v("示例 17-3："),s("code",[t._v("Draw")]),t._v(" trait 的定义")])]),t._v(" "),s("p",[t._v("因为第十章已经讨论过如何定义 trait，其语法看起来应该比较眼熟。接下来就是新内容了：示例 17-4 定义了一个存放了名叫 "),s("code",[t._v("components")]),t._v(" 的 vector 的结构体 "),s("code",[t._v("Screen")]),t._v("。这个 vector 的类型是 "),s("code",[t._v("Box<dyn Draw>")]),t._v("，此为一个 trait 对象：它是 "),s("code",[t._v("Box")]),t._v(" 中任何实现了 "),s("code",[t._v("Draw")]),t._v(" trait 的类型的替身。")]),t._v(" "),s("p",[s("span",{staticClass:"filename"},[t._v("文件名: src/lib.rs")])]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[t._v("# "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("trait")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Draw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n#     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("draw")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n# "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n#\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("Screen")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" components"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vec")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Box")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("dyn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Draw")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("span",{staticClass:"caption"},[t._v("示例 17-4: 一个 "),s("code",[t._v("Screen")]),t._v(" 结构体的定义，它带有一个字段 "),s("code",[t._v("components")]),t._v("，其包含实现了 "),s("code",[t._v("Draw")]),t._v(" trait 的 trait 对象的 vector")])]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("Screen")]),t._v(" 结构体上，我们将定义一个 "),s("code",[t._v("run")]),t._v(" 方法，该方法会对其 "),s("code",[t._v("components")]),t._v(" 上的每一个组件调用 "),s("code",[t._v("draw")]),t._v(" 方法，如示例 17-5 所示：")]),t._v(" "),s("p",[s("span",{staticClass:"filename"},[t._v("文件名: src/lib.rs")])]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[t._v("# "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("trait")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Draw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n#     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("draw")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n# "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n#\n# "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("Screen")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n#     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" components"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vec")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Box")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("dyn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Draw")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n# "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n#\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("impl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Screen")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" component "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("components"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("iter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("draw")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("span",{staticClass:"caption"},[t._v("示例 17-5：在 "),s("code",[t._v("Screen")]),t._v(" 上实现一个 "),s("code",[t._v("run")]),t._v(" 方法，该方法在每个 component 上调用 "),s("code",[t._v("draw")]),t._v(" 方法")])]),t._v(" "),s("p",[t._v("这与定义使用了带有 trait bound 的泛型类型参数的结构体不同。泛型类型参数一次只能替代一个具体类型，而 trait 对象则允许在运行时替代多种具体类型。例如，可以定义 "),s("code",[t._v("Screen")]),t._v(" 结构体来使用泛型和 trait bound，如示例 17-6 所示：")]),t._v(" "),s("p",[s("span",{staticClass:"filename"},[t._v("文件名: src/lib.rs")])]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[t._v("# "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("trait")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Draw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n#     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("draw")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n# "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n#\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("Screen")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Draw")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" components"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vec")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("impl")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Screen")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Draw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" component "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("components"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("iter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("draw")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("span",{staticClass:"caption"},[t._v("示例 17-6: 一种 "),s("code",[t._v("Screen")]),t._v(" 结构体的替代实现，其 "),s("code",[t._v("run")]),t._v(" 方法使用泛型和 trait bound")])]),t._v(" "),s("p",[t._v("这限制了 "),s("code",[t._v("Screen")]),t._v(" 实例必须拥有一个全是 "),s("code",[t._v("Button")]),t._v(" 类型或者全是 "),s("code",[t._v("TextField")]),t._v(" 类型的组件列表。如果只需要同质（相同类型）集合，则倾向于使用泛型和 trait bound，因为其定义会在编译时采用具体类型进行单态化。")]),t._v(" "),s("p",[t._v("另一方面，通过使用 trait 对象的方法，一个 "),s("code",[t._v("Screen")]),t._v(" 实例可以存放一个既能包含 "),s("code",[t._v("Box<Button>")]),t._v("，也能包含 "),s("code",[t._v("Box<TextField>")]),t._v(" 的 "),s("code",[t._v("Vec<T>")]),t._v("。让我们看看它是如何工作的，接着会讲到其运行时性能影响。")]),t._v(" "),s("h3",{attrs:{id:"实现-trait"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现-trait"}},[t._v("#")]),t._v(" 实现 trait")]),t._v(" "),s("p",[t._v("现在来增加一些实现了 "),s("code",[t._v("Draw")]),t._v(" trait 的类型。我们将提供 "),s("code",[t._v("Button")]),t._v(" 类型。再一次重申，真正实现 GUI 库超出了本书的范畴，所以 "),s("code",[t._v("draw")]),t._v(" 方法体中不会有任何有意义的实现。为了想象一下这个实现看起来像什么，一个 "),s("code",[t._v("Button")]),t._v(" 结构体可能会拥有 "),s("code",[t._v("width")]),t._v("、"),s("code",[t._v("height")]),t._v(" 和 "),s("code",[t._v("label")]),t._v(" 字段，如示例 17-7 所示：")]),t._v(" "),s("p",[s("span",{staticClass:"filename"},[t._v("文件名: src/lib.rs")])]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[t._v("# "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("trait")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Draw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n#     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("draw")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n# "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n#\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("Button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("impl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Draw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("draw")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实际绘制按钮的代码")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("span",{staticClass:"caption"},[t._v("示例 17-7: 一个实现了 "),s("code",[t._v("Draw")]),t._v(" trait 的 "),s("code",[t._v("Button")]),t._v(" 结构体")])]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("Button")]),t._v(" 上的 "),s("code",[t._v("width")]),t._v("、"),s("code",[t._v("height")]),t._v(" 和 "),s("code",[t._v("label")]),t._v(" 字段会和其他组件不同，比如 "),s("code",[t._v("TextField")]),t._v(" 可能有 "),s("code",[t._v("width")]),t._v("、"),s("code",[t._v("height")]),t._v("、"),s("code",[t._v("label")]),t._v(" 以及 "),s("code",[t._v("placeholder")]),t._v(" 字段。每一个我们希望能在屏幕上绘制的类型都会使用不同的代码来实现 "),s("code",[t._v("Draw")]),t._v(" trait 的 "),s("code",[t._v("draw")]),t._v(" 方法来定义如何绘制特定的类型，像这里的 "),s("code",[t._v("Button")]),t._v(" 类型（并不包含任何实际的 GUI 代码，这超出了本章的范畴）。除了实现 "),s("code",[t._v("Draw")]),t._v(" trait 之外，比如 "),s("code",[t._v("Button")]),t._v(" 还可能有另一个包含按钮点击如何响应的方法的 "),s("code",[t._v("impl")]),t._v(" 块。这类方法并不适用于像 "),s("code",[t._v("TextField")]),t._v(" 这样的类型。")]),t._v(" "),s("p",[t._v("如果一些库的使用者决定实现一个包含 "),s("code",[t._v("width")]),t._v("、"),s("code",[t._v("height")]),t._v(" 和 "),s("code",[t._v("options")]),t._v(" 字段的结构体 "),s("code",[t._v("SelectBox")]),t._v("，并且也为其实现了 "),s("code",[t._v("Draw")]),t._v(" trait，如示例 17-8 所示：")]),t._v(" "),s("p",[s("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),s("div",{staticClass:"language-rust,ignore extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("use gui::Draw;\n\nstruct SelectBox {\n    width: u32,\n    height: u32,\n    options: Vec<String>,\n}\n\nimpl Draw for SelectBox {\n    fn draw(&self) {\n        // code to actually draw a select box\n    }\n}\n")])])]),s("p",[s("span",{staticClass:"caption"},[t._v("示例 17-8: 另一个使用 "),s("code",[t._v("gui")]),t._v(" 的 crate 中，在 "),s("code",[t._v("SelectBox")]),t._v(" 结构体上实现 "),s("code",[t._v("Draw")]),t._v(" trait")])]),t._v(" "),s("p",[t._v("库使用者现在可以在他们的 "),s("code",[t._v("main")]),t._v(" 函数中创建一个 "),s("code",[t._v("Screen")]),t._v(" 实例。至此可以通过将 "),s("code",[t._v("SelectBox")]),t._v(" 和 "),s("code",[t._v("Button")]),t._v(" 放入 "),s("code",[t._v("Box<T>")]),t._v(" 转变为 trait 对象来增加组件。接着可以调用 "),s("code",[t._v("Screen")]),t._v(" 的 "),s("code",[t._v("run")]),t._v(" 方法，它会调用每个组件的 "),s("code",[t._v("draw")]),t._v(" 方法。示例 17-9 展示了这个实现：")]),t._v(" "),s("p",[s("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),s("div",{staticClass:"language-rust,ignore extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('use gui::{Screen, Button};\n\nfn main() {\n    let screen = Screen {\n        components: vec![\n            Box::new(SelectBox {\n                width: 75,\n                height: 10,\n                options: vec![\n                    String::from("Yes"),\n                    String::from("Maybe"),\n                    String::from("No")\n                ],\n            }),\n            Box::new(Button {\n                width: 50,\n                height: 10,\n                label: String::from("OK"),\n            }),\n        ],\n    };\n\n    screen.run();\n}\n')])])]),s("p",[s("span",{staticClass:"caption"},[t._v("示例 17-9: 使用 trait 对象来存储实现了相同 trait 的不同类型的值")])]),t._v(" "),s("p",[t._v("当编写库的时候，我们不知道何人会在何时增加 "),s("code",[t._v("SelectBox")]),t._v(" 类型，不过 "),s("code",[t._v("Screen")]),t._v(" 的实现能够操作并绘制这个新类型，因为 "),s("code",[t._v("SelectBox")]),t._v(" 实现了 "),s("code",[t._v("Draw")]),t._v(" trait，这意味着它实现了 "),s("code",[t._v("draw")]),t._v(" 方法。")]),t._v(" "),s("p",[t._v("这个概念 —— 只关心值所反映的信息而不是其具体类型 —— 类似于动态类型语言中称为 "),s("strong",[t._v("鸭子类型")]),t._v("（"),s("em",[t._v("duck typing")]),t._v("）的概念：如果它走起来像一只鸭子，叫起来像一只鸭子，那么它就是一只鸭子！在示例 17-5 中 "),s("code",[t._v("Screen")]),t._v(" 上的 "),s("code",[t._v("run")]),t._v(" 实现中，"),s("code",[t._v("run")]),t._v(" 并不需要知道各个组件的具体类型是什么。它并不检查组件是 "),s("code",[t._v("Button")]),t._v(" 或者 "),s("code",[t._v("SelectBox")]),t._v(" 的实例。通过指定 "),s("code",[t._v("Box<dyn Draw>")]),t._v(" 作为 "),s("code",[t._v("components")]),t._v(" vector 中值的类型，我们就定义了 "),s("code",[t._v("Screen")]),t._v(" 为需要可以在其上调用 "),s("code",[t._v("draw")]),t._v(" 方法的值。")]),t._v(" "),s("p",[t._v("使用 trait 对象和 Rust 类型系统来进行类似鸭子类型操作的优势是无需在运行时检查一个值是否实现了特定方法或者担心在调用时因为值没有实现方法而产生错误。如果值没有实现 trait 对象所需的 trait 则 Rust 不会编译这些代码。")]),t._v(" "),s("p",[t._v("例如，示例 17-10 展示了当创建一个使用 "),s("code",[t._v("String")]),t._v(" 做为其组件的 "),s("code",[t._v("Screen")]),t._v(" 时发生的情况：")]),t._v(" "),s("p",[s("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),s("div",{staticClass:"language-rust,ignore,does_not_compile extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('use gui::Screen;\n\nfn main() {\n    let screen = Screen {\n        components: vec![\n            Box::new(String::from("Hi")),\n        ],\n    };\n\n    screen.run();\n}\n')])])]),s("p",[s("span",{staticClass:"caption"},[t._v("示例 17-10: 尝试使用一种没有实现 trait 对象的 trait 的类型")])]),t._v(" "),s("p",[t._v("我们会遇到这个错误，因为 "),s("code",[t._v("String")]),t._v(" 没有实现 "),s("code",[t._v("rust_gui::Draw")]),t._v(" trait：")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('error[E0277]: the trait bound `std::string::String: gui::Draw` is not satisfied\n  --\x3e src/main.rs:7:13\n   |\n 7 |             Box::new(String::from("Hi")),\n   |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ the trait gui::Draw is not\n   implemented for `std::string::String`\n   |\n   = note: required for the cast to the object type `gui::Draw`\n')])])]),s("p",[t._v("这告诉了我们，要么是我们传递了并不希望传递给 "),s("code",[t._v("Screen")]),t._v(" 的类型并应该提供其他类型，要么应该在 "),s("code",[t._v("String")]),t._v(" 上实现 "),s("code",[t._v("Draw")]),t._v(" 以便 "),s("code",[t._v("Screen")]),t._v(" 可以调用其上的 "),s("code",[t._v("draw")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"trait-对象执行动态分发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#trait-对象执行动态分发"}},[t._v("#")]),t._v(" trait 对象执行动态分发")]),t._v(" "),s("p",[t._v("回忆一下第十章 "),s("RouterLink",{attrs:{to:"/articles/trpl/ch10-01-syntax.html#performance-of-code-using-generics"}},[t._v("“泛型代码的性能”")]),t._v(" 部分讨论过的，当对泛型使用 trait bound 时编译器所进行单态化处理：编译器为每一个被泛型类型参数代替的具体类型生成了非泛型的函数和方法实现。单态化所产生的代码进行 "),s("strong",[t._v("静态分发")]),t._v("（"),s("em",[t._v("static dispatch")]),t._v("）。静态分发发生于编译器在编译时就知晓调用了什么方法的时候。这与 "),s("strong",[t._v("动态分发")]),t._v(" （"),s("em",[t._v("dynamic dispatch")]),t._v("）相对，这时编译器在编译时无法知晓调用了什么方法。在动态分发的情况下，编译器会生成在运行时确定调用了什么方法的代码。")],1),t._v(" "),s("p",[t._v("当使用 trait 对象时，Rust 必须使用动态分发。编译器无法知晓所有可能用于 trait 对象代码的类型，所以它也不知道应该调用哪个类型的哪个方法实现。为此，Rust 在运行时使用 trait 对象中的指针来知晓需要调用哪个方法。动态分发也阻止编译器有选择的内联方法代码，这会相应的禁用一些优化。尽管在编写示例 17-5 和可以支持示例 17-9 中的代码的过程中确实获得了额外的灵活性，但仍然需要权衡取舍。")]),t._v(" "),s("h3",{attrs:{id:"trait-对象要求对象安全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#trait-对象要求对象安全"}},[t._v("#")]),t._v(" Trait 对象要求对象安全")]),t._v(" "),s("p",[t._v("只有 "),s("strong",[t._v("对象安全")]),t._v("（"),s("em",[t._v("object safe")]),t._v("）的 trait 才可以组成 trait 对象。围绕所有使得 trait 对象安全的属性存在一些复杂的规则，不过在实践中，只涉及到两条规则。如果一个 trait 中所有的方法有如下属性时，则该 trait 是对象安全的：")]),t._v(" "),s("ul",[s("li",[t._v("返回值类型不为 "),s("code",[t._v("Self")])]),t._v(" "),s("li",[t._v("方法没有任何泛型类型参数")])]),t._v(" "),s("p",[s("code",[t._v("Self")]),t._v(" 关键字是我们要实现 trait 或方法的类型的别名。对象安全对于 trait 对象是必须的，因为一旦有了 trait 对象，就不再知晓实现该 trait 的具体类型是什么了。如果 trait 方法返回具体的 "),s("code",[t._v("Self")]),t._v(" 类型，但是 trait 对象忘记了其真正的类型，那么方法不可能使用已经忘却的原始具体类型。同理对于泛型类型参数来说，当使用 trait 时其会放入具体的类型参数：此具体类型变成了实现该 trait 的类型的一部分。当使用 trait 对象时其具体类型被抹去了，故无从得知放入泛型参数类型的类型是什么。")]),t._v(" "),s("p",[t._v("一个 trait 的方法不是对象安全的例子是标准库中的 "),s("code",[t._v("Clone")]),t._v(" trait。"),s("code",[t._v("Clone")]),t._v(" trait 的 "),s("code",[t._v("clone")]),t._v(" 方法的参数签名看起来像这样：")]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("trait")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Clone")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("clone")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("String")]),t._v(" 实现了 "),s("code",[t._v("Clone")]),t._v(" trait，当在 "),s("code",[t._v("String")]),t._v(" 实例上调用 "),s("code",[t._v("clone")]),t._v(" 方法时会得到一个 "),s("code",[t._v("String")]),t._v(" 实例。类似的，当调用 "),s("code",[t._v("Vec<T>")]),t._v(" 实例的 "),s("code",[t._v("clone")]),t._v(" 方法会得到一个 "),s("code",[t._v("Vec<T>")]),t._v(" 实例。"),s("code",[t._v("clone")]),t._v(" 的签名需要知道什么类型会代替 "),s("code",[t._v("Self")]),t._v("，因为这是它的返回值。")]),t._v(" "),s("p",[t._v("如果尝试做一些违反有关 trait 对象的对象安全规则的事情，编译器会提示你。例如，如果尝试实现示例 17-4 中的 "),s("code",[t._v("Screen")]),t._v(" 结构体来存放实现了 "),s("code",[t._v("Clone")]),t._v(" trait 而不是 "),s("code",[t._v("Draw")]),t._v(" trait 的类型，像这样：")]),t._v(" "),s("div",{staticClass:"language-rust,ignore,does_not_compile extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("pub struct Screen {\n    pub components: Vec<Box<dyn Clone>>,\n}\n")])])]),s("p",[t._v("将会得到如下错误：")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("error[E0038]: the trait `std::clone::Clone` cannot be made into an object\n --\x3e src/lib.rs:2:5\n  |\n2 |     pub components: Vec<Box<dyn Clone>>,\n  |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ the trait `std::clone::Clone`\n  cannot be made into an object\n  |\n  = note: the trait cannot require that `Self : Sized`\n")])])]),s("p",[t._v("这意味着不能以这种方式使用此 trait 作为 trait 对象。如果你对对象安全的更多细节感兴趣，请查看 "),s("a",{attrs:{href:"https://github.com/rust-lang/rfcs/blob/master/text/0255-object-safety.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rust RFC 255"),s("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);a.default=e.exports}}]);