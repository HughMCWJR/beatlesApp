export default {
    name: "concert",
    title: "Concert",
    type: 'document',
    fields: [
        {
        name: 'date',
        title: 'Date',
        type: 'datetime',
        },
        {
        name: "location",
        title: "Location",
        type: "object",
        fields: [
            {name: "state", title: "State", type: "string"},
            {name: "city", title: "City", type: "string"},
            {name: "arena", title: "Arena", type: "string"},
        ],
        },
        {
        name: "setList",
        title: "SetList",
        type: "array",
        of: [{type: "string"}],
        },
        {
        name: "price",
        title: "Price",
        type: "number",
        }
    ],
}