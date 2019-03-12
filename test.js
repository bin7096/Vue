new Vue({
    el : '#vue-app',
    data : {
        changeColor : false,
        changeLength : false
    },
    methods : {
    },
    computed : {
        change : function () {
            return {
                changeColor : this.changeColor,
                changeLength : this .changeLength
            }
        }
    }
})