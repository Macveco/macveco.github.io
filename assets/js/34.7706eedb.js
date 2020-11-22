(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{388:function(a,e,t){"use strict";t.r(e);var r=t(42),s=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"hello-cargo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hello-cargo"}},[a._v("#")]),a._v(" Hello, Cargo!")]),a._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/ch01-03-hello-cargo.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("ch01-03-hello-cargo.md"),t("OutboundLink")],1),a._v(" "),t("br"),a._v("\ncommit f63a103270ec8416899675a9cdb1c5cf6d77a498")])]),a._v(" "),t("p",[a._v("Cargo 是 Rust 的构建系统和包管理器。大多数 Rustacean 们使用 Cargo 来管理他们的 Rust 项目，因为它可以为你处理很多任务，比如构建代码、下载依赖库并编译这些库。（我们把代码所需要的库叫做 "),t("strong",[a._v("依赖")]),a._v("（"),t("em",[a._v("dependencies")]),a._v("））。")]),a._v(" "),t("p",[a._v("最简单的 Rust 程序，比如我们刚刚编写的，没有任何依赖。所以如果使用 Cargo 来构建 “Hello, world!” 项目，将只会用到 Cargo 构建代码的那部分功能。在编写更复杂的 Rust 程序时，你将添加依赖项，如果使用 Cargo 启动项目，则添加依赖项将更容易。")]),a._v(" "),t("p",[a._v("由于绝大多数 Rust 项目使用 Cargo，本书接下来的部分假设你也使用 Cargo。如果使用 "),t("RouterLink",{attrs:{to:"/articles/trpl/ch01-01-installation.html#installation"}},[a._v("“安装”")]),a._v(" 部分介绍的官方安装包的话，则自带了 Cargo。如果通过其他方式安装的话，可以在终端输入如下命令检查是否安装了 Cargo：")],1),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ cargo --version\n")])])]),t("p",[a._v("如果你看到了版本号，说明已安装！如果看到类似 "),t("code",[a._v("command not found")]),a._v(" 的错误，你应该查看相应安装文档以确定如何单独安装 Cargo。")]),a._v(" "),t("h3",{attrs:{id:"使用-cargo-创建项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-cargo-创建项目"}},[a._v("#")]),a._v(" 使用 Cargo 创建项目")]),a._v(" "),t("p",[a._v("我们使用 Cargo 创建一个新项目，然后看看与上面的 Hello, world! 项目有什么不同。回到 "),t("em",[a._v("projects")]),a._v(" 目录（或者你存放代码的目录）。接着，可在任何操作系统下运行以下命令：")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ cargo new hello_cargo\n$ cd hello_cargo\n")])])]),t("p",[a._v("第一行命令新建了名为 "),t("em",[a._v("hello_cargo")]),a._v(" 的目录。我们将项目命名为 "),t("em",[a._v("hello_cargo")]),a._v("，同时 Cargo 在一个同名目录中创建项目文件。")]),a._v(" "),t("p",[a._v("进入 "),t("em",[a._v("hello_cargo")]),a._v(" 目录并列出文件。将会看到 Cargo 生成了两个文件和一个目录：一个 "),t("em",[a._v("Cargo.toml")]),a._v(" 文件，一个 "),t("em",[a._v("src")]),a._v(" 目录，以及位于 "),t("em",[a._v("src")]),a._v(" 目录中的 "),t("em",[a._v("main.rs")]),a._v(" 文件。它也在 "),t("em",[a._v("hello_cargo")]),a._v(" 目录初始化了一个 git 仓库，以及一个 "),t("em",[a._v(".gitignore")]),a._v(" 文件。")]),a._v(" "),t("blockquote",[t("p",[a._v("注意：Git 是一个常用的版本控制系统（version control system， VCS）。可以通过 "),t("code",[a._v("--vcs")]),a._v(" 参数使 "),t("code",[a._v("cargo new")]),a._v(" 切换到其它版本控制系统（VCS），或者不使用 VCS。运行 "),t("code",[a._v("cargo new --help")]),a._v(" 参看可用的选项。")])]),a._v(" "),t("p",[a._v("请自行选用文本编辑器打开 "),t("em",[a._v("Cargo.toml")]),a._v(" 文件。它应该看起来如示例 1-2 所示：")]),a._v(" "),t("p",[t("span",{staticClass:"filename"},[a._v("文件名: Cargo.toml")])]),a._v(" "),t("div",{staticClass:"language-toml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token table class-name"}},[a._v("package")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[a._v("name")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hello_cargo"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[a._v("version")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.1.0"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[a._v("authors")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Your Name <you@example.com>"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[a._v("edition")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"2018"')]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token table class-name"}},[a._v("dependencies")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("p",[t("span",{staticClass:"caption"},[a._v("示例 1-2: "),t("em",[a._v("cargo new")]),a._v(" 命令生成的 "),t("em",[a._v("Cargo.toml")]),a._v(" 的内容")])]),a._v(" "),t("p",[a._v("这个文件使用 "),t("a",{attrs:{href:"https://github.com/toml-lang/toml",target:"_blank",rel:"noopener noreferrer"}},[t("em",[a._v("TOML")]),t("OutboundLink")],1),a._v(" ("),t("em",[a._v("Tom's Obvious, Minimal Language")]),a._v(") 格式，这是 Cargo 配置文件的格式。")]),a._v(" "),t("p",[a._v("第一行，"),t("code",[a._v("[package]")]),a._v("，是一个片段（section）标题，表明下面的语句用来配置一个包。随着我们在这个文件增加更多的信息，还将增加其他片段（section）。")]),a._v(" "),t("p",[a._v("接下来的四行设置了 Cargo 编译程序所需的配置：项目的名称、版本、作者以及要使用的 Rust 版本。Cargo 从环境中获取你的名字和 email 信息，所以如果这些信息不正确，请修改并保存此文件。附录 E 会介绍 "),t("code",[a._v("edition")]),a._v(" 的值。")]),a._v(" "),t("p",[a._v("最后一行，"),t("code",[a._v("[dependencies]")]),a._v("，是罗列项目依赖的片段的开始。在 Rust 中，代码包被称为 "),t("em",[a._v("crates")]),a._v("。这个项目并不需要其他的 crate，不过在第二章的第一个项目会用到依赖，那时会用得上这个片段。")]),a._v(" "),t("p",[a._v("现在打开 "),t("em",[a._v("src/main.rs")]),a._v(" 看看：")]),a._v(" "),t("p",[t("span",{staticClass:"filename"},[a._v("文件名: src/main.rs")])]),a._v(" "),t("div",{staticClass:"language-rust extra-class"},[t("pre",{pre:!0,attrs:{class:"language-rust"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fn")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[a._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("println!")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello, world!"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("Cargo 为你生成了一个 “Hello, world!” 程序，正如我们之前编写的示例 1-1！目前为止，之前项目与 Cargo 生成项目的区别是 Cargo 将代码放在 "),t("em",[a._v("src")]),a._v(" 目录，同时项目根目录包含一个 "),t("em",[a._v("Cargo.toml")]),a._v(" 配置文件。")]),a._v(" "),t("p",[a._v("Cargo 期望源文件存放在 "),t("em",[a._v("src")]),a._v(" 目录中。项目根目录只存放 README、license 信息、配置文件和其他跟代码无关的文件。使用 Cargo 帮助你保持项目干净整洁，一切井井有条。")]),a._v(" "),t("p",[a._v("如果没有使用 Cargo 开始项目，比如我们创建的 Hello,world! 项目，可以将其转化为一个 Cargo 项目。将代码放入 "),t("em",[a._v("src")]),a._v(" 目录，并创建一个合适的 "),t("em",[a._v("Cargo.toml")]),a._v(" 文件。")]),a._v(" "),t("h3",{attrs:{id:"构建并运行-cargo-项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建并运行-cargo-项目"}},[a._v("#")]),a._v(" 构建并运行 Cargo 项目")]),a._v(" "),t("p",[a._v("现在让我们看看通过 Cargo 构建和运行 “Hello, world!” 程序有什么不同！在 "),t("em",[a._v("hello_cargo")]),a._v(" 目录下，输入下面的命令来构建项目：")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ cargo build\n   Compiling hello_cargo v0.1.0 (file:///projects/hello_cargo)\n    Finished dev [unoptimized + debuginfo] target(s) in 2.85 secs\n")])])]),t("p",[a._v("这个命令会创建一个可执行文件 "),t("em",[a._v("target/debug/hello_cargo")]),a._v(" （在 Windows 上是 "),t("em",[a._v("target\\debug\\hello_cargo.exe")]),a._v("），而不是放在目前目录下。可以通过这个命令运行可执行文件：")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ ./target/debug/hello_cargo # 或者在 Windows 下为 .\\target\\debug\\hello_cargo.exe\nHello, world!\n")])])]),t("p",[a._v("如果一切顺利，终端上应该会打印出 "),t("code",[a._v("Hello, world!")]),a._v("。首次运行 "),t("code",[a._v("cargo build")]),a._v(" 时，也会使 Cargo 在项目根目录创建一个新文件："),t("em",[a._v("Cargo.lock")]),a._v("。这个文件记录项目依赖的实际版本。这个项目并没有依赖，所以其内容比较少。你自己永远也不需要碰这个文件，让 Cargo 处理它就行了。")]),a._v(" "),t("p",[a._v("我们刚刚使用 "),t("code",[a._v("cargo build")]),a._v(" 构建了项目，并使用 "),t("code",[a._v("./target/debug/hello_cargo")]),a._v(" 运行了程序，也可以使用 "),t("code",[a._v("cargo run")]),a._v(" 在一个命令中同时编译并运行生成的可执行文件：")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ cargo run\n    Finished dev [unoptimized + debuginfo] target(s) in 0.0 secs\n     Running `target/debug/hello_cargo`\nHello, world!\n")])])]),t("p",[a._v("注意这一次并没有出现表明 Cargo 正在编译 "),t("code",[a._v("hello_cargo")]),a._v(" 的输出。Cargo 发现文件并没有被改变，就直接运行了二进制文件。如果修改了源文件的话，Cargo 会在运行之前重新构建项目，并会出现像这样的输出：")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ cargo run\n   Compiling hello_cargo v0.1.0 (file:///projects/hello_cargo)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.33 secs\n     Running `target/debug/hello_cargo`\nHello, world!\n")])])]),t("p",[a._v("Cargo 还提供了一个叫 "),t("code",[a._v("cargo check")]),a._v(" 的命令。该命令快速检查代码确保其可以编译，但并不产生可执行文件：")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ cargo check\n   Checking hello_cargo v0.1.0 (file:///projects/hello_cargo)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.32 secs\n")])])]),t("p",[a._v("为什么你会不需要可执行文件呢？通常 "),t("code",[a._v("cargo check")]),a._v(" 要比 "),t("code",[a._v("cargo build")]),a._v(" 快得多，因为它省略了生成可执行文件的步骤。如果你在编写代码时持续的进行检查，"),t("code",[a._v("cargo check")]),a._v(" 会加速开发！为此很多 Rustaceans 编写代码时定期运行 "),t("code",[a._v("cargo check")]),a._v(" 确保它们可以编译。当准备好使用可执行文件时才运行 "),t("code",[a._v("cargo build")]),a._v("。")]),a._v(" "),t("p",[a._v("我们回顾下已学习的 Cargo 内容：")]),a._v(" "),t("ul",[t("li",[a._v("可以使用 "),t("code",[a._v("cargo build")]),a._v(" 或 "),t("code",[a._v("cargo check")]),a._v(" 构建项目。")]),a._v(" "),t("li",[a._v("可以使用 "),t("code",[a._v("cargo run")]),a._v(" 一步构建并运行项目。")]),a._v(" "),t("li",[a._v("有别于将构建结果放在与源码相同的目录，Cargo 会将其放到 "),t("em",[a._v("target/debug")]),a._v(" 目录。")])]),a._v(" "),t("p",[a._v("使用 Cargo 的一个额外的优点是，不管你使用什么操作系统，其命令都是一样的。所以从现在开始本书将不再为 Linux 和 macOS 以及 Windows 提供相应的命令。")]),a._v(" "),t("h3",{attrs:{id:"发布-release-构建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布-release-构建"}},[a._v("#")]),a._v(" 发布（release）构建")]),a._v(" "),t("p",[a._v("当项目最终准备好发布时，可以使用 "),t("code",[a._v("cargo build --release")]),a._v(" 来优化编译项目。这会在 "),t("em",[a._v("target/release")]),a._v(" 而不是 "),t("em",[a._v("target/debug")]),a._v(" 下生成可执行文件。这些优化可以让 Rust 代码运行的更快，不过启用这些优化也需要消耗更长的编译时间。这也就是为什么会有两种不同的配置：一种是为了开发，你需要经常快速重新构建；另一种是为用户构建最终程序，它们不会经常重新构建，并且希望程序运行得越快越好。如果你在测试代码的运行时间，请确保运行 "),t("code",[a._v("cargo build --release")]),a._v(" 并使用 "),t("em",[a._v("target/release")]),a._v(" 下的可执行文件进行测试。")]),a._v(" "),t("h3",{attrs:{id:"把-cargo-当作习惯"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#把-cargo-当作习惯"}},[a._v("#")]),a._v(" 把 Cargo 当作习惯")]),a._v(" "),t("p",[a._v("对于简单项目， Cargo 并不比 "),t("code",[a._v("rustc")]),a._v(" 提供了更多的优势，不过随着开发的深入，终将证明其价值。对于拥有多个 crate 的复杂项目，交给 Cargo 来协调构建将简单的多。")]),a._v(" "),t("p",[a._v("即便 "),t("code",[a._v("hello_cargo")]),a._v(" 项目十分简单，它现在也使用了很多在你之后的 Rust 生涯将会用到的实用工具。其实，要在任何已存在的项目上工作时，可以使用如下命令通过 Git 检出代码，移动到该项目目录并构建：")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ git clone someurl.com/someproject\n$ cd someproject\n$ cargo build\n")])])]),t("p",[a._v("关于更多 Cargo 的信息，请查阅 "),t("a",{attrs:{href:"https://doc.rust-lang.org/cargo/",target:"_blank",rel:"noopener noreferrer"}},[a._v("其文档"),t("OutboundLink")],1),a._v("。")]),a._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("p",[a._v("你已经准备好开启 Rust 之旅了！在本章中，你学习了如何：")]),a._v(" "),t("ul",[t("li",[a._v("使用 "),t("code",[a._v("rustup")]),a._v(" 安装最新稳定版的 Rust")]),a._v(" "),t("li",[a._v("更新到新版的 Rust")]),a._v(" "),t("li",[a._v("打开本地安装的文档")]),a._v(" "),t("li",[a._v("直接通过 "),t("code",[a._v("rustc")]),a._v(" 编写并运行 Hello, world! 程序")]),a._v(" "),t("li",[a._v("使用 Cargo 创建并运行新项目")])]),a._v(" "),t("p",[a._v("是时候通过构建更实质性的程序来熟悉读写 Rust 代码了。所以在第二章我们会构建一个猜猜看游戏程序。如果你更愿意从学习 Rust 常用的编程概念开始，请阅读第三章，接着再回到第二章。")])])}),[],!1,null,null,null);e.default=s.exports}}]);