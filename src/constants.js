// Constants

const nchanKey = 'HT67ghka9ygt7y8dhgh8290'
const nchanHost = '138.68.148.159:8080'

export const nchanConf = {
    pubUrl:  nchanHost + 'notificationpub?id=' + nchanKey + '&userId=',
    subUrl: nchanHost + 'notificationsub?id=' + nchanKey + '&userId=',
}

export const projectTypes = {
    web: {
        name: 'web',
        id: '1',
    },
    mobile: {
        name: 'mobile',
        id: '2',
    },
    other: {
        name: 'other',
        id: '3',
    },
}

export const userTypes = {
    developer: {
        slug: 'Developer',
        id: '3',
    },
    projectManager: {
        slug: 'Project Manager',
        id: '2',
    },
    client: {
        slug: 'Client',
        id: '1',
    },
}

export const userTypesArray = [
    {
        value: '3',
        name: 'Developer',
    },
    {
        value: '2',
        name: 'Project Manager',
    },
    {
        value: '1',
        name: 'Client',
    },
]

export const userStatusTypes = {
    suspended: {
        name: 'Suspended',
        id: 0,
    },
    unvalidated: {
        name: 'Not Confirmed',
        id: 1,
    },
    available: {
        name: 'Available',
        id: 2,
    },
    busy: {
        name: 'Busy',
        id: 3,
    },
    deleted: {
        name: 'Deleted',
        id: 4,
    },
}

export const projectStatusTypes = {
    active: {
        name: 'Active',
        id: 1,
    },
    completed: {
        name: 'Completed',
        id: 2,
    },
}

export const moduleStatusTypes = {
    new: {
        name: 'new',
        id: 1,
    },
    submitted: {
        name: 'submitted',
        id: 2,
    },
    done: {
        name: 'done',
        id: 3,
    },
    rejected: {
        name: 'rejected',
        id: 4,
    },
    inprogress: {
        name: 'inprogress',
        id: 5,
    },
}

export const userStatusTypesArray = [
    {
        name: 'Suspended',
        message: 'You have been suspended',
        id: 0,
    },
    {
        name: 'Not Confirmed',
        message: 'Yet to confirm your email',
        id: 1,
    },
    {
        name: 'Available',
        message: '',
        id: 2,
    },
    {
        name: 'Busy',
        message: 'You are in busy mode',
        id: 3,
    },
    {
        name: 'Deleted',
        message: '',
        id: 4,
    },
]

export const cardTypesArray = [
    {
        id: 0,
        name: 'Master Card',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/MasterCard_early_1990s_logo.svg/200px-MasterCard_early_1990s_logo.svg.png',
    },
    {
        id: 1,
        name: 'Visa Card',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Visa_2014_logo_detail.svg/1200px-Visa_2014_logo_detail.svg.png',
    },
    {
        id: 2,
        name: 'Verve Card',
        image: 'https://www.myverveworld.com/img/logo.png',
    },
    {
        id: 3,
        name: 'American Express',
        image: 'https://lendedu.com/wp-content/uploads/2017/11/american-express-logo.jpg',
    },
    {
        id: 4,
        name: 'Discover',
        image: 'https://slickdeals.net/attachment/3/0/0/0/2/0/4/4826471.attach',
    },
    {
        id: 5,
        name: 'Capital One',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/CapitalOne.svg/1200px-CapitalOne.svg.png',
    },
]
