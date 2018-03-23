let chai = require('chai'),
    moment = require('moment'),
    expect = chai.expect;

const similarTime = (a, b) => {
    const t1 = moment(a.created.date);
    const t2 = moment(b.created.date);
    return Math.abs(t1.diff(t2, 'hours')) < 1;
}

const shouldGroup = (a, b) => {
    if (a.type !== 'wish-created') return false;
    return a.event.list === b.event.list && similarTime(a, b);
}

const groupNotifications = notifications => {
    const notificationCopy = [...notifications];

    for (let i = 0; i < notificationCopy.length; i++) {
        const notification = notificationCopy[i];
        if (i === 0) continue;

        const prevNotification = notificationCopy[i - 1];
        if (shouldGroup(notification, prevNotification)) {
            if (!prevNotification.events)
                prevNotification.events = [prevNotification.event];
            prevNotification.events.push(notification.event);
            notification.ignore = true; // do not include in results
        }
    }

    return notificationCopy.filter(n => !n.ignore);
}

const testData = [
    {
        type: 'wish-created',
        id: 5,
        created: {
            date: '2018-03-23T07:57:48.075Z'
        },
        event: {
            list: 'My Cool List',
            item: 'Backpack'
        }
    },

    {
        type: 'wish-created',
        id: 4,
        created: {
            date: '2018-03-23T07:52:48.075Z'
        },
        event: {
            list: 'My Cool List',
            item: 'Gopro'
        }
    },

    {
        type: 'list-created',
        id: 3,
        created: {
            date: '2018-03-23T07:51:48.075Z'
        },
        event: {
            list: 'My Cool List',
            item: 'My Cool list'
        }
    },

    {
        type: 'wish-created',
        id: 2,
        created: {
            date: '2018-03-23T07:47:48.075Z'
        },
        event: {
            list: 'List1',
            item: 'Shoes'
        }
    },

    {
        type: 'wish-created',
        id: 1,
        created: {
            date: '2018-03-23T07:37:48.075Z'
        },
        event: {
            list: 'List1',
            item: 'Knives'
        }
    },

    {
        type: 'wish-created',
        id: 1,
        created: {
            date: '2018-03-23T07:35:48.075Z'
        },
        event: {
            list: 'List2',
            item: 'Forks'
        }
    },

    {
        type: 'wish-created',
        id: 1,
        created: {
            date: '2018-03-23T05:57:48.075Z'
        },
        event: {
            list: 'List2',
            item: 'Batteries'
        }
    }
]

const expectedResult = [
    {
        type: 'wish-created',
        id: 5,
        created: {
            date: '2018-03-23T07:57:48.075Z'
        },
        event: {
            list: 'My Cool List',
            item: 'Backpack'
        },
        events: [
            {
                list: 'My Cool List',
                item: 'Backpack'
            },
            {
                list: 'My Cool List',
                item: 'Gopro'
            }
        ]
    },

    {
        type: 'list-created',
        id: 3,
        created: {
            date: '2018-03-23T07:51:48.075Z'
        },
        event: {
            list: 'My Cool List',
            item: 'My Cool list'
        }
    },

    {
        type: 'wish-created',
        id: 2,
        created: {
            date: '2018-03-23T07:47:48.075Z'
        },
        event: {
            list: 'List1',
            item: 'Shoes'
        },
        events: [
        {
            list: 'List1',
            item: 'Shoes'
        },
        {
            list: 'List1',
            item: 'Knives'
        }
        ]
    },

    {
        type: 'wish-created',
        id: 1,
        created: {
            date: '2018-03-23T07:35:48.075Z'
        },
        event: {
            list: 'List2',
            item: 'Forks'
        }
    },

    {
        type: 'wish-created',
        id: 1,
        created: {
            date: '2018-03-23T05:57:48.075Z'
        },
        event: {
            list: 'List2',
            item: 'Batteries'
        }
    }
];

// deep equal?
expect(groupNotifications(testData)).to.eql(expectedResult);


const res = [{
    type: 'wish-created',
    id: 5,
    created: { date: '2018-03-23T07:57:48.075Z' },
    event: { list: 'My Cool List', item: 'Backpack' },
    events: [{ list: 'My Cool List', item: 'Backpack' },
    { list: 'My Cool List', item: 'Gopro' }]
},
{
    type: 'list-created',
    id: 3,
    created: { date: '2018-03-23T07:51:48.075Z' },
    event: { list: 'My Cool List', item: 'My Cool list' }
},
{
    type: 'wish-created',
    id: 2,
    created: { date: '2018-03-23T07:47:48.075Z' },
    event: { list: 'List1', item: 'Shoes' },
    events: [{ list: 'List1', item: 'Shoes' },
    { list: 'List1', item: 'Knives' }]
},
{
    type: 'wish-created',
    id: 1,
    created: { date: '2018-03-23T07:35:48.075Z' },
    event: { list: 'List2', item: 'Forks' }
},
{
    type: 'wish-created',
    id: 1,
    created: { date: '2018-03-23T05:57:48.075Z' },
    event: { list: 'List2', item: 'Batteries' }
}];