(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{525:function(t,e,r){"use strict";r.r(e);var s=r(42),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"编写自动化测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#编写自动化测试"}},[t._v("#")]),t._v(" 编写自动化测试")]),t._v(" "),r("blockquote",[r("p",[r("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/ch11-00-testing.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("ch11-00-testing.md"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("\ncommit 1fedfc4b96c2017f64ecfcf41a0a07e2e815f24f")])]),t._v(" "),r("p",[t._v("Edsger W. Dijkstra 在其 1972 年的文章【谦卑的程序员】（“The Humble Programmer”）中说到 “软件测试是证明 bug 存在的有效方法，而证明其不存在时则显得令人绝望的不足。”（“Program testing can be a very effective way to show the presence of bugs, but it is hopelessly inadequate for showing their absence.”）这并不意味着我们不该尽可能地测试软件！")]),t._v(" "),r("p",[t._v("程序的正确性意味着代码如我们期望的那样运行。Rust 是一个相当注重正确性的编程语言，不过正确性是一个难以证明的复杂主题。Rust 的类型系统在此问题上下了很大的功夫，不过它不可能捕获所有种类的错误。为此，Rust 也在语言本身包含了编写软件测试的支持。")]),t._v(" "),r("p",[t._v("例如，我们可以编写一个叫做 "),r("code",[t._v("add_two")]),t._v(" 的将传递给它的值加二的函数。它的签名有一个整型参数并返回一个整型值。当实现和编译这个函数时，Rust 会进行所有目前我们已经见过的类型检查和借用检查，例如，这些检查会确保我们不会传递 "),r("code",[t._v("String")]),t._v(" 或无效的引用给这个函数。Rust 所 "),r("strong",[t._v("不能")]),t._v(" 检查的是这个函数是否会准确的完成我们期望的工作：返回参数加二后的值，而不是比如说参数加 10 或减 50 的值！这也就是测试出场的地方。")]),t._v(" "),r("p",[t._v("我们可以编写测试断言，比如说，当传递 "),r("code",[t._v("3")]),t._v(" 给 "),r("code",[t._v("add_two")]),t._v(" 函数时，返回值是 "),r("code",[t._v("5")]),t._v("。无论何时对代码进行修改，都可以运行测试来确保任何现存的正确行为没有被改变。")]),t._v(" "),r("p",[t._v("测试是一项复杂的技能：虽然不能在一个章节的篇幅中介绍如何编写好的测试的每个细节，但我们还是会讨论 Rust 测试功能的机制。我们会讲到编写测试时会用到的注解和宏，运行测试的默认行为和选项，以及如何将测试组织成单元测试和集成测试。")])])}),[],!1,null,null,null);e.default=o.exports}}]);