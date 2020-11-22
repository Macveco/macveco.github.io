(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{435:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"rc-t-引用计数智能指针"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rc-t-引用计数智能指针"}},[t._v("#")]),t._v(" "),a("code",[t._v("Rc<T>")]),t._v(" 引用计数智能指针")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/ch15-04-rc.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("ch15-04-rc.md"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("\ncommit 6f292c8439927b4c5b870dd4afd2bfc52cc4eccc")])]),t._v(" "),a("p",[t._v("大部分情况下所有权是非常明确的：可以准确地知道哪个变量拥有某个值。然而，有些情况单个值可能会有多个所有者。例如，在图数据结构中，多个边可能指向相同的节点，而这个节点从概念上讲为所有指向它的边所拥有。节点直到没有任何边指向它之前都不应该被清理。")]),t._v(" "),a("p",[t._v("为了启用多所有权，Rust 有一个叫做 "),a("code",[t._v("Rc<T>")]),t._v(" 的类型。其名称为 "),a("strong",[t._v("引用计数")]),t._v("（"),a("em",[t._v("reference counting")]),t._v("）的缩写。引用计数意味着记录一个值引用的数量来知晓这个值是否仍在被使用。如果某个值有零个引用，就代表没有任何有效引用并可以被清理。")]),t._v(" "),a("p",[t._v("可以将其想象为客厅中的电视。当一个人进来看电视时，他打开电视。其他人也可以进来看电视。当最后一个人离开房间时，他关掉电视因为它不再被使用了。如果某人在其他人还在看的时候就关掉了电视，正在看电视的人肯定会抓狂的！")]),t._v(" "),a("p",[a("code",[t._v("Rc<T>")]),t._v(" 用于当我们希望在堆上分配一些内存供程序的多个部分读取，而且无法在编译时确定程序的哪一部分会最后结束使用它的时候。如果确实知道哪部分是最后一个结束使用的话，就可以令其成为数据的所有者，正常的所有权规则就可以在编译时生效。")]),t._v(" "),a("p",[t._v("注意 "),a("code",[t._v("Rc<T>")]),t._v(" 只能用于单线程场景；第十六章并发会涉及到如何在多线程程序中进行引用计数。")]),t._v(" "),a("h3",{attrs:{id:"使用-rc-t-共享数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-rc-t-共享数据"}},[t._v("#")]),t._v(" 使用 "),a("code",[t._v("Rc<T>")]),t._v(" 共享数据")]),t._v(" "),a("p",[t._v("让我们回到示例 15-5 中使用 "),a("code",[t._v("Box<T>")]),t._v(" 定义 cons list 的例子。这一次，我们希望创建两个共享第三个列表所有权的列表，其概念将会看起来如图 15-3 所示：")]),t._v(" "),a("img",{staticClass:"center",attrs:{alt:"Two lists that share ownership of a third list",src:"img/trpl15-03.svg"}}),t._v(" "),a("p",[a("span",{staticClass:"caption"},[t._v("图 15-3: 两个列表, "),a("code",[t._v("b")]),t._v(" 和 "),a("code",[t._v("c")]),t._v(", 共享第三个列表 "),a("code",[t._v("a")]),t._v(" 的所有权")])]),t._v(" "),a("p",[t._v("列表 "),a("code",[t._v("a")]),t._v(" 包含 5 之后是 10，之后是另两个列表："),a("code",[t._v("b")]),t._v(" 从 3 开始而 "),a("code",[t._v("c")]),t._v(" 从 4 开始。"),a("code",[t._v("b")]),t._v(" 和 "),a("code",[t._v("c")]),t._v(" 会接上包含 5 和 10 的列表 "),a("code",[t._v("a")]),t._v("。换句话说，这两个列表会尝试共享第一个列表所包含的 5 和 10。")]),t._v(" "),a("p",[t._v("尝试使用 "),a("code",[t._v("Box<T>")]),t._v(" 定义的 "),a("code",[t._v("List")]),t._v(" 实现并不能工作，如示例 15-17 所示：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust,ignore,does_not_compile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("enum List {\n    Cons(i32, Box<List>),\n    Nil,\n}\n\nuse crate::List::{Cons, Nil};\n\nfn main() {\n    let a = Cons(5,\n        Box::new(Cons(10,\n            Box::new(Nil))));\n    let b = Cons(3, Box::new(a));\n    let c = Cons(4, Box::new(a));\n}\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 15-17: 展示不能用两个 "),a("code",[t._v("Box<T>")]),t._v(" 的列表尝试共享第三个列表的所有权")])]),t._v(" "),a("p",[t._v("编译会得出如下错误：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("error[E0382]: use of moved value: `a`\n  --\x3e src/main.rs:13:30\n   |\n12 |     let b = Cons(3, Box::new(a));\n   |                              - value moved here\n13 |     let c = Cons(4, Box::new(a));\n   |                              ^ value used here after move\n   |\n   = note: move occurs because `a` has type `List`, which does not implement\n   the `Copy` trait\n")])])]),a("p",[a("code",[t._v("Cons")]),t._v(" 成员拥有其储存的数据，所以当创建 "),a("code",[t._v("b")]),t._v(" 列表时，"),a("code",[t._v("a")]),t._v(" 被移动进了 "),a("code",[t._v("b")]),t._v(" 这样 "),a("code",[t._v("b")]),t._v(" 就拥有了 "),a("code",[t._v("a")]),t._v("。接着当再次尝试使用 "),a("code",[t._v("a")]),t._v(" 创建 "),a("code",[t._v("c")]),t._v(" 时，这不被允许，因为 "),a("code",[t._v("a")]),t._v(" 的所有权已经被移动。")]),t._v(" "),a("p",[t._v("可以改变 "),a("code",[t._v("Cons")]),t._v(" 的定义来存放一个引用，不过接着必须指定生命周期参数。通过指定生命周期参数，表明列表中的每一个元素都至少与列表本身存在的一样久。例如，借用检查器不会允许 "),a("code",[t._v("let a = Cons(10, &Nil);")]),t._v(" 编译，因为临时值 "),a("code",[t._v("Nil")]),t._v(" 会在 "),a("code",[t._v("a")]),t._v(" 获取其引用之前就被丢弃了。")]),t._v(" "),a("p",[t._v("相反，我们修改 "),a("code",[t._v("List")]),t._v(" 的定义为使用 "),a("code",[t._v("Rc<T>")]),t._v(" 代替 "),a("code",[t._v("Box<T>")]),t._v("，如列表 15-18 所示。现在每一个 "),a("code",[t._v("Cons")]),t._v(" 变量都包含一个值和一个指向 "),a("code",[t._v("List")]),t._v(" 的 "),a("code",[t._v("Rc<T>")]),t._v("。当创建 "),a("code",[t._v("b")]),t._v(" 时，不同于获取 "),a("code",[t._v("a")]),t._v(" 的所有权，这里会克隆 "),a("code",[t._v("a")]),t._v(" 所包含的 "),a("code",[t._v("Rc<List>")]),t._v("，这会将引用计数从 1 增加到 2 并允许 "),a("code",[t._v("a")]),t._v(" 和 "),a("code",[t._v("b")]),t._v(" 共享 "),a("code",[t._v("Rc<List>")]),t._v(" 中数据的所有权。创建 "),a("code",[t._v("c")]),t._v(" 时也会克隆 "),a("code",[t._v("a")]),t._v("，这会将引用计数从 2 增加为 3。每次调用 "),a("code",[t._v("Rc::clone")]),t._v("，"),a("code",[t._v("Rc<List>")]),t._v(" 中数据的引用计数都会增加，直到有零个引用之前其数据都不会被清理。")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("List")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cons")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("i32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rc")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("crate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cons")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("rc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cons")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cons")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cons")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cons")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 15-18: 使用 "),a("code",[t._v("Rc<T>")]),t._v(" 定义的 "),a("code",[t._v("List")])])]),t._v(" "),a("p",[t._v("需要使用 "),a("code",[t._v("use")]),t._v(" 语句将 "),a("code",[t._v("Rc<T>")]),t._v(" 引入作用域，因为它不在 prelude 中。在 "),a("code",[t._v("main")]),t._v(" 中创建了存放 5 和 10 的列表并将其存放在 "),a("code",[t._v("a")]),t._v(" 的新的 "),a("code",[t._v("Rc<List>")]),t._v(" 中。接着当创建 "),a("code",[t._v("b")]),t._v(" 和 "),a("code",[t._v("c")]),t._v(" 时，调用 "),a("code",[t._v("Rc::clone")]),t._v(" 函数并传递 "),a("code",[t._v("a")]),t._v(" 中 "),a("code",[t._v("Rc<List>")]),t._v(" 的引用作为参数。")]),t._v(" "),a("p",[t._v("也可以调用 "),a("code",[t._v("a.clone()")]),t._v(" 而不是 "),a("code",[t._v("Rc::clone(&a)")]),t._v("，不过在这里 Rust 的习惯是使用 "),a("code",[t._v("Rc::clone")]),t._v("。"),a("code",[t._v("Rc::clone")]),t._v(" 的实现并不像大部分类型的 "),a("code",[t._v("clone")]),t._v(" 实现那样对所有数据进行深拷贝。"),a("code",[t._v("Rc::clone")]),t._v(" 只会增加引用计数，这并不会花费多少时间。深拷贝可能会花费很长时间。通过使用 "),a("code",[t._v("Rc::clone")]),t._v(" 进行引用计数，可以明显的区别深拷贝类的克隆和增加引用计数类的克隆。当查找代码中的性能问题时，只需考虑深拷贝类的克隆而无需考虑 "),a("code",[t._v("Rc::clone")]),t._v(" 调用。")]),t._v(" "),a("h3",{attrs:{id:"克隆-rc-t-会增加引用计数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#克隆-rc-t-会增加引用计数"}},[t._v("#")]),t._v(" 克隆 "),a("code",[t._v("Rc<T>")]),t._v(" 会增加引用计数")]),t._v(" "),a("p",[t._v("让我们修改示例 15-18 的代码以便观察创建和丢弃 "),a("code",[t._v("a")]),t._v(" 中 "),a("code",[t._v("Rc<List>")]),t._v(" 的引用时引用计数的变化。")]),t._v(" "),a("p",[t._v("在示例 15-19 中，修改了 "),a("code",[t._v("main")]),t._v(" 以便将列表 "),a("code",[t._v("c")]),t._v(" 置于内部作用域中，这样就可以观察当 "),a("code",[t._v("c")]),t._v(" 离开作用域时引用计数如何变化。")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[t._v("# "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("List")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n#     "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cons")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("i32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rc")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n#     "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n# "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n#\n# "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("crate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cons")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n# "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("rc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n#\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cons")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cons")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"count after creating a = {}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("strong_count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cons")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"count after creating b = {}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("strong_count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cons")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"count after creating c = {}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("strong_count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"count after c goes out of scope = {}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("strong_count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 15-19：打印出引用计数")])]),t._v(" "),a("p",[t._v("在程序中每个引用计数变化的点，会打印出引用计数，其值可以通过调用 "),a("code",[t._v("Rc::strong_count")]),t._v(" 函数获得。这个函数叫做 "),a("code",[t._v("strong_count")]),t._v(" 而不是 "),a("code",[t._v("count")]),t._v(" 是因为 "),a("code",[t._v("Rc<T>")]),t._v(" 也有 "),a("code",[t._v("weak_count")]),t._v("；在 "),a("RouterLink",{attrs:{to:"/ch15-06-reference-cycles.html#preventing-reference-cycles-turning-an-rct-into-a-weakt"}},[t._v("“避免引用循环：将 "),a("code",[t._v("Rc<T>")]),t._v(" 变为 "),a("code",[t._v("Weak<T>")]),t._v("”")]),t._v(" 部分会讲解 "),a("code",[t._v("weak_count")]),t._v(" 的用途。")],1),t._v(" "),a("p",[t._v("这段代码会打印出：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("count after creating a = 1\ncount after creating b = 2\ncount after creating c = 3\ncount after c goes out of scope = 2\n")])])]),a("p",[t._v("我们能够看到 "),a("code",[t._v("a")]),t._v(" 中 "),a("code",[t._v("Rc<List>")]),t._v(" 的初始引用计数为1，接着每次调用 "),a("code",[t._v("clone")]),t._v("，计数会增加1。当 "),a("code",[t._v("c")]),t._v(" 离开作用域时，计数减1。不必像调用 "),a("code",[t._v("Rc::clone")]),t._v(" 增加引用计数那样调用一个函数来减少计数；"),a("code",[t._v("Drop")]),t._v(" trait 的实现当 "),a("code",[t._v("Rc<T>")]),t._v(" 值离开作用域时自动减少引用计数。")]),t._v(" "),a("p",[t._v("从这个例子我们所不能看到的是，在 "),a("code",[t._v("main")]),t._v(" 的结尾当 "),a("code",[t._v("b")]),t._v(" 然后是 "),a("code",[t._v("a")]),t._v(" 离开作用域时，此处计数会是 0，同时 "),a("code",[t._v("Rc<List>")]),t._v(" 被完全清理。使用 "),a("code",[t._v("Rc<T>")]),t._v(" 允许一个值有多个所有者，引用计数则确保只要任何所有者依然存在其值也保持有效。")]),t._v(" "),a("p",[t._v("通过不可变引用， "),a("code",[t._v("Rc<T>")]),t._v(" 允许在程序的多个部分之间只读地共享数据。如果 "),a("code",[t._v("Rc<T>")]),t._v(" 也允许多个可变引用，则会违反第四章讨论的借用规则之一：相同位置的多个可变借用可能造成数据竞争和不一致。不过可以修改数据是非常有用的！在下一部分，我们将讨论内部可变性模式和 "),a("code",[t._v("RefCell<T>")]),t._v(" 类型，它可以与 "),a("code",[t._v("Rc<T>")]),t._v(" 结合使用来处理不可变性的限制。")])])}),[],!1,null,null,null);s.default=e.exports}}]);