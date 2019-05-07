export const fruitMixin = {
    data() {
        return {
            fruits: ['apple', 'banana', 'mango', 'melon'],
            filterText: ''
        };
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter(el => {
                return el.match(this.filterText);
            });
        }
    },
    created() {
        console.log('created');
    }
};
