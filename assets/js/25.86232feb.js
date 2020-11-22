(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{378:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"变量和可变性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量和可变性"}},[t._v("#")]),t._v(" 变量和可变性")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/ch03-01-variables-and-mutability.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("ch03-01-variables-and-mutability.md"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("\ncommit d69b1058c660abfe1d274c58d39c06ebd5c96c47")])]),t._v(" "),a("p",[t._v("第二章中提到过，变量默认是不可改变的（immutable）。这是推动你以充分利用 Rust 提供的安全性和简单并发性来编写代码的众多方式之一。不过，你仍然可以使用可变变量。让我们探讨一下 Rust 为何及如何鼓励你利用不可变性，以及何时你会选择不使用不可变性。")]),t._v(" "),a("p",[t._v("当变量不可变时，一旦值被绑定一个名称上，你就不能改变这个值。为了对此进行说明，使用 "),a("code",[t._v("cargo new variables")]),t._v(" 命令在 "),a("em",[t._v("projects")]),t._v(" 目录生成一个叫做 "),a("em",[t._v("variables")]),t._v(" 的新项目。")]),t._v(" "),a("p",[t._v("接着，在新建的 "),a("em",[t._v("variables")]),t._v(" 目录，打开 "),a("em",[t._v("src/main.rs")]),t._v(" 并将代码替换为如下代码，这些代码还不能编译：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust,ignore,does_not_compile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('fn main() {\n    let x = 5;\n    println!("The value of x is: {}", x);\n    x = 6;\n    println!("The value of x is: {}", x);\n}\n')])])]),a("p",[t._v("保存并使用 "),a("code",[t._v("cargo run")]),t._v(" 运行程序。应该会看到一条错误信息，如下输出所示：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('error[E0384]: cannot assign twice to immutable variable `x`\n --\x3e src/main.rs:4:5\n  |\n2 |     let x = 5;\n  |         - first assignment to `x`\n3 |     println!("The value of x is: {}", x);\n4 |     x = 6;\n  |     ^^^^^ cannot assign twice to immutable variable\n')])])]),a("p",[t._v("这个例子展示了编译器如何帮助你找出程序中的错误。虽然编译错误令人沮丧，但那只是表示程序不能安全的完成你想让它完成的工作；并 "),a("strong",[t._v("不能")]),t._v(" 说明你不是一个好程序员！经验丰富的 Rustacean 们一样会遇到编译错误。")]),t._v(" "),a("p",[t._v("错误信息指出错误的原因是 "),a("code",[t._v("不能对不可变变量 x 二次赋值")]),t._v("（"),a("code",[t._v("cannot assign twice to immutable variable x")]),t._v("），因为你尝试对不可变变量 "),a("code",[t._v("x")]),t._v(" 赋第二个值。")]),t._v(" "),a("p",[t._v("在尝试改变预设为不可变的值时，产生编译时错误是很重要的，因为这种情况可能导致 bug。如果一部分代码假设一个值永远也不会改变，而另一部分代码改变了这个值，第一部分代码就有可能以不可预料的方式运行。不得不承认这种 bug 的起因难以跟踪，尤其是第二部分代码只是 "),a("strong",[t._v("有时")]),t._v(" 会改变值。")]),t._v(" "),a("p",[t._v("Rust 编译器保证，如果声明一个值不会变，它就真的不会变。这意味着当阅读和编写代码时，不需要追踪一个值如何和在哪可能会被改变，从而使得代码易于推导。")]),t._v(" "),a("p",[t._v("不过可变性也是非常有用的。变量只是默认不可变；正如在第二章所做的那样，你可以在变量名之前加 "),a("code",[t._v("mut")]),t._v(" 来使其可变。除了允许改变值之外，"),a("code",[t._v("mut")]),t._v(" 向读者表明了其他代码将会改变这个变量值的意图。")]),t._v(" "),a("p",[t._v("例如，让我们将 "),a("em",[t._v("src/main.rs")]),t._v(" 修改为如下代码：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The value of x is: {}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The value of x is: {}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("现在运行这个程序，出现如下内容：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ cargo run\n   Compiling variables v0.1.0 (file:///projects/variables)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.30 secs\n     Running `target/debug/variables`\nThe value of x is: 5\nThe value of x is: 6\n")])])]),a("p",[t._v("通过 "),a("code",[t._v("mut")]),t._v("，允许把绑定到 "),a("code",[t._v("x")]),t._v(" 的值从 "),a("code",[t._v("5")]),t._v(" 改成 "),a("code",[t._v("6")]),t._v("。在一些情况下，你会想用可变变量，因为与只用不可变变量相比，它会让代码更容易编写。")]),t._v(" "),a("p",[t._v("除了防止出现 bug 外，还有很多地方需要权衡取舍。例如，使用大型数据结构时，适当地使用可变变量，可能比复制和返回新分配的实例更快。对于较小的数据结构，总是创建新实例，采用更偏向函数式的编程风格，可能会使代码更易理解，为可读性而牺牲性能或许是值得的。")]),t._v(" "),a("h3",{attrs:{id:"变量和常量的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量和常量的区别"}},[t._v("#")]),t._v(" 变量和常量的区别")]),t._v(" "),a("p",[t._v("不允许改变值的变量，可能会使你想起另一个大部分编程语言都有的概念："),a("strong",[t._v("常量")]),t._v("（"),a("em",[t._v("constants")]),t._v("）。类似于不可变变量，常量是绑定到一个名称的不允许改变的值，不过常量与变量还是有一些区别。")]),t._v(" "),a("p",[t._v("首先，不允许对常量使用 "),a("code",[t._v("mut")]),t._v("。常量不光默认不能变，它总是不能变。")]),t._v(" "),a("p",[t._v("声明常量使用 "),a("code",[t._v("const")]),t._v(" 关键字而不是 "),a("code",[t._v("let")]),t._v("，并且 "),a("em",[t._v("必须")]),t._v(" 注明值的类型。在下一部分，"),a("RouterLink",{attrs:{to:"/ch03-02-data-types.html#data-types"}},[t._v("“数据类型”")]),t._v(" 中会介绍类型和类型注解，现在无需关心这些细节，记住总是标注类型即可。")],1),t._v(" "),a("p",[t._v("常量可以在任何作用域中声明，包括全局作用域，这在一个值需要被很多部分的代码用到时很有用。")]),t._v(" "),a("p",[t._v("最后一个区别是，常量只能被设置为常量表达式，而不能是函数调用的结果，或任何其他只能在运行时计算出的值。")]),t._v(" "),a("p",[t._v("这是一个声明常量的例子，它的名称是 "),a("code",[t._v("MAX_POINTS")]),t._v("，值是 100,000。（Rust 常量的命名规范是使用下划线分隔的大写字母单词，并且可以在数字字面值中插入下划线来提升可读性）：")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MAX_POINTS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100_000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("在声明它的作用域之中，常量在整个程序生命周期中都有效，这使得常量可以作为多处代码使用的全局范围的值，例如一个游戏中所有玩家可以获取的最高分或者光速。")]),t._v(" "),a("p",[t._v("将遍布于应用程序中的硬编码值声明为常量，能帮助后来的代码维护人员了解值的意图。如果将来需要修改硬编码值，也只需修改汇聚于一处的硬编码值。")]),t._v(" "),a("h3",{attrs:{id:"隐藏-shadowing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#隐藏-shadowing"}},[t._v("#")]),t._v(" 隐藏（Shadowing）")]),t._v(" "),a("p",[t._v("正如在第二章猜猜看游戏的 "),a("RouterLink",{attrs:{to:"/ch02-00-guessing-game-tutorial.html#comparing-the-guess-to-the-secret-number"}},[t._v("“比较猜测的数字和秘密数字”")]),t._v(" 中所讲，我们可以定义一个与之前变量同名的新变量，而新变量会 "),a("strong",[t._v("隐藏")]),t._v(" 之前的变量。Rustacean 们称之为第一个变量被第二个 "),a("strong",[t._v("隐藏")]),t._v(" 了，这意味着使用这个变量时会看到第二个值。可以用相同变量名称来隐藏一个变量，以及重复使用 "),a("code",[t._v("let")]),t._v(" 关键字来多次隐藏，如下所示：")],1),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The value of x is: {}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这个程序首先将 "),a("code",[t._v("x")]),t._v(" 绑定到值 "),a("code",[t._v("5")]),t._v(" 上。接着通过 "),a("code",[t._v("let x =")]),t._v(" 隐藏 "),a("code",[t._v("x")]),t._v("，获取初始值并加 "),a("code",[t._v("1")]),t._v("，这样 "),a("code",[t._v("x")]),t._v(" 的值就变成 "),a("code",[t._v("6")]),t._v(" 了。第三个 "),a("code",[t._v("let")]),t._v(" 语句也隐藏了 "),a("code",[t._v("x")]),t._v("，将之前的值乘以 "),a("code",[t._v("2")]),t._v("，"),a("code",[t._v("x")]),t._v(" 最终的值是 "),a("code",[t._v("12")]),t._v("。运行这个程序，它会有如下输出：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ cargo run\n   Compiling variables v0.1.0 (file:///projects/variables)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.31 secs\n     Running `target/debug/variables`\nThe value of x is: 12\n")])])]),a("p",[t._v("隐藏与将变量标记为 "),a("code",[t._v("mut")]),t._v(" 是有区别的。当不小心尝试对变量重新赋值时，如果没有使用 "),a("code",[t._v("let")]),t._v(" 关键字，就会导致编译时错误。通过使用 "),a("code",[t._v("let")]),t._v("，我们可以用这个值进行一些计算，不过计算完之后变量仍然是不变的。")]),t._v(" "),a("p",[a("code",[t._v("mut")]),t._v(" 与隐藏的另一个区别是，当再次使用 "),a("code",[t._v("let")]),t._v(" 时，实际上创建了一个新变量，我们可以改变值的类型，但复用这个名字。例如，假设程序请求用户输入空格字符来说明希望在文本之间显示多少个空格，然而我们真正需要的是将输入存储成数字（多少个空格）：")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" spaces "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"   "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" spaces "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" spaces"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这里允许第一个 "),a("code",[t._v("spaces")]),t._v(" 变量是字符串类型，而第二个 "),a("code",[t._v("spaces")]),t._v(" 变量，它是一个恰巧与第一个变量同名的崭新变量，是数字类型。隐藏使我们不必使用不同的名字，如 "),a("code",[t._v("spaces_str")]),t._v(" 和 "),a("code",[t._v("spaces_num")]),t._v("；相反，我们可以复用 "),a("code",[t._v("spaces")]),t._v(" 这个更简单的名字。然而，如果尝试使用 "),a("code",[t._v("mut")]),t._v("，将会得到一个编译时错误，如下所示：")]),t._v(" "),a("div",{staticClass:"language-rust,ignore,does_not_compile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('let mut spaces = "   ";\nspaces = spaces.len();\n')])])]),a("p",[t._v("这个错误说明，我们不能改变变量的类型：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("error[E0308]: mismatched types\n --\x3e src/main.rs:3:14\n  |\n3 |     spaces = spaces.len();\n  |              ^^^^^^^^^^^^ expected &str, found usize\n  |\n  = note: expected type `&str`\n             found type `usize`\n")])])]),a("p",[t._v("现在我们已经了解了变量如何工作，让我们看看变量可以拥有的更多数据类型。")])])}),[],!1,null,null,null);s.default=n.exports}}]);