const existing = {
    inputs: [
        {
            label: 'Store Name',
            class: 'arzooo-col-12 gx-5',
            variant: 'input',
            type: 'text',
            name: 'storeName',
            validations: { 
                required: 'this field is required',
                pattern: {
                    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Invalid'
                }
            }
        },
        {
            label: 'Area',
            class: 'arzooo-col-12 gy-4 gx-5',
            variant: 'input',
            type: 'text',
            name: 'area',
            validations: { 
                required: 'this field is required',
            }
        },
        {
            label: 'Address',
            class: 'arzooo-col-12 gy-4 gx-5',
            variant: 'textarea',
            type: 'text',
            rows: 3,
            cols: 3,
            name: 'address',
            validations: { 
                required: 'this field is required',
            }
        },
        {
            label: 'Meeting With',
            class: 'arzooo-col-12 gy-4 gx-5',
            variant: 'input',
            type: 'text',
            name: 'meetingWith',
            validations: { 
                required: 'this field is required',
            }
        },
        {
            label: 'Agenda of Meeting',
            class: 'arzooo-col-12 gy-4 gx-5',
            variant: 'input',
            type: 'text',
            name: 'agenda',
            validations: { 
                required: 'this field is required',
            }
        },
        {
            label: 'Action',
            class: 'arzooo-col-12 gy-4 gx-5',
            variant: 'input',
            type: 'text',
            name: 'remarks',
            validations: { 
                required: 'this field is required',
            }
        },
    ]
};

export { existing };
