export const toggle = {
    data() {
        return {
            isShowing: false
        }
    },
    methods: {
        say() {
            this.isShowing = !this.isShowing;
            return 'aaaaaaaaaaa';
        }
    }
}
