Lists = new Meteor.Collection('lists');

Schema = {};
Schema.Lists = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 25,
        optional: false
    },
    author: {
        type: String,
        label: "Author",
        max: 100,
        optional: true
    },
    listIngredients: {
        type: Array,
        label: "Ingredients",
        optional: true,
    },
    'listIngredients.$': {
        type: String,
    },
    color: {
        type: String,
        label: "Color",
        max: 25,
        optional: true
    },
    createdAt: {
        type: Date,
        optional: true,
        denyUpdate: true,
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
            }
        }
    },
    updatedAt: {
        type: Date,
        optional: true,
        denyInsert: true,
        autoValue: function() {
            if (this.isUpdate) {
                return new Date();
            }
        }
    }
});

Lists.attachSchema(Schema.Lists);

