(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{441:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"使用线程同时运行代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用线程同时运行代码"}},[t._v("#")]),t._v(" 使用线程同时运行代码")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/ch16-01-threads.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("ch16-01-threads.md"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("\ncommit 1fedfc4b96c2017f64ecfcf41a0a07e2e815f24f")])]),t._v(" "),a("p",[t._v("在大部分现代操作系统中，已执行程序的代码在一个 "),a("strong",[t._v("进程")]),t._v("（"),a("em",[t._v("process")]),t._v("）中运行，操作系统则负责管理多个进程。在程序内部，也可以拥有多个同时运行的独立部分。运行这些独立部分的功能被称为 "),a("strong",[t._v("线程")]),t._v("（"),a("em",[t._v("threads")]),t._v("）。")]),t._v(" "),a("p",[t._v("将程序中的计算拆分进多个线程可以改善性能，因为程序可以同时进行多个任务，不过这也会增加复杂性。因为线程是同时运行的，所以无法预先保证不同线程中的代码的执行顺序。这会导致诸如此类的问题：")]),t._v(" "),a("ul",[a("li",[t._v("竞争状态（Race conditions），多个线程以不一致的顺序访问数据或资源")]),t._v(" "),a("li",[t._v("死锁（Deadlocks），两个线程相互等待对方停止使用其所拥有的资源，这会阻止它们继续运行")]),t._v(" "),a("li",[t._v("只会发生在特定情况且难以稳定重现和修复的 bug")])]),t._v(" "),a("p",[t._v("Rust 尝试减轻使用线程的负面影响。不过在多线程上下文中编程仍需格外小心，同时其所要求的代码结构也不同于运行于单线程的程序。")]),t._v(" "),a("p",[t._v("编程语言有一些不同的方法来实现线程。很多操作系统提供了创建新线程的 API。这种由编程语言调用操作系统 API 创建线程的模型有时被称为 "),a("em",[t._v("1:1")]),t._v("，一个 OS 线程对应一个语言线程。")]),t._v(" "),a("p",[t._v("很多编程语言提供了自己特殊的线程实现。编程语言提供的线程被称为 "),a("strong",[t._v("绿色")]),t._v("（"),a("em",[t._v("green")]),t._v("）线程，使用绿色线程的语言会在不同数量的 OS 线程的上下文中执行它们。为此，绿色线程模式被称为 "),a("em",[t._v("M:N")]),t._v(" 模型："),a("code",[t._v("M")]),t._v(" 个绿色线程对应 "),a("code",[t._v("N")]),t._v(" 个 OS 线程，这里 "),a("code",[t._v("M")]),t._v(" 和 "),a("code",[t._v("N")]),t._v(" 不必相同。")]),t._v(" "),a("p",[t._v("每一个模型都有其优势和取舍。对于 Rust 来说最重要的取舍是运行时支持。"),a("strong",[t._v("运行时")]),t._v("（"),a("em",[t._v("Runtime")]),t._v("）是一个令人迷惑的概念，其在不同上下文中可能有不同的含义。")]),t._v(" "),a("p",[t._v("在当前上下文中，"),a("strong",[t._v("运行时")]),t._v(" 代表二进制文件中包含的由语言自身提供的代码。这些代码根据语言的不同可大可小，不过任何非汇编语言都会有一定数量的运行时代码。为此，通常人们说一个语言 “没有运行时”，一般意味着 “小运行时”。更小的运行时拥有更少的功能不过其优势在于更小的二进制输出，这使其易于在更多上下文中与其他语言相结合。虽然很多语言觉得增加运行时来换取更多功能没有什么问题，但是 Rust 需要做到几乎没有运行时，同时为了保持高性能必须能够调用 C 语言，这点也是不能妥协的。")]),t._v(" "),a("p",[t._v("绿色线程的 M:N 模型需要更大的语言运行时来管理这些线程。因此，Rust 标准库只提供了 1:1 线程模型实现。由于 Rust 是较为底层的语言，如果你愿意牺牲性能来换取抽象，以获得对线程运行更精细的控制及更低的上下文切换成本，你可以使用实现了 M:N 线程模型的 crate。")]),t._v(" "),a("p",[t._v("现在我们明白了 Rust 中的线程是如何定义的，让我们开始探索如何使用标准库提供的线程相关的 API 吧。")]),t._v(" "),a("h3",{attrs:{id:"使用-spawn-创建新线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-spawn-创建新线程"}},[t._v("#")]),t._v(" 使用 "),a("code",[t._v("spawn")]),t._v(" 创建新线程")]),t._v(" "),a("p",[t._v("为了创建一个新线程，需要调用 "),a("code",[t._v("thread::spawn")]),t._v(" 函数并传递一个闭包（第十三章学习了闭包），并在其中包含希望在新线程运行的代码。示例 16-1 中的例子在主线程打印了一些文本而另一些文本则由新线程打印：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),t._v("thread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Duration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("thread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("spawn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token closure-params"}},[a("span",{pre:!0,attrs:{class:"token closure-punctuation punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token closure-punctuation punctuation"}},[t._v("|")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hi number {} from the spawned thread!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("thread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Duration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from_millis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hi number {} from the main thread!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("thread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Duration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from_millis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 16-1: 创建一个打印某些内容的新线程，但是主线程打印其它内容")])]),t._v(" "),a("p",[t._v("注意这个函数编写的方式，当主线程结束时，新线程也会结束，而不管其是否执行完毕。这个程序的输出可能每次都略有不同，不过它大体上看起来像这样：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("hi number 1 from the main thread!\nhi number 1 from the spawned thread!\nhi number 2 from the main thread!\nhi number 2 from the spawned thread!\nhi number 3 from the main thread!\nhi number 3 from the spawned thread!\nhi number 4 from the main thread!\nhi number 4 from the spawned thread!\nhi number 5 from the spawned thread!\n")])])]),a("p",[a("code",[t._v("thread::sleep")]),t._v(" 调用强制线程停止执行一小段时间，这会允许其他不同的线程运行。这些线程可能会轮流运行，不过并不保证如此：这依赖操作系统如何调度线程。在这里，主线程首先打印，即便新创建线程的打印语句位于程序的开头，甚至即便我们告诉新建的线程打印直到 "),a("code",[t._v("i")]),t._v(" 等于 9 ，它在主线程结束之前也只打印到了 5。")]),t._v(" "),a("p",[t._v("如果运行代码只看到了主线程的输出，或没有出现重叠打印的现象，尝试增大区间 (变量 "),a("code",[t._v("i")]),t._v(" 的范围) 来增加操作系统切换线程的机会。")]),t._v(" "),a("h4",{attrs:{id:"使用-join-等待所有线程结束"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-join-等待所有线程结束"}},[t._v("#")]),t._v(" 使用 "),a("code",[t._v("join")]),t._v(" 等待所有线程结束")]),t._v(" "),a("p",[t._v("由于主线程结束，示例 16-1 中的代码大部分时候不光会提早结束新建线程，甚至不能实际保证新建线程会被执行。其原因在于无法保证线程运行的顺序！")]),t._v(" "),a("p",[t._v("可以通过将 "),a("code",[t._v("thread::spawn")]),t._v(" 的返回值储存在变量中来修复新建线程部分没有执行或者完全没有执行的问题。"),a("code",[t._v("thread::spawn")]),t._v(" 的返回值类型是 "),a("code",[t._v("JoinHandle")]),t._v("。"),a("code",[t._v("JoinHandle")]),t._v(" 是一个拥有所有权的值，当对其调用 "),a("code",[t._v("join")]),t._v(" 方法时，它会等待其线程结束。示例 16-2 展示了如何使用示例 16-1 中创建的线程的 "),a("code",[t._v("JoinHandle")]),t._v(" 并调用 "),a("code",[t._v("join")]),t._v(" 来确保新建线程在 "),a("code",[t._v("main")]),t._v(" 退出前结束运行：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),t._v("thread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Duration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" handle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("thread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("spawn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token closure-params"}},[a("span",{pre:!0,attrs:{class:"token closure-punctuation punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token closure-punctuation punctuation"}},[t._v("|")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hi number {} from the spawned thread!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("thread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Duration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from_millis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hi number {} from the main thread!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("thread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Duration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from_millis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    handle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unwrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 16-2: 从 "),a("code",[t._v("thread::spawn")]),t._v(" 保存一个 "),a("code",[t._v("JoinHandle")]),t._v(" 以确保该线程能够运行至结束")])]),t._v(" "),a("p",[t._v("通过调用 handle 的 "),a("code",[t._v("join")]),t._v(" 会阻塞当前线程直到 handle 所代表的线程结束。"),a("strong",[t._v("阻塞")]),t._v("（"),a("em",[t._v("Blocking")]),t._v("） 线程意味着阻止该线程执行工作或退出。因为我们将 "),a("code",[t._v("join")]),t._v(" 调用放在了主线程的 "),a("code",[t._v("for")]),t._v(" 循环之后，运行示例 16-2 应该会产生类似这样的输出：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("hi number 1 from the main thread!\nhi number 2 from the main thread!\nhi number 1 from the spawned thread!\nhi number 3 from the main thread!\nhi number 2 from the spawned thread!\nhi number 4 from the main thread!\nhi number 3 from the spawned thread!\nhi number 4 from the spawned thread!\nhi number 5 from the spawned thread!\nhi number 6 from the spawned thread!\nhi number 7 from the spawned thread!\nhi number 8 from the spawned thread!\nhi number 9 from the spawned thread!\n")])])]),a("p",[t._v("这两个线程仍然会交替执行，不过主线程会由于 "),a("code",[t._v("handle.join()")]),t._v(" 调用会等待直到新建线程执行完毕。")]),t._v(" "),a("p",[t._v("不过让我们看看将 "),a("code",[t._v("handle.join()")]),t._v(" 移动到 "),a("code",[t._v("main")]),t._v(" 中 "),a("code",[t._v("for")]),t._v(" 循环之前会发生什么，如下：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),t._v("thread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Duration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" handle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("thread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("spawn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token closure-params"}},[a("span",{pre:!0,attrs:{class:"token closure-punctuation punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token closure-punctuation punctuation"}},[t._v("|")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hi number {} from the spawned thread!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("thread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Duration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from_millis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    handle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unwrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hi number {} from the main thread!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("thread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Duration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from_millis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("主线程会等待直到新建线程执行完毕之后才开始执行 "),a("code",[t._v("for")]),t._v(" 循环，所以输出将不会交替出现，如下所示：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("hi number 1 from the spawned thread!\nhi number 2 from the spawned thread!\nhi number 3 from the spawned thread!\nhi number 4 from the spawned thread!\nhi number 5 from the spawned thread!\nhi number 6 from the spawned thread!\nhi number 7 from the spawned thread!\nhi number 8 from the spawned thread!\nhi number 9 from the spawned thread!\nhi number 1 from the main thread!\nhi number 2 from the main thread!\nhi number 3 from the main thread!\nhi number 4 from the main thread!\n")])])]),a("p",[t._v("诸如将 "),a("code",[t._v("join")]),t._v(" 放置于何处这样的小细节，会影响线程是否同时运行。")]),t._v(" "),a("h3",{attrs:{id:"线程与-move-闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程与-move-闭包"}},[t._v("#")]),t._v(" 线程与 "),a("code",[t._v("move")]),t._v(" 闭包")]),t._v(" "),a("p",[a("code",[t._v("move")]),t._v(" 闭包，我们曾在第十三章简要的提到过，其经常与 "),a("code",[t._v("thread::spawn")]),t._v(" 一起使用，因为它允许我们在一个线程中使用另一个线程的数据。")]),t._v(" "),a("p",[t._v("在第十三章中，我们讲到可以在参数列表前使用 "),a("code",[t._v("move")]),t._v(" 关键字强制闭包获取其使用的环境值的所有权。这个技巧在创建新线程将值的所有权从一个线程移动到另一个线程时最为实用。")]),t._v(" "),a("p",[t._v("注意示例 16-1 中传递给 "),a("code",[t._v("thread::spawn")]),t._v(" 的闭包并没有任何参数：并没有在新建线程代码中使用任何主线程的数据。为了在新建线程中使用来自于主线程的数据，需要新建线程的闭包获取它需要的值。示例 16-3 展示了一个尝试在主线程中创建一个 vector 并用于新建线程的例子，不过这么写还不能工作，如下所示：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust,ignore,does_not_compile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('use std::thread;\n\nfn main() {\n    let v = vec![1, 2, 3];\n\n    let handle = thread::spawn(|| {\n        println!("Here\'s a vector: {:?}", v);\n    });\n\n    handle.join().unwrap();\n}\n')])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 16-3: 尝试在另一个线程使用主线程创建的 vector")])]),t._v(" "),a("p",[t._v("闭包使用了 "),a("code",[t._v("v")]),t._v("，所以闭包会捕获 "),a("code",[t._v("v")]),t._v(" 并使其成为闭包环境的一部分。因为 "),a("code",[t._v("thread::spawn")]),t._v(" 在一个新线程中运行这个闭包，所以可以在新线程中访问 "),a("code",[t._v("v")]),t._v("。然而当编译这个例子时，会得到如下错误：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('error[E0373]: closure may outlive the current function, but it borrows `v`,\nwhich is owned by the current function\n --\x3e src/main.rs:6:32\n  |\n6 |     let handle = thread::spawn(|| {\n  |                                ^^ may outlive borrowed value `v`\n7 |         println!("Here\'s a vector: {:?}", v);\n  |                                           - `v` is borrowed here\n  |\nhelp: to force the closure to take ownership of `v` (and any other referenced\nvariables), use the `move` keyword\n  |\n6 |     let handle = thread::spawn(move || {\n  |                                ^^^^^^^\n')])])]),a("p",[t._v("Rust 会 "),a("strong",[t._v("推断")]),t._v(" 如何捕获 "),a("code",[t._v("v")]),t._v("，因为 "),a("code",[t._v("println!")]),t._v(" 只需要 "),a("code",[t._v("v")]),t._v(" 的引用，闭包尝试借用 "),a("code",[t._v("v")]),t._v("。然而这有一个问题：Rust 不知道这个新建线程会执行多久，所以无法知晓 "),a("code",[t._v("v")]),t._v(" 的引用是否一直有效。")]),t._v(" "),a("p",[t._v("示例 16-4 展示了一个 "),a("code",[t._v("v")]),t._v(" 的引用很有可能不再有效的场景：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust,ignore,does_not_compile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('use std::thread;\n\nfn main() {\n    let v = vec![1, 2, 3];\n\n    let handle = thread::spawn(|| {\n        println!("Here\'s a vector: {:?}", v);\n    });\n\n    drop(v); // oh no!\n\n    handle.join().unwrap();\n}\n')])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 16-4: 一个具有闭包的线程，尝试使用一个在主线程中被回收的引用 "),a("code",[t._v("v")])])]),t._v(" "),a("p",[t._v("假如这段代码能正常运行的话，则新建线程则可能会立刻被转移到后台并完全没有机会运行。新建线程内部有一个 "),a("code",[t._v("v")]),t._v(" 的引用，不过主线程立刻就使用第十五章讨论的 "),a("code",[t._v("drop")]),t._v(" 丢弃了 "),a("code",[t._v("v")]),t._v("。接着当新建线程开始执行，"),a("code",[t._v("v")]),t._v(" 已不再有效，所以其引用也是无效的。噢，这太糟了！")]),t._v(" "),a("p",[t._v("为了修复示例 16-3 的编译错误，我们可以听取错误信息的建议：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("help: to force the closure to take ownership of `v` (and any other referenced\nvariables), use the `move` keyword\n  |\n6 |     let handle = thread::spawn(move || {\n  |                                ^^^^^^^\n")])])]),a("p",[t._v("通过在闭包之前增加 "),a("code",[t._v("move")]),t._v(" 关键字，我们强制闭包获取其使用的值的所有权，而不是任由 Rust 推断它应该借用值。示例 16-5 中展示的对示例 16-3 代码的修改，可以按照我们的预期编译并运行：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),t._v("thread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" v "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("vec!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" handle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("thread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("spawn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("move")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token closure-params"}},[a("span",{pre:!0,attrs:{class:"token closure-punctuation punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token closure-punctuation punctuation"}},[t._v("|")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Here\'s a vector: {:?}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    handle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unwrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 16-5: 使用 "),a("code",[t._v("move")]),t._v(" 关键字强制获取它使用的值的所有权")])]),t._v(" "),a("p",[t._v("那么如果使用了 "),a("code",[t._v("move")]),t._v(" 闭包，示例 16-4 中主线程调用了 "),a("code",[t._v("drop")]),t._v(" 的代码会发生什么呢？加了 "),a("code",[t._v("move")]),t._v(" 就搞定了吗？不幸的是，我们会得到一个不同的错误，因为示例 16-4 所尝试的操作由于一个不同的原因而不被允许。如果为闭包增加 "),a("code",[t._v("move")]),t._v("，将会把 "),a("code",[t._v("v")]),t._v(" 移动进闭包的环境中，如此将不能在主线程中对其调用 "),a("code",[t._v("drop")]),t._v(" 了。我们会得到如下不同的编译错误：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("error[E0382]: use of moved value: `v`\n  --\x3e src/main.rs:10:10\n   |\n6  |     let handle = thread::spawn(move || {\n   |                                ------- value moved (into closure) here\n...\n10 |     drop(v); // oh no!\n   |          ^ value used here after move\n   |\n   = note: move occurs because `v` has type `std::vec::Vec<i32>`, which does\n   not implement the `Copy` trait\n")])])]),a("p",[t._v("Rust 的所有权规则又一次帮助了我们！示例 16-3 中的错误是因为 Rust 是保守的并只会为线程借用 "),a("code",[t._v("v")]),t._v("，这意味着主线程理论上可能使新建线程的引用无效。通过告诉 Rust 将 "),a("code",[t._v("v")]),t._v(" 的所有权移动到新建线程，我们向 Rust 保证主线程不会再使用 "),a("code",[t._v("v")]),t._v("。如果对示例 16-4 也做出如此修改，那么当在主线程中使用 "),a("code",[t._v("v")]),t._v(" 时就会违反所有权规则。 "),a("code",[t._v("move")]),t._v(" 关键字覆盖了 Rust 默认保守的借用，但它不允许我们违反所有权规则。")]),t._v(" "),a("p",[t._v("现在我们对线程和线程 API 有了基本的了解，让我们讨论一下使用线程实际可以 "),a("strong",[t._v("做")]),t._v(" 什么吧。")])])}),[],!1,null,null,null);s.default=e.exports}}]);