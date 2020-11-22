(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{465:function(a,n,t){"use strict";t.r(n);var c=t(42),e=Object(c.a)({},(function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"panic-与不可恢复的错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#panic-与不可恢复的错误"}},[a._v("#")]),a._v(" "),t("code",[a._v("panic!")]),a._v(" 与不可恢复的错误")]),a._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/ch09-01-unrecoverable-errors-with-panic.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("ch09-01-unrecoverable-errors-with-panic.md"),t("OutboundLink")],1),a._v(" "),t("br"),a._v("\ncommit 426f3e4ec17e539ae9905ba559411169d303a031")])]),a._v(" "),t("p",[a._v("突然有一天，代码出问题了，而你对此束手无策。对于这种情况，Rust 有 "),t("code",[a._v("panic!")]),a._v("宏。当执行这个宏时，程序会打印出一个错误信息，展开并清理栈数据，然后接着退出。出现这种情况的场景通常是检测到一些类型的 bug，而且程序员并不清楚该如何处理它。")]),a._v(" "),t("blockquote",[t("h3",{attrs:{id:"对应-panic-时的栈展开或终止"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对应-panic-时的栈展开或终止"}},[a._v("#")]),a._v(" 对应 panic 时的栈展开或终止")]),a._v(" "),t("p",[a._v("当出现 panic 时，程序默认会开始 "),t("strong",[a._v("展开")]),a._v("（"),t("em",[a._v("unwinding")]),a._v("），这意味着 Rust 会回溯栈并清理它遇到的每一个函数的数据，不过这个回溯并清理的过程有很多工作。另一种选择是直接 "),t("strong",[a._v("终止")]),a._v("（"),t("em",[a._v("abort")]),a._v("），这会不清理数据就退出程序。那么程序所使用的内存需要由操作系统来清理。如果你需要项目的最终二进制文件越小越好，panic 时通过在  "),t("em",[a._v("Cargo.toml")]),a._v(" 的 "),t("code",[a._v("[profile]")]),a._v(" 部分增加 "),t("code",[a._v("panic = 'abort'")]),a._v("，可以由展开切换为终止。例如，如果你想要在release模式中 panic 时直接终止：")]),a._v(" "),t("div",{staticClass:"language-toml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token table class-name"}},[a._v("profile.release")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[a._v("panic")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'abort'")]),a._v("\n")])])])]),a._v(" "),t("p",[a._v("让我们在一个简单的程序中调用 "),t("code",[a._v("panic!")]),a._v("：")]),a._v(" "),t("p",[t("span",{staticClass:"filename"},[a._v("文件名: src/main.rs")])]),a._v(" "),t("div",{staticClass:"language-rust,should_panic,panics extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('fn main() {\n    panic!("crash and burn");\n}\n')])])]),t("p",[a._v("运行程序将会出现类似这样的输出：")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ cargo run\n   Compiling panic v0.1.0 (file:///projects/panic)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.25s\n     Running `target/debug/panic`\nthread 'main' panicked at 'crash and burn', src/main.rs:2:5\nnote: Run with `RUST_BACKTRACE=1` for a backtrace.\n")])])]),t("p",[a._v("最后两行包含 "),t("code",[a._v("panic!")]),a._v(" 调用造成的错误信息。第一行显示了 panic 提供的信息并指明了源码中 panic 出现的位置："),t("em",[a._v("src/main.rs:2:5")]),a._v(" 表明这是 "),t("em",[a._v("src/main.rs")]),a._v(" 文件的第二行第五个字符。")]),a._v(" "),t("p",[a._v("在这个例子中，被指明的那一行是我们代码的一部分，而且查看这一行的话就会发现 "),t("code",[a._v("panic!")]),a._v(" 宏的调用。在其他情况下，"),t("code",[a._v("panic!")]),a._v(" 可能会出现在我们的代码所调用的代码中。错误信息报告的文件名和行号可能指向别人代码中的 "),t("code",[a._v("panic!")]),a._v(" 宏调用，而不是我们代码中最终导致 "),t("code",[a._v("panic!")]),a._v(" 的那一行。我们可以使用 "),t("code",[a._v("panic!")]),a._v(" 被调用的函数的 backtrace 来寻找代码中出问题的地方。下面我们会详细介绍 backtrace 是什么。")]),a._v(" "),t("h3",{attrs:{id:"使用-panic-的-backtrace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-panic-的-backtrace"}},[a._v("#")]),a._v(" 使用 "),t("code",[a._v("panic!")]),a._v(" 的 backtrace")]),a._v(" "),t("p",[a._v("让我们来看看另一个因为我们代码中的 bug 引起的别的库中 "),t("code",[a._v("panic!")]),a._v(" 的例子，而不是直接的宏调用。示例 9-1 有一些尝试通过索引访问 vector 中元素的例子：")]),a._v(" "),t("p",[t("span",{staticClass:"filename"},[a._v("文件名: src/main.rs")])]),a._v(" "),t("div",{staticClass:"language-rust,should_panic,panics extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("fn main() {\n    let v = vec![1, 2, 3];\n\n    v[99];\n}\n")])])]),t("p",[t("span",{staticClass:"caption"},[a._v("示例 9-1：尝试访问超越 vector 结尾的元素，这会造成 "),t("code",[a._v("panic!")])])]),a._v(" "),t("p",[a._v("这里尝试访问 vector 的第一百个元素（这里的索引是 99 因为索引从 0 开始），不过它只有三个元素。这种情况下 Rust 会 panic。"),t("code",[a._v("[]")]),a._v(" 应当返回一个元素，不过如果传递了一个无效索引，就没有可供 Rust 返回的正确的元素。")]),a._v(" "),t("p",[a._v("这种情况下其他像 C 这样语言会尝试直接提供所要求的值，即便这可能不是你期望的：你会得到任何对应 vector 中这个元素的内存位置的值，甚至是这些内存并不属于 vector 的情况。这被称为 "),t("strong",[a._v("缓冲区溢出")]),a._v("（"),t("em",[a._v("buffer overread")]),a._v("），并可能会导致安全漏洞，比如攻击者可以像这样操作索引来读取储存在数组后面不被允许的数据。")]),a._v(" "),t("p",[a._v("为了使程序远离这类漏洞，如果尝试读取一个索引不存在的元素，Rust 会停止执行并拒绝继续。尝试运行上面的程序会出现如下：")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ cargo run\n   Compiling panic v0.1.0 (file:///projects/panic)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.27s\n     Running `target/debug/panic`\nthread 'main' panicked at 'index out of bounds: the len is 3 but the index is 99', libcore/slice/mod.rs:2448:10\nnote: Run with `RUST_BACKTRACE=1` for a backtrace.\n")])])]),t("p",[a._v("这指向了一个不是我们编写的文件，"),t("em",[a._v("libcore/slice/mod.rs")]),a._v("。其为 Rust 源码中 "),t("code",[a._v("slice")]),a._v(" 的实现。这是当对 vector "),t("code",[a._v("v")]),a._v(" 使用 "),t("code",[a._v("[]")]),a._v(" 时 "),t("em",[a._v("libcore/slice/mod.rs")]),a._v(" 中会执行的代码，也是真正出现 "),t("code",[a._v("panic!")]),a._v(" 的地方。")]),a._v(" "),t("p",[a._v("接下来的几行提醒我们可以设置 "),t("code",[a._v("RUST_BACKTRACE")]),a._v(" 环境变量来得到一个 backtrace。"),t("em",[a._v("backtrace")]),a._v(" 是一个执行到目前位置所有被调用的函数的列表。Rust 的 backtrace 跟其他语言中的一样：阅读 backtrace 的关键是从头开始读直到发现你编写的文件。这就是问题的发源地。这一行往上是你的代码所调用的代码；往下则是调用你的代码的代码。这些行可能包含核心 Rust 代码，标准库代码或用到的 crate 代码。让我们将 "),t("code",[a._v("RUST_BACKTRACE")]),a._v(" 环境变量设置为任何不是 0 的值来获取 backtrace 看看。示例 9-2 展示了与你看到类似的输出：")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ RUST_BACKTRACE=1 cargo run\n    Finished dev [unoptimized + debuginfo] target(s) in 0.00s\n     Running `target/debug/panic`\nthread 'main' panicked at 'index out of bounds: the len is 3 but the index is 99', libcore/slice/mod.rs:2448:10\nstack backtrace:\n   0: std::sys::unix::backtrace::tracing::imp::unwind_backtrace\n             at libstd/sys/unix/backtrace/tracing/gcc_s.rs:49\n   1: std::sys_common::backtrace::print\n             at libstd/sys_common/backtrace.rs:71\n             at libstd/sys_common/backtrace.rs:59\n   2: std::panicking::default_hook::{{closure}}\n             at libstd/panicking.rs:211\n   3: std::panicking::default_hook\n             at libstd/panicking.rs:227\n   4: <std::panicking::begin_panic::PanicPayload<A> as core::panic::BoxMeUp>::get\n             at libstd/panicking.rs:476\n   5: std::panicking::continue_panic_fmt\n             at libstd/panicking.rs:390\n   6: std::panicking::try::do_call\n             at libstd/panicking.rs:325\n   7: core::ptr::drop_in_place\n             at libcore/panicking.rs:77\n   8: core::ptr::drop_in_place\n             at libcore/panicking.rs:59\n   9: <usize as core::slice::SliceIndex<[T]>>::index\n             at libcore/slice/mod.rs:2448\n  10: core::slice::<impl core::ops::index::Index<I> for [T]>::index\n             at libcore/slice/mod.rs:2316\n  11: <alloc::vec::Vec<T> as core::ops::index::Index<I>>::index\n             at liballoc/vec.rs:1653\n  12: panic::main\n             at src/main.rs:4\n  13: std::rt::lang_start::{{closure}}\n             at libstd/rt.rs:74\n  14: std::panicking::try::do_call\n             at libstd/rt.rs:59\n             at libstd/panicking.rs:310\n  15: macho_symbol_search\n             at libpanic_unwind/lib.rs:102\n  16: std::alloc::default_alloc_error_hook\n             at libstd/panicking.rs:289\n             at libstd/panic.rs:392\n             at libstd/rt.rs:58\n  17: std::rt::lang_start\n             at libstd/rt.rs:74\n  18: panic::main\n")])])]),t("p",[t("span",{staticClass:"caption"},[a._v("示例 9-2：当设置 "),t("code",[a._v("RUST_BACKTRACE")]),a._v(" 环境变量时 "),t("code",[a._v("panic!")]),a._v(" 调用所生成的 backtrace 信息")])]),a._v(" "),t("p",[a._v("这里有大量的输出！你实际看到的输出可能因不同的操作系统和 Rust 版本而有所不同。为了获取带有这些信息的 backtrace，必须启用 debug 标识。当不使用 "),t("code",[a._v("--release")]),a._v(" 参数运行 cargo build 或 cargo run 时 debug 标识会默认启用，就像这里一样。")]),a._v(" "),t("p",[a._v("示例 9-2 的输出中，backtrace 的 12 行指向了我们项目中造成问题的行："),t("em",[a._v("src/main.rs")]),a._v(" 的第 4 行。如果你不希望程序 panic，第一个提到我们编写的代码行的位置是你应该开始调查的，以便查明是什么值如何在这个地方引起了 panic。在示例 9-1 中，我们故意编写会 panic 的代码来演示如何使用 backtrace，修复这个 panic 的方法就是不要尝试在一个只包含三个项的 vector 中请求索引是 100 的元素。当将来你的代码出现了 panic，你需要搞清楚在这特定的场景下代码中执行了什么操作和什么值导致了 panic，以及应当如何处理才能避免这个问题。")]),a._v(" "),t("p",[a._v("本章后面的小节 "),t("RouterLink",{attrs:{to:"/ch09-03-to-panic-or-not-to-panic.html#to-panic-or-not-to-panic"}},[a._v("“panic! 还是不 panic!”")]),a._v(" 会再次回到 "),t("code",[a._v("panic!")]),a._v(" 并讲解何时应该、何时不应该使用 "),t("code",[a._v("panic!")]),a._v(" 来处理错误情况。接下来，我们来看看如何使用 "),t("code",[a._v("Result")]),a._v(" 来从错误中恢复。")],1)])}),[],!1,null,null,null);n.default=e.exports}}]);