const mixins = {
    methods: {
        convertToUsd(value) {
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            });

            return formatter.format(value);
        },
    }
}

export default mixins;
