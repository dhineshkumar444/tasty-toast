const parent = React.createElement("div", {
    className: "parent"
}, [
    React.createElement("div", {
        className: "child"
    }, React.createElement("div", {
        className: "grand-child"
    }, [
        React.createElement("h1", {
            className: "heading"
        }, "I am a heading"),
        React.createElement("h2", {
            className: "heading"
        }, "I am a heading")
    ])),
    React.createElement("div", {
        className: "child"
    }, React.createElement("div", {
        className: "grand-child"
    }, [
        React.createElement("h1", {
            className: "heading"
        }, "I am a heading"),
        React.createElement("h2", {
            className: "heading"
        }, "I am a heading")
    ]))
]);
const rootElement = document.querySelector(".root");
const root = ReactDOM.createRoot(rootElement);
root.render(parent);

//# sourceMappingURL=index.c36f364e.js.map
