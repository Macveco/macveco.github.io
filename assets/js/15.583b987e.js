(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{371:function(t,e,_){"use strict";_.r(e);var v=_(42),s=Object(v.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"附录-e-版本"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#附录-e-版本"}},[t._v("#")]),t._v(" 附录 E：版本")]),t._v(" "),_("blockquote",[_("p",[_("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/appendix-05-editions.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("appendix-05-editions.md"),_("OutboundLink")],1),t._v(" "),_("br"),t._v("\ncommit 70a82519e48b8a61f98cabb8ff443d1b21962fea")])]),t._v(" "),_("p",[t._v("早在第一章，我们见过 "),_("code",[t._v("cargo new")]),t._v(" 在 "),_("em",[t._v("Cargo.toml")]),t._v(" 中增加了一些有关 "),_("code",[t._v("edition")]),t._v(" 的元数据。本附录将解释其意义！")]),t._v(" "),_("p",[t._v("Rust 语言和编译器有一个为期 6 周的发布循环。这意味着用户会稳定得到新功能的更新。其他编程语言发布大更新但不甚频繁；Rust 选择更为频繁的发布小更新。一段时间之后，所有这些小更新会日积月累。不过随着小更新逐次的发布，或许很难回过头来感叹：“哇，从 Rust 1.10 到 Rust 1.31，Rust 的变化真大！”")]),t._v(" "),_("p",[t._v("每两到三年，Rust 团队会生成一个新的 Rust "),_("strong",[t._v("版本")]),t._v("（"),_("em",[t._v("edition")]),t._v("）。每一个版本会结合已经落地的功能，并提供一个清晰的带有完整更新文档和工具的功能包。新版本会作为常规的 6 周发布过程的一部分发布。")]),t._v(" "),_("p",[t._v("这为不同的人群提供了不同的功能：")]),t._v(" "),_("ul",[_("li",[t._v("对于活跃的 Rust 用户，其将增量的修改与易于理解的功能包相结合。")]),t._v(" "),_("li",[t._v("对于非用户，它表明发布了一些重大进展，这意味着 Rust 可能变得值得一试。")]),t._v(" "),_("li",[t._v("对于 Rust 自身开发者，其提供了项目整体的集合点。")])]),t._v(" "),_("p",[t._v("在本文档编写时，Rust 有两个版本：Rust 2015 和 Rust 2018。本书基于 Rust 2018 edition 编写。")]),t._v(" "),_("p",[_("em",[t._v("Cargo.toml")]),t._v(" 中的 "),_("code",[t._v("edition")]),t._v(" 字段表明代码应该使用哪个版本编译。如果该字段不存在，其默认为 "),_("code",[t._v("2015")]),t._v(" 以提供后向兼容性。")]),t._v(" "),_("p",[t._v("每个项目都可以选择不同于默认的 2015 edition 的版本。这样，版本可能会包含不兼容的修改，比如新增关键字可能会与代码中的标识符冲突并导致错误。不过除非选择兼容这些修改，（旧）代码仍将能够编译，即便升级了 Rust 编译器的版本。")]),t._v(" "),_("p",[t._v("所有 Rust 编译器都支持任何之前存在的编译器版本，并可以链接任何支持版本的 crate。编译器修改只影响最初的解析代码的过程。因此，如果你使用 Rust 2015 而某个依赖使用 Rust 2018，你的项目仍旧能够编译并使用该依赖。反之，若项目使用 Rust 2018 而依赖使用 Rust 2015 亦可工作。")]),t._v(" "),_("p",[t._v("有一点需要明确：大部分功能在所有版本中都能使用。开发者使用任何 Rust 版本将能继续接收最新稳定版的改进。然而在一些情况，主要是增加了新关键字的时候，则可能出现了只能用于新版本的功能。只需切换版本即可利用新版本的功能。")]),t._v(" "),_("p",[t._v("请查看 "),_("a",{attrs:{href:"https://rust-lang-nursery.github.io/edition-guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Edition Guide"),_("OutboundLink")],1),t._v(" 了解更多细节，这是一个完全介绍版本的书籍，包括如何通过 "),_("code",[t._v("cargo fix")]),t._v(" 自动将代码迁移到新版本。")])])}),[],!1,null,null,null);e.default=s.exports}}]);