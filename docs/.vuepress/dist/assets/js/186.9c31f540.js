(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{540:function(e,t,o){"use strict";o.r(t);var r=o(42),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"性能对比-循环-vs-迭代器"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#性能对比-循环-vs-迭代器"}},[e._v("#")]),e._v(" 性能对比：循环 VS 迭代器")]),e._v(" "),o("blockquote",[o("p",[o("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/ch13-04-performance.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ch13-04-performance.md"),o("OutboundLink")],1),e._v(" "),o("br"),e._v("\ncommit 1fedfc4b96c2017f64ecfcf41a0a07e2e815f24f")])]),e._v(" "),o("p",[e._v("为了决定使用哪个实现，我们需要知道哪个版本的 "),o("code",[e._v("search")]),e._v(" 函数更快一些：是直接使用 "),o("code",[e._v("for")]),e._v(" 循环的版本还是使用迭代器的版本。")]),e._v(" "),o("p",[e._v("我们运行了一个性能测试，通过将阿瑟·柯南·道尔的“福尔摩斯探案集”的全部内容加载进 "),o("code",[e._v("String")]),e._v(" 并寻找其中的单词 “the”。如下是 "),o("code",[e._v("for")]),e._v(" 循环版本和迭代器版本的 "),o("code",[e._v("search")]),e._v(" 函数的性能测试结果：")]),e._v(" "),o("div",{staticClass:"language-text extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("test bench_search_for  ... bench:  19,620,300 ns/iter (+/- 915,700)\ntest bench_search_iter ... bench:  19,234,900 ns/iter (+/- 657,200)\n")])])]),o("p",[e._v("结果迭代器版本还要稍微快一点！这里我们将不会查看性能测试的代码，我们的目的并不是为了证明他们是完全等同的，而是得出一个怎样比较这两种实现方式性能的基本思路。")]),e._v(" "),o("p",[e._v("对于一个更全面的性能测试，将会检查不同长度的文本、不同的搜索单词、不同长度的单词和所有其他的可变情况。这里所要表达的是：迭代器，作为一个高级的抽象，被编译成了与手写的底层代码大体一致性能代码。迭代器是 Rust 的 "),o("strong",[e._v("零成本抽象")]),e._v("（"),o("em",[e._v("zero-cost abstractions")]),e._v("）之一，它意味着抽象并不会引入运行时开销，它与本贾尼·斯特劳斯特卢普（C++ 的设计和实现者）在 “Foundations of C++”（2012） 中所定义的 "),o("strong",[e._v("零开销")]),e._v("（"),o("em",[e._v("zero-overhead")]),e._v("）如出一辙：")]),e._v(" "),o("blockquote",[o("p",[e._v("In general, C++ implementations obey the zero-overhead principle: What you don’t use, you don’t pay for. And further: What you do use, you couldn’t hand code any better.")]),e._v(" "),o("ul",[o("li",[e._v('Bjarne Stroustrup "Foundations of C++"')])]),e._v(" "),o("p",[e._v("从整体来说，C++ 的实现遵循了零开销原则：你不需要的，无需为他们买单。更有甚者的是：你需要的时候，也不可能找到其他更好的代码了。")]),e._v(" "),o("ul",[o("li",[e._v('本贾尼·斯特劳斯特卢普 "Foundations of C++"')])])]),e._v(" "),o("p",[e._v("作为另一个例子，这里有一些取自于音频解码器的代码。解码算法使用线性预测数学运算（linear prediction mathematical operation）来根据之前样本的线性函数预测将来的值。这些代码使用迭代器链来对作用域中的三个变量进行了某种数学计算：一个叫 "),o("code",[e._v("buffer")]),e._v(" 的数据 slice、一个有 12 个元素的数组 "),o("code",[e._v("coefficients")]),e._v("、和一个代表位移位数的 "),o("code",[e._v("qlp_shift")]),e._v("。例子中声明了这些变量但并没有提供任何值；虽然这些代码在其上下文之外没有什么意义，不过仍是一个简明的现实中的例子，来展示 Rust 如何将高级概念转换为底层代码：")]),e._v(" "),o("div",{staticClass:"language-rust,ignore extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("let buffer: &mut [i32];\nlet coefficients: [i64; 12];\nlet qlp_shift: i16;\n\nfor i in 12..buffer.len() {\n    let prediction = coefficients.iter()\n                                 .zip(&buffer[i - 12..i])\n                                 .map(|(&c, &s)| c * s as i64)\n                                 .sum::<i64>() >> qlp_shift;\n    let delta = buffer[i];\n    buffer[i] = prediction as i32 + delta;\n}\n")])])]),o("p",[e._v("为了计算 "),o("code",[e._v("prediction")]),e._v(" 的值，这些代码遍历了 "),o("code",[e._v("coefficients")]),e._v(" 中的 12 个值，使用 "),o("code",[e._v("zip")]),e._v(" 方法将系数与 "),o("code",[e._v("buffer")]),e._v(" 的前 12 个值组合在一起。接着将每一对值相乘，再将所有结果相加，然后将总和右移 "),o("code",[e._v("qlp_shift")]),e._v(" 位。")]),e._v(" "),o("p",[e._v("像音频解码器这样的程序通常最看重计算的性能。这里，我们创建了一个迭代器，使用了两个适配器，接着消费了其值。Rust 代码将会被编译为什么样的汇编代码呢？好吧，在编写本书的这个时候，它被编译成与手写的相同的汇编代码。遍历 "),o("code",[e._v("coefficients")]),e._v(" 的值完全用不到循环：Rust 知道这里会迭代 12 次，所以它“展开”（unroll）了循环。展开是一种移除循环控制代码的开销并替换为每个迭代中的重复代码的优化。")]),e._v(" "),o("p",[e._v("所有的系数都被储存在了寄存器中，这意味着访问他们非常快。这里也没有运行时数组访问边界检查。所有这些 Rust 能够提供的优化使得结果代码极为高效。现在知道这些了，请放心大胆的使用迭代器和闭包吧！他们使得代码看起来更高级，但并不为此引入运行时性能损失。")]),e._v(" "),o("h2",{attrs:{id:"总结"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),o("p",[e._v("闭包和迭代器是 Rust 受函数式编程语言观念所启发的功能。他们对 Rust 以底层的性能来明确的表达高级概念的能力有很大贡献。闭包和迭代器的实现达到了不影响运行时性能的程度。这正是 Rust 竭力提供零成本抽象的目标的一部分。")]),e._v(" "),o("p",[e._v("现在我们改进了我们 I/O 项目的（代码）表现力，让我们看一看更多 "),o("code",[e._v("cargo")]),e._v(" 的功能，他们将帮助我们准备好将项目分享给世界。")])])}),[],!1,null,null,null);t.default=s.exports}}]);