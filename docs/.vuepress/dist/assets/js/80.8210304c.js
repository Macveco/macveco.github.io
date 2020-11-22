(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{434:function(t,s,e){"use strict";e.r(s);var a=e(42),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"采用测试驱动开发完善库的功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#采用测试驱动开发完善库的功能"}},[t._v("#")]),t._v(" 采用测试驱动开发完善库的功能")]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/ch12-04-testing-the-librarys-functionality.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("ch12-04-testing-the-librarys-functionality.md"),e("OutboundLink")],1),t._v(" "),e("br"),t._v("\ncommit 0ca4b88f75f8579de87adc2ad36d340709f5ccad")])]),t._v(" "),e("p",[t._v("现在我们将逻辑提取到了 "),e("em",[t._v("src/lib.rs")]),t._v(" 并将所有的参数解析和错误处理留在了 "),e("em",[t._v("src/main.rs")]),t._v(" 中，为代码的核心功能编写测试将更加容易。我们可以直接使用多种参数调用函数并检查返回值而无需从命令行运行二进制文件了。如果你愿意的话，请自行为 "),e("code",[t._v("Config::new")]),t._v(" 和 "),e("code",[t._v("run")]),t._v(" 函数的功能编写一些测试。")]),t._v(" "),e("p",[t._v("在这一部分，我们将遵循测试驱动开发（Test Driven Development, TDD）的模式来逐步增加 "),e("code",[t._v("minigrep")]),t._v(" 的搜索逻辑。这是一个软件开发技术，它遵循如下步骤：")]),t._v(" "),e("ol",[e("li",[t._v("编写一个失败的测试，并运行它以确保它失败的原因是你所期望的。")]),t._v(" "),e("li",[t._v("编写或修改足够的代码来使新的测试通过。")]),t._v(" "),e("li",[t._v("重构刚刚增加或修改的代码，并确保测试仍然能通过。")]),t._v(" "),e("li",[t._v("从步骤 1 开始重复！")])]),t._v(" "),e("p",[t._v("这只是众多编写软件的方法之一，不过 TDD 有助于驱动代码的设计。在编写能使测试通过的代码之前编写测试有助于在开发过程中保持高测试覆盖率。")]),t._v(" "),e("p",[t._v("我们将测试驱动实现实际在文件内容中搜索查询字符串并返回匹配的行示例的功能。我们将在一个叫做 "),e("code",[t._v("search")]),t._v(" 的函数中增加这些功能。")]),t._v(" "),e("h3",{attrs:{id:"编写失败测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编写失败测试"}},[t._v("#")]),t._v(" 编写失败测试")]),t._v(" "),e("p",[t._v("去掉 "),e("em",[t._v("src/lib.rs")]),t._v(" 和 "),e("em",[t._v("src/main.rs")]),t._v(" 中用于检查程序行为的 "),e("code",[t._v("println!")]),t._v(" 语句，因为不再真正需要他们了。接着我们会像 "),e("RouterLink",{attrs:{to:"/articles/trpl/ch11-01-writing-tests.html#the-anatomy-of-a-test-function"}},[t._v("第十一章")]),t._v(" 那样增加一个 "),e("code",[t._v("test")]),t._v(" 模块和一个测试函数。测试函数指定了 "),e("code",[t._v("search")]),t._v(" 函数期望拥有的行为：它会获取一个需要查询的字符串和用来查询的文本，并只会返回包含请求的文本行。示例 12-15 展示了这个测试，它还不能编译：")],1),t._v(" "),e("p",[e("span",{staticClass:"filename"},[t._v("文件名: src/lib.rs")])]),t._v(" "),e("div",{staticClass:"language-rust extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rust"}},[e("code",[t._v("# "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("search")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'a")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("query"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("str")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" contents"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'a")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("str")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vec")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'a")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("str")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n#      "),e("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("vec!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n# "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n#\n"),e("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[cfg(test)]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mod")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[t._v("tests")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[test]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("one_result")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" query "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"duct"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" contents "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\\nRust:\nsafe, fast, productive.\nPick three."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("assert_eq!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("vec!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"safe, fast, productive."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("search")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("query"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" contents"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[e("span",{staticClass:"caption"},[t._v("示例 12-15：创建一个我们期望的 "),e("code",[t._v("search")]),t._v(" 函数的失败测试")])]),t._v(" "),e("p",[t._v("这里选择使用 "),e("code",[t._v('"duct"')]),t._v(" 作为这个测试中需要搜索的字符串。用来搜索的文本有三行，其中只有一行包含 "),e("code",[t._v('"duct"')]),t._v("。我们断言 "),e("code",[t._v("search")]),t._v(" 函数的返回值只包含期望的那一行。")]),t._v(" "),e("p",[t._v("我们还不能运行这个测试并看到它失败，因为它甚至都还不能编译："),e("code",[t._v("search")]),t._v(" 函数还不存在呢！我们将增加足够的代码来使其能够编译：一个总是会返回空 vector 的 "),e("code",[t._v("search")]),t._v(" 函数定义，如示例 12-16 所示。然后这个测试应该能够编译并因为空 vector 并不匹配一个包含一行 "),e("code",[t._v('"safe, fast, productive."')]),t._v(" 的 vector 而失败。")]),t._v(" "),e("p",[e("span",{staticClass:"filename"},[t._v("文件名: src/lib.rs")])]),t._v(" "),e("div",{staticClass:"language-rust extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rust"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("search")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'a")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("query"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("str")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" contents"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'a")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("str")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vec")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'a")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("str")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("vec!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[e("span",{staticClass:"caption"},[t._v("示例 12-16：刚好足够使测试通过编译的 "),e("code",[t._v("search")]),t._v(" 函数定义")])]),t._v(" "),e("p",[t._v("注意需要在 "),e("code",[t._v("search")]),t._v(" 的签名中定义一个显式生命周期 "),e("code",[t._v("'a")]),t._v(" 并用于 "),e("code",[t._v("contents")]),t._v(" 参数和返回值。回忆一下 "),e("RouterLink",{attrs:{to:"/articles/trpl/ch10-03-lifetime-syntax.html"}},[t._v("第十章")]),t._v(" 中讲到生命周期参数指定哪个参数的生命周期与返回值的生命周期相关联。在这个例子中，我们表明返回的 vector 中应该包含引用参数 "),e("code",[t._v("contents")]),t._v("（而不是参数"),e("code",[t._v("query")]),t._v("） slice 的字符串 slice。")],1),t._v(" "),e("p",[t._v("换句话说，我们告诉 Rust 函数 "),e("code",[t._v("search")]),t._v(" 返回的数据将与 "),e("code",[t._v("search")]),t._v(" 函数中的参数 "),e("code",[t._v("contents")]),t._v(" 的数据存在的一样久。这是非常重要的！为了使这个引用有效那么 "),e("strong",[t._v("被")]),t._v(" slice 引用的数据也需要保持有效；如果编译器认为我们是在创建 "),e("code",[t._v("query")]),t._v(" 而不是 "),e("code",[t._v("contents")]),t._v(" 的字符串 slice，那么安全检查将是不正确的。")]),t._v(" "),e("p",[t._v("如果尝试不用生命周期编译的话，我们将得到如下错误：")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("error[E0106]: missing lifetime specifier\n --\x3e src/lib.rs:5:51\n  |\n5 | pub fn search(query: &str, contents: &str) -> Vec<&str> {\n  |                                                   ^ expected lifetime\nparameter\n  |\n  = help: this function's return type contains a borrowed value, but the\n  signature does not say whether it is borrowed from `query` or `contents`\n")])])]),e("p",[t._v("Rust 不可能知道我们需要的是哪一个参数，所以需要告诉它。因为参数 "),e("code",[t._v("contents")]),t._v(" 包含了所有的文本而且我们希望返回匹配的那部分文本，所以我们知道 "),e("code",[t._v("contents")]),t._v(" 是应该要使用生命周期语法来与返回值相关联的参数。")]),t._v(" "),e("p",[t._v("其他语言中并不需要你在函数签名中将参数与返回值相关联。所以这么做可能仍然感觉有些陌生，随着时间的推移这将会变得越来越容易。你可能想要将这个例子与第十章中 "),e("RouterLink",{attrs:{to:"/articles/trpl/ch10-03-lifetime-syntax.html#validating-references-with-lifetimes"}},[t._v("“生命周期与引用有效性”")]),t._v(" 部分做对比。")],1),t._v(" "),e("p",[t._v("现在运行测试：")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ cargo test\n   Compiling minigrep v0.1.0 (file:///projects/minigrep)\n--warnings--\n    Finished dev [unoptimized + debuginfo] target(s) in 0.43 secs\n     Running target/debug/deps/minigrep-abcabcabc\n\nrunning 1 test\ntest tests::one_result ... FAILED\n\nfailures:\n\n---- tests::one_result stdout ----\n        thread 'tests::one_result' panicked at 'assertion failed: `(left ==\nright)`\nleft: `[\"safe, fast, productive.\"]`,\nright: `[]`)', src/lib.rs:48:8\nnote: Run with `RUST_BACKTRACE=1` for a backtrace.\n\n\nfailures:\n    tests::one_result\n\ntest result: FAILED. 0 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out\n\nerror: test failed, to rerun pass '--lib'\n")])])]),e("p",[t._v("好的，测试失败了，这正是我们所期望的。修改代码来让测试通过吧！")]),t._v(" "),e("h3",{attrs:{id:"编写使测试通过的代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编写使测试通过的代码"}},[t._v("#")]),t._v(" 编写使测试通过的代码")]),t._v(" "),e("p",[t._v("目前测试之所以会失败是因为我们总是返回一个空的 vector。为了修复并实现 "),e("code",[t._v("search")]),t._v("，我们的程序需要遵循如下步骤：")]),t._v(" "),e("ul",[e("li",[t._v("遍历内容的每一行文本。")]),t._v(" "),e("li",[t._v("查看这一行是否包含要搜索的字符串。")]),t._v(" "),e("li",[t._v("如果有，将这一行加入列表返回值中。")]),t._v(" "),e("li",[t._v("如果没有，什么也不做。")]),t._v(" "),e("li",[t._v("返回匹配到的结果列表")])]),t._v(" "),e("p",[t._v("让我们一步一步的来，从遍历每行开始。")]),t._v(" "),e("h4",{attrs:{id:"使用-lines-方法遍历每一行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-lines-方法遍历每一行"}},[t._v("#")]),t._v(" 使用 "),e("code",[t._v("lines")]),t._v(" 方法遍历每一行")]),t._v(" "),e("p",[t._v("Rust 有一个有助于一行一行遍历字符串的方法，出于方便它被命名为 "),e("code",[t._v("lines")]),t._v("，它如示例 12-17 这样工作。注意这还不能编译：")]),t._v(" "),e("p",[e("span",{staticClass:"filename"},[t._v("文件名: src/lib.rs")])]),t._v(" "),e("div",{staticClass:"language-rust,ignore extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("pub fn search<'a>(query: &str, contents: &'a str) -> Vec<&'a str> {\n    for line in contents.lines() {\n        // do something with line\n    }\n}\n")])])]),e("p",[e("span",{staticClass:"caption"},[t._v("示例 12-17：遍历 "),e("code",[t._v("contents")]),t._v(" 的每一行")])]),t._v(" "),e("p",[e("code",[t._v("lines")]),t._v(" 方法返回一个迭代器。"),e("RouterLink",{attrs:{to:"/articles/trpl/ch13-02-iterators.html"}},[t._v("第十三章")]),t._v(" 会深入了解迭代器，不过我们已经在 "),e("RouterLink",{attrs:{to:"/articles/trpl/ch03-05-control-flow.html#looping-through-a-collection-with-for"}},[t._v("示例 3-5")]),t._v(" 中见过使用迭代器的方法了，在那里使用了一个 "),e("code",[t._v("for")]),t._v(" 循环和迭代器在一个集合的每一项上运行了一些代码。")],1),t._v(" "),e("h4",{attrs:{id:"用查询字符串搜索每一行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用查询字符串搜索每一行"}},[t._v("#")]),t._v(" 用查询字符串搜索每一行")]),t._v(" "),e("p",[t._v("接下来将会增加检查当前行是否包含查询字符串的功能。幸运的是，字符串类型为此也有一个叫做 "),e("code",[t._v("contains")]),t._v(" 的实用方法！如示例 12-18 所示在 "),e("code",[t._v("search")]),t._v(" 函数中加入 "),e("code",[t._v("contains")]),t._v(" 方法调用。注意这仍然不能编译：")]),t._v(" "),e("p",[e("span",{staticClass:"filename"},[t._v("文件名: src/lib.rs")])]),t._v(" "),e("div",{staticClass:"language-rust,ignore extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("pub fn search<'a>(query: &str, contents: &'a str) -> Vec<&'a str> {\n    for line in contents.lines() {\n        if line.contains(query) {\n            // do something with line\n        }\n    }\n}\n")])])]),e("p",[e("span",{staticClass:"caption"},[t._v("示例 12-18：增加检查文本行是否包含 "),e("code",[t._v("query")]),t._v(" 中字符串的功能")])]),t._v(" "),e("h4",{attrs:{id:"存储匹配的行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#存储匹配的行"}},[t._v("#")]),t._v(" 存储匹配的行")]),t._v(" "),e("p",[t._v("我们还需要一个方法来存储包含查询字符串的行。为此可以在 "),e("code",[t._v("for")]),t._v(" 循环之前创建一个可变的 vector 并调用 "),e("code",[t._v("push")]),t._v(" 方法在 vector 中存放一个 "),e("code",[t._v("line")]),t._v("。在 "),e("code",[t._v("for")]),t._v(" 循环之后，返回这个 vector，如示例 12-19 所示：")]),t._v(" "),e("p",[e("span",{staticClass:"filename"},[t._v("文件名: src/lib.rs")])]),t._v(" "),e("div",{staticClass:"language-rust,ignore extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("pub fn search<'a>(query: &str, contents: &'a str) -> Vec<&'a str> {\n    let mut results = Vec::new();\n\n    for line in contents.lines() {\n        if line.contains(query) {\n            results.push(line);\n        }\n    }\n\n    results\n}\n")])])]),e("p",[e("span",{staticClass:"caption"},[t._v("示例 12-19：储存匹配的行以便可以返回他们")])]),t._v(" "),e("p",[t._v("现在 "),e("code",[t._v("search")]),t._v(" 函数应该返回只包含 "),e("code",[t._v("query")]),t._v(" 的那些行，而测试应该会通过。让我们运行测试：")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ cargo test\n--snip--\nrunning 1 test\ntest tests::one_result ... ok\n\ntest result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out\n")])])]),e("p",[t._v("测试通过了，它可以工作了！")]),t._v(" "),e("p",[t._v("现在正是可以考虑重构的时机，在保证测试通过，保持功能不变的前提下重构 "),e("code",[t._v("search")]),t._v(" 函数。"),e("code",[t._v("search")]),t._v(" 函数中的代码并不坏，不过并没有利用迭代器的一些实用功能。第十三章将回到这个例子并深入探索迭代器并看看如何改进代码。")]),t._v(" "),e("h4",{attrs:{id:"在-run-函数中使用-search-函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在-run-函数中使用-search-函数"}},[t._v("#")]),t._v(" 在 "),e("code",[t._v("run")]),t._v(" 函数中使用 "),e("code",[t._v("search")]),t._v(" 函数")]),t._v(" "),e("p",[t._v("现在 "),e("code",[t._v("search")]),t._v(" 函数是可以工作并测试通过了的，我们需要实际在 "),e("code",[t._v("run")]),t._v(" 函数中调用 "),e("code",[t._v("search")]),t._v("。需要将 "),e("code",[t._v("config.query")]),t._v(" 值和 "),e("code",[t._v("run")]),t._v(" 从文件中读取的 "),e("code",[t._v("contents")]),t._v(" 传递给 "),e("code",[t._v("search")]),t._v(" 函数。接着 "),e("code",[t._v("run")]),t._v(" 会打印出 "),e("code",[t._v("search")]),t._v(" 返回的每一行：")]),t._v(" "),e("p",[e("span",{staticClass:"filename"},[t._v("文件名: src/lib.rs")])]),t._v(" "),e("div",{staticClass:"language-rust,ignore extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('pub fn run(config: Config) -> Result<(), Box<dyn Error>> {\n    let contents = fs::read_to_string(config.filename)?;\n\n    for line in search(&config.query, &contents) {\n        println!("{}", line);\n    }\n\n    Ok(())\n}\n')])])]),e("p",[t._v("这里仍然使用了 "),e("code",[t._v("for")]),t._v(" 循环获取了 "),e("code",[t._v("search")]),t._v(" 返回的每一行并打印出来。")]),t._v(" "),e("p",[t._v("现在整个程序应该可以工作了！让我们试一试，首先使用一个只会在艾米莉·狄金森的诗中返回一行的单词 “frog”：")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ cargo run frog poem.txt\n   Compiling minigrep v0.1.0 (file:///projects/minigrep)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.38 secs\n     Running `target/debug/minigrep frog poem.txt`\nHow public, like a frog\n")])])]),e("p",[t._v("好的！现在试试一个会匹配多行的单词，比如 “body”：")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ cargo run body poem.txt\n    Finished dev [unoptimized + debuginfo] target(s) in 0.0 secs\n     Running `target/debug/minigrep body poem.txt`\nI’m nobody! Who are you?\nAre you nobody, too?\nHow dreary to be somebody!\n")])])]),e("p",[t._v('最后，让我们确保搜索一个在诗中哪里都没有的单词时不会得到任何行，比如 "monomorphization"：')]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ cargo run monomorphization poem.txt\n    Finished dev [unoptimized + debuginfo] target(s) in 0.0 secs\n     Running `target/debug/minigrep monomorphization poem.txt`\n")])])]),e("p",[t._v("非常好！我们创建了一个属于自己的迷你版经典工具，并学习了很多如何组织程序的知识。我们还学习了一些文件输入输出、生命周期、测试和命令行解析的内容。")]),t._v(" "),e("p",[t._v("为了使这个项目更丰满，我们将简要的展示如何处理环境变量和打印到标准错误，这两者在编写命令行程序时都很有用。")])])}),[],!1,null,null,null);s.default=n.exports}}]);