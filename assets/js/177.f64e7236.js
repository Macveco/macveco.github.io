(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{531:function(e,n,t){"use strict";t.r(n);var o=t(42),a=Object(o.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"读取文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#读取文件"}},[e._v("#")]),e._v(" 读取文件")]),e._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/ch12-02-reading-a-file.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ch12-02-reading-a-file.md"),t("OutboundLink")],1),e._v(" "),t("br"),e._v("\ncommit 76df60bccead5f3de96db23d97b69597cd8a2b82")])]),e._v(" "),t("p",[e._v("现在我们要增加读取由 "),t("code",[e._v("filename")]),e._v(" 命令行参数指定的文件的功能。首先，需要一个用来测试的示例文件：用来确保 "),t("code",[e._v("minigrep")]),e._v(" 正常工作的最好的文件是拥有多行少量文本且有一些重复单词的文件。示例 12-3 是一首艾米莉·狄金森（Emily Dickinson）的诗，它正适合这个工作！在项目根目录创建一个文件 "),t("code",[e._v("poem.txt")]),e._v('，并输入诗 "I\'m nobody! Who are you?"：')]),e._v(" "),t("p",[t("span",{staticClass:"filename"},[e._v("文件名: poem.txt")])]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("I'm nobody! Who are you?\nAre you nobody, too?\nThen there's a pair of us - don't tell!\nThey'd banish us, you know.\n\nHow dreary to be somebody!\nHow public, like a frog\nTo tell your name the livelong day\nTo an admiring bog!\n")])])]),t("p",[t("span",{staticClass:"caption"},[e._v("示例 12-3：艾米莉·狄金森的诗 “I’m nobody! Who are you?”，一个好的测试用例")])]),e._v(" "),t("p",[e._v("创建完这个文件之后，修改 "),t("em",[e._v("src/main.rs")]),e._v(" 并增加如示例 12-4 所示的打开文件的代码：")]),e._v(" "),t("p",[t("span",{staticClass:"filename"},[e._v("文件名: src/main.rs")])]),e._v(" "),t("div",{staticClass:"language-rust,should_panic extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('use std::env;\nuse std::fs;\n\nfn main() {\n#     let args: Vec<String> = env::args().collect();\n#\n#     let query = &args[1];\n#     let filename = &args[2];\n#\n#     println!("Searching for {}", query);\n    // --snip--\n    println!("In file {}", filename);\n\n    let contents = fs::read_to_string(filename)\n        .expect("Something went wrong reading the file");\n\n    println!("With text:\\n{}", contents);\n}\n')])])]),t("p",[t("span",{staticClass:"caption"},[e._v("示例 12-4：读取第二个参数所指定的文件内容")])]),e._v(" "),t("p",[e._v("首先，我们增加了一个 "),t("code",[e._v("use")]),e._v(" 语句来引入标准库中的相关部分：我们需要 "),t("code",[e._v("std::fs")]),e._v(" 来处理文件。")]),e._v(" "),t("p",[e._v("在 "),t("code",[e._v("main")]),e._v(" 中新增了一行语句："),t("code",[e._v("fs::read_to_string")]),e._v(" 接受 "),t("code",[e._v("filename")]),e._v("，打开文件，接着返回包含其内容的 "),t("code",[e._v("Result<String>")]),e._v("。")]),e._v(" "),t("p",[e._v("在这些代码之后，我们再次增加了临时的 "),t("code",[e._v("println!")]),e._v(" 打印出读取文件之后 "),t("code",[e._v("contents")]),e._v(" 的值，这样就可以检查目前为止的程序能否工作。")]),e._v(" "),t("p",[e._v("尝试运行这些代码，随意指定一个字符串作为第一个命令行参数（因为还未实现搜索功能的部分）而将 "),t("em",[e._v("poem.txt")]),e._v(" 文件将作为第二个参数：")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ cargo run the poem.txt\n   Compiling minigrep v0.1.0 (file:///projects/minigrep)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.0 secs\n     Running `target/debug/minigrep the poem.txt`\nSearching for the\nIn file poem.txt\nWith text:\nI'm nobody! Who are you?\nAre you nobody, too?\nThen there's a pair of us — don't tell!\nThey'd banish us, you know.\n\nHow dreary to be somebody!\nHow public, like a frog\nTo tell your name the livelong day\nTo an admiring bog!\n")])])]),t("p",[e._v("好的！代码读取并打印出了文件的内容。虽然它还有一些瑕疵："),t("code",[e._v("main")]),e._v(" 函数有着多个职能，通常函数只负责一个功能的话会更简洁并易于维护。另一个问题是没有尽可能的处理错误。虽然我们的程序还很小，这些瑕疵并不是什么大问题，不过随着程序功能的丰富，将会越来越难以用简单的方法修复他们。在开发程序时，及早开始重构是一个最佳实践，因为重构少量代码时要容易的多，所以让我们现在就开始吧。")])])}),[],!1,null,null,null);n.default=a.exports}}]);