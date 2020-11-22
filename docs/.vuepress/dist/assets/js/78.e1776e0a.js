(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{427:function(e,a,t){"use strict";t.r(a);var s=t(42),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"将-crate-发布到-crates-io"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将-crate-发布到-crates-io"}},[e._v("#")]),e._v(" 将 crate 发布到 Crates.io")]),e._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/ch14-02-publishing-to-crates-io.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ch14-02-publishing-to-crates-io.md"),t("OutboundLink")],1),e._v(" "),t("br"),e._v("\ncommit c084bdd9ee328e7e774df19882ccc139532e53d8")])]),e._v(" "),t("p",[e._v("我们曾经在项目中使用 "),t("a",{attrs:{href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),t("OutboundLink")],1),e._v(" 上的包作为依赖，不过你也可以通过发布自己的包来向它人分享代码。"),t("a",{attrs:{href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),t("OutboundLink")],1),e._v(" 用来分发包的源代码，所以它主要托管开源代码。")]),e._v(" "),t("p",[e._v("Rust 和 Cargo 有一些帮助它人更方便找到和使用你发布的包的功能。我们将介绍一些这样的功能，接着讲到如何发布一个包。")]),e._v(" "),t("h3",{attrs:{id:"编写有用的文档注释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写有用的文档注释"}},[e._v("#")]),e._v(" 编写有用的文档注释")]),e._v(" "),t("p",[e._v("准确的包文档有助于其他用户理解如何以及何时使用他们，所以花一些时间编写文档是值得的。第三章中我们讨论了如何使用两斜杠 "),t("code",[e._v("//")]),e._v(" 注释 Rust 代码。Rust 也有特定的用于文档的注释类型，通常被称为 "),t("strong",[e._v("文档注释")]),e._v("（"),t("em",[e._v("documentation comments")]),e._v("），他们会生成 HTML 文档。这些 HTML 展示公有 API 文档注释的内容，他们意在让对库感兴趣的程序员理解如何 "),t("strong",[e._v("使用")]),e._v(" 这个 crate，而不是它是如何被 "),t("strong",[e._v("实现")]),e._v(" 的。")]),e._v(" "),t("p",[e._v("文档注释使用三斜杠 "),t("code",[e._v("///")]),e._v(" 而不是两斜杆以支持 Markdown 注解来格式化文本。文档注释就位于需要文档的项的之前。示例 14-1 展示了一个 "),t("code",[e._v("my_crate")]),e._v(" crate 中 "),t("code",[e._v("add_one")]),e._v(" 函数的文档注释：")]),e._v(" "),t("p",[t("span",{staticClass:"filename"},[e._v("文件名: src/lib.rs")])]),e._v(" "),t("div",{staticClass:"language-rust,ignore extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/// Adds one to the number given.\n///\n/// # Examples\n///\n/// ```\n/// let arg = 5;\n/// let answer = my_crate::add_one(arg);\n///\n/// assert_eq!(6, answer);\n/// ```\npub fn add_one(x: i32) -> i32 {\n    x + 1\n}\n")])])]),t("p",[t("span",{staticClass:"caption"},[e._v("示例 14-1：一个函数的文档注释")])]),e._v(" "),t("p",[e._v("这里，我们提供了一个 "),t("code",[e._v("add_one")]),e._v(" 函数工作的描述，接着开始了一个标题为 "),t("code",[e._v("Examples")]),e._v(" 的部分，和展示如何使用 "),t("code",[e._v("add_one")]),e._v(" 函数的代码。可以运行 "),t("code",[e._v("cargo doc")]),e._v(" 来生成这个文档注释的 HTML 文档。这个命令运行由 Rust 分发的工具 "),t("code",[e._v("rustdoc")]),e._v(" 并将生成的 HTML 文档放入 "),t("em",[e._v("target/doc")]),e._v(" 目录。")]),e._v(" "),t("p",[e._v("为了方便起见，运行 "),t("code",[e._v("cargo doc --open")]),e._v(" 会构建当前 crate 文档（同时还有所有 crate 依赖的文档）的 HTML 并在浏览器中打开。导航到 "),t("code",[e._v("add_one")]),e._v(" 函数将会发现文档注释的文本是如何渲染的，如图 14-1 所示：")]),e._v(" "),t("img",{staticClass:"center",attrs:{alt:"`my_crate` 的 `add_one` 函数所渲染的文档注释 HTML",src:"img/trpl14-01.png"}}),e._v(" "),t("p",[t("span",{staticClass:"caption"},[e._v("图 14-1："),t("code",[e._v("add_one")]),e._v(" 函数的文档注释 HTML")])]),e._v(" "),t("h4",{attrs:{id:"常用-文档注释-部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用-文档注释-部分"}},[e._v("#")]),e._v(" 常用（文档注释）部分")]),e._v(" "),t("p",[e._v("示例 14-1 中使用了 "),t("code",[e._v("# Examples")]),e._v(" Markdown 标题在 HTML 中创建了一个以 “Examples” 为标题的部分。其他一些 crate 作者经常在文档注释中使用的部分有：")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Panics")]),e._v("：这个函数可能会 "),t("code",[e._v("panic!")]),e._v(" 的场景。并不希望程序崩溃的函数调用者应该确保他们不会在这些情况下调用此函数。")]),e._v(" "),t("li",[t("strong",[e._v("Errors")]),e._v("：如果这个函数返回 "),t("code",[e._v("Result")]),e._v("，此部分描述可能会出现何种错误以及什么情况会造成这些错误，这有助于调用者编写代码来采用不同的方式处理不同的错误。")]),e._v(" "),t("li",[t("strong",[e._v("Safety")]),e._v("：如果这个函数使用 "),t("code",[e._v("unsafe")]),e._v(" 代码（这会在第十九章讨论），这一部分应该会涉及到期望函数调用者支持的确保 "),t("code",[e._v("unsafe")]),e._v(" 块中代码正常工作的不变条件（invariants）。")])]),e._v(" "),t("p",[e._v("大部分文档注释不需要所有这些部分，不过这是一个提醒你检查调用你代码的人有兴趣了解的内容的列表。")]),e._v(" "),t("h4",{attrs:{id:"文档注释作为测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文档注释作为测试"}},[e._v("#")]),e._v(" 文档注释作为测试")]),e._v(" "),t("p",[e._v("在文档注释中增加示例代码块是一个清楚的表明如何使用库的方法，这么做还有一个额外的好处："),t("code",[e._v("cargo test")]),e._v(" 也会像测试那样运行文档中的示例代码！没有什么比有例子的文档更好的了，但最糟糕的莫过于写完文档后改动了代码，而导致例子不能正常工作。尝试 "),t("code",[e._v("cargo test")]),e._v(" 运行像示例 14-1 中 "),t("code",[e._v("add_one")]),e._v(" 函数的文档；应该在测试结果中看到像这样的部分：")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("   Doc-tests my_crate\n\nrunning 1 test\ntest src/lib.rs - add_one (line 5) ... ok\n\ntest result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out\n")])])]),t("p",[e._v("现在尝试改变函数或例子来使例子中的 "),t("code",[e._v("assert_eq!")]),e._v(" 产生 panic。再次运行 "),t("code",[e._v("cargo test")]),e._v("，你将会看到文档测试捕获到了例子与代码不再同步！")]),e._v(" "),t("h4",{attrs:{id:"注释包含项的结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注释包含项的结构"}},[e._v("#")]),e._v(" 注释包含项的结构")]),e._v(" "),t("p",[e._v("还有另一种风格的文档注释，"),t("code",[e._v("//!")]),e._v("，这为包含注释的项，而不是位于注释之后的项增加文档。这通常用于 crate 根文件（通常是 "),t("em",[e._v("src/lib.rs")]),e._v("）或模块的根文件为 crate 或模块整体提供文档。")]),e._v(" "),t("p",[e._v("作为一个例子，如果我们希望增加描述包含 "),t("code",[e._v("add_one")]),e._v(" 函数的 "),t("code",[e._v("my_crate")]),e._v(" crate 目的的文档，可以在 "),t("em",[e._v("src/lib.rs")]),e._v(" 开头增加以 "),t("code",[e._v("//!")]),e._v(" 开头的注释，如示例 14-2 所示：")]),e._v(" "),t("p",[t("span",{staticClass:"filename"},[e._v("文件名: src/lib.rs")])]),e._v(" "),t("div",{staticClass:"language-rust,ignore extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("//! # My Crate\n//!\n//! `my_crate` is a collection of utilities to make performing certain\n//! calculations more convenient.\n\n/// Adds one to the number given.\n// --snip--\n")])])]),t("p",[t("span",{staticClass:"caption"},[e._v("示例 14-2："),t("code",[e._v("my_crate")]),e._v(" crate 整体的文档")])]),e._v(" "),t("p",[e._v("注意 "),t("code",[e._v("//!")]),e._v(" 的最后一行之后没有任何代码。因为他们以 "),t("code",[e._v("//!")]),e._v(" 开头而不是 "),t("code",[e._v("///")]),e._v("，这是属于包含此注释的项而不是注释之后项的文档。在这个情况中，包含这个注释的项是 "),t("em",[e._v("src/lib.rs")]),e._v(" 文件，也就是 crate 根文件。这些注释描述了整个 crate。")]),e._v(" "),t("p",[e._v("如果运行 "),t("code",[e._v("cargo doc --open")]),e._v("，将会发现这些注释显示在 "),t("code",[e._v("my_crate")]),e._v(" 文档的首页，位于 crate 中公有项列表之上，如图 14-2 所示：")]),e._v(" "),t("img",{staticClass:"center",attrs:{alt:"crate 整体注释所渲染的 HTML 文档",src:"img/trpl14-02.png"}}),e._v(" "),t("p",[t("span",{staticClass:"caption"},[e._v("图 14-2：包含 "),t("code",[e._v("my_crate")]),e._v(" 整体描述的注释所渲染的文档")])]),e._v(" "),t("p",[e._v("位于项之中的文档注释对于描述 crate 和模块特别有用。使用他们描述其容器整体的目的来帮助 crate 用户理解你的代码组织。")]),e._v(" "),t("h3",{attrs:{id:"使用-pub-use-导出合适的公有-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-pub-use-导出合适的公有-api"}},[e._v("#")]),e._v(" 使用 "),t("code",[e._v("pub use")]),e._v(" 导出合适的公有 API")]),e._v(" "),t("p",[e._v("第七章介绍了如何使用 "),t("code",[e._v("mod")]),e._v(" 关键字来将代码组织进模块中，如何使用 "),t("code",[e._v("pub")]),e._v(" 关键字将项变为公有，和如何使用 "),t("code",[e._v("use")]),e._v(" 关键字将项引入作用域。然而你开发时候使用的文件架构可能并不方便用户。你的结构可能是一个包含多个层级的分层结构，不过这对于用户来说并不方便。这是因为想要使用被定义在很深层级中的类型的人可能很难发现这些类型的存在。他们也可能会厌烦使用 "),t("code",[e._v("use my_crate::some_module::another_module::UsefulType;")]),e._v(" 而不是 "),t("code",[e._v("use my_crate::UsefulType;")]),e._v(" 来使用类型。")]),e._v(" "),t("p",[e._v("公有 API 的结构是你发布 crate 时主要需要考虑的。crate 用户没有你那么熟悉其结构，并且如果模块层级过大他们可能会难以找到所需的部分。")]),e._v(" "),t("p",[e._v("好消息是，即使文件结构对于用户来说 "),t("strong",[e._v("不是")]),e._v(" 很方便，你也无需重新安排内部组织：你可以选择使用 "),t("code",[e._v("pub use")]),e._v(" 重导出（re-export）项来使公有结构不同于私有结构。重导出获取位于一个位置的公有项并将其公开到另一个位置，好像它就定义在这个新位置一样。")]),e._v(" "),t("p",[e._v("例如，假设我们创建了一个描述美术信息的库 "),t("code",[e._v("art")]),e._v("。这个库中包含了一个有两个枚举 "),t("code",[e._v("PrimaryColor")]),e._v(" 和 "),t("code",[e._v("SecondaryColor")]),e._v(" 的模块 "),t("code",[e._v("kinds")]),e._v("，以及一个包含函数 "),t("code",[e._v("mix")]),e._v(" 的模块 "),t("code",[e._v("utils")]),e._v("，如示例 14-3 所示：")]),e._v(" "),t("p",[t("span",{staticClass:"filename"},[e._v("文件名: src/lib.rs")])]),e._v(" "),t("div",{staticClass:"language-rust,ignore extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("//! # Art\n//!\n//! A library for modeling artistic concepts.\n\npub mod kinds {\n    /// The primary colors according to the RYB color model.\n    pub enum PrimaryColor {\n        Red,\n        Yellow,\n        Blue,\n    }\n\n    /// The secondary colors according to the RYB color model.\n    pub enum SecondaryColor {\n        Orange,\n        Green,\n        Purple,\n    }\n}\n\npub mod utils {\n    use crate::kinds::*;\n\n    /// Combines two primary colors in equal amounts to create\n    /// a secondary color.\n    pub fn mix(c1: PrimaryColor, c2: PrimaryColor) -> SecondaryColor {\n        // --snip--\n#         SecondaryColor::Orange\n    }\n}\n# fn main() {}\n")])])]),t("p",[t("span",{staticClass:"caption"},[e._v("示例 14-3：一个库 "),t("code",[e._v("art")]),e._v(" 其组织包含 "),t("code",[e._v("kinds")]),e._v(" 和 "),t("code",[e._v("utils")]),e._v(" 模块")])]),e._v(" "),t("p",[t("code",[e._v("cargo doc")]),e._v(" 所生成的 crate 文档首页如图 14-3 所示：")]),e._v(" "),t("img",{staticClass:"center",attrs:{alt:"包含 `kinds` 和 `utils` 模块的 `art`",src:"img/trpl14-03.png"}}),e._v(" "),t("p",[t("span",{staticClass:"caption"},[e._v("图 14-3：包含 "),t("code",[e._v("kinds")]),e._v(" 和 "),t("code",[e._v("utils")]),e._v(" 模块的库 "),t("code",[e._v("art")]),e._v(" 的文档首页")])]),e._v(" "),t("p",[e._v("注意 "),t("code",[e._v("PrimaryColor")]),e._v(" 和 "),t("code",[e._v("SecondaryColor")]),e._v(" 类型、以及 "),t("code",[e._v("mix")]),e._v(" 函数都没有在首页中列出。我们必须点击 "),t("code",[e._v("kinds")]),e._v(" 或 "),t("code",[e._v("utils")]),e._v(" 才能看到他们。")]),e._v(" "),t("p",[e._v("另一个依赖这个库的 crate 需要 "),t("code",[e._v("use")]),e._v(" 语句来导入 "),t("code",[e._v("art")]),e._v(" 中的项，这包含指定其当前定义的模块结构。示例 14-4 展示了一个使用 "),t("code",[e._v("art")]),e._v(" crate 中 "),t("code",[e._v("PrimaryColor")]),e._v(" 和 "),t("code",[e._v("mix")]),e._v(" 项的 crate 的例子：")]),e._v(" "),t("p",[t("span",{staticClass:"filename"},[e._v("文件名: src/main.rs")])]),e._v(" "),t("div",{staticClass:"language-rust,ignore extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("use art::kinds::PrimaryColor;\nuse art::utils::mix;\n\nfn main() {\n    let red = PrimaryColor::Red;\n    let yellow = PrimaryColor::Yellow;\n    mix(red, yellow);\n}\n")])])]),t("p",[t("span",{staticClass:"caption"},[e._v("示例 14-4：一个通过导出内部结构使用 "),t("code",[e._v("art")]),e._v(" crate 中项的 crate")])]),e._v(" "),t("p",[e._v("示例 14-4 中使用 "),t("code",[e._v("art")]),e._v(" crate 代码的作者不得不搞清楚 "),t("code",[e._v("PrimaryColor")]),e._v(" 位于 "),t("code",[e._v("kinds")]),e._v(" 模块而 "),t("code",[e._v("mix")]),e._v(" 位于 "),t("code",[e._v("utils")]),e._v(" 模块。"),t("code",[e._v("art")]),e._v(" crate 的模块结构相比使用它的开发者来说对编写它的开发者更有意义。其内部的 "),t("code",[e._v("kinds")]),e._v(" 模块和 "),t("code",[e._v("utils")]),e._v(" 模块的组织结构并没有对尝试理解如何使用它的人提供任何有价值的信息。"),t("code",[e._v("art")]),e._v(" crate 的模块结构因不得不搞清楚所需的内容在何处和必须在 "),t("code",[e._v("use")]),e._v(" 语句中指定模块名称而显得混乱和不便。")]),e._v(" "),t("p",[e._v("为了从公有 API 中去掉 crate 的内部组织，我们可以采用示例 14-3 中的 "),t("code",[e._v("art")]),e._v(" crate 并增加 "),t("code",[e._v("pub use")]),e._v(" 语句来重导出项到顶层结构，如示例 14-5 所示：")]),e._v(" "),t("p",[t("span",{staticClass:"filename"},[e._v("文件名: src/lib.rs")])]),e._v(" "),t("div",{staticClass:"language-rust,ignore extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("//! # Art\n//!\n//! A library for modeling artistic concepts.\n\npub use self::kinds::PrimaryColor;\npub use self::kinds::SecondaryColor;\npub use self::utils::mix;\n\npub mod kinds {\n    // --snip--\n}\n\npub mod utils {\n    // --snip--\n}\n")])])]),t("p",[t("span",{staticClass:"caption"},[e._v("示例 14-5：增加 "),t("code",[e._v("pub use")]),e._v(" 语句重导出项")])]),e._v(" "),t("p",[e._v("现在此 crate 由 "),t("code",[e._v("cargo doc")]),e._v(" 生成的 API 文档会在首页列出重导出的项以及其链接，如图 14-4 所示，这使得 "),t("code",[e._v("PrimaryColor")]),e._v(" 和 "),t("code",[e._v("SecondaryColor")]),e._v(" 类型和 "),t("code",[e._v("mix")]),e._v(" 函数更易于查找。")]),e._v(" "),t("img",{staticClass:"center",attrs:{alt:"Rendered documentation for the `art` crate with the re-exports on the front page",src:"img/trpl14-04.png"}}),e._v(" "),t("p",[t("span",{staticClass:"caption"},[e._v("图 14-10："),t("code",[e._v("art")]),e._v(" 文档的首页，这里列出了重导出的项")])]),e._v(" "),t("p",[t("code",[e._v("art")]),e._v(" crate 的用户仍然可以看见和选择使用示例 14-4 中的内部结构，或者可以使用示例 14-5 中更为方便的结构，如示例 14-6 所示：")]),e._v(" "),t("p",[t("span",{staticClass:"filename"},[e._v("文件名: src/main.rs")])]),e._v(" "),t("div",{staticClass:"language-rust,ignore extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("use art::PrimaryColor;\nuse art::mix;\n\nfn main() {\n    // --snip--\n}\n")])])]),t("p",[t("span",{staticClass:"caption"},[e._v("示例 14-6：一个使用 "),t("code",[e._v("art")]),e._v(" crate 中重导出项的程序")])]),e._v(" "),t("p",[e._v("对于有很多嵌套模块的情况，使用 "),t("code",[e._v("pub use")]),e._v(" 将类型重导出到顶级结构对于使用 crate 的人来说将会是大为不同的体验。")]),e._v(" "),t("p",[e._v("创建一个有用的公有 API 结构更像是一门艺术而非科学，你可以反复检视他们来找出最适合用户的 API。"),t("code",[e._v("pub use")]),e._v(" 提供了解耦组织 crate 内部结构和与终端用户体现的灵活性。观察一些你所安装的 crate 的代码来看看其内部结构是否不同于公有 API。")]),e._v(" "),t("h3",{attrs:{id:"创建-crates-io-账号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建-crates-io-账号"}},[e._v("#")]),e._v(" 创建 Crates.io 账号")]),e._v(" "),t("p",[e._v("在你可以发布任何 crate 之前，需要在 "),t("a",{attrs:{href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),t("OutboundLink")],1),e._v(" 上注册账号并获取一个 API token。为此，访问位于 "),t("a",{attrs:{href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),t("OutboundLink")],1),e._v(" 的首页并使用 GitHub 账号登陆。（目前 GitHub 账号是必须的，不过将来该网站可能会支持其他创建账号的方法）一旦登陆之后，查看位于 "),t("a",{attrs:{href:"https://crates.io/me/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://crates.io/me/"),t("OutboundLink")],1),e._v(" 的账户设置页面并获取 API token。接着使用该 API token 运行 "),t("code",[e._v("cargo login")]),e._v(" 命令，像这样：")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ cargo login abcdefghijklmnopqrstuvwxyz012345\n")])])]),t("p",[e._v("这个命令会通知 Cargo 你的 API token 并将其储存在本地的 "),t("em",[e._v("~/.cargo/credentials")]),e._v(" 文件中。注意这个 token 是一个 "),t("strong",[e._v("秘密")]),e._v("（"),t("strong",[e._v("secret")]),e._v("）且不应该与其他人共享。如果因为任何原因与他人共享了这个信息，应该立即到 "),t("a",{attrs:{href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),t("OutboundLink")],1),e._v(" 重新生成这个 token。")]),e._v(" "),t("h3",{attrs:{id:"发布新-crate-之前"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布新-crate-之前"}},[e._v("#")]),e._v(" 发布新 crate 之前")]),e._v(" "),t("p",[e._v("有了账号之后，比如说你已经有一个希望发布的 crate。在发布之前，你需要在 crate 的 "),t("em",[e._v("Cargo.toml")]),e._v(" 文件的 "),t("code",[e._v("[package]")]),e._v(" 部分增加一些本 crate 的元信息（metadata）。")]),e._v(" "),t("p",[e._v("首先 crate 需要一个唯一的名称。虽然在本地开发 crate 时，可以使用任何你喜欢的名称。不过 "),t("a",{attrs:{href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),t("OutboundLink")],1),e._v(" 上的 crate 名称遵守先到先得的分配原则。一旦某个 crate 名称被使用，其他人就不能再发布这个名称的 crate 了。请在网站上搜索你希望使用的名称来找出它是否已被使用。如果没有，修改 "),t("em",[e._v("Cargo.toml")]),e._v(" 中 "),t("code",[e._v("[package]")]),e._v(" 里的名称为你希望用于发布的名称，像这样：")]),e._v(" "),t("p",[t("span",{staticClass:"filename"},[e._v("文件名: Cargo.toml")])]),e._v(" "),t("div",{staticClass:"language-toml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token table class-name"}},[e._v("package")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[e._v("name")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"guessing_game"')]),e._v("\n")])])]),t("p",[e._v("即使你选择了一个唯一的名称，如果此时尝试运行 "),t("code",[e._v("cargo publish")]),e._v(" 发布该 crate 的话，会得到一个警告接着是一个错误：")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ cargo publish\n    Updating registry `https://github.com/rust-lang/crates.io-index`\nwarning: manifest has no description, license, license-file, documentation,\nhomepage or repository.\n--snip--\nerror: api errors: missing or empty metadata fields: description, license.\n")])])]),t("p",[e._v("这是因为我们缺少一些关键信息：关于该 crate 用途的描述和用户可能在何种条款下使用该 crate 的 license。为了修正这个错误，需要在 "),t("em",[e._v("Cargo.toml")]),e._v(" 中引入这些信息。")]),e._v(" "),t("p",[e._v("描述通常是一两句话，因为它会出现在 crate 的搜索结果中和 crate 页面里。对于 "),t("code",[e._v("license")]),e._v(" 字段，你需要一个 "),t("strong",[e._v("license 标识符值")]),e._v("（"),t("em",[e._v("license identifier value")]),e._v("）。"),t("a",{attrs:{href:"http://spdx.org/licenses/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linux 基金会的 Software Package Data Exchange (SPDX)"),t("OutboundLink")],1),e._v(" 列出了可以使用的标识符。例如，为了指定 crate 使用 MIT License，增加 "),t("code",[e._v("MIT")]),e._v(" 标识符：")]),e._v(" "),t("p",[t("span",{staticClass:"filename"},[e._v("文件名: Cargo.toml")])]),e._v(" "),t("div",{staticClass:"language-toml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token table class-name"}},[e._v("package")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[e._v("name")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"guessing_game"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[e._v("license")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"MIT"')]),e._v("\n")])])]),t("p",[e._v("如果你希望使用不存在于 SPDX 的 license，则需要将 license 文本放入一个文件，将该文件包含进项目中，接着使用 "),t("code",[e._v("license-file")]),e._v(" 来指定文件名而不是使用 "),t("code",[e._v("license")]),e._v(" 字段。")]),e._v(" "),t("p",[e._v("关于项目所适用的 license 指导超出了本书的范畴。很多 Rust 社区成员选择与 Rust 自身相同的 license，这是一个双许可的 "),t("code",[e._v("MIT OR Apache-2.0")]),e._v("。这个实践展示了也可以通过 "),t("code",[e._v("OR")]),e._v(" 分隔为项目指定多个 license 标识符。")]),e._v(" "),t("p",[e._v("那么，有了唯一的名称、版本号、由 "),t("code",[e._v("cargo new")]),e._v(" 新建项目时增加的作者信息、描述和所选择的 license，已经准备好发布的项目的 "),t("em",[e._v("Cargo.toml")]),e._v(" 文件可能看起来像这样：")]),e._v(" "),t("p",[t("span",{staticClass:"filename"},[e._v("文件名: Cargo.toml")])]),e._v(" "),t("div",{staticClass:"language-toml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token table class-name"}},[e._v("package")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[e._v("name")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"guessing_game"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[e._v("version")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0.1.0"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[e._v("authors")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Your Name <you@example.com>"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[e._v("edition")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"2018"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[e._v("description")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"A fun game where you guess what number the computer has chosen."')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[e._v("license")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"MIT OR Apache-2.0"')]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token table class-name"}},[e._v("dependencies")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),t("p",[t("a",{attrs:{href:"http://doc.rust-lang.org/cargo/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cargo 的文档"),t("OutboundLink")],1),e._v(" 描述了其他可以指定的元信息，他们可以帮助你的 crate 更容易被发现和使用！")]),e._v(" "),t("h3",{attrs:{id:"发布到-crates-io"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布到-crates-io"}},[e._v("#")]),e._v(" 发布到 Crates.io")]),e._v(" "),t("p",[e._v("现在我们创建了一个账号，保存了 API token，为 crate 选择了一个名字，并指定了所需的元数据，你已经准备好发布了！发布 crate 会上传特定版本的 crate 到 "),t("a",{attrs:{href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),t("OutboundLink")],1),e._v(" 以供他人使用。")]),e._v(" "),t("p",[e._v("发布 crate 时请多加小心，因为发布是 "),t("strong",[e._v("永久性的")]),e._v("（"),t("em",[e._v("permanent")]),e._v("）。对应版本不可能被覆盖，其代码也不可能被删除。"),t("a",{attrs:{href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),t("OutboundLink")],1),e._v(" 的一个主要目标是作为一个存储代码的永久文档服务器，这样所有依赖 "),t("a",{attrs:{href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),t("OutboundLink")],1),e._v(" 中的 crate 的项目都能一直正常工作。而允许删除版本没办法达成这个目标。然而，可以被发布的版本号却没有限制。")]),e._v(" "),t("p",[e._v("再次运行 "),t("code",[e._v("cargo publish")]),e._v(" 命令。这次它应该会成功：")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ cargo publish\n Updating registry `https://github.com/rust-lang/crates.io-index`\nPackaging guessing_game v0.1.0 (file:///projects/guessing_game)\nVerifying guessing_game v0.1.0 (file:///projects/guessing_game)\nCompiling guessing_game v0.1.0\n(file:///projects/guessing_game/target/package/guessing_game-0.1.0)\n Finished dev [unoptimized + debuginfo] target(s) in 0.19 secs\nUploading guessing_game v0.1.0 (file:///projects/guessing_game)\n")])])]),t("p",[e._v("恭喜！你现在向 Rust 社区分享了代码，而且任何人都可以轻松的将你的 crate 加入他们项目的依赖。")]),e._v(" "),t("h3",{attrs:{id:"发布现存-crate-的新版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布现存-crate-的新版本"}},[e._v("#")]),e._v(" 发布现存 crate 的新版本")]),e._v(" "),t("p",[e._v("当你修改了 crate 并准备好发布新版本时，改变 "),t("em",[e._v("Cargo.toml")]),e._v(" 中 "),t("code",[e._v("version")]),e._v(" 所指定的值。请使用 "),t("a",{attrs:{href:"http://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("语义化版本规则"),t("OutboundLink")],1),e._v(" 来根据修改的类型决定下一个版本号。接着运行 "),t("code",[e._v("cargo publish")]),e._v(" 来上传新版本。")]),e._v(" "),t("h3",{attrs:{id:"使用-cargo-yank-从-crates-io-撤回版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-cargo-yank-从-crates-io-撤回版本"}},[e._v("#")]),e._v(" 使用 "),t("code",[e._v("cargo yank")]),e._v(" 从 Crates.io 撤回版本")]),e._v(" "),t("p",[e._v("虽然你不能删除之前版本的 crate，但是可以阻止任何将来的项目将他们加入到依赖中。这在某个版本因为这样或那样的原因被破坏的情况很有用。对于这种情况，Cargo 支持 "),t("strong",[e._v("撤回")]),e._v("（"),t("em",[e._v("yanking")]),e._v("）某个版本。")]),e._v(" "),t("p",[e._v("撤回某个版本会阻止新项目开始依赖此版本，不过所有现存此依赖的项目仍然能够下载和依赖这个版本。从本质上说，撤回意味着所有带有 "),t("em",[e._v("Cargo.lock")]),e._v(" 的项目的依赖不会被破坏，同时任何新生成的 "),t("em",[e._v("Cargo.lock")]),e._v(" 将不能使用被撤回的版本。")]),e._v(" "),t("p",[e._v("为了撤回一个 crate，运行 "),t("code",[e._v("cargo yank")]),e._v(" 并指定希望撤回的版本：")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ cargo yank --vers 1.0.1\n")])])]),t("p",[e._v("也可以撤销撤回操作，并允许项目可以再次开始依赖某个版本，通过在命令上增加 "),t("code",[e._v("--undo")]),e._v("：")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ cargo yank --vers 1.0.1 --undo\n")])])]),t("p",[e._v("撤回 "),t("strong",[e._v("并没有")]),e._v(" 删除任何代码。举例来说，撤回功能并不意在删除不小心上传的秘密信息。如果出现了这种情况，请立即重新设置这些秘密信息。")])])}),[],!1,null,null,null);a.default=r.exports}}]);