import { User } from '@/shared/types';

let _USERS_: User[] = [
  {
    id: 1,
    first_name: 'Ignacio',
    last_name: 'Gotmann',
    email: 'igotmann0@bloomberg.com',
    gender: 'Male',
    ip_address: '203.32.243.36',
  },
  {
    id: 2,
    first_name: 'Fred',
    last_name: 'Grey',
    email: 'fgrey1@gizmodo.com',
    gender: 'Female',
    ip_address: '227.71.198.65',
  },
  {
    id: 3,
    first_name: 'Janina',
    last_name: 'Kiebes',
    email: 'jkiebes2@mediafire.com',
    gender: 'Female',
    ip_address: '36.105.13.195',
  },
  {
    id: 4,
    first_name: 'Eliza',
    last_name: 'Gitthouse',
    email: 'egitthouse3@hud.gov',
    gender: 'Female',
    ip_address: '81.135.104.184',
  },
  {
    id: 5,
    first_name: 'Gustavo',
    last_name: 'Paddefield',
    email: 'gpaddefield4@unicef.org',
    gender: 'Male',
    ip_address: '28.210.58.25',
  },
  {
    id: 6,
    first_name: 'Marleen',
    last_name: 'Swindell',
    email: 'mswindell5@hhs.gov',
    gender: 'Female',
    ip_address: '140.227.124.159',
  },
  {
    id: 7,
    first_name: 'Adelind',
    last_name: 'Kordovani',
    email: 'akordovani6@alibaba.com',
    gender: 'Female',
    ip_address: '158.197.220.107',
  },
  {
    id: 8,
    first_name: 'Emmalee',
    last_name: 'Phittiplace',
    email: 'ephittiplace7@discovery.com',
    gender: 'Female',
    ip_address: '150.78.131.108',
  },
  {
    id: 9,
    first_name: 'Dolf',
    last_name: 'Oland',
    email: 'doland8@omniture.com',
    gender: 'Male',
    ip_address: '144.55.153.70',
  },
  {
    id: 10,
    first_name: 'Kit',
    last_name: 'Ruprich',
    email: 'kruprich9@4shared.com',
    gender: 'Male',
    ip_address: '238.204.213.32',
  },
  {
    id: 11,
    first_name: 'Emmanuel',
    last_name: 'Baythrop',
    email: 'ebaythropa@ameblo.jp',
    gender: 'Agender',
    ip_address: '74.150.40.187',
  },
  {
    id: 12,
    first_name: 'Boigie',
    last_name: 'Tebbett',
    email: 'btebbettb@theglobeandmail.com',
    gender: 'Male',
    ip_address: '45.117.61.140',
  },
  {
    id: 13,
    first_name: 'Gaston',
    last_name: 'Darte',
    email: 'gdartec@jalbum.net',
    gender: 'Male',
    ip_address: '169.158.126.216',
  },
  {
    id: 14,
    first_name: 'Simonette',
    last_name: 'Gowen',
    email: 'sgowend@washington.edu',
    gender: 'Non-binary',
    ip_address: '3.113.93.236',
  },
  {
    id: 15,
    first_name: 'Nikolaos',
    last_name: 'Gethin',
    email: 'ngethine@spiegel.de',
    gender: 'Male',
    ip_address: '24.2.232.157',
  },
  {
    id: 16,
    first_name: 'Florida',
    last_name: 'Eliaz',
    email: 'feliazf@adobe.com',
    gender: 'Female',
    ip_address: '26.165.165.17',
  },
  {
    id: 17,
    first_name: 'Kelley',
    last_name: 'Coughlin',
    email: 'kcoughling@google.fr',
    gender: 'Female',
    ip_address: '216.46.63.47',
  },
  {
    id: 18,
    first_name: 'Raffarty',
    last_name: 'Aloway',
    email: 'ralowayh@dagondesign.com',
    gender: 'Male',
    ip_address: '159.87.233.191',
  },
  {
    id: 19,
    first_name: 'Deena',
    last_name: 'Godspeede',
    email: 'dgodspeedei@canalblog.com',
    gender: 'Female',
    ip_address: '146.173.76.28',
  },
  {
    id: 20,
    first_name: 'Mycah',
    last_name: 'McFarlan',
    email: 'mmcfarlanj@wordpress.org',
    gender: 'Male',
    ip_address: '193.234.139.33',
  },
];

export const getUsers = async () => {
  await new Promise((res) => setTimeout(res, 3000));
  const users: User[] = await Promise.resolve(_USERS_);
  return users;
};

export const getUserById = async (userId: number) => {
  const users = await getUsers();

  return users.find(({ id }) => id === userId);
};

export const addUser = async (user: User) => {
  const users = await getUsers();
  users.push(user);

  return users;
};

export const deleteUser = async (user: User) => {
  const users = await getUsers();
  _USERS_ = users.filter(({ id }) => id !== user.id);

  return _USERS_;
};
