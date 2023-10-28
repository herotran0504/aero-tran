const BaseDao = require('./baseDao');
const users = [
    {
        id: 10102,
        username: 'user10102',
        password: '$2b$10$JHOwSUOaXutoIUS6yTsTO.GxEcqWk7WPM/NBrndiVgA9w3Rr/G2DS',
        email: 'user10102@mail.com',
        firstName: 'Ava',
        lastName: 'Taylor',
        dob: '1990-01-21',
        address: '123 Main St, New York, USA'
    },
    {
        id: 10103,
        username: 'user10103',
        password: '$2b$10$jMBWgDr/NceS/9V58W/Qq.uDo9qWr7iG73ene4VJw1nXGK9VZorQm',
        email: 'user10103@mail.com',
        firstName: 'Jane',
        lastName: 'Smith',
        dob: '2006-10-23',
        address: '123 Main St, Los Angeles, USA'
    },
    {
        id: 10104,
        username: 'user10104',
        password: '$2b$10$JFC1gW/.M/wq18wU7QVPQOPXopBQZcTQ28htplc1IT5owz/OC9iKG',
        email: 'user10104@mail.com',
        firstName: 'David',
        lastName: 'Anderson',
        dob: '2003-01-14',
        address: '123 Main St, Chicago, USA'
    },
    {
        id: 10105,
        username: 'user10105',
        password: '$2b$10$mNy6Ev5W7rlzwJqHb4B2zue2S1qrDfxciNkcdKkGtewKwGsm9w4le',
        email: 'user10105@mail.com',
        firstName: 'John',
        lastName: 'Doe',
        dob: '1999-01-15',
        address: '123 Main St, Houston, USA'
    },
    {
        id: 10106,
        username: 'user10106',
        password: '$2b$10$ypIgsu7d73uDHlX4d9YbUO7fHcQH2BCtS0c19xDkXci.5D.i9ASj6',
        email: 'user10106@mail.com',
        firstName: 'Michael',
        lastName: 'Johnson',
        dob: '1990-04-12',
        address: '123 Main St, Phoenix, USA'
    },
    {
        id: 10107,
        username: 'user10107',
        password: '$2b$10$KB0hJWp9xp6XUCzRnt8Mf.fdESTO6o5tst6pUCIsQ4ivz038RiB26',
        email: 'user10107@mail.com',
        firstName: 'Ava',
        lastName: 'Taylor',
        dob: '1996-04-05',
        address: '123 Main St, Philadelphia, USA'
    },
    {
        id: 10108,
        username: 'user10108',
        password: '$2b$10$IQ6UZG1BnC0lfzAh2KMDZultUt9S.ncCLAWLt8dhRJCOw3POYts06',
        email: 'user10108@mail.com',
        firstName: 'David',
        lastName: 'Anderson',
        dob: '1987-06-06',
        address: '123 Main St, San Antonio, USA'
    },
    {
        id: 10109,
        username: 'user10109',
        password: '$2b$10$a4Y/sfJscviOADIA4EynCemOmYhWg9I53gK6EsushSGujyTMejd4W',
        email: 'user10109@mail.com',
        firstName: 'Chris',
        lastName: 'Brown',
        dob: '1998-03-08',
        address: '123 Main St, San Diego, USA'
    },
    {
        id: 10110,
        username: 'user10110',
        password: '$2b$10$e.6uAnkHrdPCi7qmoMlJL.A/nOviiuGiLDCpXeEC1QaJD37RKCoGy',
        email: 'user10110@mail.com',
        firstName: 'Olivia',
        lastName: 'Davis',
        dob: '1995-10-03',
        address: '123 Main St, Dallas, USA'
    },
    {
        id: 10111,
        username: 'user10111',
        password: '$2b$10$OG2ZdXit0STEYKx5vQETQuZoStx1Yb/3egsVOOA1q6GQScd8LXou.',
        email: 'user10111@mail.com',
        firstName: 'Michael',
        lastName: 'Johnson',
        dob: '2005-08-03',
        address: '123 Main St, San Jose, USA'
    },
    {
        id: 10112,
        username: 'user10112',
        password: '$2b$10$8BSHywp5.FSIK3FRa67hV.unFZ4KyJUqQc7rSvP1ZZyINZ1.Hstzy',
        email: 'user10112@mail.com',
        firstName: 'Sophia',
        lastName: 'Martinez',
        dob: '1976-03-27',
        address: '123 Main St, Austin, USA'
    },
    {
        id: 10113,
        username: 'user10113',
        password: '$2b$10$DJYI15y1joVVgQzKTgO.9uvNYezNOlVl3tZgpygmtWYNCMkTGSYoq',
        email: 'user10113@mail.com',
        firstName: 'Daniel',
        lastName: 'Garcia',
        dob: '1974-03-23',
        address: '123 Main St, Jacksonville, USA'
    },
    {
        id: 10114,
        username: 'user10114',
        password: '$2b$10$EUNNIXNxMpAW6sgiM2o.s.Dr40TQ6c1P2xBcnzrFfdH3bXFkeWUgO',
        email: 'user10114@mail.com',
        firstName: 'Jane',
        lastName: 'Smith',
        dob: '2010-07-15',
        address: '123 Main St, San Francisco, USA'
    },
    {
        id: 10115,
        username: 'user10115',
        password: '$2b$10$DmADb.HziChcEDXBu3a2OusQW4y/n4bmmYap2LbbqkxYcG0Ybdymq',
        email: 'user10115@mail.com',
        firstName: 'Jane',
        lastName: 'Smith',
        dob: '1971-10-13',
        address: '123 Main St, Columbus, USA'
    },
    {
        id: 10116,
        username: 'user10116',
        password: '$2b$10$pf8DIogjRZbKiSw.JXnKhOuSGRc6cTPcQWdVXPPlyJK0Tw1G.t2PO',
        email: 'user10116@mail.com',
        firstName: 'Ava',
        lastName: 'Taylor',
        dob: '1978-08-16',
        address: '123 Main St, Fort Worth, USA'
    },
    {
        id: 10117,
        username: 'user10117',
        password: '$2b$10$JaQ4ovZph71rlVwKLMAsV.Q.bCkO.XYLAro3Fh6II8p4Oy7nOho7S',
        email: 'user10117@mail.com',
        firstName: 'David',
        lastName: 'Anderson',
        dob: '2009-08-17',
        address: '123 Main St, Indianapolis, USA'
    },
    {
        id: 10118,
        username: 'user10118',
        password: '$2b$10$dk0in0J15JvgHFLqtFRnu.hSLYzFABe3vbT0cvpa7kbb/eTpB8Ljy',
        email: 'user10118@mail.com',
        firstName: 'Michael',
        lastName: 'Johnson',
        dob: '1998-02-12',
        address: '123 Main St, Seattle, USA'
    },
    {
        id: 10119,
        username: 'user10119',
        password: '$2b$10$vntwQwx6n7DoU8YAMeiuqOLB/aUli.6v7jZcVDg0Lc8fW8PBd3YAO',
        email: 'user10119@mail.com',
        firstName: 'Emily',
        lastName: 'Williams',
        dob: '2007-02-08',
        address: '123 Main St, Denver, USA'
    },
    {
        id: 10120,
        username: 'user10120',
        password: '$2b$10$ty3jR6EVU24E205SQAbMoOA62DuZCAtTBtdDKu3EpMUkUBxB.OmLm',
        email: 'user10120@mail.com',
        firstName: 'Daniel',
        lastName: 'Garcia',
        dob: '2003-09-26',
        address: '123 Main St, Washington, USA'
    },
    {
        id: 10121,
        username: 'user10121',
        password: '$2b$10$oH30V92ZN0nFJ3pAqT6U2edU84UFy2.iSx8Tvv.A6dWQJkLLGCWNS',
        email: 'user10121@mail.com',
        firstName: 'Emily',
        lastName: 'Williams',
        dob: '1988-12-18',
        address: '123 Main St, Boston, USA'
    }
];

class UserDao extends BaseDao {
    constructor() {
        super();
    }

    async createUser(user) {
        user.id = users.map(u => parseInt(u.id)).reduce((u1, u2) => u1 > u2 ? u1 : u2) + 1;
        await console.log(`createUser(${JSON.stringify(user)})`)
        users.push(user);
    }

    async updateUser(user) {
        await console.log(`updateUser(${user})`)
        const updateUser = users.find(u => u.id === user.userId);
        updateUser.firstName = user.firstName;
        updateUser.lastName = user.lastName;
        updateUser.dob = user.dob;
        updateUser.address = user.address;
    }

    async getUserByEmail(email) {
        return users.find(u => u.email === email);
    }

    async getUserByUserId(userId) {
        return users.find(u => u.id === userId);
    }

}

module.exports = UserDao;