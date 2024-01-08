function skillsMember() {
    this.name = 'skillsMember';
    this.params = {
        id: {
            type: 'integer',
            optional: false,
            min: 1,
            max: 10000,
            description: 'Member ID'
        }
    };
}