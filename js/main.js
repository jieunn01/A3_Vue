(() => {
    // set up a vue instance and start using it!

    // se needs an element to use and some data to render / manage 
    const myVUe = new Vue({
        //el: "#app", //element
        
        data: {
            headline: "Hi from Vue!",
            desc: "Vue is awesome once you get used to it.",
            myImage : "me.jpg",

            faveThings: [
                "Hockey",
                "Golf",
                "Cooking"
            ]
        },

        methods: {
            logClick() {
                // vue methods are the same as named functions in JS, just make the name 
                console.log("you clicked on me!");
            },

            showFaveThing(item) {
                console.log("fave thing button", item);
            }
        }

    }).$mount("#app");
})();