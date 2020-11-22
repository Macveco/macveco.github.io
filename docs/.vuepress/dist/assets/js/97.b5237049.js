(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{451:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"使用-drop-trait-运行清理代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-drop-trait-运行清理代码"}},[t._v("#")]),t._v(" 使用 "),a("code",[t._v("Drop")]),t._v(" Trait 运行清理代码")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/ch15-03-drop.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("ch15-03-drop.md"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("\ncommit 57adb83f69a69e20862d9e107b2a8bab95169b4c")])]),t._v(" "),a("p",[t._v("对于智能指针模式来说第二个重要的 trait 是 "),a("code",[t._v("Drop")]),t._v("，其允许我们在值要离开作用域时执行一些代码。可以为任何类型提供 "),a("code",[t._v("Drop")]),t._v(" trait 的实现，同时所指定的代码被用于释放类似于文件或网络连接的资源。我们在智能指针上下文中讨论 "),a("code",[t._v("Drop")]),t._v(" 是因为其功能几乎总是用于实现智能指针。例如，"),a("code",[t._v("Box<T>")]),t._v(" 自定义了 "),a("code",[t._v("Drop")]),t._v(" 用来释放 box 所指向的堆空间。")]),t._v(" "),a("p",[t._v("在其他一些语言中，我们不得不记住在每次使用完智能指针实例后调用清理内存或资源的代码。如果忘记的话，运行代码的系统可能会因为负荷过重而崩溃。在 Rust 中，可以指定每当值离开作用域时被执行的代码，编译器会自动插入这些代码。于是我们就不需要在程序中到处编写在实例结束时清理这些变量的代码 —— 而且还不会泄漏资源。")]),t._v(" "),a("p",[t._v("指定在值离开作用域时应该执行的代码的方式是实现 "),a("code",[t._v("Drop")]),t._v(" trait。"),a("code",[t._v("Drop")]),t._v(" trait 要求实现一个叫做 "),a("code",[t._v("drop")]),t._v(" 的方法，它获取一个 "),a("code",[t._v("self")]),t._v(" 的可变引用。为了能够看出 Rust 何时调用 "),a("code",[t._v("drop")]),t._v("，让我们暂时使用 "),a("code",[t._v("println!")]),t._v(" 语句实现 "),a("code",[t._v("drop")]),t._v("。")]),t._v(" "),a("p",[t._v("示例 15-14 展示了唯一定制功能就是当其实例离开作用域时，打印出 "),a("code",[t._v("Dropping CustomSmartPointer!")]),t._v(" 的结构体 "),a("code",[t._v("CustomSmartPointer")]),t._v("。这会演示 Rust 何时运行 "),a("code",[t._v("drop")]),t._v(" 函数：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("CustomSmartPointer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("impl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Drop")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomSmartPointer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("drop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Dropping CustomSmartPointer with data `{}`!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomSmartPointer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my stuff"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomSmartPointer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"other stuff"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CustomSmartPointers created."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 15-14：结构体 "),a("code",[t._v("CustomSmartPointer")]),t._v("，其实现了放置清理代码的 "),a("code",[t._v("Drop")]),t._v(" trait")])]),t._v(" "),a("p",[a("code",[t._v("Drop")]),t._v(" trait 包含在 prelude 中，所以无需导入它。我们在 "),a("code",[t._v("CustomSmartPointer")]),t._v(" 上实现了 "),a("code",[t._v("Drop")]),t._v(" trait，并提供了一个调用 "),a("code",[t._v("println!")]),t._v(" 的 "),a("code",[t._v("drop")]),t._v(" 方法实现。"),a("code",[t._v("drop")]),t._v(" 函数体是放置任何当类型实例离开作用域时期望运行的逻辑的地方。这里选择打印一些文本以展示 Rust 何时调用 "),a("code",[t._v("drop")]),t._v("。")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("main")]),t._v(" 中，我们新建了两个 "),a("code",[t._v("CustomSmartPointer")]),t._v(" 实例并打印出了 "),a("code",[t._v("CustomSmartPointer created.")]),t._v("。在 "),a("code",[t._v("main")]),t._v(" 的结尾，"),a("code",[t._v("CustomSmartPointer")]),t._v(" 的实例会离开作用域，而 Rust 会调用放置于 "),a("code",[t._v("drop")]),t._v(" 方法中的代码，打印出最后的信息。注意无需显示调用 "),a("code",[t._v("drop")]),t._v(" 方法：")]),t._v(" "),a("p",[t._v("当运行这个程序，会出现如下输出：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("CustomSmartPointers created.\nDropping CustomSmartPointer with data `other stuff`!\nDropping CustomSmartPointer with data `my stuff`!\n")])])]),a("p",[t._v("当实例离开作用域 Rust 会自动调用 "),a("code",[t._v("drop")]),t._v("，并调用我们指定的代码。变量以被创建时相反的顺序被丢弃，所以 "),a("code",[t._v("d")]),t._v(" 在 "),a("code",[t._v("c")]),t._v(" 之前被丢弃。这个例子刚好给了我们一个 drop 方法如何工作的可视化指导，不过通常需要指定类型所需执行的清理代码而不是打印信息。")]),t._v(" "),a("h4",{attrs:{id:"通过-std-mem-drop-提早丢弃值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-std-mem-drop-提早丢弃值"}},[t._v("#")]),t._v(" 通过 "),a("code",[t._v("std::mem::drop")]),t._v(" 提早丢弃值")]),t._v(" "),a("p",[t._v("不幸的是，我们并不能直截了当的禁用 "),a("code",[t._v("drop")]),t._v(" 这个功能。通常也不需要禁用 "),a("code",[t._v("drop")]),t._v(" ；整个 "),a("code",[t._v("Drop")]),t._v(" trait 存在的意义在于其是自动处理的。然而，有时你可能需要提早清理某个值。一个例子是当使用智能指针管理锁时；你可能希望强制运行 "),a("code",[t._v("drop")]),t._v(" 方法来释放锁以便作用域中的其他代码可以获取锁。Rust 并不允许我们主动调用 "),a("code",[t._v("Drop")]),t._v(" trait 的 "),a("code",[t._v("drop")]),t._v(" 方法；当我们希望在作用域结束之前就强制释放变量的话，我们应该使用的是由标准库提供的 "),a("code",[t._v("std::mem::drop")]),t._v("。")]),t._v(" "),a("p",[t._v("如果我们像是示例 15-14 那样尝试调用 "),a("code",[t._v("Drop")]),t._v(" trait 的 "),a("code",[t._v("drop")]),t._v(" 方法，就会得到像示例 15-15 那样的编译错误：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust,ignore,does_not_compile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('fn main() {\n    let c = CustomSmartPointer { data: String::from("some data") };\n    println!("CustomSmartPointer created.");\n    c.drop();\n    println!("CustomSmartPointer dropped before the end of main.");\n}\n')])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 15-15：尝试手动调用 "),a("code",[t._v("Drop")]),t._v(" trait 的 "),a("code",[t._v("drop")]),t._v(" 方法提早清理")])]),t._v(" "),a("p",[t._v("如果尝试编译代码会得到如下错误：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("error[E0040]: explicit use of destructor method\n  --\x3e src/main.rs:14:7\n   |\n14 |     c.drop();\n   |       ^^^^ explicit destructor calls not allowed\n")])])]),a("p",[t._v("错误信息表明不允许显式调用 "),a("code",[t._v("drop")]),t._v("。错误信息使用了术语 "),a("strong",[t._v("析构函数")]),t._v("（"),a("em",[t._v("destructor")]),t._v("），这是一个清理实例的函数的通用编程概念。"),a("strong",[t._v("析构函数")]),t._v(" 对应创建实例的 "),a("strong",[t._v("构造函数")]),t._v("。Rust 中的 "),a("code",[t._v("drop")]),t._v(" 函数就是这么一个析构函数。")]),t._v(" "),a("p",[t._v("Rust 不允许我们显式调用 "),a("code",[t._v("drop")]),t._v(" 因为 Rust 仍然会在 "),a("code",[t._v("main")]),t._v(" 的结尾对值自动调用 "),a("code",[t._v("drop")]),t._v("，这会导致一个 "),a("strong",[t._v("double free")]),t._v(" 错误，因为 Rust 会尝试清理相同的值两次。")]),t._v(" "),a("p",[t._v("因为不能禁用当值离开作用域时自动插入的 "),a("code",[t._v("drop")]),t._v("，并且不能显式调用 "),a("code",[t._v("drop")]),t._v("，如果我们需要强制提早清理值，可以使用 "),a("code",[t._v("std::mem::drop")]),t._v(" 函数。")]),t._v(" "),a("p",[a("code",[t._v("std::mem::drop")]),t._v(" 函数不同于 "),a("code",[t._v("Drop")]),t._v(" trait 中的 "),a("code",[t._v("drop")]),t._v(" 方法。可以通过传递希望提早强制丢弃的值作为参数。"),a("code",[t._v("std::mem::drop")]),t._v(" 位于 prelude，所以我们可以修改示例 15-15 中的 "),a("code",[t._v("main")]),t._v(" 来调用 "),a("code",[t._v("drop")]),t._v(" 函数。如示例 15-16 所示：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[t._v("# "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("CustomSmartPointer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n#     data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n# "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n#\n# "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("impl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Drop")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomSmartPointer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n#     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("drop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n#         "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Dropping CustomSmartPointer with data `{}`!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n#     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n# "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n#\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomSmartPointer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"some data"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CustomSmartPointer created."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("drop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CustomSmartPointer dropped before the end of main."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 15-16: 在值离开作用域之前调用 "),a("code",[t._v("std::mem::drop")]),t._v(" 显式清理")])]),t._v(" "),a("p",[t._v("运行这段代码会打印出如下：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("CustomSmartPointer created.\nDropping CustomSmartPointer with data `some data`!\nCustomSmartPointer dropped before the end of main.\n")])])]),a("p",[a("code",[t._v("Dropping CustomSmartPointer with data `some data`!")]),t._v(" 出现在 "),a("code",[t._v("CustomSmartPointer created.")]),t._v(" 和 "),a("code",[t._v("CustomSmartPointer dropped before the end of main.")]),t._v(" 之间，表明了 "),a("code",[t._v("drop")]),t._v(" 方法被调用了并在此丢弃了 "),a("code",[t._v("c")]),t._v("。")]),t._v(" "),a("p",[a("code",[t._v("Drop")]),t._v(" trait 实现中指定的代码可以用于许多方面，来使得清理变得方便和安全：比如可以用其创建我们自己的内存分配器！通过 "),a("code",[t._v("Drop")]),t._v(" trait 和 Rust 所有权系统，你无需担心之后的代码清理，Rust 会自动考虑这些问题。")]),t._v(" "),a("p",[t._v("我们也无需担心意外的清理掉仍在使用的值，这会造成编译器错误：所有权系统确保引用总是有效的，也会确保 "),a("code",[t._v("drop")]),t._v(" 只会在值不再被使用时被调用一次。")]),t._v(" "),a("p",[t._v("现在我们学习了 "),a("code",[t._v("Box<T>")]),t._v(" 和一些智能指针的特性，让我们聊聊标准库中定义的其他几种智能指针。")])])}),[],!1,null,null,null);s.default=r.exports}}]);