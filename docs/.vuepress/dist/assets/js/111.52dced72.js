(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{466:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"慢请求如何影响吞吐率"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#慢请求如何影响吞吐率"}},[t._v("#")]),t._v(" 慢请求如何影响吞吐率")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/second-edition/src/ch20-02-slow-requests.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("ch20-02-slow-requests.md"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("\ncommit d06a6a181fd61704cbf7feb55bc61d518c6469f9")])]),t._v(" "),a("p",[t._v("目前 server 会依次处理每一个请求。这对于向我们这样并不期望有非常大量请求的服务来说是可行的，不过随着程序变得更复杂，这样的串行处理并不是最优的。")]),t._v(" "),a("p",[t._v("因为当前的程序顺序处理处理连接，在完成第一个连接的处理之前不会处理第二个连接。如果一个请求花费很长时间来处理，这段时间接收的请求则不得不等待这个长请求结束，即便这些新请求可以很快就处理完。让我们实际尝试一下。")]),t._v(" "),a("h3",{attrs:{id:"在当前-server-实现中模拟慢请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在当前-server-实现中模拟慢请求"}},[t._v("#")]),t._v(" 在当前 server 实现中模拟慢请求")]),t._v(" "),a("p",[t._v("让我们看看一个花费很长时间处理的请求对当前的 server 实现有何影响。列表 20-10 展示了对另一个请求的响应代码，"),a("code",[t._v("/sleep")]),t._v("，它会使 server 在响应之前休眠五秒。这将模拟一个慢请求以便体现出 server 在串行的处理请求。")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),t._v("thread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Duration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n# "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("prelude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n# "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("net"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TcpStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n# "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("File")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...snip...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("handle_connection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TcpStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n#     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" buffer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("512")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n#     stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unwrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...snip...")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" get "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('b"GET / HTTP/1.1\\r\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sleep "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('b"GET /sleep HTTP/1.1\\r\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status_line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("starts_with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HTTP/1.1 200 OK\\r\\n\\r\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("starts_with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sleep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("thread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Duration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from_secs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HTTP/1.1 200 OK\\r\\n\\r\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HTTP/1.1 404 NOT FOUND\\r\\n\\r\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"404.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...snip...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("列表 20-10：通过识别 "),a("code",[t._v("/sleep")]),t._v(" 并休眠五秒来模拟慢请求")])]),t._v(" "),a("p",[t._v("这段代码有些凌乱，不过对于模拟的目的来说已经足够！这里创建了第二个请求 "),a("code",[t._v("sleep")]),t._v("，我们会识别其数据。在 "),a("code",[t._v("if")]),t._v(" 块之后增加了一个 "),a("code",[t._v("else if")]),t._v(" 来检查 "),a("code",[t._v("/sleep")]),t._v(" 请求，当发现这个请求时，在渲染欢迎页面之前会先休眠五秒。")]),t._v(" "),a("p",[t._v("现在就可以真切的看出我们的 server 有多么的原始；真实的库将会以更简洁的方式处理多请求识别问题。")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("cargo run")]),t._v(" 启动 server，并接着打开两个浏览器窗口：一个请求 "),a("code",[t._v("http://localhost:8080/")]),t._v(" 而另一个请求 "),a("code",[t._v("http://localhost:8080/sleep")]),t._v("。如果像之前一样多次请求 "),a("code",[t._v("/")]),t._v("，会发现响应的比较快速。不过如果请求"),a("code",[t._v("/sleep")]),t._v(" 之后再请求 "),a("code",[t._v("/")]),t._v("，就会看到 "),a("code",[t._v("/")]),t._v(" 会等待直到 "),a("code",[t._v("sleep")]),t._v(" 休眠完五秒之后才出现。")]),t._v(" "),a("p",[t._v("这里有多种办法来改变我们的 web server 使其避免所有请求都排在慢请求之后；其一便是实现一个线程池。")]),t._v(" "),a("h3",{attrs:{id:"使用线程池改善吞吐量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用线程池改善吞吐量"}},[t._v("#")]),t._v(" 使用线程池改善吞吐量")]),t._v(" "),a("p",[a("strong",[t._v("线程池")]),t._v("（"),a("em",[t._v("thread pool")]),t._v("）是一组预先分配的用来处理任务的线程。当程序收到一个新任务，线程池中的一个线程会被分配任务并开始处理。其余的线程则可用于处理在第一个线程处理任务的同时处理其他接收到的任务。当第一个线程处理完任务时，它会返回空闲线程池中等待处理新任务。")]),t._v(" "),a("p",[t._v("线程池允许我们并发处理连接：可以在老连接处理完之前就开始处理新连接。这增加了 server 的吞吐量。")]),t._v(" "),a("p",[t._v("如下是我们将要实现的：不再等待每个请求处理完才开始下一个，我们将每个连接的处理发送给不同的线程。这些线程来此程序启动时分配的四个线程的线程池。限制较少的线程数的原因是如果为每个新来的请求都创建一个新线程，则千万级的请求就造成灾难，他们会用尽服务器的资源并导致所有请求的处理都被终止。")]),t._v(" "),a("p",[t._v("不同于分配无限的线程，线程池中将有固定数量的等待线程。当新进请求时，将请求发送到线程池中做处理。线程池会维护一个接收请求的队列。每一个线程会从队列中取出一个请求，处理请求，接着向对队列索取另一个请求。通过这种设计，则可以并发处理 "),a("code",[t._v("N")]),t._v(" 个请求，其中 "),a("code",[t._v("N")]),t._v(" 为线程数。这仍然意味着 "),a("code",[t._v("N")]),t._v(" 个慢请求会阻塞队列中的请求，不过确实将能够处理的慢请求数量从一增加到了 "),a("code",[t._v("N")]),t._v("。")]),t._v(" "),a("p",[t._v("这个设计是多种改善 web server 吞吐量的方法之一。不过本书并不是有关 web server 的，所以这一种方法是我们将要涉及的。其他的方法有 fork/join 模型和单线程异步 I/O 模型。如果你对这个主题感兴趣，则可以阅读更多关于其他解决方案的内容并尝试用 Rust 实现他们；对于一个像 Rust 这样的底层语言，所有这些方法都是可能的。")])])}),[],!1,null,null,null);s.default=e.exports}}]);